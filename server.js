// const { application } = require('express');
var express = require('express');
var app = express();
var mysql = require('mysql');
const path = require('path');
const cros = require('cors');
const nodemailer = require('nodemailer');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydb"
});
/* User List API */
app.use(cros());
app.use(express.urlencoded({ extended: true }));

/** Delete User */
app.get('/edituser/:id', function (req, res) {
	con.query("SELECT * FROM customers where id = '"+req.params.id+"'", function (err, result, fields) {
		if (err) throw err;
		res.send(result);
	});
})
app.get('/pagination/:id', function (req, res) {
	console.log("hi");
	var page = req.params.id;
	var offset = (page * 2) - 2;
	if(page == 1){
		var offset = 0;
	}
	con.query("SELECT * FROM customers order by id desc", function (err, result, fields) {
		if (err) throw err;
		result.setHeader('Content-Type', 'application/json')
		res.json(result);
	});
})
app.delete('/deleteuser/:id', function (req, res) {
	con.query("Delete FROM customers where id = '"+req.params.id+"'", function (err, result, fields) {
		if (err) throw err;
		res.send(result);
		console.log("1 record Deleted");
	});
})
/** User list */
// app.get('/', function (req, res) {
// 	con.query("SELECT * FROM customers", function (err, result, fields) {
// 		if (err) throw err;
// 		res.send(result);
// 	});
// })
/* add User */
app.post('/adduser',function(req,res){
	console.log("hi");
	var name = req.body.name;
	var email = req.body.email;
	var contact = req.body.contact;
	var id = req.body.id;
	if(id == ""){
		var sql = "INSERT INTO customers (name,email,contact) VALUES ('"+name+"','"+email+"','"+contact+"')";
		}else{
		var sql = "UPDATE `customers` SET `email` = '"+email+"', `name` = '"+name+"', `contact` = '"+contact+"'  WHERE `id` = '"+id+"'";
	}
	console.log(sql)
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	});
});

/* Create Server */
// var server = app.listen(8081, function () {
// 	var host = server.address().address
// 	var port = server.address().port
// 	console.log("Example app listening at http://%s:%s", host, port)
// })
app.use(express.static(__dirname + '/tutorialteacher/dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/tutorialteacher/dist/index.html'));
});
app.listen(process.env.PORT || 8081);