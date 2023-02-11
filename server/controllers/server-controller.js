import {bd} from '../mysql/db.js'

export let getServersInfo = async (req, res) => {
	let [servers, _] = await bd.execute('SELECT * FROM servers');
	res.status(200).send({servers: servers})
}