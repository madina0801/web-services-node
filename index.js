const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
	const items = req.url.split('/');
	if (items[1] === 'friends') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		const friends = [
			{
				id: 0,
				name: 'John',
			},
			{
				id: 1,
				name: 'Jay',
			},
			{
				id: 2,
				name: 'Jake',
			},
		];
		if (items.length === 3) {
			const friendIndex = +items[2]
			res.end(JSON.stringify(friends[friendIndex]));
		} else {
			res.end(JSON.stringify(friends));
		}
	} else if (items[1] === 'messages') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body>');
		res.write('<ul>');
		res.write('<li>Hi, Jay</li>');
		res.write('<li>How are you doing?</li>');
		res.write('</ul>');
		res.write('</body>');
		res.write('</html>');
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}!`));