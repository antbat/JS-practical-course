 function ApplyForVisa(docs){
     console.log('waiting for visa...');
     let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(Math.random() > 0.1){
                resolve({})
            }
            else reject('need more docs ' )          
           },  1000);          
     });
     return promise;
 }

 function getVisa(visa){ 
     console.info(' visa is getted')
     return new Promise(function(resolve, reject){
         resolve(visa)
     });
}; 

 function bookHotel(visa){ 
     console.info('bookHotel')
     console.info(visa)
     return {Promise};
 };
     

 function buyTickets(bookHotel){
     console.info('buyTickets')
     console.log(bookHotel)
};
 
ApplyForVisa({})
.then(getVisa)
.then(bookHotel)
.then (buyTickets)
.catch(error => console.error(error));
 
