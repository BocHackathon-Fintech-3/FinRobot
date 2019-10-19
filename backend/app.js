const os = require('os');
const cluster = require('cluster');

if(cluster.isMaster) {
    // Master process
    // var n_cpus = os.cpus().length;
    var n_cpus = 1;
    console.log(`Forking ${n_cpus} CPUs`);
    for(var i=0; i < n_cpus; i++) {
        cluster.fork();
    }
    
} else {
    const http = require('http'),
        path = require('path'),
        express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        errorhandler = require('errorhandler');

    const isProduction = process.env.NODE_ENV === 'production';

    const app = express();

    app.use(cors());
    
    require('dotenv').config();

    app.use(require('morgan')('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(express.static(__dirname + '/public'));

    if (!isProduction) {
        app.use(errorhandler());
    } 
    
    require('./config/passport')(app);
    app.use("/public", express.static(path.join(__dirname, 'public')));
    app.use(require('./routes'));
    
    /// catch 404 and forward to error handler
//    app.use(function(req, res, next) {
//        var err = new Error('Not Found');
//        err.status = 404;
//        next(err);
//    });


//    if (!isProduction) {
//        app.use((err, req, res, next) => {
//            console.log(err.stack);
//
//            res.status(err.status || 500);
//
//            res.json({'errors': {
//                message: err.message,
//                error: err
//            }});
//        });
//    }
//    else {
//        app.use((err, req, res, next) => {
//            res.status(err.status || 500);
//            res.json({'errors': {
//            message: err.message,
//            error: {}
//            }});
//        });
//    }
//        

    var server = app.listen( process.env.PORT || 8000, () => {
        console.log('Listening on port ' + server.address().port);
    });


}

