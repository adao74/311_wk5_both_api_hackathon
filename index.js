const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next(); // Pass control to the next middleware function
  });

const port = 4002

app.get( '/', (req, res) => {
    res.send("Welcome to our API")
})

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});