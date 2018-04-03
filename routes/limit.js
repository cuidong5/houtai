const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'home',
	port:3306
})




//var router = express.Router();
//router.post('/',(req,res)=>{
//	console.log(111)
//	res.setHeader('Access-Control-Allow-Origin','*');
//	var json = req.body.status
//	pool.getConnection((err,con)=>{
//		if(err){
//			console.log(err)
//			return
//		}
//		var sql="SELECT * FROM floor WHERE status=?"
//		connection.query(sql,[json],function(err,data){
//			console.log(data)
//			res.send(data)
//			connection.end()
//		})
//	})
//})

router.use('/limit',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`SELECT * FROM floor`,(err,rows)=>{
			if(err) throw err;
			res.send(rows);
			con.release();
		})
	})
})





module.exports = router;