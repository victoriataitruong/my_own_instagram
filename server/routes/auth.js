const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
	res.send('hello')
})
router.post('/signup', (req, res) => {
	const { name, email, password } = req.body
	if (!name || !email || !password) {
		return res.status(422).json({ error: 'please include all required fields' })
	}
	res.json({ message: 'successfully posted' })
})
module.exports = router
