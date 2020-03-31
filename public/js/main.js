
NProgress.configure({parent: '.page-content'})

function startP(){
	NProgress.start()
    $('.wait').modal({backdrop: 'static', keyboard: false},'show')
}

function stopP(){
	 NProgress.done()
	 console.log("STOPPIN WAIT")
     $('.wait').modal('hide')
}
function success(){
	NProgress.done()
    $('.wait').modal('hide')
	$('.success').modal('show')
}

function failure(){
	NProgress.done()
    $('.wait').modal('hide')
	$('.failure').modal('show')
}