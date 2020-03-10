const express = require('express');
const config = require('./config');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const CVRoutes = require('./routes/cvRoutes');

const app = express();

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';

console.log(process.env.NODE_ENV);

mongoose.connect(config.mongo_uri[environment], { useNewUrlParser: true})

mongoose.connection.on('error',()=>{
	console.log(`-------error-------`);
})

app.use(bodyParser.json());
app.use(cors());

if (environment == 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
	});
}

app.use('/api', CVRoutes)

app.listen(5000, ()=>{
	console.log('-------Server is running');
})

module.exports = app;