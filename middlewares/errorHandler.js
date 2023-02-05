// create a erroHandler.js file in middleware
const logger = require('../utilities/logger');
const  responseUtils = require('../utilities/response');

const errorHandler = async(err, req, res, next) => {
    
    logger.error("Error :" ,err);
    responseUtils.serverErrorResponse(res, err)
  
};

module.exports={errorHandler}

