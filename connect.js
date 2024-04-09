let mysql = require('mysql2')
const express = require("express");

const server = express();

const port =3000;

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

server.get('/', (req,res) => {
  res.send('hello world')
})

server.listen(port, ()=>{
  console.log(`example app listening on port ${port}`)
})