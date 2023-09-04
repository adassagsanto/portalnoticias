var NoticiasDAO = require('../models/NoticiasDAO');//o require consegue carregar o módulo, não é a partir da raiz do projeto. 

module.exports.formulario_inclusao_noticia=function(app,req,res){ 
		res.render('admin/form_add_noticia.ejs', {validacao:{}, noticia:{}});
}
module.exports.noticias_Salvar=function(app,req,res){
	var noticia=req.body; //req=requisição, body=pegar os dados do formulario e transformar em objeto json

	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('noticia', 'Notícia é obrigatório').notEmpty();
	req.assert('data_noticia', 'Data de notícia é obrigatório').notEmpty();

	var erros=req.validationErrors();
	if(erros){
		//console.log(erros);
		res.render('admin/form_add_noticia.ejs',{validacao:erros, noticia:noticia});
		return;
	
}

	var connection=app.config.dbConnection();
	var noticiasModel=new NoticiasDAO(connection); //o consign não consegue carregar classes, então vamos importar com o require
	//new é uma palavra reservada para criar objetos.
	noticiasModel.salvarNoticia(noticia,connection,function(error,result){
		if (error){
			console.log(error);
		}
		res.redirect('/noticias');
	});
	//toda a parte de banco de daos fica na pasta models
};

module.exports.noticias_atualizar=function(app, req, res){
	var noticia=req.body;
	var id_noticia=req.body.id_noticia;

	req.assert('titulo') //terminar de copiar
}



