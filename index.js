const express = require('express')
const bodyParser = require('body-parser')
const Keyv = require('keyv')
const uuid = require('uuid/v4')
const app = express()
const port = process.argv[2] | 8080
const keyv = new Keyv()

const oneYear = 3.154e+10

app.use(bodyParser.json())
app.use('/css', express.static(__dirname + '/css', { maxAge: oneYear }))
app.use('/img', express.static(__dirname + '/img', { maxAge: oneYear }))
app.use('/scripts', express.static(__dirname + '/scripts', { maxAge: oneYear }))
app.get('/robots.txt', (req, res) => res.sendFile(__dirname + '/robots.txt'))
app.get('/', (req, res) => {
	res.set('Cache-Control', 'max-age=' + (oneYear / 1000));
	res.sendFile(__dirname + '/index.html')
})

app.post('/builds', async (req, res) => {
	if(req.body.data) {
		const id = uuid()
		keyv.set(id, req.body.data, 604800000)
		res.setHeader('Content-Type', 'text/plain')
		res.status(200).end(id)
	} else {
		res.status(400).end()
	}
})

app.get('/builds/:b', async (req, res) => {
	const val = await keyv.get(req.params.b)
	res.setHeader('Content-Type', 'text/plain')
	if(val) {
		res.send(val)
	} else {
		res.status(404).end()
	}
})

app.listen(port, '0.0.0.0', () => console.log(`Unit stat utility server listening on port ${port}!`))
