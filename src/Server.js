var express = require('express'),
    nodemailer = require('nodemailer'),
    helmet = require('helmet'),
    bodyParser = require("body-parser");

var app = express(),
    port = process.env.PORT || 3001;

app.use(helmet());
// app.use(express.static('Client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/contact', function(req, res) {
    res.send("get request!");
    console.log('get request');
});

app.post('/contact', function(req, res) {
    res.send("post request!");
    console.log('post request');

     var contactName = req.body.contactName,
         contactEmail = req.body.contactEmail,
         messageSubject = req.body.messageSubject,
         messageContent = req.body.messageContent;
    
    console.log('%s %s', contactName, messageSubject);     
    
    // let transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         type: 'OAuth2', 
    //         user: 'email@gmail.com',
    //         pass: 'yourpassword'
    //     }
    // });

    // let mailOptions = {
    //     from: 'email@gmail.com',
    //     to: 'email@gmail.com',
    //     subject: 'subject',
    //     text: 'hello, world'
    // };

    // transporter.sendMail(mailOptions, function(error, info) {
    //     if (error) {
    //         return console.log(error);
    //     } 
    //     else {
    //         console.log('Email sent: ' + info.response);
    //         res.render('index'); COMMENT OUT
    //     }
    // });
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port, function() {
    console.log('Server is running at port: ',port);
});

