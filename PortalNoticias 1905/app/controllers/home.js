var NoticiasDAO=require('../models/NoticiasDAO');

module.exports.index=function(app,req,res){
	var connection=app.config.dbConnection();
	var noticiasModel = new NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(connection, function(error, result){
			res.render('home/home.ejs',{noticias:result});
	});
}





