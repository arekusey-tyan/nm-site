import React from 'react'
import { subaction } from '../../../index.js'

class ToolBar extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		if ([''].includes(subaction)) {
			return (
				<div className='controls-Toolbar nanomagicPage-MainLayout__toolbar-empty nanomagicPage-MainLayout__mainToolbar controls-margin_left-m' tabIndex={0}>
					<div name='toolbarItems' className='controls-Toolbar_content controls-Toolbar_content-horizontal'></div>
				</div>
			)
		}
		if (subaction === 'tasks-in-work') {
			return (
				<>
					<span className='controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper extControls-addButton nanomagicPage-MainLayout__addButton ws-flex-shrink-0 controls-margin_left-m controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl' data-qa='nanomagicPage-addButton' data-name='nanomagicPage-addButton' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
						<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'>
							<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-default controls-icon icon-RoundPlus' tabIndex='0'></i>
						</span>
					</span>
				</>
			)
		}
		return (
			<div className='ToolBar'></div>
		)
	}
}

export { ToolBar }