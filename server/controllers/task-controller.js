import { bd } from "../mysql/db.js"

export let getTasksFromUser = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE tstatus != 0 && tstatus != 2 && tstatus != 3 ORDER BY id DESC`)
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
export let getTasksOutUser = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE tstatus != 6 ORDER BY id DESC`)
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
export let getTasksDone = async (req, res) => {
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
export let getTaskById = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE id = ${req.params.id}`)
	let count = 1
	res.status(200).send({ message: "It's ok", count, tasks: rows[0] })
}
export let getTasks = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM tasks WHERE tstatus != 6 ORDER BY id DESC`)
	res.status(200).send({ message: "It's ok", count: rows.length, tasks: rows })
}
export let getTaskInfo = async (req, res) => {
	let [rows, _] = await bd.execute(`SELECT * FROM task_stages WHERE task_id = ?`, [req.params.id])
	res.status(200).send({message: "It's ok", count: rows.length, tInfo: rows})
}
export let create = async (req, res) => {
	await bd.execute(`INSERT INTO tasks VALUES (NULL, ?, ?, ?, '', '', ?, ?, ?, ?, ?, ?)`, [req.body.ttype, req.body.tispol, req.body.tdate, req.body.topis ?? 'NULL', req.body.tfiles ?? 'NULL', req.body.tsubtasks, req.body.tauthor_id, req.body.tsvas ?? 'NULL', req.body.tstatus])
	let [task, _] = await bd.execute(`SELECT * FROM tasks WHERE tdate = ?`, [req.body.tdate])
	await bd.execute(`INSERT INTO task_stages VALUES (null, '${task[0].id}', '${req.body.tstatus}', 0, '${req.body.tdate}', '${req.body.tispol}', '', 'CreateTask', '${req.body.tispol}', '0')`)
	res.status(200).send({message: 'ok'})
}
export let changeStatusTask = async (req, res) => {
	await bd.execute(`UPDATE tasks SET tstatus = ? WHERE id = ?`, [req.body.nStatus, req.body.id])
	let [task, _] = await bd.execute(`SELECT * FROM tasks WHERE id = ?`, [req.body.id])
	await bd.execute(`INSERT INTO task_stages VALUES (null, '${req.body.id}', '${req.body.nStatus}', 0, '${(new Date()).getTime()}', '${task[0].tispol}', '', 'ChangeStatus', '${task[0].tispol}', '${req.body.uid}')`)
	res.sendStatus(200)
}
export let completeStatus = async (req, res) => {
	await bd.execute(`UPDATE tasks SET tstatus = ?, tstart_date = ? WHERE id = ?`, [req.body.nStatus, (new Date()).getTime(), req.body.id])
	let [task, _] = await bd.execute(`SELECT * FROM tasks WHERE id = ?`, [req.body.id])
	await bd.execute(`INSERT INTO task_stages VALUES (null, ?, ?, ?, ?, ?, ?, ?, '', ?)`, [req.body.id, req.body.nStatus, 4, task[0].tstart_date, task[0].tispol, '1', req.body.comment, req.body.uid])
	res.sendStatus(200)
}