
import express from 'express';

//1 Crear una instancia de nuestra aplicacion

const app = express();


//ponemos a escuchar app.js

app.listen(4000,()=>{
    console.log('El servidor esta funcionando en el http://localhost:4000');
})

//2 Definir rutas

app.get('/testimonios', (request, response) => {
    response.send('Lista de testimonios que no hay')
})