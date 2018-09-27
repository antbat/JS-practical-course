// const mongoose = require('mongoose');
// //mongoose.connect('mongodb://localhost/test');
// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('мы подключены!');
//     // мы подключены!
// });

// // В Mongoose все происходит от схемы. Давайте создадим ссылку на неё 
// var kittySchema = mongoose.Schema({
//     name: String,
//     age: Number
// });

// // Следующий шаг, это компиляция нашей схемы в модель (это класс, с помощью которого мы создаем документы)
// var Kitten = mongoose.model('Kitten', kittySchema);

// var cat1 = new Kitten({name: 'Kot1', age: 1});
// console.log(cat1.name);

const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/test', function (err) {
    if (err) throw err; 
    console.log('mongoose.connect - successfully connected'); 
}, { useNewUrlParser: true });

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    },
    biography: String,    
    facebook: String,
    profilePicture: Buffer,
    created:{
        type:Date,
        default: Date.now
    }
});

var Author = mongoose.model('Author', authorSchema);

var author1 = new Author({    
    _id: new mongoose.Types.ObjectId(),
    name:{
        firstName:'Ton', 
        lastName:'Verg'
    },
    biography: 'born in Kiev',    
    facebook: 'https://www.facebook.com',
    created: new Date()
});

author1.save(function(err){
    if(err) throw err;
    else console.log('author1.save - author1 successfully saved.');
});

console.log(author1.name);



var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,    
    // author: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Author'
    // },
    created: { 
        type: Date,
        default: Date.now
    }
});

var Book = mongoose.model('Book', bookSchema);

var book1 = new Book ({
    _id: new mongoose.Types.ObjectId(),
    title: 'Ton Boooook',    
    // author: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Author'
    // },
    created: new Date()
    
});

book1.save(function(err){
    if(err){ 
        console.log(err + 'book1.save error!!!!');
        throw err;        
    }
    else 
        console.log('book1.save - book1 successfully saved.');
});

Book.find({
    title: 'Ton Boooook'
}).limit(5)
    .sort('-created')

    .exec(function(err, books) {
        if (err) throw err;
     
        console.log(books);
    });