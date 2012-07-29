var express = require('express')
  , app = express.createServer();

app.configure(function(){
    //To use .html as file extension for templates uncomment these 2 lines
    //as well as switch the filetype of index.hbs below
    //app.set('view engine', 'html');
    //app.engine('html', require('hbs').__express); - 
});

app.get('/', function(req, res){

    var data = {
        title: "Node + Handlebars",
        body: "Hello World!"
    }

    res.render('index.hbs', data);

    //Tell Express to render views/index.html
    //res.render('index.html', data);
});

app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');