const express = require('express');
const app = express();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env' });
}

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// views
const engine = require('ejs-locals');
app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');

// routes
const indexRouter = require('./routes/index');
const menuRouter = require('./routes/menu');
const signinRouter = require('./routes/signIn');

app.use('/', indexRouter);
app.use('/menu', menuRouter);
app.use('/signIn', signinRouter);

// database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
})
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.listen(process.env.PORT || 3000, () => console.log('server is runnung'));
