import { bd } from '../mysql/db.js'

const getPosts = async (req, res) => {
	let [posts, _] = await bd.execute(`SELECT * FROM posts ORDER BY date DESC LIMIT 20`)
	return res.status(200).json({posts})
}

export { getPosts }