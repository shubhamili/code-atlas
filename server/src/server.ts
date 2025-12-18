import express, { type Response } from 'express'
import dotenv from 'dotenv';
import { repo_router } from './routes/repo.js';


dotenv.config()


const app = express()


app.use(express.json())

const port = process.env.PORT;

app.use('/api/v0', repo_router);

app.get('/', (_, res: Response) => {
    res.send('Server is running')
})


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})