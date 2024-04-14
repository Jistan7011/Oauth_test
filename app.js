//express
const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();
const port =3000;

dbConnect();

//mysql
// let mysql = require('mysql2')

// .env파일 접근
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect((err)=>{
//   if(err){ 
//     return console.log(err.message)
//   }
//     console.log('MYSQL 접속 성공!')
// });

//바디파서
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs")
app.set("views","./views")
app.use("/static", express.static("public"))

app.use("/", require("./routes/loginRoutes"));

app.listen(port,()=>{
  console.log(`${port}번 포트에서 서버 실행중`)
});
