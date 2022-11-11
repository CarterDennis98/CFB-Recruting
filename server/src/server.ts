import cors from '@fastify/cors';
import Fastify from 'fastify';
import qs from 'qs';
import './config/conn';

const fastify = Fastify({ querystringParser: str => qs.parse(str), logger: true });

const createServer = async () => {
	await fastify.register(cors);

	await fastify.register(require('./routes/recruit'), { prefix: 'recruit' });
	await fastify.register(require('./routes/team'), { prefix: 'team' });

	fastify.setErrorHandler((error, req, res) => {
		req.log.error(error.toString());
		res.send({ error });
	});

	return fastify;
}

export default createServer;