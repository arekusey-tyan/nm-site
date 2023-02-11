import fs from 'fs'

let getUpload = async (req, res) => {
	console.log(req.data)
}
let getFilesOnPath = async (req, res) => {
	let path = req.body.path,
		files
	path = `/var/www/nanomagic/public/${path.substr(2, path.length - 2)}`
	if (isFolder(path)) {
		files = fs.readdirSync(path).map(item => {
			const isDir = isFolder(path + "/" + item)
			let size = 0
			if (!isDir) {
				size = fs.statSync(path + "/" + item);
			}
			return {
				name: item,
				dir: isDir,
				size: size.size ?? 0
			}
		})
	}
	res.status(200).json({
		path,
		files,
		result: !0
	})
}

function isFolder(path) {
	return fs.lstatSync(path).isDirectory() && fs.existsSync(path)
}

export {
	getUpload,
	getFilesOnPath
}