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

app.listen(3333,()=>{console.log("server started at port no. 3333...")});

app.use(express.static("static"));

app.get("/getBalance",(req,res)=>{
    let accno = req.query.accno;
    let output = {status : false, balance:""};

    connection.query("select balance from account where accno=?",[accno],
        (error,rows)=>{
            if(error){
                console.log(error);
            }
            else if (rows.length > 0) {
                console.log(rows);
                output.status = true;
                output.balance = rows[0].balance;
            }
            res.send(output);
        }
    )
});






/*
create table account(accno integer,
    -> balance float);
Query OK, 0 rows affected (1.47 sec)

mysql> insert into account values(10,500000);
Query OK, 1 row affected (0.15 sec)

mysql> insert into account values(20,1000000);
Query OK, 1 row affected (0.22 sec)

mysql> select * from account;
+-------+---------+
| accno | balance |
+-------+---------+
|    10 |  500000 |
|    20 | 1000000 |
+-------+---------+
*/

