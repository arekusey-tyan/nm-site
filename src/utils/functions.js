import React from 'react'

export function stringGen(len) {
	let str = "abcdefghijklmnopqrstuvwxyz0123456789",
		genStr = ""
	for (let i = 0; i < len; i++) genStr += str[Math.floor(Math.random() * str.length)]
	return genStr
}
export function plural(n, one, two, many) {
	if (n % 10 === 1  && n % 100 !== 11) {
		return one
	} else if (n % 10 >= 2 && n % 10 <= 4 && (n & 100 < 10 || n % 100 >= 20)) {
		return two
	} else {
		return many
	}
}
export function createElement(type, config, children) {
	let el = React.createElement(type, config, children)
	return el
}
export function create_html_element(el, options, child, parent) {
	let var_el = document.createElement(el);
	if (options !== null) {
		for (let i = 0, attrs = Object.keys(options); i < attrs.length; i++) {
			let var_el_attr = document.createAttribute(attrs[i])
			var_el_attr.value = Object.values(options)[i]
			var_el.setAttributeNode(var_el_attr)
		}
	}
	if (child) {
		var_el.innerHTML = child
	}
	if (parent != null) {
		parent.appendChild(var_el)
		return var_el
	} else {
		return var_el
	}
}
export function loadFont(domain, name) {
	let l = document.createElement('link')
	l.setAttribute('data-vdomignore', 'true')
	l.rel = 'preload'
	l.as = 'font'
	l.href = `/asset/resource/fonts/${domain}/${name}.woff2`
	l.type = 'font/woff2'
	l.crossOrigin = 'anonymous'
	document.head.appendChild(l)
}
export let loadStyle = (domain, name) => {
	let l = document.createElement('link')
	l.href = `/asset/resource/css/${domain}/${name}.css`
	l.type = 'text/css'
	l.rel = 'stylesheet'
	document.head.appendChild(l)
}
export let loadScript = (domain, name) => {
	let l = document.createElement('script')
	l.src = `/asset/resource/js/${domain}/${name}.js`
	l.type = 'text/javascript'
	document.body.appendChild(l)
}