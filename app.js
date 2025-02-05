const express = require("express");
const path = require("path");
const app = express();
const productRouter = require('./app/product/routes')
const productRouterV2 = require('./app/product_v2/routes')
const logger = require('morgan')

app.use(logger('dev'))
app.use(express.urlencoded({extended: true})) // untuk form
app.use(express.json()) // untuk JSON
app.use('/public', express.static(path.join(__dirname, 'uploads')))
app.use('/api/v1', productRouter)
app.use('/api/v2', productRouterV2)
app.use((req, res, next) => {
    res.status(404)
    res.send(`Halaman ${req.originalUrl} tidak tersedia`)
})

app.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000");
});

module.exports = app;
