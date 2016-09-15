module.exports={
                 pg_migrate: function pg_migrate(){
        	    var client=this.pg_connect();
		    client.query("CREATE TABLE IF NOT EXISTS vendor(id SERIAL PRIMARY KEY, vname VARCHAR(60))");
      		    client.query("CREATE TABLE IF NOT EXISTS item(id SERIAL PRIMARY KEY, iname VARCHAR(60),description VARCHAR(60) ,vid int references vendor(id))");	  
		    client.query(" CREATE TABLE IF NOT EXISTS tbldemo(id SERIAL PRIMARY KEY, iid int , date VARCHAR(60), storeids VARCHAR(60))");
		    client.query("insert into vendor (vname) values('amazon')");
		    client.query("insert into vendor (vname) values('flipkart')");
		    client.query("insert into item (iname,description,vid) values('book','c book',1)");
		    client.query("insert into item (iname,description,vid) values('laptop','i5 laptop',1)");
		    
          
            },

                pg_connect: function pg_connect() {
                  var pg = require('pg');
                  var connectionString = "postgres://postgres@localhost:5432/stock";               
	          var client = new pg.Client(connectionString);
	          client.on('drain', client.end.bind(client)); //disconnect client when all queries are finished
	          client.connect();
	          return client;
   },
          
}
	
