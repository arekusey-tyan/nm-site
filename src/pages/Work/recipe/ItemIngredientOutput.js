import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	descriptionSplit, handlerMouseEvent,
	handlerMouseMove, handlerMouseOut,
	output, showPopup
} from './functions.js'

let oitems

export function ItemIngredientO() {
	let r = ReactDOM.createRoot(document.querySelector('.crafting-table-output').firstChild)
	if (oitems === undefined) {
		oitems = new Array(output.length)
		for (let i = 0; i < oitems.length; i++)
			oitems[i] = null;
	}
	if (output[0] === null) {
		oitems[0] = <div className={'crafting-grid-item'} data-key={-1} onClick={showPopup} key={-1}>
			<span className={'grid-large'} />
		</div>
	} else {
		let desc = output[0]?.description,
			els = []
		desc = descriptionSplit(desc)
		oitems[0] = <div className={'crafting-grid-item'} data-key={-1} onClick={showPopup} key={-1}>
			<span className={'grid-large'}>
				<img src={'https://www.workspace-loliland.ru:24000/images/' + output[0].modname + '/' + output[0].textures} alt={''} className={'ingredient-img'} onMouseEnter={handlerMouseEvent} onMouseMove={handlerMouseMove} onMouseOut={handlerMouseOut} />
				<div className={'mc-tooltip hidden'} style={{display: 'none', top: 0, left: 0}}>
					<div className={'mc-tooltip-title'}>{output[0].name}</div>
					<div className={'mc-tooltip-description'}>{desc}</div>
				</div>
			</span>
		</div>
	}
	r.render(oitems)
}