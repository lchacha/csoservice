const { Pool } = require('pg')

var dbHost = process.env.DATABASE_URL || "postgres://tmzqgdfckstzre:4311e8c633245f1a1398a5145207a79c7cb80b8232dd43136194fc0b22cb500d@ec2-54-235-94-36.compute-1.amazonaws.com:5432/dbnf16impdvibd"

// pools will use environment variables 
// for connection information
const pool = new Pool(
{
	  user: 'tmzqgdfckstzre',
	  host: 'ec2-54-235-94-36.compute-1.amazonaws.com',
	  database: 'dbnf16impdvibd',
	  password: '4311e8c633245f1a1398a5145207a79c7cb80b8232dd43136194fc0b22cb500d',
	  port: 5432,
	  ssl: true
})
module.exports = {
  query: (text, params, callback) => {
    const start = Date.now()
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start
      console.log('executed query', { text, duration, rows: res.rowCount })
      callback(err, res)
    })
  },
  getClient: (callback) => {
    pool.connect((err, client, done) => {
      const query = client.query.bind(client)

      // monkey patch the query method to keep track of the last query executed
      client.query = () => {
        client.lastQuery = arguments
        client.query.apply(client, arguments)
      }

      // set a timeout of 5 seconds, after which we will log this client's last query
      const timeout = setTimeout(() => {
        console.error('A client has been checked out for more than 5 seconds!')
        console.error(`The last executed query on this client was: ${client.lastQuery}`)
      }, 5000)

      const release = (err) => {
        // call the actual 'done' method, returning this client to the pool
        done(err)

        // clear our timeout
        clearTimeout(timeout)

        // set the query method back to its old un-monkey-patched version
        client.query = query
      }

      callback(err, client, done)
    })
  }
}
