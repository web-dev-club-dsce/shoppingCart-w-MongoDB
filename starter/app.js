const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path')

const express = require('express')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404
app.use((req, res, next) => {
  //res.send("<h1>Page not found</h1>")
  // res.status(404).send("<h1>Page not found</h1>")
  console.log("404")
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3001);
