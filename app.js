import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

//import Producto from './routes/producto';


const app = express();

//conexion base de datos
app.set('port', process.env.PORT || 3000);
//const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://root:toor@cluster0.1ae14.mongodb.net/cluster0?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err=> console.log(err));

//MIDELWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//app.use(express.static(path.join(__dirname, 'public')));

//ruta

app.use('/api', require('./routes/producto'));
//app.use('/api');
    //inicilizacion del server
app.listen(app.get('port'), ()=>{
    console.log('server started')
})
const history = require('connect-history-api-fallback');
app.use(history()); app.use(express.static(path.join(__dirname, 'public')));
    //puerto
//    app.set('puerto', process.env.PORT || 3000);
  //  app.listen(app.get('puerto'), () => {
    //    console.log('example app losten on port' + app.get('puerto'))



    //});