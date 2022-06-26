let dbparams = {
    user : "root",
    database : "wpt",
    password : "cdac",
    port : 3306,
    host : "localhost"
}

const mysql = require("mysql2");
const connection = mysql.createConnection(dbparams);

const express = require("express");
const app = express();

app.listen(2222,()=>{console.log("server started at port no. 2222...")});

app.use(express.static("static"));

app.get("/getArea",(req,res)=>{
    let pin = req.query.pin;
    let output = {status : false, area:""};

    connection.query("select area from address where pincode=?",[pin],
        (error,rows)=>{
            if(error){
                console.log(error);
            }
            else if (rows.length > 0) {
                console.log(rows);
                output.status = true;
                output.area = rows[0].area;
            }
            res.send(output);
        }
    )
});






/*
mysql> create table address(pincode integer,
    -> area varchar(24));
Query OK, 0 rows affected (0.91 sec)

mysql> desc address;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| pincode | int         | YES  |     | NULL    |       |
| area    | varchar(24) | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> insert into address values(413102,"Baramati");
Query OK, 1 row affected (0.23 sec)

mysql> insert into address values(412304,"Pune");
Query OK, 1 row affected (0.12 sec)

mysql> select * from address;
+---------+----------+
| pincode | area     |
+---------+----------+
|  413102 | Baramati |
|  412304 | Pune     |
+---------+----------+
*/

