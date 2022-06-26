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
//  i.	Insert

// let itemno = 1;
// let itemname = "shirt";
// let price = 500;
// let category = "cloths";

let itemno = 2;
let itemname = "tablet";
let price = 45;
let category = "medical";

connection.query("insert into items values(?,?,?,?)",[itemno,itemname,price,category],
            (error,rows)=>{
                if (error) {
                    console.log(error);
                } else if(rows.affectedRows > 0){
                    console.log("inserted successfully..!!")
                    console.log("affectedRows : "+rows.affectedRows);
                }
            }
);
*/
/*
select * from items;
+--------+----------+-------+----------+
| itemno | itemname | price | category |
+--------+----------+-------+----------+
|      1 | shirt    |   500 | cloths   |
|      2 | tablet   |    45 | medical  |
+--------+----------+-------+----------+
*/


/*
// ii.	Update  -- category and price

let itemno = 1;
let price = 1000;
let category = "clothing";

connection.query("update items set category=?,price=? where itemno=?",
            [category,price,itemno],
            (error,rows)=>{
                if (error) {
                    console.log(error);
                } else if(rows.affectedRows > 0){
                    console.log("updated successfullyy...!!");
                    console.log("Affected rows : "+rows.affectedRows);
                }
            }
);
*/
/*
select * from items;
+--------+----------+-------+----------+
| itemno | itemname | price | category |
+--------+----------+-------+----------+
|      1 | shirt    |  1000 | clothing |
|      2 | tablet   |    45 | medical  |
+--------+----------+-------+----------+
*/

/*
// iii.	Multi select – query on category

let category = "medical";

connection.query("select * from items where category=?",
            [category],
            (error,rows)=>{
                if (error) {
                    console.log(error);
                } else {
                    console.log(rows);
                    console.log("Details fetched successfullyy...!!");
                }
            }
);
*/

/*
[ { itemno: 2, itemname: 'tablet', price: 45, category: 'medical' } ]
Details fetched successfullyy...!!

select * from items where category="medical";
+--------+----------+-------+----------+
| itemno | itemname | price | category |
+--------+----------+-------+----------+
|      2 | tablet   |    45 | medical  |
+--------+----------+-------+----------+
*/

// iv.	Single select  -- query on itemno.

let itemno = 1;

connection.query("select itemname from items where itemno=?",
            [itemno],
            (error,rows)=>{
                if (error) {
                    console.log(error);
                } else {
                    console.log(rows);
                    console.log("Details fetched successfullyy...!!");
                }
            }
);

/*
[ { itemname: 'shirt' } ]
Details fetched successfullyy...!!

select itemname from items where itemno=1;
+----------+
| itemname |
+----------+
| shirt    |
+----------+
*/