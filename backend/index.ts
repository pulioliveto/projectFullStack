import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

//Configurando el Archivo .env
dotenv.config();

// Creacion de la API
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Definicion de rutas
app.get('/', (req: Request,res: Response) => {
    res.status(200).json({"data":{
        "message": "goodbye world"
    }});
});

app.get('/hello', (req: Request, res: Response) => {
    const name = req.query.name;
    if(!name) {
        res.send(`Hola Anonimo`)
    }else{
res.send(`hola ${name}`)
    }
    

})

app.listen(port, ()=> console.log("Corriendo el servidor en", port))