import dotenv from 'dotenv';
import server from './server';

dotenv.config();

async function start() {
	const app = await server();

	app.listen({ port: 5000, host: '0.0.0.0' }, function (err, address) {
		if (err) {
			app.log.error(err);
			process.exit(1);
		} else {
			app.log.info(`Fastify server listening on ${address}`);
		}
	});
}

start();