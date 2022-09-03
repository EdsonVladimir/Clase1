const express = require('express');
const app = express();

app.get('/ruta', function(req, res){
    res.send('Hola Mundo')
})

app.post('/envio', (req, res)=>{

    try {
        res.status(200).json({
            estado:1,
            mensaje:"Este es un post"
        })
    } catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"error en el servidor"
        })
    }
})
 app.put('/cambio', (req, res) => {

    try {
 res.status(200).json({
            estado:1,
            mensaje:"Este es un PUT"
        })
    } catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"error en el servidor"
        })
    }
 })
  app.delete('/borrar', (req, res) => {

    try {
        res.status(200).json({
            estado:1,
            mensaje:"Este es un DELETE"
        })
    } catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"error en el servidor"
        })
    }
 })
app.listen(3000);