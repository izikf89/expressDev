import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from './configurations/logger'
import usersRouter from './routes/users.router';
import debugLogger from './configurations/debug';
import logMiddleware from './midllewares/log.middleware';


const app = express();
debugLogger('start server'); // log to console only on when DEBUG enviroment equal to 'app:expressDev'.
app.use(logger.dev); // logger of http
app.use(express.json()); // parse jsom
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // allow read cookies : req.cookies, req.signedCookies
app.use(express.static(path.join(__dirname, 'public'))); // add static files


// middleware
app.use(logMiddleware)


// routers
app.use('/users', usersRouter);


// default page
app.use('/', express.static('app', { index: "index.html" }));


// page not found
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});


// herror handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  debugLogger('error message: ' + err.message)
  debugLogger('error: ')
  debugLogger(err)

  res.status(err.status || 500);
  res.send();
});


export default app;
