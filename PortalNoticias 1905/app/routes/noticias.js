
module.exports=function(app){

	app.get('/noticias', function(req,res){ 
	
		app.app.controllers.noticias.noticias(app,req,res);
	
	});

	app.get('/noticia', function(req,res){ 
		
		app.app.controllers.noticias.noticia(app,req,res);
	});

	app.get('/excluir', function(req,res){
		app.app.controllers.noticias.excluir(app,req,res);
	});

	app.get('/editar', function(req,re){
		app.app.controllers.noticias.editar(app,req,res);
	});

}

