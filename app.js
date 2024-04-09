//express
const express = require("express");
const app = express();
//route 객체 사용을 위해 변수 할당
const router=express.Router();

const port =3000;

//mysql
let mysql = require('mysql2')

// .env파일 접근
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err)=>{
  if(err) return console.log(err.message)

  console.log('MYSQL 접속 성공!')
})

app.get("/", (req,res) =>{
  res.status(200);
  res.send("Hello Node!")
});

app.listen(port,()=>{
  console.log(`${port}번 포트에서 서버 실행중`)
});