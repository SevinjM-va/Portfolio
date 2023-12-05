const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const secretKey = "mysecretkey";

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1sevinc2",
    database: "portfolio",
    port: 5432,
  },
});

app.use("db", db);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.get('/home',function(req, res){
  res.end('hello')
})
app.post('/home',async(req, res)=>{
  try {
    const message = req.body;
  await db('messages')
  .insert({
    name: message.name,
    email: message.email,
    message: message.message
  })
res.status(201).json({message: 'Message successful', success: true}
  );
}
catch (error) {
  console.error('Error handling order:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}
})



app.listen(3500, () => {
  console.log("3500 port hazirdir");
});