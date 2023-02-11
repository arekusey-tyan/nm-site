import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	descriptionSplit, handlerMouseEvent, handlerMouseMove, handlerMouseOut,
	inputs, setInputs, showPopup,
	mode
} from './functions.js'

let items

export function ItemIngredient() {
	let r = ReactDOM.createRoot(document.querySelector('.recipe').firstChild)
	if (items === undefined || items.length !== inputs.length) {
		items = new Array(inputs.length)
		for (let i = 0; i < items.length; i++)
			items[i] = null;
	}
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i] === null) {
			items[i] = <div className={'crafting-grid-item'} data-key={i} onClick={showPopup} key={i}>
				<span className={mode === 'furnace' ? 'grid-furnace' : 'grid'} />
			</div>
		} else {
			let desc = inputs[i]?.description,
				els = []
			desc = descriptionSplit(desc)
			items[i] = <div className={'crafting-grid-item'} data-key={i} onClick={showPopup} key={i}>
				<span className={mode === 'furnace' ? 'grid-furnace' : 'grid'}>
					<img src={'https://www.workspace-loliland.ru:24000/images/' + inputs[i].modname + '/' + inputs[i].textures ?? 'null.png'} alt={''} className={'ingredient-img'} onMouseEnter={handlerMouseEvent} onMouseMove={handlerMouseMove} onMouseOut={handlerMouseOut} />
					<div className={'mc-tooltip hidden'} style={{display: 'none', top: 0, left: 0}}>
						<div className={'mc-tooltip-title'}>{inputs[i].name}</div>
						<div className={'mc-tooltip-description'}>{desc}</div>
					</div>
				</span>
			</div>
		}
	}
	r.render(items)
}