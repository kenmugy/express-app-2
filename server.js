const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = process.env.PORT || '1117';
const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.get('env') === 'development' && app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(port, () => debug(`listening on port ${chalk.red(port)}`));
