const { validationResult } = require('express-validator');
const logger = require('../utilities/logger');
const  responseUtils = require('../utilities/response');
module.exports ={
    validator:(req,res,next)=>{

    let errorArr = [];

    const errors = validationResult(req);
    errorArr = errors.array();

    if (errorArr.length) {
      logger.info("Validation Error")
      responseUtils.validationErrorResponse(res,{errorArr})
     //res.json({errorArr})
    }
    else{
      next();
    }
}
}