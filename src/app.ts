import fastify from "fastify";
import cookies from '@fastify/cookie';
import { transactionRoutes } from "./routes/transactions";

export const app = fastify();

app.register(cookies);
app.register(transactionRoutes, {
    prefix: 'transactions'
});