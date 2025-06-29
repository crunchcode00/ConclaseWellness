require('dotenv').config()

const express = require('express');
const app = express()
const port= 3002;
app.use(express.json());


//to force create DB
require('dotenv').config();
app.use(express.json());

const sequelize = require('./sequelize'); // your Sequelize instance

// 🔁 Import models so associations (like User.hasMany) are registered
require('./models/user');
require('./models/Journal');

// 🔁 Sync database after models are registered
sequelize.sync({ alter: true }) // or force: true for dev-only resets
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });









app.get("/", (req,res)=> {
    console.log("Welcome to Health")
    res.send ("Health is Wealth")
})

const authRouter= require('./router/auth.route')
app.use('/auth',authRouter)

const journalRoute = require('./router/Journal.route');
app.use('/api/journal', journalRoute);




app.listen(port,()=> {
    console.log(`running on port:${port}`);
})