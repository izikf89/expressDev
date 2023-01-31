import * as dotenv from 'dotenv';
import http from 'http';
import app from './app';
import debug from './configurations/debug';
import AppDataSource from './data-source';

debug('start');

dotenv.config();


AppDataSource.initialize()
  .then(async () => {})
  .catch((error) => console.log(error))

const port = normalizePort(process.env.PORT);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port))
    return val;

  if (port >= 0)
    return port;

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen')
    throw error;

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
