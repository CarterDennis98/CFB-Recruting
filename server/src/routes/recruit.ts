import { FastifyInstance } from "fastify";
import { getAllRecruits } from '../controllers/recruit';

async function routes(fastify: FastifyInstance) {
	fastify.get("/", async (req, res) => {
		const result = await getAllRecruits();
		res.status(200).send(result);
	});
}

export default routes;