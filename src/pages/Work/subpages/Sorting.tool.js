import React from 'react'
import { subaction } from '../../../index.js'

class SortingTool extends React.Component {
	render() {
		if ('tasks-in-work' === subaction) {
			return (
				<div className='controls-SortingSelector controls_list_theme-default nanomagicPage-MainLayout__sorting controls-margin_left-m' data-qa='edws-sorting' title='По порядку' tabIndex={0}>
					<div data-qa='controls-SortingSelector_dropdown_undefined' className='controls-Dropdown' tabIndex={0}>
						<div tabIndex={0} className='controls-Dropdown__wrapper controls-Dropdown-fontsize'>
							<div data-qa='controls-Dropdown__content' name='popupTarget' tabIndex={0} className='controls-Dropdown__content-wrapper  controls-Dropdown__text_enabled controls-Dropdown__item_style-undefined controls-Dropdown__defaultItem controls-text-link'>
								<span className='controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter controls-SortingSelector_button controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl' data-qa='controls-SortingSelector_button' tabIndex={0} ws-creates-context='true' ws-delegates-tabfocus='true'>
									<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'>
										<svg fillRule='evenodd' className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon_svg' tabIndex={0}>
											<use xlinkHref='/asset/resource|/static/resources/Controls/sortIcons.svg?x_module=1af94795598f23fea35d012d4b29b64d#non_sort'></use>
										</svg>
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			)
		}
		return (
			<div></div>
		)
	}
}

export { SortingTool }