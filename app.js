const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const db = require('./models')
const { urlencoded } = require('body-parser')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(port, () => {
  db.sequelize.sync()
  console.log(`running on localhost:${port}`)
})

require('./routes')(app)
