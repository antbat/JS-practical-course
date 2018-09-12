function applyForJob(docs) {
    console.log('Applying for a job...');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > 0.5 ? resolve({}) : reject('Apply for the job has been rejected');
        }, 1500);
    });
    return promise;
}


function approveApply(permission){
    console.log('WE GOT APPROVED');
    return permission;
}
// approved => {
//     console.info('Ur apply has been approved');
//     return approved;
// };

function celebrate(permission){
    console.log(permission);
    console.log('------------------------');
    console.log('EAT=>SLEEP=>RAVE=>REPEAT');
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(permission), 1500);
    });
}

function getReady(){
    console.log('------------------------');
    console.log('Get pants and shirt steamed etc.');
    return console.log('We are ready to work,' + {});
}
try{
    applyForJob({})
        .then(approveApply)
        .then(celebrate)
        .then(getReady1)   //ERROR TEST (original .then(getReady))
        .catch(error => console.error(error));
} catch(err){
    console.error(err);
}



//     function(approved){
//     console.info('Ur apply is approved!');
// },
// function(reason){
//     console.error(reason);
// });