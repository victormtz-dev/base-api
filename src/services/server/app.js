import express from "express";
import config from "../../config/config"
import {expressJSON, httpForm, corsOptions} from "../../middlewares/index"
import IndexRoutes from "../../routes/index.routes" //Todas las rutas que usaremos vienen importadas desde la carpeta routes

const app = express();


//Settings
app.set('port', config.port);

//Middlewares
app.use(expressJSON);
app.use(httpForm);
app.use(corsOptions);


//Routes
//app.use("/api", IndexRoutes);





/**
 * Start Server
 */
export default app;