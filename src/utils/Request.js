let getUserById = (id) => {
	let users
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `http://localhost:3000/api/getUserById/${id}`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send()

	users = JSON.parse(xhr.response)
	return users.user
}
let getTasksForUser = (id) => {
	let tasks
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `http://localhost:3000/api/getTasks/${id}/fromMe`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send()
	tasks = JSON.parse(xhr.response)
	return tasks
}
let getTasksOutUser = (id) => {
	let tasks
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `http://localhost:3000/api/getTasks/${id}/outMe`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send()
	tasks = JSON.parse(xhr.response)
	return tasks
}
let getTasksDone = (id) => {
	let tasks
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `http://localhost:3000/api/getTasks/${id}/done`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send()
	tasks = JSON.parse(xhr.response)
	return tasks
}
let getTaskById = (id) => {
	let task
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `http://localhost:3000/api/getTasks/${id}`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send()
	task = JSON.parse(xhr.response)
	return task
}
let getTasks = () => {
	let tasks
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `http://localhost:3000/api/getTasks`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send()
	tasks = JSON.parse(xhr.response)
	return tasks
}
let getPosts = () => {
	let posts
	let xhr = new XMLHttpRequest()
    xhr.open('GET', `http://localhost:3000/api/posts`, false)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send()
    posts = JSON.parse(xhr.response)
    return posts
}
let logIn = (json) => {
	let xhr = new XMLHttpRequest()
    xhr.open('POST', `http://localhost:3000/api/login`, false)
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    xhr.send(json)
    return JSON.parse(xhr.response)
}
let getGroups = () => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'http://localhost:3000/api/getGroups', false)
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send()
	return JSON.parse(xhr.response)
}
let getUserGroup = (user_group_id) => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'http://localhost:3000/api/getGroup/' + user_group_id, false)
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send()
	return JSON.parse(xhr.response)
}
let getUserByIds = (ispList) => {
	let users = [], j = 0
	let xhr = new XMLHttpRequest()
	for(let i = 0; i < ispList.length; i++) {
		xhr.open('GET', `http://localhost:3000/api/getUserById/${ispList[i]}`, false)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.send()
		users[j++] = JSON.parse(xhr.response)
	}
	return users
}
let getTaskInfo = (id) => {
	let taskInfo
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `http://localhost:3000/api/getTaskInfo/${id}`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send()
	return JSON.parse(xhr.response)
}

export { getUserById, getTasksForUser, getTasks, getTasksOutUser, getTasksDone, getTaskById, getPosts, logIn, getGroups, getUserGroup, getUserByIds, getTaskInfo }