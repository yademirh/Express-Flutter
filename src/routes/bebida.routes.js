

import { Router } from "express";

const routeBebida = Router();

routeBebida.get("/bebida", (req, res)=>{
    res.json({
        msg: "GET BEBIDAAA"
    })
});

routeBebida.post("/bebida", (req, res)=>{
    res.json({
        msg: "POST BEBIDAAA"
    })
});

export default routeBebida;