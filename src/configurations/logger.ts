import fs from 'fs';
import logger from 'morgan';

logger.token('body', (req: any, res) => JSON.stringify(req.body));

const accessLogStream = fs.createWriteStream('./logs.log', { flags: 'a' });
const dev = logger('dev');
const file = logger('combined', { stream: accessLogStream });
const combined = logger('combined');
const errorOnly = logger('combined', {
    skip: function (req, res) { return res.statusCode < 400 }
  })

const withBody =  logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :body - :req[content-length]');
  
export default { dev, file, combined, errorOnly, withBody, logger }
