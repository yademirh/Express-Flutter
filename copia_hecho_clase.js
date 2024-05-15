import express from "express";

// init express 
const app = express();

app.use(express.json())

// ruta home que recibe dos parametros request and response
app.use("/home", (req, res)=>{
    res.json(
        {
            success: true,   // cualquier dato, este es el key del json
            opa : "HPñans"
        }
        );
    });
    
// Ruta solo GET
app.get("/home_2",  (req, res, next)=>{
    
    console.log("Por aqui estuvo el COCO");
    if(false){
        return res.json({
            success: false
        })
    }
    next();
},
(req, res)=>{
    console.log("ldfjfsjdfl");
    res.json(
        {
            success: "estoy en home_2",   // cualquier dato, este es el key del json
            opa : "Toy malo wey"
        }
    );
});

app.get("/parametros", (req, res)=>{

    let {variable_num, otro_num, master} = req.query
    res.json(
        {
            success: true,
            data: {
                numero: variable_num,
                otro_num: otro_num,
                master: master
            }
        }
    )
});

app.get("/parametros/:comida/:bebida", (req, res)=>{
    console.log(req.params)
    res.json({
        "data": req.params
    })
});



app.post("/parametros", (req ,res)=>{
    console.log(req.body);

    res.status(403).json({
        "info": req.body
    })
});

app.put("/pedidos", (req, res)=>{ // reciba por parametros ID, y por el body: nombre, valor, descripcion
    res.json({
        ...req.query,
        "info": req.body
    })
}) 

// colocar al servidor a escuchar peticiones
app.listen(8000, () => {
    console.log("Hola servidor");
});
