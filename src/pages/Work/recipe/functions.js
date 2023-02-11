import React from 'react'
import ReactDOM from 'react-dom/client'
import {getItemById, getItems, getRecipeOnOutput, getCreativeTabs, saveRecipeInDB} from '../../../utils/Request.js'
import {ItemIngredient} from './ItemIngredient.js'
import {ItemIngredientO} from './ItemIngredientOutput.js'

export let inputs = [], output = [null, 1], name = '', nameEng = '', removed, status, mode = window.localStorage.getItem('mode')
export let version = window.localStorage.getItem('v') ?? '1.12.2'
let id, bdItems = getItems().items,
	ct, type,
	items = [],
	bdct = getCreativeTabs().tabs

export function setMode(mod) {
	window.localStorage.setItem('mode', mod)
}
export function changeVersion(e) {
	let el = e.currentTarget.attributes['data-version'].value
	window.localStorage.setItem('v', el)
	window.location.reload()
}
export function allRemoveRecipe() {
	if (removed) removed = !removed
	else removed = !0
	showResult()
}
export function handlerMouseEvent(e) {
	e.currentTarget.nextElementSibling.classList.remove('hidden')
	e.currentTarget.nextElementSibling.style.display = 'block'
	e.currentTarget.nextElementSibling.style.top = e.clientY + 10 + 'px'
	e.currentTarget.nextElementSibling.style.left = e.clientX + 10 + 'px'
}
export function handlerMouseOut(e) {
	e.currentTarget.nextElementSibling.classList.add('hidden')
	e.currentTarget.nextElementSibling.style.display = 'none'
	e.currentTarget.nextElementSibling.style.top = e.clientY + 10 + 'px'
	e.currentTarget.nextElementSibling.style.left = e.clientX + 10 + 'px'
}
export function handlerMouseMove(e) {
	e.currentTarget.nextElementSibling.style.top = e.clientY + 10 + 'px'
	e.currentTarget.nextElementSibling.style.left = e.clientX + 10 + 'px'
}
export function showCraft() {
	document.querySelector('.craft').style.display = 'block'
	document.querySelector('.result').style.display = 'none'
}
export function showResult9x9() {
	status = !0
	document.querySelector('.craft').style.display = 'none'
	document.querySelector('.result').style.display = 'block'
	let res = document.querySelector('.result').firstChild,
		elems = [],
		str = `${removed ? "ExtremeCrafting.remove(" + output[0]?.tag + ");|" : ''}ExtremeCrafting.addShaped("${name ?? 'undefined'}", ${output[0] ? output[0].tag : 'null'}, [|\t[${inputs[0] ? inputs[0].tag : 'null'}, ${inputs[1] ? inputs[1].tag : 'null'}, ${inputs[2] ? inputs[2].tag : 'null'}, ${inputs[3] ? inputs[3].tag : 'null'}, ${inputs[4] ? inputs[4].tag : 'null'}, ${inputs[5] ? inputs[5].tag : 'null'}, ${inputs[6] ? inputs[6].tag : 'null'}, ${inputs[7] ? inputs[7].tag : 'null'}, ${inputs[8] ? inputs[8].tag : 'null'}],|\t[${inputs[9 * 1 + 0] ? inputs[9 * 1 + 0].tag : 'null'}, ${inputs[9 * 1 + 1] ? inputs[9 * 1 + 1].tag : 'null'}, ${inputs[9 * 1 + 2] ? inputs[9 * 1 + 2].tag : 'null'}, ${inputs[9 * 1 + 3] ? inputs[9 * 1 + 3].tag : 'null'}, ${inputs[9 * 1 + 4] ? inputs[9 * 1 + 4].tag : 'null'}, ${inputs[9 * 1 + 5] ? inputs[9 * 1 + 5].tag : 'null'}, ${inputs[9 * 1 + 6] ? inputs[9 * 1 + 6].tag : 'null'}, ${inputs[9 * 1 + 7] ? inputs[9 * 1 + 7].tag : 'null'}, ${inputs[9 * 1 + 8] ? inputs[9 * 1 + 8].tag : 'null'}],|\t[${inputs[9 * 2 + 0] ? inputs[9 * 2 + 0].tag : 'null'}, ${inputs[9 * 2 + 1] ? inputs[9 * 2 + 1].tag : 'null'}, ${inputs[9 * 2 + 2] ? inputs[9 * 2 + 2].tag : 'null'}, ${inputs[9 * 2 + 3] ? inputs[9 * 2 + 3].tag : 'null'}, ${inputs[9 * 2 + 4] ? inputs[9 * 2 + 4].tag : 'null'}, ${inputs[9 * 2 + 5] ? inputs[9 * 2 + 5].tag : 'null'}, ${inputs[9 * 2 + 6] ? inputs[9 * 2 + 6].tag : 'null'}, ${inputs[9 * 2 + 7] ? inputs[9 * 2 + 7].tag : 'null'}, ${inputs[9 * 2 + 8] ? inputs[9 * 2 + 8].tag : 'null'}],|\t[${inputs[9 * 3 + 0] ? inputs[9 * 3 + 0].tag : 'null'}, ${inputs[9 * 3 + 1] ? inputs[9 * 3 + 1].tag : 'null'}, ${inputs[9 * 3 + 2] ? inputs[9 * 3 + 2].tag : 'null'}, ${inputs[9 * 3 + 3] ? inputs[9 * 3 + 3].tag : 'null'}, ${inputs[9 * 3 + 4] ? inputs[9 * 3 + 4].tag : 'null'}, ${inputs[9 * 3 + 5] ? inputs[9 * 3 + 5].tag : 'null'}, ${inputs[9 * 3 + 6] ? inputs[9 * 3 + 6].tag : 'null'}, ${inputs[9 * 3 + 7] ? inputs[9 * 3 + 7].tag : 'null'}, ${inputs[9 * 3 + 8] ? inputs[9 * 3 + 8].tag : 'null'}],|\t[${inputs[9 * 4 + 0] ? inputs[9 * 4 + 0].tag : 'null'}, ${inputs[9 * 4 + 1] ? inputs[9 * 4 + 1].tag : 'null'}, ${inputs[9 * 4 + 2] ? inputs[9 * 4 + 2].tag : 'null'}, ${inputs[9 * 4 + 3] ? inputs[9 * 4 + 3].tag : 'null'}, ${inputs[9 * 4 + 4] ? inputs[9 * 4 + 4].tag : 'null'}, ${inputs[9 * 4 + 5] ? inputs[9 * 4 + 5].tag : 'null'}, ${inputs[9 * 4 + 6] ? inputs[9 * 4 + 6].tag : 'null'}, ${inputs[9 * 4 + 7] ? inputs[9 * 4 + 7].tag : 'null'}, ${inputs[9 * 4 + 8] ? inputs[9 * 4 + 8].tag : 'null'}],|\t[${inputs[9 * 5 + 0] ? inputs[9 * 5 + 0].tag : 'null'}, ${inputs[9 * 5 + 1] ? inputs[9 * 5 + 1].tag : 'null'}, ${inputs[9 * 5 + 2] ? inputs[9 * 5 + 2].tag : 'null'}, ${inputs[9 * 5 + 3] ? inputs[9 * 5 + 3].tag : 'null'}, ${inputs[9 * 5 + 4] ? inputs[9 * 5 + 4].tag : 'null'}, ${inputs[9 * 5 + 5] ? inputs[9 * 5 + 5].tag : 'null'}, ${inputs[9 * 5 + 6] ? inputs[9 * 5 + 6].tag : 'null'}, ${inputs[9 * 5 + 7] ? inputs[9 * 5 + 7].tag : 'null'}, ${inputs[9 * 5 + 8] ? inputs[9 * 5 + 8].tag : 'null'}],|\t[${inputs[9 * 6 + 0] ? inputs[9 * 6 + 0].tag : 'null'}, ${inputs[9 * 6 + 1] ? inputs[9 * 6 + 1].tag : 'null'}, ${inputs[9 * 6 + 2] ? inputs[9 * 6 + 2].tag : 'null'}, ${inputs[9 * 6 + 3] ? inputs[9 * 6 + 3].tag : 'null'}, ${inputs[9 * 6 + 4] ? inputs[9 * 6 + 4].tag : 'null'}, ${inputs[9 * 6 + 5] ? inputs[9 * 6 + 5].tag : 'null'}, ${inputs[9 * 6 + 6] ? inputs[9 * 6 + 6].tag : 'null'}, ${inputs[9 * 6 + 7] ? inputs[9 * 6 + 7].tag : 'null'}, ${inputs[9 * 6 + 8] ? inputs[9 * 6 + 8].tag : 'null'}],|\t[${inputs[9 * 7 + 0] ? inputs[9 * 7 + 0].tag : 'null'}, ${inputs[9 * 7 + 1] ? inputs[9 * 7 + 1].tag : 'null'}, ${inputs[9 * 7 + 2] ? inputs[9 * 7 + 2].tag : 'null'}, ${inputs[9 * 7 + 3] ? inputs[9 * 7 + 3].tag : 'null'}, ${inputs[9 * 7 + 4] ? inputs[9 * 7 + 4].tag : 'null'}, ${inputs[9 * 7 + 5] ? inputs[9 * 7 + 5].tag : 'null'}, ${inputs[9 * 7 + 6] ? inputs[9 * 7 + 6].tag : 'null'}, ${inputs[9 * 7 + 7] ? inputs[9 * 7 + 7].tag : 'null'}, ${inputs[9 * 7 + 8] ? inputs[9 * 7 + 8].tag : 'null'}],|\t[${inputs[9 * 8 + 0] ? inputs[9 * 8 + 0].tag : 'null'}, ${inputs[9 * 8 + 1] ? inputs[9 * 8 + 1].tag : 'null'}, ${inputs[9 * 8 + 2] ? inputs[9 * 8 + 2].tag : 'null'}, ${inputs[9 * 8 + 3] ? inputs[9 * 8 + 3].tag : 'null'}, ${inputs[9 * 8 + 4] ? inputs[9 * 8 + 4].tag : 'null'}, ${inputs[9 * 8 + 5] ? inputs[9 * 8 + 5].tag : 'null'}, ${inputs[9 * 8 + 6] ? inputs[9 * 8 + 6].tag : 'null'}, ${inputs[9 * 8 + 7] ? inputs[9 * 8 + 7].tag : 'null'}, ${inputs[9 * 8 + 8] ? inputs[9 * 8 + 8].tag : 'null'}]|]);`,
		els = []
	str = str.split('|')
	for (let j = 0, k = 0; k < str.length; k++) {
		els[j] = str[k]
		els[j + 1] = React.createElement('br')
		j += 2
	}
	str = els
	elems[0] = <span style={{color: 'green'}}>Пожалуйста, убедитесь что у вас есть данная строка в начале файла: <pre>import mods.avaritia.ExtremeCrafting;</pre></span>
	elems[1] = <pre style={{display: 'block', overflowX: 'auto', padding: '0.5em', background: 'rgb(240, 240, 240)', color: 'rgb(68, 68, 68)'}}>
		<code style={{whiteSpace: 'pre'}}>
			{str}
		</code>
	</pre>
	let root = ReactDOM.createRoot(res)
	root.render(elems)
}
export function setInputs(i) {
	inputs = (new Array(i))
	for (let i = 0; i < inputs.length; i++)
		inputs[i] = null
}
export function showPopup(e) {
	id = e.currentTarget.attributes['data-key'].value
	ct = window.localStorage.getItem('ct') ?? '1'
	showCraft()
	setType('input')
	bdItems.forEach(el => {
		if ((el.creative_tab) === ct || (el.creative_tab) === '0') items.push(el)
	})
	renderElem(items)
	items = []
}
export function showPopupO(e) {
	id = e.currentTarget.attributes['data-key'].value
	ct = window.localStorage.getItem('ct') ?? '1'
	showCraft()
	setType('output')
	bdItems.forEach(el => {
		if ((el.creative_tab) === ct || (el.creative_tab) === '0') items.push(el)
	})
	renderElem(items)
	items = []
}
export function setName(e) {
	name = e
}
export function setNameEng(e) {
	nameEng = translate(e)
}
export function showResult3x3() {
	status = !0
	document.querySelector('.craft').style.display = 'none'
	document.querySelector('.result').style.display = 'block'
	let res = document.querySelector('.result').firstChild
	let elems = []
	let str = `// ${name === null && name === void 0 && name === '' ? 'Undefined Recipe (Неизвестный рецепт)' : name}|${removed ? "recipes.remove(" + output[0]?.tag + ");|" : ''}recipes.addShaped("${nameEng ?? 'undefined'}", ${output[0] ? output[0].tag : 'null'}, [|\t[${inputs[0] ? inputs[0].tag : 'null'}, ${inputs[1] ? inputs[1].tag : 'null'}, ${inputs[2] ? inputs[2].tag : 'null'}],|\t[${inputs[3] ? inputs[3].tag : 'null'}, ${inputs[4] ? inputs[4].tag : 'null'}, ${inputs[5] ? inputs[5].tag : 'null'}],|\t[${inputs[6] ? inputs[6].tag : 'null'}, ${inputs[7] ? inputs[7].tag : 'null'}, ${inputs[8] ? inputs[8].tag : 'null'}]|]);`,
		els = []
	str = str.split('|')
	for (let j = 0, k = 0; k < str.length; k++) {
		els[j] = str[k]
		els[j + 1] = React.createElement('br')
		j += 2
	}
	str = els
	elems[0] = <pre style={{display: 'block', overflowX: 'auto', padding: '0.5em', background: 'rgb(240, 240, 240)', color: 'rgb(68, 68, 68)'}}>
		<code style={{whiteSpace: 'pre'}}>
			{str}
		</code>
	</pre>
	let root = ReactDOM.createRoot(res)
	root.render(elems)
}
export function clearContent() {
	setInputs(inputs.length)
	output = [null, 1]
	name = ''
	nameEng = ''
	ItemIngredientO()
	ItemIngredient()
	showResult()
}
export function showResult3x3less() {
	status = !0
	document.querySelector('.craft').style.display = 'none'
	document.querySelector('.result').style.display = 'block'
	let res = document.querySelector('.result').firstChild
	let elems = []
	let str = `// ${name === null && name === void 0 && name === '' ? 'Undefined Recipe (Неизвестный рецепт)' : name}|${removed ? "recipes.remove(" + output[0]?.tag + ");|" : ''}recipes.addShapeless("${nameEng ?? 'undefined'}", ${output[0] ? output[0].tag : 'null'}, [|\t[${inputs[0] ? inputs[0].tag : 'null'}, ${inputs[1] ? inputs[1].tag : 'null'}, ${inputs[2] ? inputs[2].tag : 'null'}],|\t[${inputs[3] ? inputs[3].tag : 'null'}, ${inputs[4] ? inputs[4].tag : 'null'}, ${inputs[5] ? inputs[5].tag : 'null'}],|\t[${inputs[6] ? inputs[6].tag : 'null'}, ${inputs[7] ? inputs[7].tag : 'null'}, ${inputs[8] ? inputs[8].tag : 'null'}]|]);`,
		els = []
	str = str.split('|')
	for (let j = 0, k = 0; k < str.length; k++) {
		els[j] = str[k]
		els[j + 1] = React.createElement('br')
		j += 2
	}
	str = els
	elems[0] = <pre style={{display: 'block', overflowX: 'auto', padding: '0.5em', background: 'rgb(240, 240, 240)', color: 'rgb(68, 68, 68)'}}>
		<code style={{whiteSpace: 'pre'}}>
			{str}
		</code>
	</pre>
	let root = ReactDOM.createRoot(res)
	root.render(elems)
}
export function showPopupN() {
	let el = document.querySelector('.rname'),
		btn = document.querySelector('.rnamebtn')
	el.style.display = 'block'
	btn.style.display = 'block'
}
export function searchItem(e) {
	e.preventDefault()
	let val = e.currentTarget.value,
		newItems = []
	bdItems.forEach(el => {
		if ((el.name).toLowerCase().includes(val.toLowerCase())) newItems.push(el)
	})
	if (val.length === 0) {
		newItems = []
		bdItems.forEach(el => {
			if ((el.creative_tab) === ct || (el.creative_tab) === '0') newItems.push(el)
		})
	}
	renderElem(newItems)
}
export function descriptionSplit(desc) {
	let e = []
	desc = desc?.split('|')
	if (desc === void 0 || desc === undefined) return 'Неправильно указано описание предмета'
	if (desc instanceof Array && desc.length > 1) {
		for (let j = 0, k = 0; k < desc.length; k++) {
			e[j] = desc[k]
			e[j + 1] = React.createElement('br')
			j += 2
		}
	}
	desc = e ?? 'Неправильно указано описание предмета'
	return desc;
}
export function submitN(e) {
	e.preventDefault()
	let el = document.querySelector('.rname'),
		btn = document.querySelector('.rnamebtn')
	setName(el.value)
	setNameEng(el.value)
	el.value = ''
	el.style.display = 'none'
	btn.style.display = 'none'
}
export function renderTabs() {
	let elems = []
	for (let i = 0; i < bdct.length; i++) {
		elems[i] = <div key={i} data-key={i} className="tab" style={{width: '50px', height: '50px', backgroundColor: 'lightgray', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', margin: '0 1px'}} onClick={renderTab}>
			<img src={'https://www.workspace-loliland.ru:24000/images/ct/' + (bdct[i].img !== '' && bdct[i].img !== undefined && bdct[i].img !== null ? bdct[i].img : '../null/null.png')} alt={''} style={{width: '40px', padding: '5px'}} onMouseEnter={handlerMouseEvent} onMouseMove={handlerMouseMove} onMouseOut={handlerMouseOut} />
			<div className={'mc-tooltip hidden'} style={{display: 'none', top: 0, left: 0}}>
				<div className={'mc-tooltip-title'} key={'material'}>{bdct[i].name}</div>
				<div className={'mc-tooltip-description'}>{bdct[i]?.desc ?? "Minecraft"}</div>
			</div>
		</div>
	}
	return elems
}
export function saveRecipe(el) {
	let i, inputString, outputString, rtype = el.currentTarget.attributes['data-type'].value
	i = (new Array(inputs.length))
	for (let j = 0; j < inputs.length; j++) {
		i[j] = JSON.stringify(inputs[j])
	}
	inputString = i.join("|")
	outputString = JSON.stringify(output)
	if (outputString !== null && outputString !== '' && outputString !== 'null')
		saveRecipeInDB(inputString, outputString, rtype, name, nameEng)
	clearContent()
}
export function translate(word) {
	let answer = '';
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',

		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
	for (var i = 0; i < word.length; ++i) {
		if (converter[word[i]] === undefined) {
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
	return answer;
}
export function showResultFurnace() {
	status = !0
	document.querySelector('.craft').style.display = 'none'
	document.querySelector('.result').style.display = 'block'
	let res = document.querySelector('.result').firstChild
	let elems = []
	let str = `// ${name === null && name === void 0 && name === '' ? 'Undefined Recipe (Неизвестный рецепт)' : name}|${removed ? "furnace.remove(" + output[0]?.tag + ");|" : ''}furnace.addRecipe(${output[0] ? output[0].tag : 'null'}, ${inputs[0] ? inputs[0].tag : 'null'});`,
		els = []
	str = str.split('|')
	for (let j = 0, k = 0; k < str.length; k++) {
		els[j] = str[k]
		els[j + 1] = React.createElement('br')
		j += 2
	}
	str = els
	elems[0] = <pre style={{display: 'block', overflowX: 'auto', padding: '0.5em', background: 'rgb(240, 240, 240)', color: 'rgb(68, 68, 68)'}}>
		<code style={{whiteSpace: 'pre'}}>
			{str}
		</code>
	</pre>
	renderE(res, elems)
}

function renderTab(e) {
	let id = e.currentTarget.attributes['data-key'].value, newItems = []
	bdItems.forEach(el => {
		if ((el.creative_tab) === `${+id + 1}` || (el.creative_tab) === '0') newItems.push(el)
	})
	window.localStorage.setItem('ct', `${+id + 1}`)
	renderElem(newItems)
	newItems = []
}
function addRecipeIngr(e) {
	let id = +e.currentTarget.attributes['slot'].value,
		item_id = +e.currentTarget.attributes['itemID'].value
	inputs[id] = getItemById(item_id).item
	ItemIngredient()
	document.querySelector('.ingredients').innerHTML = ""
	document.querySelector('.craft').style.display = 'none'
}
function addRecipeOutput(e) {
	let item_id = +e.currentTarget.attributes['itemID'].value,
		dbItem
	output[0] = getItemById(item_id).item
	dbItem = getRecipeOnOutput(output[0], 'avaritia_9x9_shaped')
	if (dbItem !== false) {
		inputs = dbItem.ingredients.split('|')
		for (let i = 0; i < inputs.length; i++) {
			inputs[i] = JSON.parse(inputs[i])
		}
		ItemIngredient()
	}
	ItemIngredientO()
	document.querySelector('.ingredients').innerHTML = ""
	document.querySelector('.craft').style.display = 'none'
}
function renderElem(elems) {
	let root = ReactDOM.createRoot(document.querySelector('.ingredients')),
		e = []
	for (let i = 0; i < elems.length; i++) {
		if (elems[i].version === version) {
			let desc = elems[i]?.description
			desc = descriptionSplit(desc)
			type = window.localStorage.getItem('type')
			e[i] = <div key={i} data-key={i} itemID={elems[i].id} slot={id} onClick={type === 'input' ? addRecipeIngr : type === 'output' ? addRecipeOutput : void 0}>
				<span className={'grid'}>
					<img src={'https://www.workspace-loliland.ru:24000/images/' + elems[i].modname + '/' + elems[i].textures ?? 'null.png'} alt={''}
						 className={'ingredient-img'} onMouseEnter={handlerMouseEvent} onMouseMove={handlerMouseMove}
						 onMouseOut={handlerMouseOut}/>
					<div className={'mc-tooltip hidden'} style={{display: 'none', top: 0, left: 0}}>
						<div className={'mc-tooltip-title'} key={i}>{elems[i].name}</div>
						<div className={'mc-tooltip-description'}>{desc}</div>
					</div>
				</span>
			</div>
		}
	}
	root.render(e)
	type = void 0
}
function setType(type) {
	window.localStorage.setItem('type', type)
}
function renderE(r, e) {
	let root = ReactDOM.createRoot(r)
	root.render(e)
}
function showResult() {
	if (status) {
		if (mode === 'avaritia') showResult9x9()
		if (mode === 'shaped3x3') showResult3x3()
		if (mode === 'shapeless3x3') showResult3x3less()
		if (mode === 'furnace') showResultFurnace()
	}
}