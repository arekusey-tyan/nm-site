import React from 'react'
import ReactDOM from 'react-dom/client'
import {stringGen, createElement as n} from '../../../../../utils/functions.js'
import $ from 'jquery'
import {getGroupsList, user_info, setUserGroup} from '../../../../../utils/Request.js'

let activePersonCardExpEditorSub = false,
	inputName,
	selectedRole = null,
	groups = getGroupsList.groups,
	saveFormError = false,
	textareaInput

function PersonCardExpEditor() {
	textareaInput = 'input-' + Date.now()
	return (
		<>
			<div className={'controls-Popup ws-float-area-show-complete controls-Scroll_webkitOverflowScrollingTouch undefined'} templatename={'PersonCard/_data/Experience/Editor'} template={'PersonCard/_data/Experience/Editor'} tabIndex={0} key={'popup-' + stringGen(10) + Date.now()} style={{zIndex: 10, position: 'absolute', width: '550px', height: 'auto', right: '20px', top: '10px'}}>
				<div className={'controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
					<div className={'controls_popupTemplate_theme-default controls-DialogTemplate controls-DialogTemplate_backgroundStyle-default  controls-PopupTemplate__roundBorder controls_border-radius-s'} tabIndex={0}>
						<div className={'controls-DialogTemplate__top-area controls-DialogTemplate_backgroundStyle-default controls-DialogTemplate__top-area_size-m   controls-PopupTemplate__roundBorder_top controls_border-radius-s'} tabIndex={0}>
							<div className={'controls-DialogTemplate__top-area-content'}>
								<div className={'controls-DialogTemplate__headerContentTemplate controls-DialogTemplate__headerContentTemplate_margin-right-default'}>
									<div className={'tw-container ws-flexbox'} tabIndex={0}>
										<div className={'personData_ExperienceEditor__header'}>
											<div className={'ws-align-items-baseline ws-flexbox'}>
												<div className={'controls-padding_right-2xs controls-padding_left-m controls-text-label'}>Выбор привилегии</div>
												{/*<span className={'controls-text-label controls-margin_right-s'}>с</span>*/}
												{/*<div className={'controls-DateLinkView controls_shortDatePicker_theme-default controls-DateLink controls-DateLink__view controls-margin_right-s controls-ValidateContainer__validationStatus-valid'} data-qa={'personCard-ExperienceEditor_begin'} tabIndex={0}>*/}
												{/*	<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-l controls-Button_link__wrapper-fontsize-l controls-Button_link_shadow-none controls-notFocusOnEnter controls-DateLinkView__button-value controls-DateLinkView__value_fontWeight-bold'} data-qa={'DateLinkView__template'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} title={'Укажите начало работы'}>*/}
												{/*		<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>*/}
												{/*			<span className={'controls-BaseButton__text controls-text-link controls-Button__text-link_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>*/}
												{/*				<input name={'day'} defaultValue={'00'} pattern={'\d{2}'} classname={'controls-Field js-controls-Field'} />*/}
												{/*				<input name={'month'} defaultValue={'00'} pattern={'\d{2}'} classname={'controls-Field js-controls-Field'} />*/}
												{/*				<input name={'year'} defaultValue={'0000'}  pattern={'\d{4}'} classname={'controls-Field js-controls-Field'} />*/}
												{/*			</span>*/}
												{/*		</span>*/}
												{/*	</span>*/}
												{/*	<div className={''} />*/}
												{/*</div>*/}
												{/*<span className={'controls-text-label controls-margin_right-s'}>по</span>*/}
												{/*<div className={'controls-DateLinkView controls_shortDatePicker_theme-default controls-DateLink controls-DateLink__view controls-margin_right-s'} data-qa={'personCard-ExperienceEditor_end'} tabIndex={0}>*/}
												{/*	<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-l controls-Button_link__wrapper-fontsize-l controls-Button_link_shadow-none controls-notFocusOnEnter controls-DateLinkView__button-value controls-DateLinkView__value_fontWeight-bold'} data-qa={'DateLinkView__template'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} title={'Настоящее время'}>*/}
												{/*		<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>*/}
												{/*			<span className={'controls-BaseButton__text controls-text-link controls-Button__text-link_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>Настоящее время</span>*/}
												{/*		</span>*/}
												{/*	</span>*/}
												{/*	<div className={''} />*/}
												{/*</div>*/}
											</div>
											<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-success controls-Button_bg-contrast controls-Button_circle_height-l controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-small controls-notFocusOnEnter controls-inlineheight-l controls-Button-inlineheight-l controls-Button_filled_l'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} onClick={saveForm}>
												<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_l'}>
													<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-contrast controls-icon icon-Yes'} />
												</span>
											</span>
										</div>
									</div>
								</div>
								<span className={'controls_popupTemplate_theme-default controls-Button__close sbisname-window-title-close controls-DialogTemplate__close_button controls-DialogTemplate__close_linkButton'} title={'Закрыть'} data-qa={'controls-stack-Button__close'} nm_name={'floatAreaCloseButton'} tabIndex={0} onClick={closePopup}>
									<span className={'controls-Button__close__wrapper controls-Button__close_linkButton controls-Button__close_linkButton_offset'}>
										<svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 12 12'} className={'controls-Button__close__icon_linkButton'}>
											<path xmlns={'http://www.w3.org/2000/svg'} d={'M12.7,12l5.16-5.16a0.49,0.49,0,0,0-.7-0.7L12,11.3,6.84,6.14a0.49,0.49,0,0,0-.7.7L11.3,12,6.14,17.16a0.49,0.49,0,1,0,.7.7L12,12.7l5.16,5.16a0.49,0.49,0,0,0,.7-0.7Z'} transform={'translate(-6 -6)'} />
										</svg>
									</span>
								</span>
							</div>
						</div>
						<div className={'controls-DialogTemplate__content-area controls-DialogTemplate_backgroundStyle-default controls-PopupTemplate__roundBorder_bottom  controls_border-radius-s'}>
							<div className={'personData_ExperienceEditor__content controls-PopupTemplate__roundBorder_bottom  controls_border-radius-s'} tabIndex={0}>
								<div className={'controls-Render js-controls-Render controls-Render_border-top-empty controls-Render_border-bottom controls-Render_background-same controls-Render_textAlign-left controls-Render_borderRadius controls-Render_state-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-valid_caretFilled  controls-inlineheight-default controls-Render-inlineheight-default controls-Text controls_Text_theme-default controls-margin_bottom-s'} data-qa={'personCard-ExperienceEditor_position'} tabIndex={0}>
									<div className={'controls-Render__wrapper'}>
										<span className={'controls-Render__baseline'}>﻿</span>
										<div className={'controls-InputBase__field  controls-InputBase__field_margin-null controls-InputBase__field_theme_default_margin-null controls-Render__field controls-Render__field_textAlign_left ws-ellipsis controls-Render__field_zIndex'} data-qa={'controls-Render__field'} tabIndex={0}>
											<input name={'input-' + Date.now()} className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-InputBase__nativeField_caretFilled controls-InputBase__nativeField_caretFilled_theme_default   controls-InputBase__nativeField_hideCustomPlaceholder'} type={'text'} placeholder={'﻿'} spellCheck={'true'} autoCorrect={'off'} autoCapitalize={'off'} inputMode={'text'} autoComplete={'off'} tabIndex={0} onClick={selectRole} />
											{selectedRole !== null
												? <div className={'controls-InputBase__placeholder controls-InputBase__placeholder_displayed-under-caret'} tabIndex={0}>
													<div className={''} tabIndex={0}>{groups[selectedRole].group_name}</div>
												</div>
												: <div className={'controls-InputBase__placeholder  controls-InputBase__placeholder_displayed-under-caret'} tabIndex={0}>
													<div className={'controls-Render__placeholder controls-Render__placeholder_overflow'} tabIndex={0}>Должность</div>
												</div>}
										</div>
									</div>
								</div>
								<div className={'controls-Render js-controls-Render controls-Render_border-top-empty controls-Render_border-bottom controls-Render_background-same controls-Render_textAlign-left controls-Render_borderRadius controls-Render_state-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-valid_caretEmpty controls-Render_multiline controls-Area controls-Area_line-height_m controls-margin_bottom-s'} data-qa={'personCard-ExperienceEditor_function'} tabIndex={0} style={{'--calculated-line-min-height_inputArea': 'calc(1 * var(--line-height_m_inputArea))', '--calculated-line-min-height_inputArea-scroll': 'calc(1 * var(--line-height_m_inputArea) + (2 * var(--padding-vertical_inputArea)))', '--calculated-line-max-height_inputArea-scroll': 'calc(undefined * var(--line-height_m_inputArea) + (2 * var(--padding-vertical_inputArea)))'}}>
									<div className={'controls-Render__wrapper controls-Render__wrapper_footer'}>
										<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default controls-Area__scroll controls-InputBase__field controls-Area__minHeight_countLines_1_size_m_indented controls-Render__field controls-Render__field_textAlign_left  controls-Render__field_zIndex'} data-qa={'controls-Render__field'} tabIndex={0} style={{minHeight: 'var(--calculated-line-min-height_inputArea-scroll)'}}>
											<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
												<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
													<div className={'controls-Area__fieldWrapper controls-Area__field_margin-null controls-Scroll-containerBase_userContent'} name={'fieldWrapper'} tabIndex={0}>
														<div name={'fakeField'} className={'controls-Area__fakeField controls-Area__minHeight_countLines_1_size_m'} style={{minHeight: 'var(--calculated-line-min-height_inputArea)'}}>
															<div className={'controls-Render__placeholder'} tabIndex={0}>Комментарий</div>
														</div>
														<textarea name={textareaInput} className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-Area__realField controls-InputBase__nativeField_caretFilled controls-InputBase__nativeField_hideCustomPlaceholder'} wrap={'hard'} placeholder={'﻿'} spellCheck={'true'} tabIndex={0} />
														<div className={'controls-InputBase__placeholder controls-InputBase__placeholder_displayed-under-caret'}>
															<div className={'controls-Render__placeholder'} tabIndex={0}>Комментарий</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
function PersonCardExpEditorSub() {
	let str1 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12),
		elems = [],
		groups = getGroupsList.groups
	for (let i = 0; i < groups.length; i++) {
		let id1 = Math.floor(Math.random() * 10000)
		elems[i] = <div onClick={setSelectedRole} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-' + (i + 1)} item-key={(i + 1)} data-qa={'item'} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__marked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0}>
			<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_default controls-ListView__item_default-bottomPadding_default controls-ListView__item-rightPadding_default controls-ListView__item-leftPadding_default  '}>
				<div className={''} tabIndex={0}>
					<div className={'person-BaseInfo ws-flexbox ws-align-items-baseline person-BaseInfo__textAlignment_fontsize-2xl controls_Person_theme-default person-Info__withActivity'} tabIndex={0}>
						<div className={'ws-flexbox ws-flex-column ws-flex-grow-1 person-BaseInfo__content controls-padding_left-xs'}>
							<div className={'ws-flexbox person-BaseInfo__line  ws-align-items-baseline'}>
								<div className={'ws-inline-flexbox ws-align-items-baseline person-BaseInfo__titleContainer person-BaseInfo__content'}>
									<span data-qa={'person-Information__fio'} dir={'auto'} title={''} className={'edws-StaffChooser__suggestTemplate_fio   ws-ellipsis'} tabIndex={0}>{groups[i].group_name}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
	return (
		<div className={'controls-Popup ws-float-area-show-complete controls-Scroll_webkitOverflowScrollingTouch controls-StickyTemplate-animation controls-StickyTemplate-visibility controls-Popup-corner-vertical-bottom controls-Popup-corner-horizontal-left controls-Popup-align-horizontal-right controls-Popup-align-vertical-bottom   controls-Zoom'} tabIndex={0} key={'popup-' + Date.now()} style={{zIndex: 20, position: 'absolute', width: '550px', height: 'auto', margin: '0px', zoom: 1, top: '90px', right: '20px'}}>
			<div className={'controls_suggestPopup_theme-default controls_popupTemplate_theme-default controls-Suggest__suggestionsContainer controls-Suggest__suggestionsContainer_popup  controls-Suggest__suggestionsContainer_popup_shadow_bottom controls-Suggest__suggestionsContainer_popup_bottom controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
				<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default controls-Suggest__scrollContainer'} tabIndex={0}>
					<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
						<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
							<div className={'controls-Suggest__wrapper controls-Suggest__wrapper_bottom controls-Suggest-offset-top controls-Scroll-containerBase_userContent'} tabIndex={0}>
								<div className={'controls-LoadingIndicator controls-Suggest__indicator'} tabIndex={0}>
									<div className={'edws-StaffChooser__Suggest_list controls-loading-indicator_content'} tabIndex={0} style={{width: '500px'}}>
										<div className={'controls_suggestPopup_theme-default controls-Suggest_list'} tabIndex={0}>
											<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default'} tabIndex={0}>
												<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'}/>
												<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_' + str1} tabIndex={0}>
													<div className={'controls-ListViewV controls_list_theme-default controls-ListView_default controls-itemActionsV_menu-hidden'} tabIndex={0}>
														<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-ListViewV__itemsContainer controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_' + str1}>
															{elems}
														</div>
													</div>
													<div className={'controls__BaseControl__footer'} tabIndex={0}/>
												</div>
											</div>
											<div tabIndex={0}/>
										</div>
										<div tabIndex={0}/>
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

function setSelectedRole(e) {
	let id = e.currentTarget.attributes['item-key'].value,
		div = <PersonCardExpEditor />
	$('span.controls-Render__baseline').after(142)
	activePersonCardExpEditorSub = !activePersonCardExpEditorSub
	inputName = ''
	selectedRole = id
	renderElement(div)
}
function closePopup(e) {
	e.preventDefault()
	$(e.currentTarget.closest('[templatename="PersonCard/_data/Experience/Editor"]')).parent().empty()
}
function saveForm(e) {
	if (selectedRole === null || selectedRole === user_info.user_group) {
		let div1 = document.createElement('div'),
			div2 = document.createElement('div'),
			div3 = document.createElement('div'),
			div4 = document.createElement('div'),
			div5 = document.createElement('div'),
			div6 = document.createElement('div'),
			div7 = document.createElement('div')
		div6.setAttribute('class', 'controls-ValidateController__errorMessage')
		div6.append('Поле обязательно для заполнения')
		div5.setAttribute('class', 'controls-InfoBox__content controls-InfoBox__message controls-InfoBox__message_margin')
		div5.setAttribute('tabindex', '0')
		div5.append(div6)
		div4.setAttribute('class', 'controls_popupTemplate_theme-default controls-InfoBox controls-InfoBox__horizontal-padding-m controls-InfoBoxTemplate__content-area controls_border-radius-xs')
		div4.setAttribute('tabindex', '0')
		div4.append(div5)
		div3.setAttribute('class', 'controls-InfoBoxTemplate__backgroundStyle-secondary controls-InfoBoxTemplate__content controls_border-radius-xs controls-InfoBoxTemplate_style_invalid controls-InfoBoxTemplate_style-bottom_invalid')
		div3.append(div4)
		div7.setAttribute('class', 'controls-InfoBoxTemplate__backgroundStyle-secondary controls-InfoBoxTemplate__arrow controls-InfoBoxTemplate__arrow-invalid controls-InfoBoxTemplate__arrow-bottom controls-InfoBoxTemplate__arrow-position-start')
		div2.setAttribute('class', 'controls_popupTemplate_theme-default controls-InfoBoxTemplate controls-InfoBoxTemplate__arrow-side-position-bottom controls-InfoBoxTemplate__arrow-side-start controls-InfoBoxTemplate_horizontal-direction-right controls_popupTemplate_theme-default controls-Popup__template')
		div2.setAttribute('tabindex', '0')
		div2.append(div3)
		div2.append(div7)
		div1.setAttribute('class', 'controls-Popup ws-float-area-show-complete controls-Scroll_webkitOverflowScrollingTouch controls-Popup-corner-vertical-top controls-Popup-corner-horizontal-left controls-Popup-align-horizontal-right controls-Popup-align-vertical-top controls-StickyTemplate-animation controls-StickyTemplate-visibility controls-Zoom')
		div1.setAttribute('templatename', 'Controls/popupTemplate:templateInfoBox')
		div1.setAttribute('template', 'Controls/popupTemplate:templateInfoBox')
		div1.setAttribute('style', "z-index: 11;position: absolute;inset: 20px 260px auto auto;width: auto;height: auto;margin: 0px;zoom: 1;max-height: 450px;max-width: 1200px;")
		div1.setAttribute('tabindex', '0')
		div1.setAttribute('key', 'popup-' + stringGen(11) + new Date())
		div1.append(div2)
		document.querySelector('#popup').append(div1)
	} else {
		let el = document.querySelector(`textarea[name="${textareaInput}"]`)
		console.log(el)
		setUserGroup(user_info, selectedRole, el.value)
		window.location.reload()
	}
}
function renderElement(el) {
	let popup = document.querySelector('#popup'),
		root = ReactDOM.createRoot(popup)
	root.render(el)
}
function selectRole(e) {
	let div = <>
			<PersonCardExpEditor />
			<PersonCardExpEditorSub />
		</>
	closeMenu()
	inputName = e.currentTarget.attributes['name']
	if (activePersonCardExpEditorSub) div = <PersonCardExpEditor />
	activePersonCardExpEditorSub = !activePersonCardExpEditorSub
	renderElement(div)
}
function closeMenu() {
	let el = $('[templatename="Controls/popupTemplate:templateInfoBox"]')
	if (el !== null) {
		el.remove();
	}
}

export default PersonCardExpEditor