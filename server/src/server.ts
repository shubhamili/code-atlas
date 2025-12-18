import express, { type Response } from 'express'
import dotenv from 'dotenv';


dotenv.config()


const app = express()


app.use(express.json())

const port = process.env.PORT;


app.get('/', (_, res: Response) => {
    res.send('Server is running')
})


app.listen(port, () => {
    console.log('first', "  Server is running on port " + port);
})