const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const jobsRouter = require('./routes/jobs');

const developmentEnv = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
const app = express();

// Override mongoose promise => Native ES6 promise
mongoose.Promise = global.Promise;

// import all the models
require('./models/User');
require('./models/Post');
require('./models/JobPost');

// import services
require('./services/passport');

// connect to mongoDB
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

// Initialize routes
require('./routes/authRoutes')(app);
require('./routes/postRoutes')(app);

app.use('/api/jobs', jobsRouter);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it does not recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log('req not found = ', req.url);
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler (will print stacktrace)
if (app.get('env') === 'development' || developmentEnv !== 'production') {
  app.use((err, req, res) => {
    console.log(' development error ');
    console.log(' Err = ', err);
    res.status(err.status || 500).json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler (no stacktraces leaked to user)
app.use((err, req, res) => {
  console.log(' production error ');
  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

app.listen(PORT, () => {
  console.log(' Listening to ', PORT);
});
