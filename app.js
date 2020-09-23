const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const session = require('express-session')

const methodOverride = require('method-override')
const db = require('./models')
const { urlencoded } = require('body-parser')

const app = express()
const port = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const passport = require('./config/passport')

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: require('./config/handlebars-helpers')
}))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())//解析json格式
app.use(session({
  secret: 'ThisIsSecret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  res.locals.user = req.user
  next()
})

app.use(methodOverride('_method'))
app.use('/upload', express.static(__dirname + '/upload'))

app.listen(port, () => {
  console.log(`running on localhost:${port}`)
})

require('./routes')(app)
//require('./routes')(app, passport)
//原作法是直接從 app.js 傳入兩個參數：app & passport