import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateTaskPopup from './CreateTaskPopup.js'
import {stringGen} from '../../../../utils/functions.js'

function TaskCreatePopup() {
	let str = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12)
	let str2 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12)
	return (
		<div className={'controls_dropdownPopup_theme-default controls-Menu__popup controls-Menu__popup_with-closeButton controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
			<div className={'controls_popupTemplate_theme-default controls-StickyTemplate controls-PopupTemplate__roundBorder controls_border-radius-s controls-StickyTemplate-borderStyle-default controls-StickyTemplate-hoverBorderStyle- controls-StickyTemplate-borderSize-default controls-StickyTemplate-backgroundColor controls-Popup__isolatedFocusingContext controls-Menu__popup-template controls-Menu__popup-direction-vertical-bottom controls-Menu__popup-offset controls-Menu__popup-shadow-default undefined'} data-name={'nanomagicPage-addButton__dropdownMenu_root_null'} tabIndex={0}>
				<div className={'controls-StickyTemplate__top-area controls-PopupTemplate__roundBorder_top controls_border-radius-s controls-StickyTemplate-backgroundColor controls-StickyTemplate__top-area-withClose_external'} tabIndex={0}>
					<div className={'controls-StickyTemplate__top-area-content'}>
						<div className={'edws-AddButton__headerContent ws-flexbox ws-flex-nowrap'} tabIndex={0}>
							<div className={'controls_dropdownPopup_theme-default controls_list_theme-default controls-Menu__popup-header controls-Menu__popup_header_searchWrapper controls-Menu__popup_header_searchWrapper_offset controls-Menu__popup-header-singleSelect controls-Menu__popup-header_withClose'} tabIndex={0}>
								<div className={'controls-Render js-controls-Render  controls-Render_background-contrast controls-Render_textAlign-left controls-Render_searchContrast_borderRadius controls-Render_state-searchContrast-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-searchContrast-valid_caretEmpty  controls-inlineheight-default controls-Render-inlineheight-default controls-search controls_search_theme-default controls-notFocusOnEnter controls_theme-default controls-Menu__popup_header_search controls-Menu__popup_header_search_width_l'} tabIndex={0}>
									<div className={'controls-Render__wrapper'}>
										<span className={'controls-Render__baseline'}>﻿</span>
										<div className={'controls_search_theme-default controls-Search__buttons controls-Render__beforeField'} tabIndex={0} />
										<div className={'controls-InputBase__field  controls-Search__field_margin-xs controls-Search__field_theme_default_margin-xs controls-Render__field controls-Render__field_textAlign_left ws-ellipsis controls-Render__field_zIndex'} data-qa={'controls-Render__field'} tabIndex={0}>
											<input name={'input-' + new Date().toTimeString()} className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-Search__nativeField_caretEmpty controls-Search__nativeField_caretEmpty_theme_default controls-InputBase__nativeField_hideCustomPlaceholder'} type={'text'} placeholder={'﻿'} spellCheck={'true'} autoCorrect={'off'} autoCapitalize={'off'} inputMode={'text'} autoComplete={'off'} tabIndex={0} />
											<div className={'controls-InputBase__placeholder controls-InputBase__placeholder_displayed-under-caret'} tabIndex={0}>
												<div className={'controls-Render__placeholder controls-Render__placeholder_overflow'} tabIndex={0}>Найти...</div>
											</div>
										</div>
										<div className={'controls_search_theme-default controls-Search__buttons controls-Render__afterField'} tabIndex={0}>
											<div data-qa={'Search__searchButton'} className={'controls_search_theme-default controls-Search__button controls-Search__button_enabled controls-Search__searchButton controls-Search__searchButton_inlineheight-default controls-Search__searchButton-right_inlineheight-default controls-Search__searchButton_position-right controls-Search__searchButton_color icon-Search2'} tabIndex={0} />
										</div>
									</div>
								</div>
							</div>
							<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-padding_left-m controls-inlineheight-default controls-Button-inlineheight-default controls-Button_link_default'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Настроить'} tabIndex={0}>
									<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_link_default'}>
										<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-TFSettings'} />
									</span>
								</span>
						</div>
						<span className={'controls_popupTemplate_theme-default controls-Button__close sbisname-window-title-close controls-StickyTemplate__close_button controls-StickyTemplate__close_button_position-right controls-StickyTemplate__close_button-external controls-StickyTemplate__close_button-external-with-header'} title={'Закрыть'} data-qa={'controls-stack-Button__close'} nmname={'floatAreaCloseButton'} tabIndex={0} onClick={closeThisPopup}>
							<span className={'controls-Button__close__wrapper controls-Button__close_external controls-Button__close_external_offset'}>
								<svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 12 12'} className={'controls-Button__close__icon_external'}>
									<path xmlns={'http://www.w3.org/2000/svg'} d={'M12.7,12l5.16-5.16a0.49,0.49,0,0,0-.7-0.7L12,11.3,6.84,6.14a0.49,0.49,0,0,0-.7.7L11.3,12,6.14,17.16a0.49,0.49,0,1,0,.7.7L12,12.7l5.16,5.16a0.49,0.49,0,0,0,.7-0.7Z'} transform={'translate(-6 -6)'} />
								</svg>
							</span>
						</span>
					</div>
				</div>
				<div className={'controls-StickyTemplate__content-area controls-PopupTemplate__roundBorder_bottom controls_border-radius-s controls-StickyTemplate-backgroundColor'}>
					<div className={'controls-Menu__popup-content'} tabIndex={0}>
						<div className={'controls-Menu__popup-misspellContainer'} tabIndex={0}>
							<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default controls-ScrollContainer__flex controls-Menu__scroll'} tabIndex={0}>
								<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} style={{overscrollBehaviorY: 'auto'}} tabIndex={0}>
									<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
										<div className={'controls_breadcrumbs_theme-default controls_dropdownPopup_theme-default controls-menu controls-Menu__popup-list controls-padding_left-xs controls-padding_right-xs controls-Scroll-containerBase_userContent'} data-index={0} tabIndex={0}>
											<div className={'ws-flexbox ws-flex-column'}>
												<div className={'controls-ListViewV controls-ListView_default controls_list_theme-default controls_dropdownPopup_theme-default'} tabIndex={0}>
													<div name={'itemsContainer'} className={'controls-ListViewV__itemsContainer controls-ListViewV__itemsContainer--newRender'}>
														<div className={'controls-Menu__row controls-Menu__row_overflow controls-Menu__row_roundBorder controls-Menu__row_align_center controls-ListView__itemV js-controls-ListView__measurableContainer controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_menu-default controls-ListView__item-rightPadding_ controls-ListView__item-leftPadding_s controls-Menu__row_state_default controls-Menu__row_hoverBackgroundStyle-default controls-ListView__item-rightPadding_menu-pin controls-Menu__defaultItem controls-Menu__text-default controls-margin_bottom-3xs controls-Menu__row-separator controls-Menu__row_singleLine controls-Menu__row_margin-bottom'} data-target={'nanomagicPage-addButton__dropdownMenu_item_' + str} data-qa={'item'} attr-data-qa={'leaf'} tabIndex={0} key={'list-render-' + str} onClick={createTaskPor}>
															<div className={'controls-Menu__row_selected controls-Menu__row_selected_align'} tabIndex={0} />
															<div className={'controls-Menu__content_baseline'}>
																<div className={'edws-AddButtonItem ws-flexbox ws-align-items-center ws-ellipsis'} tabIndex={0}>
																	<span className={'ws-ellipsis'}>Задача</span>
																</div>
															</div>
															<div className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_menu-default controls-Menu__itemActions_position_rightBottom controls-itemActionsV_inside'} tabIndex={0}>
																<div className={'controls-itemActionsV__wrapper'}>
																	<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_s controls-itemActionsV__action_padding'} data-qa={'controls-itemActions__action'} title={'Закрепить'} tabIndex={-1}>
																		<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-itemActionsV__Button_iconSize_s'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
																			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																				<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-unaccented controls-icon icon-PinNull'} tabIndex={0} />
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
														<div className={'controls-Menu__row controls-Menu__row_overflow controls-Menu__row_roundBorder controls-Menu__row_align_center controls-ListView__itemV js-controls-ListView__measurableContainer controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_menu-default controls-ListView__item-rightPadding_ controls-ListView__item-leftPadding_s controls-Menu__row_state_default controls-Menu__row_hoverBackgroundStyle-default controls-ListView__item-rightPadding_menu-pin controls-Menu__defaultItem controls-Menu__text-default controls-margin_bottom-3xs controls-Menu__row-separator controls-Menu__row_singleLine controls-Menu__row_margin-bottom'} data-target={'nanomagicPage-addButton__dropdownMenu_item_' + str2} data-qa={'item'} attr-data-qa={'leaf'} tabIndex={0} key={'list-render-' + str2} onClick={createPoruchenie}>
															<div className={'controls-Menu__row_selected controls-Menu__row_selected_align'} tabIndex={0} />
															<div className={'controls-Menu__content_baseline'}>
																<div className={'edws-AddButtonItem ws-flexbox ws-align-items-center ws-ellipsis'} tabIndex={0}>
																	<span className={'ws-ellipsis'}>Поручение</span>
																</div>
															</div>
															<div className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_menu-default controls-Menu__itemActions_position_rightBottom controls-itemActionsV_inside'} tabIndex={0}>
																<div className={'controls-itemActionsV__wrapper'}>
																	<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_s controls-itemActionsV__action_padding'} data-qa={'controls-itemActions__action'} title={'Закрепить'} tabIndex={-1}>
																			<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-itemActionsV__Button_iconSize_s'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
																				<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																					<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-unaccented controls-icon icon-PinNull'} tabIndex={0} />
																				</span>
																			</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div tabIndex={0} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function closeThisPopup(e) {
	e.currentTarget.closest("[templatename='Controls/menu:Popup']").remove()
}

function createTaskPor(e) {
	closeThisPopup(e)
	let popup = document.querySelector('#popup'),
		elem = document.createElement('div')
	elem.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-Stack__last-item')
	elem.setAttribute('templatename', 'EDWS3/Tasks/taskDialog:Dialog')
	elem.setAttribute('template', 'EDWS3/Tasks/taskDialog:Dialog')
	elem.setAttribute('key', 'popup-' + stringGen(20))
	elem.style.zIndex = 10
	elem.style.position = 'fixed'
	elem.style.inset = '0px 60px 0pc auto'
	elem.style.width = '700px'
	elem.style.maxWidth = '1400px'
	elem.style.minWidth  = '450px'
	elem.style.height = 'auto'
	elem.tabIndex = 0
	let dom = ReactDOM.createRoot(elem)
	dom.render(<CreateTaskPopup />)
	popup.append(elem)
}

function createPoruchenie() {}

export default TaskCreatePopup