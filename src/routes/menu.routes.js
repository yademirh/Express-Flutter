import { Router } from "express";

const routeMenu = Router();

routeMenu.get("/menu", (req, res)=>{
    res.json({
        msg: "GET MENUUU"
    })
});

routeMenu.post("/menu", (req, res)=>{
    res.json({
        msg: "POST MENUUU"
    })
});

export default routeMenu;