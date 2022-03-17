import config from "./config.js";
import server from "./server.js";
import { logger } from "./util.js"


server.listen(config.port)
    .on('listening', function() {
        logger.info('server running on port ' + config.port)
    })