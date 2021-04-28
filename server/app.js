const express = require('express')
const app = express()
const PORT = 5000

const customMiddle = (req, res, next) => {
	console.log('middleware executed!!')
	next()
}
app.use(customMiddle)

app.get('/', (req, res) => {
	console.log('home')
	res.send('hello world')
})

app.listen(PORT, () => {
	console.log('server is running on ', PORT)
})