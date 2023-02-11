import React from 'react'
import ReactDOM from 'react-dom/client'
import { subaction } from '../../../index.js'
import TaskCreatePopup from '../pages/Tasks/TaskCreatePopup.js'
import {stringGen} from '../../../utils/functions.js'

class ToolBar extends React.Component {
	constructor(props) {
		super(props)

		this.createTask = this.createTask.bind(this)
	}

	createTask(e) {
		let popup = document.querySelector('#popup'),
			elem = document.createElement('div')
		elem.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-MenuButton_filled__xl_iconSize-medium_popup', 'controls_dropdownPopup_theme-default', 'controls_popupTemplate_theme-default', 'controls-Popup-corner-vertical-top', 'controls-Popup-corner-horizontal-left', 'controls-Popup-align-horizontal-right', 'controls-Popup-align-vertical-bottom', 'controls-Zoom')
		elem.setAttribute('templatename', 'Controls/menu:Popup')
		elem.setAttribute('template', 'Controls/menu:Popup')
		elem.setAttribute('key', 'popup-' + stringGen(20))
		elem.style.zIndex = 10
		elem.style.position = 'absolute'
		elem.style.inset = '0px auto auto 226.969px'
		elem.style.width = 'auto'
		elem.style.maxWidth = '1885px'
		elem.style.maxHeight  = '945px'
		elem.style.height = 'auto'
		elem.style.margin = '0px'
		elem.style.zoom = '1'
		let dom = ReactDOM.createRoot(elem)
		dom.render(<TaskCreatePopup />)
		popup.append(elem)
	}

	render() {
		if ([''].includes(subaction)) {
			return (
				<div className='controls-Toolbar nanomagicPage-MainLayout__toolbar-empty nanomagicPage-MainLayout__mainToolbar controls-margin_left-m' tabIndex={0}>
					<div name='toolbarItems' className='controls-Toolbar_content controls-Toolbar_content-horizontal' />
				</div>
			)
		}
		if (['tasks-in-work', 'tasks-from-me'].includes(subaction)) {
			return (
				<>
					<span className='controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper extControls-addButton nanomagicPage-MainLayout__addButton ws-flex-shrink-0 controls-margin_left-m controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl' data-qa='nanomagicPage-addButton' data-name='nanomagicPage-addButton' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0} onClick={this.createTask}>
						<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'>
							<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-default controls-icon icon-RoundPlus' tabIndex='0' />
						</span>
					</span>
				</>
			)
		}
		return (
			<div className='ToolBar' />
		)
	}
}

export { ToolBar }