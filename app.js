const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>CI/CD Containerized App</title>
        <style>
            body{
                margin:0;
                font-family:Arial, Helvetica, sans-serif;
                background:linear-gradient(135deg,#1e3c72,#2a5298);
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                color:white;
            }

            .card{
                background:white;
                color:#333;
                padding:40px;
                border-radius:10px;
                text-align:center;
                width:400px;
                box-shadow:0 10px 30px rgba(0,0,0,0.3);
            }

            h1{
                color:#2a5298;
            }

            .info{
                font-size:18px;
                margin-top:20px;
            }

            .footer{
                margin-top:25px;
                font-size:14px;
                color:gray;
            }
        </style>
    </head>

    <body>

        <div class="card">

            <h1>🚀 CI/CD Containerized Application</h1>

            <p>This web app is deployed using:</p>
            <b>Docker + Jenkins + GitHub + DockerHub</b>

            <div class="info">
                <p><b>Student Name:</b> Manish Kumar Parmar</p>
                <p><b>Roll Number:</b> 2023BCD0032</p>
            </div>

            <div class="footer">
                Node.js • Docker • Jenkins Pipeline
            </div>

        </div>

    </body>
    </html>
    `)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})