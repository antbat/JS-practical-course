function applyForJob(docs) {
    console.log('Applying for a job...');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > 0.5 ? resolve({}) : reject('Apply for the job has been rejected');
        }, 1500);
    });
    return promise;
}

function celebrate(){
    console.log('------------------------');
    console.log('EAT=>SLEEP=>RAVE=>REPEAT');
}

function getReady(){
    console.log('------------------------');
    console.log('Get pants and shirt steamed etc.');
}

applyForJob({})
    .then(approved => console.info('Ur apply has been approved'),
        reason => console.error(reason))
    .then(celebrate)
    .then(getReady)
    .catch(error => console.error(error));
        // function(approved){
    //     console.info('Ur apply is approved!');
    // },
    // function(reason){
    //     console.error(reason);
    // });