import express from 'express'
import {validators} from './services/validators.js'
import {create, getUserById, login} from './controllers/user-controller.js'
import {getPosts} from './controllers/post-controller.js'
import {getTaskById, getTasks, getTasksDone, getTasksFromUser, getTasksOutUser, getTaskInfo} from './controllers/task-controller.js'
import {getGroupById, getUserGroups} from './controllers/group-controller.js'

const app = express()
const PORT = 25004

app.use(express.json())

app.post('/api/signup', validators.signUpVal, create)
app.post('/api/login', validators.logInVal, login)

app.get('/api/getUserById/:id', getUserById)
app.get('/api/posts', getPosts)
app.get('/api/getTasks/:id/fromMe', getTasksFromUser)
app.get('/api/getTasks', getTasks)
app.get('/api/getTasks/:id/outMe', getTasksOutUser)
app.get('/api/getTasks/:id/done', getTasksDone)
app.get('/api/getTasks/:id', getTaskById)
app.get('/api/getGroups', getUserGroups)
app.get('/api/getGroup/:id', getGroupById)
app.get('/api/getTaskInfo/:id', getTaskInfo)

app.listen(PORT, () => console.log('Server start on port: ' + PORT))