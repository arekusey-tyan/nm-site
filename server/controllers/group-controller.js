import {bd} from '../mysql/db.js'

let getUserGroups = async (req, res) => {
	let [groups, _] = await bd.execute('SELECT * FROM user_group')
	return res.status(200).json({groups})
}

let getGroupById = async (req, res) => {
	let [group, _] = await bd.execute('SELECT * FROM user_group WHERE gr_id = ?', [req.params.id])
	return res.status(200).json({group})
}

export {getUserGroups, getGroupById}