function processString(input){
    if(input.length==0){
        return 100;
    }else{
        let sir=input.split(' ');
        let sum=0;
        for(var i=0;i<sir.length;i++){
            if(!isNaN(sir[i])){
                if(parseInt(sir[i])%2==0){
                    sum+=parseInt(sir[i]);
                }
            }else{
                console.log(typeof parseInt(sir[i]));
                throw new Error("Item is not a number");
            }
        }
        return 100-sum;
    }
    
}
const app = {
    processString: processString
}

module.exports = app