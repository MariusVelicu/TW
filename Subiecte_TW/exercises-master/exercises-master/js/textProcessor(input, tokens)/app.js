function textProcessor(input, tokens){
    if(typeof input=="string")
    {
        if(input.length>=6)
        {
            tokens.forEach((e)=>
            {
                if( typeof e.tokenName=="string" && typeof e.tokenValue=="string" )
                {
                    var t= "${"+ e.tokenName + "}";
                    input= input.replace(t, e.tokenValue);
                }
                else
                {
                    throw new Error("Invalid array format");
                }
            });
            return input;
            
        }
        else
        {
        throw new Error("Input should have at least 6 characters");
        }
    }
    else
    {
        throw new Error("Input should be a string");
    }
  
}

const app = {
    textProcessor: textProcessor
};

module.exports = app;