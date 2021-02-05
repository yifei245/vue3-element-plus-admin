
/* 引入express框架 */
const express = require('express');
const app = express();
 
/* 引入cors */
const cors = require('cors');
app.use(cors());
 
/* 引入body-parser */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
/* 引入mysql */
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MXSCRroot',
    database: 'todolist',
    multipleStatements: true
})

connection.connect((res) => {
    if(res) throw res;
    console.log('——————————链接成功——————————');
});
 
/* 监听端口 */
app.listen(8080, () => {
    console.log('——————————服务已启动——————————');
})

const baseURL = '/api'
app.get(`${baseURL}/get`, (req, res) => {
    const sqlStr = 'SELECT * FROM todo'
    connection.query(sqlStr, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 0, data: results})
    })
})
app.get(`${baseURL}/set`,(req,res) => {
    connection.query("INSERT INTO todo SET ?", req.query, (error, results, fields) =>{
        if (error) throw error;
        res.json({ code: 0, message: '成功'})
    })
})
app.post(`${baseURL}/postSet`,(req,res) => {
    connection.query("INSERT INTO todo SET ?", req.body, (error, results, fields) => {
        if (error) throw error;
        res.json({ code: 0, message: '成功'})
    })
})
app.get(`${baseURL}/getById`,(req,res) => {
    connection.query(`SELECT * FROM todo where id=${req.query.id}`,(error, results, fields) => {
        if (error) throw error;
        res.json({ code: 0, message: results})
    })
})

app.get(`${baseURL}/del`,(req,res) => {
    connection.query(`delete FROM todo where id=${req.query.id}`,(error, results, fields) => {
        if (error) throw error;
        res.json({ code: 0, message: results})
    })
})
app.post(`${baseURL}/update`,(req,res) => {
    connection.query(`update todo set name="${req.body.name}" where id=${req.body.id};`,(error, results, fields) => {
        if (error) throw error;
        res.json({ code: 0, message: results})
    })
})