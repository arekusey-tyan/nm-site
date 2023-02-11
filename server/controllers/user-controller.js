import { validationResult } from 'express-validator'
import { bd } from '../mysql/db.js'

const login = async (req, res) => {
	const err = validationResult(req)
	if (!err.isEmpty()) {
		return res.status(422).json({ errs: err.array() }), console.log(req)
	} else {
		let [rows, _] = await bd.execute(`SELECT * FROM users WHERE name = ?`, [req.body.username])
		rows[0] === undefined
			? res.status(422).send({ message: "Пользователь с таким логином не найден." })
			: res.status(200).send({ message: "It's ok", user: rows[0] })
	}
}
const getUserById = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM users WHERE user_id = ?`, [req.params.id])
	rows[0] === undefined
		? res.status(422).send({
			message: "Пользователь с таким логином не найден.", user: {
				email: null,
				password: null,
				name: null,
				user_id: 0,
				user_group: null,
				reg_date: null,
				banned: false,
				info: null,
				signature: null,
				foro: null,
				fullname: null,
				land: null,
				pm_all: 0,
				pm_unread: 0,
				logged_ip: null
			}
		})
		: res.status(200).send({message: "It's ok", user: rows[0]})
}
let getRegister = async (req, res) => {
	await bd.execute(`INSERT INTO users VALUES (NULL, 0, '${req.body.password}', '${req.body.login}', NULL, '12', 0, '${new Date(Date.now()).toTimeString()}', 0, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0')`)
	res.status(200).send({message: "ok"})
}
let getUserStatus = async (req, res) => {
	let [items, _] = await bd.execute(`SELECT * FROM user_rank_change WHERE user_id = ?`, [req.params.id])
	res.status(200).send(items)
}
let setUserGroupApi = async (req, res) => {
	let date = new Date().toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'})
	await bd.execute(`UPDATE users as u, user_rank_change as urc SET urc.ugd_end = '${date}' WHERE u.user_id = ${req.params.id} AND urc.ug_start = ${req.params.ugid}`)
	await bd.execute(`UPDATE users SET user_group = ${req.params.gid} WHERE user_id = ${req.params.id}`)
	await bd.execute(`INSERT INTO user_rank_change VALUES (NULL, '${req.params.id}', '${req.params.gid}', '${req.params.ugid}', '${date}', NULL, '${req.body.r}')`)
	res.status(200).send({message: "ok"})
}
let getUserCount = async (req, res) => {
	let [i, _] = await bd.execute(`SELECT * FROM users`)
	res.status(200).send({count: i.length})
}
let getServerUserCount = async (req, res) => {
	let [i, _] = await bd.execute(`SELECT server, COUNT(*) as s FROM users GROUP BY server ORDER BY server ASC`),
		els = []
	i.forEach(el => {
		els[el.server] = el.s
	})
	res.status(200).send({users: els})
}
let getServerCourator = async (req, res) => {
	let [i, _] = await bd.execute(`SELECT * FROM users WHERE user_id = (SELECT courator FROM servers WHERE id = ${req.params.sid})`)
	res.status(200).send({user: i})
}
export let getServerUsers = async (req, res) => {
	let [i, _] = await bd.execute(`SELECT * FROM users WHERE server = ${req.params.sid} ORDER BY user_group DESC`)
	res.status(200).send({users: i})
}
export let getUsersInfo = async (req, res) => {
	let [i, _] = await bd.execute(`SELECT * FROM users`)
	res.status(200).send({users: i})
}

export { login, getUserById, getRegister, getUserStatus, setUserGroupApi, getUserCount, getServerUserCount, getServerCourator }