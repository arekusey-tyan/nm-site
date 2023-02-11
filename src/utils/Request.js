import React from "react";

let getUserById = (id) => {
	let users
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/getUserById/${id}`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()

	users = JSON.parse(xhr.response)
	return users.user
}
let getTasksForUser = (id) => {
	let tasks
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/getTasks/${id}/fromMe`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	tasks = JSON.parse(xhr.response)
	return tasks
}
let getTasksOutUser = (id) => {
	let tasks
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/getTasks/${id}/outMe`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	tasks = JSON.parse(xhr.response)
	return tasks
}
let getTasksDone = (id) => {
	let tasks
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/getTasks/${id}/done`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	tasks = JSON.parse(xhr.response)
	return tasks
}
let getTaskById = (id) => {
	let task
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/getTasks/${id}`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	task = JSON.parse(xhr.response)
	return task
}
let getTasks = () => {
	let tasks
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/getTasks`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	tasks = JSON.parse(xhr.response)
	return tasks
}
let getPosts = () => {
	let posts
	let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://www.workspace-loliland.ru/api/posts`, false)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send()
    posts = JSON.parse(xhr.response)
    return posts
}
let logIn = (json) => {
	let xhr = new XMLHttpRequest()
    xhr.open('POST', `https://www.workspace-loliland.ru/api/login`, false)
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.send(json)
    return JSON.parse(xhr.response)
}
let getGroups = () => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://www.workspace-loliland.ru/api/getGroups', false)
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response)
}
let getUserGroup = (user_group_id) => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://www.workspace-loliland.ru/api/getGroup/' + user_group_id, false)
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response)
}
let getUserByIds = (ispList) => {
	let users = [], j = 0
	let xhr = new XMLHttpRequest()
	for(let i = 0; i < ispList.length; i++) {
		xhr.open('GET', `https://www.workspace-loliland.ru/api/getUserById/${ispList[i]}`, false)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
		xhr.send()
		users[j++] = JSON.parse(xhr.response)
	}
	return users
}
let getTaskInfo = (id) => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/getTaskInfo/${id}`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response)
}
let getItems = () => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://www.workspace-loliland.ru/api/items', false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response)
}
let getItemById = (id) => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://www.workspace-loliland.ru/api/items/' + id, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response)
}
let setItemInDB = (name, reg_name, tag, texture, desc, creativeTab, version = '1.12.2') => {
	let xhr = new XMLHttpRequest(),
		json = JSON.stringify({name: name, reg_name: reg_name, tag: tag, texture: texture, desc: desc.replace(/\n/g, '|'), version: version, ct: creativeTab})
	xhr.open('POST', `https://www.workspace-loliland.ru/api/items/add/`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send(json)
	return JSON.parse(xhr.response)
}
let saveRecipeInDB = (inputs, output, rtype, rname, rnameEng) => {
	let xhr = new XMLHttpRequest(),
		json = JSON.stringify({inputs, output, rtype, rname, rnameEng})
	xhr.open('POST', `https://www.workspace-loliland.ru/api/recipes/save`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send(json)
	return JSON.parse(xhr.response)
}
let getRecipeOnOutput = (output, rtype) => {
	let xhr = new XMLHttpRequest(),
		json = JSON.stringify({output, rtype})
	xhr.open('POST', `https://www.workspace-loliland.ru/api/recipes/get`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send(json)
	let res = JSON.parse(xhr.response)
	if (res.message === 'no') return false
	else return res.item
}
let regUser = (json) => {
	let xhr = new XMLHttpRequest()
	xhr.open('POST', `https://workspace-loliland.ru/api/reguser`, false)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send(json)
	let res = JSON.parse(xhr.response)
	return res
}
let getUserStatus = (id) => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/users/${id}/status`, false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response)
}
let setUserGroup = (user, gId, reason) => {
	let xhr = new XMLHttpRequest(),
		json = JSON.stringify({r: reason})
	xhr.open('POST', `https://www.workspace-loliland.ru/api/users/${user.user_id}/group/set/${user.user_group}/${gId}`, false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send(json)
	return JSON.parse(xhr.response)
}
let getUserCount = () => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/users/count`, false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response).count
}
let getServerUsers = () => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/users/servers/count`, false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response).users
}
let getCurator = (id) => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/server/${id}/curator`, false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response).user
}
let getUsersFromServer = (id) => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', `https://www.workspace-loliland.ru/api/server/${id}/users`, false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send()
	return JSON.parse(xhr.response).users
}
export let getCreativeTabs = () => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://www.workspace-loliland.ru/api/ct', false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send()
	return JSON.parse(xhr.response)
}
let getServers = () => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://www.workspace-loliland.ru/api/servers', false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send()
	return JSON.parse(xhr.response).servers
}
let getUsers = () => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://www.workspace-loliland.ru/api/users', false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send()
	return JSON.parse(xhr.response).users
}
let saveTaskBD = (ttype, tispol, tdate, tstart_date, tlast_date, topis, tfiles, tsubtasks, tauthor_id, tsvaz, tstatus, uid) => {
	let xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://www.workspace-loliland.ru/api/tasks/create', false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send(JSON.stringify({ttype, tispol, tdate, tstart_date, tlast_date, topis, tfiles, tsubtasks, tauthor_id, tsvaz, tstatus, uid}))
	return JSON.parse(xhr.response)
}

export let user_info = getUserById(window.localStorage.getItem('user_id'))
export let getGroupsList = getGroups.call()
export let tasks = getTasksForUser(user_info.user_id)
export let userCount = getUserCount()
export let user_count_from_servers = getServerUsers()
export let servers = getServers()
export let users = getUsers()

export let getUserImg = (id) => {
	let u = []
	users.forEach((el, i) => {
		u[el.user_id] = el
	})
	console.log([u, id])
	return <img loading={'lazy'} src={u[id].foto === null ? 'https://api.loliland.ru/avatar/' + u[id].name : '/asset/resource/users/image/' + u[id].foto} className={'person-DefaultPhoto__image'} alt={''} />
}

export {
	getUserById,
	getTasksForUser,
	getTasks,
	getTasksOutUser,
	getTasksDone,
	getTaskById,
	getPosts,
	logIn,
	getGroups,
	getUserGroup,
	getUserByIds,
	getTaskInfo,
	getItems,
	getItemById,

	setItemInDB,
	saveRecipeInDB,
	getRecipeOnOutput,
	regUser,
	getUserStatus,
	setUserGroup,
	getCurator,
	getUsersFromServer,
	saveTaskBD
}