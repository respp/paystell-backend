import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import twoFactorRoutes from "./routes/twoFactorRoutes";

const app = express();

// Middlewares
app.use("/api/2fa", twoFactorRoutes);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); // Asegúrate de que el servidor pueda manejar JSON

export default app;
