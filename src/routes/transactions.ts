import { FastifyInstance } from "fastify";
import { knex } from "../database";

export async function transactionRoutes(app: FastifyInstance) {
    app.get('/hello', () => {
        const tables = knex('sqlite_schema').select('*');

        return tables;
    });
}