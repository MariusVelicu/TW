function applyBonus(employees, bonus){
     return new Promise((resolve, reject) => {
        if(typeof bonus=="number") {
                 var maxsalary=0;
            employees.forEach((e)=>
            {  
                if(typeof e.name!="string" && typeof e.salary!="number" )
                {  var eroare1='Invalid array format';
                      reject(new  Error(eroare1));
                      
                }
                else
                {
                    if( e.salary > maxsalary)
                    {
                        maxsalary=e.salary;
                    }
                }
            });
        if(bonus< maxsalary*0.1)
        {  
            reject("Bonus too small");
        }
        resolve(employees.map(e=>{
                    return{name: e.name,salary:e.salary+bonus};
                }));
        } 
        else 
        { var  eroare="Invalid bonus";
             reject(new Error(eroare));
        }
    
     })
}

const app = {
    applyBonus: applyBonus,
};

module.exports = app;