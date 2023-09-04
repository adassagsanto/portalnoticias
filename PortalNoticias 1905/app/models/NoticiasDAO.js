	function NoticiasDAO(connection){//criando uma classe e passando como parâmetro uma conexão, se eu tenho uma forma quer dizer que tem uma classe
		conn=connection

		this.getNoticias=function(connection, callback){ //get é pegar, ler noticias, 
		connection.query('select * from noticias ORDER BY data_criacao desc', callback);//é um modulo, que tem mais de um método
		}
		this.getNoticia=function(id_noticia, callback){
			connection.query('select * from noticias where id_noticia='+ id_noticia.id_noticia, callback);
		}

		this.salvarNoticia=function(noticia, connection, callback){
			connection.query('insert into noticias set ?', noticia, callback);
		}

		this.get5UltimasNoticias=function(connection, callback){
			connection.query('select * from noticias order by data_criacao desc limit 5', callback);
		}

		this.excluiNoticia=function(connection, id_noticia, callback){
			connection.query('delete from noticias where id_noticia=' +id_noticia.id_noticia, callback);
		}

		this.atualizarNoticia=function(connection, noticia, callback){
			connection.query("update noticias set titulo = '"+noticia.titulo+"',noticia='"+noticia.noticia+"',resumo='"+noticia.resumo+"',autor='"+noticia.autor+"',data_noticia='"+noticia.data_noticia+"'where id_noticia="+noticia.id_noticia, callback);
		}

		this.mostraNoticia=function(connection, id_noticia, callback){
			connection.query(select * from noticias where id_noticia='+id_noticia, callback');
		}
	}

		module.exports = NoticiasDAO; //exportando o módulo NoticiasDAO

	//sobreescrever variavel, manipula o bd com objeto é a melhor prática(Design de Desenvolvimento de Software
	 //DAO)d--> Data, A-->A, O-->Object
	 //Acesso a dados por meio de objeto(um objeto nasce, faz aquilo que tem que fazer, depois morre). 

	 //palavra this é uma palavra reservada para classe.


	
