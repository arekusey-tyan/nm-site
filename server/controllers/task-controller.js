import { bd } from "../mysql/db.js"

const getTasksFromUser = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE tstatus != 0 ORDER BY id DESC`)
	let count = 0,
		tasks = []
	for (let i = 0, j = 0; i < rows.length; i++) {
		if (rows[i].tispol.split(',').includes(req.params.id)) {
			count++
			tasks[j++] = rows[i]
		}
	}
	res.status(200).send({ message: "It's ok", count, tasks: tasks })
}

const getTasksOutUser = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE tstatus != 0 ORDER BY id DESC`)
	let count = 0,
		tasks = []
	for (let i = 0, j = 0; i < rows.length; i++) {
		if (rows[i].tauthor_id === +req.params.id) {
			count++
			tasks[j++] = rows[i]
		}
	}
	res.status(200).send({ message: "It's ok", count, tasks: tasks })
}

const getTasksDone = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE tstatus = 0 AND tauthor_id = ${req.params.id} ORDER BY id DESC`)
	let count = 0,
		tasks = []
	for (let i = 0, j = 0; i < rows.length; i++) {
		if (rows[i].tauthor_id === +req.params.id) {
			count++
			tasks[j++] = rows[i]
		}
	}
	res.status(200).send({ message: "It's ok", count, tasks: tasks })
}

const getTaskById = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE id = ${req.params.id}`)
	let count = 1
	res.status(200).send({ message: "It's ok", count, tasks: rows[0] })
}

const getTasks = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE tstatus != 0 ORDER BY id DESC`)
	res.status(200).send({ message: "It's ok", count: rows.length, tasks: rows })
}

const getTaskInfo = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM task_stages WHERE task_id = ?`, [req.params.id])
	res.status(200).send({message: "It's ok", count: rows.length, tInfo: rows})
}


export { getTasksFromUser, getTasks, getTasksOutUser, getTasksDone, getTaskById, getTaskInfo }