import express from 'express';
//const express = require ('express');
const router = express.Router();

import Producto from '../models/producto';

//Agregar una nota

router.post('/producto-nuevo', async (req, res)=>{

   const body = req.body;

   try {
       
        const productoDB = await Producto.create(body);
        res.status(200).json(productoDB);

   } catch (error) {
         return res.status(500).json({
             mensaje:'Ocurrio un errror',
             error
         })
   }
});

router.get('/producto/:id', async(req, res) => {
     const _id = req.params.id; 
     try { 
         const productoDB = await Producto.findOne({_id});
      res.json(productoDB); } 
      catch (error) { 
          return res.status(400).json({ 
              mensaje: 'Ocurrio un error', 
              error
      })
    }
});
//Obtener todos los documentos
router.get('/producto', async(req, res) => {
     try {
        const productoDB = await Producto.find();
         res.json(productoDB); }
          catch (error) { 
              return res.status(400).json({ 
                  mensaje: 'Ocurrio un error', error }) 
                }
             });


             //Delete
router.delete('/producto/:id', async(req, res) => {
     const _id = req.params.id; 
     try { 
         const productoDB = await Producto.findByIdAndDelete({_id}); 
     if(!productoDB)
     { 
         return res.status(400).json({ 
             mensaje: 'No se encontró el id indicado', error })
             } 
             res.json(productoDB);
     } catch (error) {
          return res.status(400).json({ 
              mensaje: 'Ocurrio un error', error })
             }
             });

             //Actualizar
             router.put('/producto/:id', async(req, res) => { 
                const _id = req.params.id; 
                const body = req.body;
                try { 
                    const productoDB = await Producto.findByIdAndUpdate(_id, body, {new: true});
                res.json(productoDB);
             } catch (error) { return res.status(400).json({ 
                 mensaje: 'Ocurrio un error', error }) 
                }
             });        

//Exportamos la configuracion de express app
module.exports = router;