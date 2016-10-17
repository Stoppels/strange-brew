import express from 'express';

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '1337';

// Get the request & response
app.get('/', (req, res) => res.end('Hello, cruel world.'));

app.listen(port, host, (err) => {
	if (err) console.log('Oopsie! Something went to the gutter!');
	console.log('Server started at ', host, port);
});
