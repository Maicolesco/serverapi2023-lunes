import express from 'express'
import cors from 'cors'
import { rutas } from './routes/rutas.js'

export class API {

    constructor(){
        this.app = express()
        this.enrutarPeticiones()
    }
    levantarServidor(){
        this.app.listen(process.env.PORT,()=>console.log(`encendido en ${process.env.PORT}`)
        )
    }
    enrutarPeticiones(){
        this.app.use(cors())
       this.app.use('/',rutas)
    }
    conectarConBD(){}

}