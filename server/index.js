import express from 'express';
import path, { resolve } from 'path';

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '1337';

app.use(
	express.static(
		resolve('${__dirname}/../public')
		)
	);

app.listen(port, host, (err) => {
	if (err) console.log('Oopsie! Something went to the gutter!');
	console.log('Server started at %s:%d', host, port);
});
