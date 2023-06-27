const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db.js');
const PORT = 3000;

const controller = require('./controllers.js');

import '../src/components/Login.js'

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//place routes here

// route for login
app.use('/src/components/Login.js', (req, res) => {
  res.send({
    token:"test123"
  })
});

app.use('/src/components/Signup.js', (req, res) => {
  res.send({"you signed up"})
});

app.use((req, res) => res.status(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

module.exports = app;