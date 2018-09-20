
 console.log(' --- start here --- ');

      

    class Timer {
        constructor(time){
            this.time = time;           
        }

        tick(){
            this.time --  
            console.log (this.time)          
            return this.time
        }

    }
    let timer = new Timer(60);
    console.log(timer.tick());

    const timerId = setInterval(function(){timer.tick()}, 1000);




// let time = 20;
//     function tick(){        
//         time--;
//         console.log(time)        
//     }
//     // console.log(tick() + ' console.log(tick()'); 

//     const timerId = setInterval(tick, 1000);

// //   через 5 сек остановить повторы
//   setTimeout(function() {
//   clearInterval(timerId);
//     console.log( 'стоп' );
//   }, 5000);



