import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { randomUUID } from 'node:crypto'
import { z } from "zod";

export async function transactionRoutes(app: FastifyInstance) {
    app.post('/', async (request, reply) => {

        const createTransactionBodySchema = z.object({
            amount: z.number(),
            title: z.string(),
            type: z.enum(['credit', 'debit'])
        })

        const { amount, title, type } = createTransactionBodySchema.parse(request.body);

        await knex('transactions').insert({
            id: randomUUID(),
            title,
            amount: type === 'credit' ? amount : amount * -1
        });

        return reply.status(201).send();
    });
}