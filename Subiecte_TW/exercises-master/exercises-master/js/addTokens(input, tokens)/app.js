function addTokens(input, tokens){
    if(typeof input != "string") {

        throw "Input should be a string";
       }
      
       if(input.length < 6 ) {
        throw "Input should have at least 6 characters"
       }
      
       tokens.forEach(token => {
        if(Object.keys(token).length > 1) {
          throw "Invalid array format"
        }
        if(!token.tokenName) {
          throw "Invalid array format"
      
        }
        if(typeof token.tokenName != 'string') {
          throw "Invalid array format"
        }
      });
      
       if(input.search('...') === false) {
        return input;
       }
       else {
        for(let i = 0; tokens.length > i ; i++) {
         input = input.replace("...", "${"+tokens[i].tokenName+"}" );
        }
        return input;
       }
      
       
      }



const app = {
    addTokens: addTokens
}

module.exports = app;