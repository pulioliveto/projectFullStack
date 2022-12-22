import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

//Configurando el Archivo .env
dotenv.config();

// Creacion de la API
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Definicion de rutas
app.get('/', (req: Request,res: Response) => {
    res.json("Hola");
});

app.listen(port, ()=> console.log("Corriendo el servidor en", port))