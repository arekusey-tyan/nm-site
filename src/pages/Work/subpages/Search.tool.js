import React from 'react'
import { subaction } from '../../../index.js'

class SearchTool extends React.Component {
	render() {
		if (['dialogs', 'people', 'contacts', 'tasks-in-work', 'tasks-controlled', 'tasks-done', 'tasks-from-me', 'staff-list', 'staff-structure', 'staff-verification', 'documents-all', 'claim-chats', 'support-service', 'support-service_statistic', 'support-service_state', 'support-service_types', 'support-service_claims'].includes(subaction)) {
			return (
				<div className='ws-flexbox ws-flex-shrink-0 ws-flex-grow-0' data-name='nanomagicPage-MainLayout__searchTemplate' tabIndex={0} style={{ width: '300px' }}>
					<div className='controls_suggestPopup_theme-default controls-SuggestV mainPage__search controls-padding_right-null controls-padding_left-null controls-padding_top-null controls-padding_bottom-null' tabIndex={0}>
						<div className={'controls-Render js-controls-Render controls-Render_background-same controls-Render_textAlign-left controls-Render_searchContrast_borderRadius controls-Render_state-searchContrast-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default controls-Render_state-searchContrast-valid_caretEmpty controls-inlineheight-default controls-Render-inlineheight-default controls-search controls_search_theme-default controls-notFocusOnEnter undefined controls-Suggest__layout-input'} tabIndex={0}>
							<div className='controls-Render__wrapper'>
								<span className='controls-Render__baseline'>﻿</span>
								<div className='controls_search_theme-default controls-Search__buttons controls-Render__beforeField' tabIndex={0}/>
								<div className={'controls-InputBase__field controls-Search__field_margin-null controls-Search__field_theme_default_margin-null controls-Render__field controls-Render__field_textAlign_left ws-ellipsis controls-Render__field_zIndex'} data-qa='controls-Render__field' tabIndex={0}>
									<input name='input-' className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-Search__nativeField_caretEmpty controls-Search__nativeField_caretEmpty_theme_default controls-InputBase__nativeField_hideCustomPlaceholder'} placeholder='﻿' spellCheck='true' autoCorrect='off' autoCapitalize='off' inputMode='text' autoComplete='off' tabIndex={0} />
									<div className={'controls-InputBase__placeholder controls-InputBase__placeholder_displayed-under-caret'} tabIndex={0}>
										<div className='controls-Render__placeholder controls-Render__placeholder_overflow' tabIndex={0}>Найти...</div>
									</div>
								</div>
								<div className='controls_search_theme-default controls-Search__buttons controls-Render__afterField' tabIndex={0}>
									<div data-qa='Search__searchButton' className='controls_search_theme-default controls-Search__button controls-Search__button_enabled controls-Search__searchButton controls-Search__searchButton_inlineheight-default controls-Search__searchButton-right_inlineheight-default controls-Search__searchButton_position-right controls-Search__searchButton_color icon-Search2' tabIndex={0}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
		return ''
	}
}

export { SearchTool }