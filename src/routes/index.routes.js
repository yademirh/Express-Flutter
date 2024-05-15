import { Router } from "express"
import routeMenu from "./menu.routes.js";
import routeBebida from "./bebida.routes.js";

const routeGeneral = Router();

routeGeneral.use("/api", routeMenu);
routeGeneral.use("/api", routeBebida);

export default routeGeneral;