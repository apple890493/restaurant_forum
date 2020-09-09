const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const session = require('express-session')
const db = require('./models')
const { urlencoded } = require('body-parser')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: 'ThisIsSecret',
  resave: false,
  saveUninitialized: false
}))
app.use(flash())

app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  next()
})

app.listen(port, () => {
  db.sequelize.sync()
  console.log(`running on localhost:${port}`)
})

require('./routes')(app)
