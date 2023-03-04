const Logger = require('./Logger');
const logger = new Logger();
logger.on('messageLogged', function (arg)
{
    console.log('listner called',arg);
});
logger.log('message')