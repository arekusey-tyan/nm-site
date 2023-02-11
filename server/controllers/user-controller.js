import { validationResult } from 'express-validator'
import { bd } from '../mysql/db.js'


const create = (req, res) => {
	const err = validationResult(req)
	if (!err.isEmpty()) {
		return res.status(422).json({ errs: err.array() })
	}
}

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
		: res.status(200).send({ message: "It's ok", user: rows[0] })
}

export { create, login, getUserById }