// src/index.js
import express, { Express, Request, Response } from "express"
import cors from "cors"
import axios from "axios"

const port = 3001

const app: Express = express()
app.use(cors())

app.get('/', async (req: Request, res: Response) => {
    try{
        const apiRick = await axios.get('https://rickandmortyapi.com/api/character')
        const data = apiRick.data.results;
        
        res.json(data);
    }catch(error){
        console.error(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.get('/alternative', (req: Request, res: Response) => {
    res.send('This is alternative route')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})