function applyDiscount(vehicles, discount){

    return new Promise((resolve, reject) => {
        if (typeof discount !== 'number') {
          reject(new Error('Invalid discount'));
        }
    
        let valid = true;
        const prices = vehicles.map(vehicle => {
          if (!vehicle.hasOwnProperty('make') || !vehicle.hasOwnProperty('price') || typeof vehicle.make !== 'string' || typeof vehicle.price !== 'number') {
            valid = false;
            return;
          }
          return vehicle.price;
        });
    
        if (!valid) {
          reject(new Error('Invalid array format'));
        }
    
        const minPrice = Math.min(...prices);
        if (discount > minPrice / 2) {
          reject('Discount too big');
        }
    
        const discountedVehicles = vehicles.map(vehicle => {
          return { make: vehicle.make, price: ((vehicle.price *  discount ) /10000)};
        });
    
        resolve(discountedVehicles);
      });
}

const app = {
    applyDiscount: applyDiscount
};

module.exports = app; 