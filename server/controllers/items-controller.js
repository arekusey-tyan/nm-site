import {bd} from '../mysql/db.js'

let getItems = async (req, res) => {
	let [items, _] = await bd.execute('SELECT * FROM items')
	return res.status(200).json({items})
}
let addItemToDB = async (req, res) => {
	// let [items, ] = await bd.execute('SELECT * FROM items WHERE item_id = ?', [req.params.id])
	// if (items[0]) {
	// 	res.send({
	// 		status: 500,
	// 		message: 'Предмет с таким ID же существует.',
	// 		error: true
	// 	})
	// 	if (conf) {
	// 		await bd.execute('UPDATE items SET name = ?, item_id = ?, reg_name = ?, tag = ?, texture = ?, creative_tabs = ?, title = ?, description = ?', [
	//
	// 		])
	// 	} else {
	// 		res.status(500).send({error: true, message: "Предмет с таким ID же существует"})
	// 	}
	// } else {
		await bd.execute(`INSERT INTO items VALUES (null, '${req.body.name}', '${req.body.reg_name}', '${req.body.tag}', ${req.body.ct ? `${req.body.ct}` : 0}, ${req.body.texture ? `${req.body.texture}` : null}, '${req.body.desc}', '${req.body.version}', null, null, null, 0, 0)`)
		res.send({msg: "ok"})
	// }
}
let getItemById = async (req, res) => {
	let [items, _] = await bd.execute('SELECT * FROM items WHERE id = ?', [req.params.id])
	return res.status(200).json({item: items[0]})
}
let saveRecipeInDB = async (req, res) => {
	let [items, _] = await bd.execute('SELECT * FROM recipes WHERE output_i = ? && rtype = ? ', [req.body.output, req.body.rtype])
	if (items.length > 0) {
		await bd.execute(`UPDATE recipes SET rtype = '${req.body.rtype}', rname = '${req.body.rname}', rnameeng = '${req.body.rnameEng}', ingredients = '${req.body.inputs}' WHERE output_i = ? && rtype = ?`, [req.body.output, req.body.rtype])
	} else {
		await bd.execute(`INSERT INTO recipes VALUES (null, '${req.body.rtype}', '${req.body.rname}', '${req.body.rnameEng}', '${req.body.inputs}', '${req.body.output}');`)
	}
	res.status(200).send({message: 'ok'})
}
let getRecipe = async (req, res) => {
	let [items, _] = await bd.execute('SELECT * FROM recipes WHERE output_i = ? && rtype = ? ', [req.body.output, req.body.rtype])
	if (items.length > 0) {
		res.status(200).send({message: "ok", item: items[0]})
	} else {
		res.status(200).send({message: "no", item: []})
	}
}
let getCrTb = async (req, res) => {
	let [i, _] = await bd.execute('SELECT * FROM `cttabs` WHERE 1')
	res.status(200).send({tabs: i})
}

export {
	getItems,
	addItemToDB,
	getItemById,
	saveRecipeInDB,
	getRecipe,
	getCrTb
}