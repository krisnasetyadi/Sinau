const express = require('express');
const PORT =  process.env.PORT || 5000;
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const bcrypt = require('bcrypt');
const pool = require('../config/db');

app
  .prepare()
  .then(()=>{
    const svr = express();
    svr.get('*',(req,res)=>{
      return handle(req,res) && svr.disable('x-powered-by');
    });
    svr.post('/api/signup',async(req,res)=>{
      let errors=[];
      const {username,email,password} = req.body;
      if(password === null){
        errors.push({message:'Fill the password field'});
      } else {
        let hashPassword = await bcrypt.hash(password,10);
        console.log(hashPassword);
        const newStudent = await pool.query(
          `INSERT INTO student_data(student_name,student_email,student_password)
            VALUES ($1,$2,$3)`,[username,email,password]);
        res.json(newStudent.rows[0]);
      }
    });
    svr.listen(PORT,err=>{
      if(err) throw err;
      console.log(`THIS SERVER RUNNING ON PORT ${PORT}`);
    });
  })
  .catch(ex =>{
    console.error(ex.stack);
    process.exit(1);
  });

