import express from 'express'
import {validators} from './services/validators.js'
import {getPosts} from './controllers/post-controller.js'
import * as t from './controllers/task-controller.js'
import {getGroupById, getUserGroups} from './controllers/group-controller.js'
import {getItems, addItemToDB, getItemById, saveRecipeInDB, getRecipe, getCrTb} from './controllers/items-controller.js'
import multer from 'multer'
import * as u from './controllers/user-controller.js'
import {getFilesOnPath} from './controllers/file-controller.js'
import {getServersInfo} from './controllers/server-controller.js'

const app = express()
const PORT = 25004
const storages = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "/var/www/uploads/images")
	},
	filename: (req, file, cb) => {
		console.log(file)
		cb(null, `${file.originalname}`)
	}
})
const upload = multer({storage: storages})

app.use(express.json({limit: '40mb'}))

app.post('/api/login', validators.logInVal, u.login)
app.post('/api/reguser', u.getRegister)
app.get('/api/logout', (req, res) => {
	res.status(200).send({message: "logouted"})
})
app.get('/api/getUserById/:id', u.getUserById)
app.get('/api/posts', getPosts)
app.get('/api/getTasks/:id/fromMe', t.getTasksFromUser)
app.get('/api/getTasks', t.getTasks)
app.get('/api/getTasks/:id/outMe', t.getTasksOutUser)
app.get('/api/getTasks/:id/done', t.getTasksDone)
app.get('/api/getTasks/:id', t.getTaskById)
app.get('/api/getGroups', getUserGroups)
app.get('/api/getGroup/:id', getGroupById)
app.get('/api/getTaskInfo/:id', t.getTaskInfo)
app.get('/api/items', getItems)
app.post('/api/upload', upload.single('texture'), async (req, res) => {
	console.log(req.file)
	res.send(req.file)
})
app.post('/api/items/add', addItemToDB)
app.get('/api/items/:id', getItemById)
app.post('/api/recipes/save', saveRecipeInDB)
app.post('/api/recipes/get', getRecipe)
app.get('/api/users/:id/status', u.getUserStatus)
app.post('/api/users/:id/group/set/:ugid/:gid', u.setUserGroupApi)
app.get('/api/users/count', u.getUserCount)
app.get('/api/users/servers/count', u.getServerUserCount)
app.get('/api/server/:sid/curator', u.getServerCourator)
app.get('/api/server/:sid/users', u.getServerUsers)
app.get('/api/ct', getCrTb)
app.post('/api/files/gets', getFilesOnPath)
app.get('/api/servers', getServersInfo)
app.get('/api/users', u.getUsersInfo)
app.post('/api/tasks/create', t.create)
app.post('/api/tasks/changeStatus', t.changeStatusTask)
app.post('/api/tasks/completeStatus', t.completeStatus)

app.listen(PORT, () => console.log('Server start on port: ' + PORT))