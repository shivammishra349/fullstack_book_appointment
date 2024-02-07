let express = require('express');

let sequelize = require('./database/connection');

let bodyParser = require('body-parser');

let Appointment = require('./model/admin');

let cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true })); 

let adminRoute = require('./routes/admin');

// app.get("/", adminRoute);
app.use(adminRoute);


sequelize.sync()
    .then(res => {
        console.log(res);
        app.listen(1234);
    })
    .catch(err => {
        console.log(err);
    });
