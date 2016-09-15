var db = require('../models/db');

exports.home = function(req, res){
      var client = db.pg_connect();
      var itemQuery="select iname from item";
      var vendorQuery="select vname from vendor";
      client.query(itemQuery, function(err1, result1) {
         if (err1){ console.log("error in itemQuery=", err);} else {console.log("result of itemQuery is=",result1.rows); }
	 var client = db.pg_connect();
	 	client.query(vendorQuery, function(err2, result2) {
              		if (err2){ console.log("error in vendorQuery= ", err2);} else {console.log("result of vendorQuery is= ",result2.rows); }
 			res.render('homepage',{iname:result1.rows,vname:result2.rows}); 
		 });  
	 });  
   
}

exports.storeData= function(req, res){
   console.log("inside send function");
      var client = db.pg_connect();
      var queryConfig="insert into tbldemo (iid,date,storeids) values(2,'10/11/2016','store4,store2,store3') ";
	 client.query(queryConfig, function(err, result) {
              if (err){   
		console.log("error occur is "+err);              
	    	     res.json({message:"something wrong"});
	      }else{
		
		res.json({message:"successfully entered"});
	      }
	 });  
   
}
