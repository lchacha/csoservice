



var config = {
	headers: {
		'content-type': 'application/json'
	}
}
/*
Data Routes 
Aithor: Collin Munyendo
*/
class coalitionController{

	createCoalition(){
		return new Promise( (resolve, reject) => {
			try{
				
				axios.post(process.env.BKEND_server_url +'/coalitions', req.body, config)
					.then( resp1 => {
						console.log(resp1)
						resolve(resp1)
					})
					.catch ( error =>  {
						console.log("ERROR FROM STRAPI", error)
						reject( error)
				
					})
			}
			catch( error)
			{
				reject(error)
			}
			
		})
	}
}

modules.exports = coalitionController;