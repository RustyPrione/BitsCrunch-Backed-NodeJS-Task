const { check, query,body, param  } = require('express-validator');
const validate = method => {
    switch (method) {
      case 'getdetails': {
        return [
          param("chain_id", "please pass chainID").exists().isInt,
          param("address", "please pass address").exists(),
        ];
      }
    
    case 'getData': {
        return [
        
          check("userId", "value doesn't exists").exists()
        ];
      }
    }
}

module.exports = {validate}; // export this function to use as a middleware