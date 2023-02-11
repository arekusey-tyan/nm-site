export function changeStatus(e, id = 0) {
	console.log(e)
	if (e === 't') {
		let xhr = new XMLHttpRequest()
		xhr.open('POST', 'https://www.workspace-loliland.ru/api/tasks/changeStatus', false)
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
		xhr.send(JSON.stringify({id, nStatus: 1, uid: window.localStorage.getItem('user_id')}))
		if (xhr.status === 200) {
			window.location.reload()
		}
	} else {
		let el = e.currentTarget,
			id = +el.attributes['data-id'].value,
			nStatus = +el.attributes['data-ns'].value
		let xhr = new XMLHttpRequest()
		xhr.open('POST', 'https://www.workspace-loliland.ru/api/tasks/changeStatus', false)
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
		xhr.send(JSON.stringify({id, nStatus, uid: window.localStorage.getItem('user_id')}))
		if (xhr.status === 200) {
			window.location.reload()
		}
	}
}
export function completeStatus(id, comment) {
	let xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://www.workspace-loliland.ru/api/tasks/completeStatus', false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send(JSON.stringify({id, nStatus: 2, comment, uid: window.localStorage.getItem('user_id')}))
	if (xhr.status === 200) {
		window.location.reload()
	}
}
export function notCompleteStatus(id, comment) {
	let xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://www.workspace-loliland.ru/api/tasks/completeStatus', false)
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.send(JSON.stringify({id, nStatus: 3, comment, uid: window.localStorage.getItem('user_id')}))
	if (xhr.status === 200) {
		window.location.reload()
	}
}