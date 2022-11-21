const express = require('express')
const app = express()
const itemRoutes = require('./routes')

app.use(express.json())
app.use('/items', itemRoutes)


app.use(function(err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;
    return res.status(status).json({
      error: {message, status}
    });
  });


module.exports = app