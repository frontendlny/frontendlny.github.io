import express from './config/myexpress'
import logger from './util/logger'
import config from './config/config'

const server = express();  
 
server.listenAsync(config.port).then(() => {
  logger.info("Server started on prot " + config.port)  
})
  