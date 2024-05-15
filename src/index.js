import express from "express";
import routeGeneral from "./routes/index.routes.js";

// init express 
const app = express();

app.use(routeGeneral);

// colocar al servidor a escuchar peticiones
app.listen(8000, () => {
    console.log("Hola servidor");
});