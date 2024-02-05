function applyBlackFriday(products, discount){
    return new Promise((resolve, reject) => {
        if(typeof discount=="number") {
                 
            products.forEach((e)=>
            {  
                if(typeof e.name!="string" && typeof e.price!="number" )
                {  var eroare1='Invalid array format';
                      reject(new  Error(eroare1));
                      
                }
               
            });
        if(discount<=10 && discount>0)
        {      resolve(products.map(e=>{
                    return{name: e.name,price: e.price- e.price*discount/100};
                }));
        }
        else
        {
            var  eroare2="Discount not applicable";
             reject(new Error(eroare));
        }
     
        } 
        else 
        { var  eroare="Invalid discount";
             reject(new Error(eroare));
        }
    
     })
}

const app = {
    applyBlackFriday: applyBlackFriday
};
module.exports = app;