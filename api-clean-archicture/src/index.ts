import express from 'express';
import cors from 'cors';
import textRoutes from './routes/textRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', textRoutes);

const PORT = 3000;
app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})