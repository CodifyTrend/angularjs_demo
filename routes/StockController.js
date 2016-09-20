var db = require('../models/db');

exports.updateItems = function(req, res){
	var vendorname=req.body.vendorname;
	var client = db.pg_connect();
         var   queryConfig = {
              text: 'select iname from item where vid=(select id from vendor where vname=$1);',
              values: [vendorname]
            };
	 client.query(queryConfig, function(err, result) {
              if (err){   
		console.log("error occur is "+err);              
	    	     res.json({message:"something wrong"});
	      }else{
		
		res.json({message:"successfully entered", output:result.rows});
	      }
	 });  


}

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
	var itemname=req.body.itemname;
	var store=req.body.store;
	var datevalue=req.body.datevalue;
         var   queryConfig = {
              text: 'insert into tbldemo( iid,date,storeids ) values( (select id from item where iname=$1), $2, $3)',
              values: [itemname, datevalue, store]
            };
	 client.query(queryConfig, function(err, result) {
              if (err){   
		console.log("error occur is "+err);              
	    	     res.json({message:"something wrong"});
	      }else{
		
		res.json({message:"successfully entered"});
	      }
	 });  


   
}
