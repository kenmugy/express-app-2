const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');
const config = require('config');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || '1117';
const Task = require('./models/task')
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users')(Task);
mongoose.connect(
  config.get('DB_CONN'),
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => (err ? res.send(err) : res.json(debug('connected to DB')))
);

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.get('env') === 'development' && app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(port, () => debug(`listening on port ${chalk.red(port)}`));
