var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DB_practice', function(error){
    
    if (error) throw new error;
    console.log('Success in connection');

const vasyaSportsman = new Sportsman ({
    _id: new mongoose.Schema.ObjectId,
    name: {
        firstName: 'Vasya',
        lastName: 'Pupkin',
    },
    vasyaHint: 'Vasya is very good at swimming',
    // fasebook: {
    //     type: String,
    //     validate:{
    //         validator: function(text){
    //             return text.indexOf('https://facebook.com') === 0;
    //         },
    //         alert: 'Facebook must start with https://facebook.com'
    //     }
    // }
    facebook: {
        type: String,
        validate: {
            validator: function(text) {
                return text.indexOf('https://www.facebook.com/') === 0;
            },
            message: 'Facebook must start with https://www.facebook.com/',
        }
    }
});


// }); 
// // {
// //     firstName : 'Vovan',
// //     lastName  : 'Pupkin'
// // }

// const hungarItemSchema = mongoose.Schema({
//     name:{
//         hungarType: String,
//         hungarMaterial: String
//     },
//     created: Date
// });

// const hungarSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
// name: {
//     hungarType: String,
//     hungarMaterial: String
// },
//     hungarPicture: Buffer,
//     created: {
//         type: Date,
//         default: Date.now
//     }
// });

// const hungarArc = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     adress: String,
//     hungarType:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Hungar Type'
//     },
//     hungarSize: [
//         {
//             hungarWidth: Number,
//             hungarLength: Number,
//             hungarHeight: Number,
            
//             created: {
//                 type: Date,
//                 default: Date.now
//             },
//         }
//     ],
//     created: {
//         type: Date,
//         default: Date.now
//     }

// });

// const Hungar = mongoose.model('Hungar Type', hungarSchema);
// const HungarArced = mongoose.model('Arced Hungar', hungarArc);


   



