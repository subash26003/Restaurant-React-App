import express from "express";
import mysql from "mysql2"
import cors from "cors"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser";

const app = express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials:true
}))
app.use(cookieParser())

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'subash',
    database:'restaurant'
}) 

db.connect((err)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log('connected')
})

const verifyUser = (request , response,next) =>{
    const token = request.cookies.token
    if(!token){
        return response.send("You are Not authorized")
    }else{
        jwt.verify(token , "SECRET_KEY" , (err , decoded) =>{
            if(err){
                return response.send("Token is not correct")
            }else{
                request.username =  decoded.username
                next()
            }
        })
    }
    
}

app.get('/' , verifyUser , (request , response) =>{
    return response.status(200).send("Success" + request.username)
})

app.post('/login' , async (request , response) =>{
    const {email , password} = request.body
    const sql = `SELECT * FROM users WHERE email = ?`
    const value = [email]
   console.log(request.body)
    db.query(sql  , value ,(err , res) =>{
        if(err) return response.json({Error: "Error in Getting  data"})
        if(res.length > 0){
            bcrypt.compare( password,res[0].password,(err , result) =>{
                if(err){
                    response.status(401).send("Password match error")
                    return ;
                }
                if(result){
                    const username = res[0].username;
                    const token = jwt.sign({username} ,"SECRET_KEY");
                    response.cookie('token',token)
                    response.status(200).send("Success")
                }else{
                    console.log("wrong password")
                    response.status(401).send("Wrong password")
                }
            })
        }else{
            response.status(401).send("User Not Found")
        }
    })
})

app.post('/signup', (request, response) => {
    const { username, email, password } = request.body;
    console.log(request.body)
    const sql1 = `SELECT * FROM users WHERE email = (?)`
    const value = [email]
     db.query(sql1 ,value , (err , res) =>{
        if(err) return response.json({Error: "Getting data"})
        if(res.length == 0){
            const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    console.error("Hashing Error:", err);
                    return response.json({ Error: "Error while Hashing" });
                }
    
                const values = [username, email, hash];
                db.query(sql, values, (err, result) => {
                    if (err) {
                        console.error("Database Insert Error:", err);
                        return response.json({ Error: 'Insert data in Server' });
                    }
                    console.log("Insert Result:", result);
                    return response.send({Status:'Success'})
                });
            });
        }else{
            response.status(409).send("User Already exist")
            console.log("user exist")
        }
    })
    
    
});



app.listen(3000 , () =>{
    console.log("server is running in port 3000")
})

