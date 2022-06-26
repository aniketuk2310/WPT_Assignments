let dbparams = {
    user : "root",
    database : "wpt",
    password : "cdac",
    port : 3306,
    host : "localhost"
}

const mysql = require("mysql2");
const connection = mysql.createConnection(dbparams);

/*
// i.	Insert

// let id = 1;
// let name = "abc";
// let status = true;
let id = 2;
let name = "xyz";
let status = false;

connection.query("insert into resource values(?,?,?)",[id,name,status],
        (error,rows)=>{
            if (error) {
                console.log(error);
            } else if(rows.affectedRows > 0){
                console.log("Affected Rows : "+rows.affectedRows);
                console.log("Inserted Successfully..!!");
            }
        }
);
*/

/*
select * from resource;
+----+------+--------+
| id | name | status |
+----+------+--------+
|  1 | abc  |      1 |
+----+------+--------+

select * from resource;
+----+------+--------+
| id | name | status |
+----+------+--------+
|  1 | abc  |      1 |
|  2 | xyz  |      0 |
+----+------+--------+
*/

/*
// ii.	Update  -- name

let name = "pqr";
let id = 1;
connection.query("update resource set name=? where id=?",[name,id],
        (error,rows)=>{
            if (error) {
                console.log(error);
            } else if(rows.affectedRows > 0){
                console.log("Affected Rows : "+rows.affectedRows);
                console.log("Updated Successfully..!!");
            }
        }
);
*/

/*
select * from resource;
+----+------+--------+
| id | name | status |
+----+------+--------+
|  1 | pqr  |      1 |
|  2 | xyz  |      0 |
+----+------+--------+
*/

// iii.	Multi select – query on status
/*
let status = false;

connection.query("select * from resource where status=?",[status],
        (error,rows)=>{
            if (error) {
                console.log(error);
            } else  {
                console.log(rows);
                console.log("Details fetched Successfully..!!");
            }
        }
);
*/

/*
[ { id: 2, name: 'xyz', status: 0 } ]
Details fetched Successfully..!!

select * from resource where status=false;
+----+------+--------+
| id | name | status |
+----+------+--------+
|  2 | xyz  |      0 |
+----+------+--------+
*/

// iv.	Single select  -- query on resourceid.	

let id = 1;

connection.query("select name from resource where id=?",[id],
        (error,rows)=>{
            if (error) {
                console.log(error);
            } else  {
                console.log(rows);
                console.log("Details fetched Successfully..!!");
            }
        }
);

/*
[ { name: 'pqr' } ]
Details fetched Successfully..!!

select name from resource where id=1;
+------+
| name |
+------+
| pqr  |
+------+
*/