import { FastifyInstance, FastifyRequest } from 'fastify';
import { createTeam, getTeam } from '../controllers/team';

async function routes(fastify: FastifyInstance) {
	fastify.get('/', async (
		req: FastifyRequest<{
			Querystring: {
				team: string,
				year: string
			}
		}>, res) => {
		const {
			team,
			year
		} = req.query;

		let result;

		if (team && year) {
			result = await getTeam(team, year);
		} else if (team && !year) {
			result = await getTeam(team);
		} else if (!team && year) {
			result = await getTeam(undefined, year);
		} else if (!team && !year) {
			result = await getTeam();
		}

		res.status(200).send(result);
	});

	fastify.post('/', async (req, res) => {
		const result = await createTeam(req.body);
		res.status(201).send(result);
	});
}

export default routes;