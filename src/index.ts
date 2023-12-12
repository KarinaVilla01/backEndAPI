// src/index.js
import express, { Express, Request, Response } from "express"
import cors from "cors"

const port = 3000

const app: Express = express()
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('This is my root route')
})

app.get('/alternative', (req: Request, res: Response) => {
    res.send('This is alternative route')
})

//Add new route here

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})