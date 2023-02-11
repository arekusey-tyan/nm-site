import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {stringGen} from '../../../../utils/functions.js'
import {
	getGroupsList,
	user_info,
	servers,
	users,
	getUserImg,
	saveTaskBD,
	getTasks
} from '../../../../utils/Request.js'
import {calendarBtn, closeBtn, hintBtn, messageBtn} from '../../../../utils/btns.js'
import {changeStatus} from './functions.js'

export let selectStatus = false
let u = []
users.forEach(el => {
	u[el.user_id] = el
})
let now = (new Date()).getTime()
let selectedUser = [],
	selectedUserId = [],
	content

function UserInfoFromTask() {
	let u = users,
		els = [],
		str = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12)
	u.forEach((el, i) => {
		els[i] = <div attr-data-qa={'key-' + el.user_id} item-key={el.user_id} key={el.user_id} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0} onClick={selectUser}>
			<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_default controls-ListView__item_default-bottomPadding_default controls-ListView__item-rightPadding_default controls-ListView__item-leftPadding_default  '}>
				<div className={''} tabIndex={0}>
					<div className={'person-BaseInfo ws-flexbox ws-align-items-baseline person-BaseInfo__textAlignment_fontsize-2xl controls_Person_theme-default person-Info__withActivity'} tabIndex={0}>
						<div className={'controls_Person_theme-default ws-flexbox ws-flex-shrink-0 person-Photo__view ws-flex-shrink-0 person-BaseInfo__photo person-BaseInfo__textAlignment_fontsize-2xl'} data-qa={'person-Information__photo'} tabIndex={0} style={{height: '40px'}}>
							<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined  controls-image_border-large controls-PopupPreviewer person-Wrapper__clickable'} tabIndex={0} style={{lineHeight: '40px', height: '40px', width: '40px'}}>
								<picture className={'ws-flexbox person-Wrapper__picture'}>
									{getUserImg(el.user_id)}
								</picture>
								<div style={{width: '40px'}}/>
							</div>
							<div className={'person-Photo__activityContainer person-Photo__activityContainer-oval'} tabIndex={0}>
								<span data-person={el.user_id} title={'Не был активен'} className={'activity__ActivityMarker icon-16 activity__ActivityMarker-withBorder   Activity-VDOM-Status__Indicator Activity-VDOM-Status__Indicator icon-disabled icon-PhoneGetManually '} tabIndex={0}>
									<div className={'activity__ActivityMarker__image '}/>
								</span>
							</div>
						</div>
						<div className={'ws-flexbox ws-flex-column ws-flex-grow-1 person-BaseInfo__content controls-padding_left-xs'}>
							<div className={'ws-flexbox person-BaseInfo__line  ws-align-items-baseline'}>
								<div className={'ws-inline-flexbox ws-align-items-baseline person-BaseInfo__titleContainer person-BaseInfo__content'}>
									<span data-qa={'person-Information__fio'} dir={'auto'} title={el.name} className={'edws-StaffChooser__suggestTemplate_fio   ws-ellipsis'} template={0}>{el.name}</span>
								</div>
								<span className={'controls-text-readonly ws-flexbox ws-align-items-baseline ws-ellipsis person-BaseInfo__additionalContent'} style={{minWidth: '0px'}}>
									<span title={getGroupsList.groups[el.user_group].group_name} className={'controls-padding_left-s ws-ellipsis person-BaseInfo__additionalInfo'}>{getGroupsList.groups[el.user_group].group_name}</span>
								</span>
							</div>
							<span data-qa={'person-Information__secondLine'} title={servers[el.server].name} className={'ws-ellipsis person-BaseInfo__line controls-fontsize-m controls-text-readonly person-BaseInfo__textAlignment_fontsize-m'} tabIndex={0}>{servers[el.server].name}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	})

	return (
		<>
			<div className={'controls_suggestPopup_theme-default controls_popupTemplate_theme-default controls-Suggest__suggestionsContainer controls-Suggest__suggestionsContainer_popup controls-margin_top-3xs  controls-Suggest__suggestionsContainer_popup_shadow_bottom controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
				<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default controls-Suggest__scrollContainer'} tabIndex={0}>
					<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
						<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
							<div className={'controls-Suggest__wrapper controls-Suggest__wrapper_bottom controls-Suggest-offset-top controls-Scroll-containerBase_userContent'} tabIndex={0}>
								<div className={'controls-LoadingIndicator controls-Suggest__indicator'} tabIndex={0}>
									<div className={'edws-StaffChooser__Suggest_list controls-loading-indicator_content'} tabIndex={0} style={{width: '654px'}}>
										<div className={'controls_suggestPopup_theme-default controls-Suggest_list'} tabIndex={0}>
											<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default'} tabIndex={0}>
												<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'}/>
												<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_3eb366a7-9e22-4ce3-9208-fdd14ea0ffeb'} tabIndex={0}>
													<div className={'controls-ListViewV controls_list_theme-default controls-ListView_default controls-itemActionsV_menu-hidden'} tabIndex={0}>
														<div name={'itemsContainer'} data-qa={'items-container'}className={'controls-ListViewV__itemsContainer controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_' + str}>
															{els}
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
								<div className={'controls-Suggest__footer-wrapper ws-justify-content-end'}>
									<div className={'edws-StaffChooser__Footer'} tabIndex={0}>
										<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter'} tabIndex={0}>
											<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
												<span className={'controls-BaseButton__text controls-text-link controls-Button__text-link_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>Все сотрудники</span>
											</span>
										</span>
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

function selectUser(e) {
	if (selectedUserId.includes(+e.currentTarget.attributes['item-key'].value)) return renderSelectedUser();
	selectedUser.push(<div item-key={+e.currentTarget.attributes['item-key'].value} data-position={selectedUser.length} key={+e.currentTarget.attributes['item-key'].value} className={'undefined js-controls-SelectedCollection__item controls-SelectedCollection__item controls-SelectedCollection__collectionItem_layout_oneRow'} data-qa={'SelectedCollection__item'} tabIndex={0} style={{order: selectedUser.length}}>
		<div className={'controls-SelectedCollection__item controls-SelectedCollection__item-multi  controls-SelectedCollection__item_layout_oneRow'} tabIndex={0}>
			<span className={'controls-SelectedCollection__item__caption-wrapper'}>
				<div className={'controls-SelectedCollection__item__caption-oneRow'} tabIndex={0}>
					<span className={'edws-StaffChooser__itemTpl-name'}>{u[+e.currentTarget.attributes['item-key'].value].name}</span>
				</div>
			</span>
			<div title={'Удалить'} data-qa={'SelectedCollection__item__cross'} className={'js-controls-SelectedCollection__item__cross icon-CloseNew controls-SelectedCollection__item__cross ws-disableFastTouch'} tabIndex={0} onClick={removeEl} />
		</div>
	</div>)
	selectedUserId.push(+e.currentTarget.attributes['item-key'].value)
	document.querySelector("[templatename='EDWS3/Tasks/taskDialog:Dialog:SelectUser']").remove()
	selectStatus = false
	renderSelectedUser()
}

function CreateTaskPopup() {
	let str = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12)
	let taskIdN = (getTasks()).count + 1
	return (
		<div className={'controls_popupTemplate_theme-default controls-Stack__content-wrapper ws-workspace-width-700 controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
			<div className={'edo3-Dialog__formController edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 edws3-usualCard controls-Stack__content controls-hint-area'} tabIndex={0}>
				<div className={'edo3-Dialog'} tabIndex={0}>
					<div className={'controls_popupTemplate_theme-default controls-StackTemplate controls-StackTemplate__with-right-panel edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={0}>
						<div className={'controls-StackTemplate-shadow__container  controls-StackTemplate-shadow_direction-right__container'}>
							<div className={'controls-StackTemplate-shadow controls-StackTemplate-shadow_direction-right'}>
								<div className={'controls-StackTemplate-shadow__content'} />
							</div>
						</div>
						<div className={'controls-StackTemplate-content_wrapper controls-StackTemplate_backgroundColor'} tabIndex={0}>
							<div className={'controls-StackTemplate__rightPanel controls-StackTemplate__rightPanel-outside controls-StackTemplate__rightBorder_visible'} tabIndex={0}>
								<div className={'ws-flexbox ws-flex-column ws-justify-content-between ws-flex-grow-0 ws-flex-shrink-0 controls-StackTemplate__rightPanel-wrapper'}>
									<div className={'ws-flexbox ws-flex-column ws-flex-shrink-0 ws-align-items-center'}>
										{closeBtn()}
										<div data-qa={'controls-StackTemplate__maximized_button'} title={'Свернуть/Развернуть'} className={'controls-StackTemplate__maximized_button controls-StackTemplate__rightPanel__maximized'} />
										<div className={'controls-Toolbar controls-margin_top-xs'} data-qa={'edo3-Toolbar__container'} tabIndex={-1}>
											<div name={'toolbarItems'} className={'controls-Toolbar_content controls-Toolbar_content-vertical'}>
												<div data-name={'deleteDocument'} data-qa={'deleteDocument'} title={'Удалить'} className={'controls-Toolbar__item controls-Toolbar__item'} tabIndex={0}>
													<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-Toolbar__button undefined controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
														<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
															<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-danger controls-icon icon-Erase'} />
														</span>
													</span>
												</div>
												<div data-name={'printDocument'} data-qa={'printDocument'} title={'Распечатать'} className={'controls-Toolbar__item controls-Toolbar__item controls-Toolbar__item_vertical-spacing_big'} tabIndex={0}>
													<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-Toolbar__button undefined controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
														<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
															<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Print'} />
														</span>
													</span>
												</div>
												<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter controls-Toolbar__menu controls-Toolbar__menu_vertical-spacing-small controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'} data-qa={'controls-Toolbar__menu'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Открыть меню'} tabIndex={0}>
													<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
														<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-SettingsNew'} />
													</span>
												</span>
											</div>
										</div>
									</div>
									<div className={'nanomagicPage-widgets__rightPanel__bottomButtons ws-flexbox controls-padding_bottom-xs'}>
										<div className={'nanomagicPage-widgets__wrapper ws-flexbox ws-flex-shrink-1 ws-justify-content-between ws-align-items-center'}>
											<div className={'nanomagicPage-widgets__informersWrapper nanomagicPage-widgets__informersWrapper-shadow ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center ws-justify-content-end'}>
												<div id={'autoSign'} className={'ws-flexbox ws-justify-content-center'} tabIndex={0}>
													<div className={'edo-AutoSign__informer_noSpacing'} />
													<div tabIndex={0} />
												</div>
												<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default informers_InformersBar'} tabIndex={0}>
													<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
														<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
															<div className={'informers_InformersBar ws-inline-flexbox ws-flex-shrink-0 ws-align-items-center ws-flex-column-reverse controls-Scroll-containerBase_userContent'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
																{messageBtn()}
																{calendarBtn()}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										{hintBtn()}
									</div>
								</div>
							</div>
							<div className={'controls-StackTemplate-content'}>
								<div className={'controls-StackTemplate__top-area  controls-StackTemplate_headerBackgroundColor'} tabIndex={0}>
									<div className={'controls-StackTemplate__top-area-content'}>
										<div className={'controls-StackTemplate__headerContentTemplate controls-StackTemplate__headerContentTemplate_padding-right'}>
											<div className={'edo3-Dialog__head-firstLine edo3-Dialog__head-item ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center ws-justify-content-between ws-ellipsis'} tabIndex={0}>
												<div className={'ws-flexbox ws-ellipsis ws-align-items-baseline'}>
													<div className={'ws-flexbox'} tabIndex={0}>
													<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-pale controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-pale controls-notFocusOnEnter controls-margin_left-l'} tabIndex={30} title={'Сохранить'} onClick={saveTask}>
														<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
															<span className={'controls-BaseButton__text controls-text-unaccented controls-Button__text-unaccented_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>Сохранить</span>
														</span>
													</span>
													</div>
													<div className={'ws-flexbox ws-align-items-center ws-ellipsis ws-flex-shrink-2'}>
														<div tabIndex={90} className={'edo3-PassageButton ws-flexbox edo3-Dialog__head-firstLine-passageButton ws-ellipsis ws-flex-shrink-1'}>
															<span className={'controls-BaseButton controls-Button_outlined controls-Button_radius-outlined controls-Button_hoverIcon controls-Button_clickable controls-Button_outlined_style-primary controls-Button_bg-same controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_outlined_shadow-none controls-notFocusOnEnter edo3-PassageButton__button ws-ellipsis controls-inlineheight-default controls-Button-inlineheight-default controls-Button_outlined_default'} title={'На выполнение'} tabIndex={0} onClick={toDoWork}>
																<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-outlined controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_padding-default controls-Button__wrapper_mode-button controls-Button__wrapper_inline-height_default'}>
																	<span className={'controls-BaseButton__text controls-Button__text_clickable_bg-same controls-Button__text_viewMode-outlined'} tabIndex={0}>На выполнение</span>
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={'controls-StackTemplate__content-area controls-StackTemplate_backgroundColor'}>
									<div className={'edo3-Dialog__bodyContent edo3-Dialog__fullHeight ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 controls-background-stack'} tabIndex={0}>
										<div className={'controls-background-stackHeader controls-padding_left-m controls-padding_right-m'} tabIndex={0} />
										<div className={'edo3-Dialog__head-crumbs edo3-Dialog__head-item ws-flex-shrink-0 controls-background-stackHeader'} tabIndex={0} />
										<div className={'edo3-DialogLayout ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 edo3-Dialog__layout controls-background-stack'} tabIndex={1}>
											<div className={'controls-Tabs controls-Tabs__horizontal  controls-Tabs_inlineHeight-s edo3-DialogLayout-tabs controls-background-stackHeader ws-flex-shrink-0'} tabIndex={-1} name={'container'}>
												<div name={'wrapper'} className={'controls-Tabs-wrapper controls-Tabs-wrapper__horizontal'}>
													<div className={'ws-flexbox ws-flex-column controls-Tabs__item_canShrink controls-Tabs__item-maxWidth controls-Tabs__item_extreme controls-Tabs_horizontal-padding-xs_first controls-Tabs__item_extreme_first'} style={{order: 1}}>
														<div name={'tabmain'} data-name={'main'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item_align_left controls-Tabs__item_canShrink'} tabIndex={0} style={{order: 1}}>
															<div name={'TabContent0'} className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker_main controls-marker_tabsMain controls-Tabs__itemClickableArea_type-horizontal-default'}>
																<div className={'edo3-DocumentName ws-flexbox ws-align-items-baseline ws-ellipsis controls-Tabs__item_view_main'} data-qa={'TabsItemSelected'} tabIndex={0}>
																<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-4xl controls-Button_link__wrapper-fontsize-4xl controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper ws-ellipsis edo3-DocumentName__menu ws-flexbox ws-ellipsis'} title={'Задача'} tabIndex={0}>
																	<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
																		<span className={'controls-BaseButton__text controls-text-default controls-Button__text-default_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>Задача</span>
																	</span>
																</span>
																</div>
															</div>
															<div className={'edo3-DateNumber'} tabIndex={0}>
																<div className={'controls_editableArea_theme-default controls-EditableArea  controls-EditableArea_clickable edo3-DateNumber__editor ws-flexbox ws-align-items-baseline'} tabIndex={0}>
																	<div className={'controls-EditableArea__wrapper'}>
																		<div className={'ws-flexbox ws-align-items-baseline'} tabIndex={0}>
																			<div className={'controls_editableArea_theme-default controls-EditableArea__editorWrapper controls-Tabs__content_text ws-flex-shrink-0 edo3-DateNumber__inputMargin controls-Tabs__content_text'} tabIndex={0}>
																				<div className={'controls-EditableArea__Text controls-text- controls-fontweight-default controls-inlineheight-default controls-fontsize-l'}>
																					<div className={'controls-EditableArea__Text__wrapper'}>
																						<span className={'controls-EditableArea__Text__baseline'}>﻿</span>
																						<span className={'controls-EditableArea__Text__inner'}>{(new Date()).toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: '2-digit'})}</span>
																					</div>
																				</div>
																			</div>
																			<span className={'ws-flex-shrink-0 controls-Tabs__content_additionaltext edo3-DateNumber__inputMargin controls-Tabs__content_additionaltext'} tabIndex={0}>№</span>
																			<div title={taskIdN} className={'controls_editableArea_theme-default controls-EditableArea__editorWrapper controls-Tabs__content_additionaltext ws-flex-shrink-1 edo3-DateNumber__textInput controls-Tabs__content_additionaltext'} tabIndex={0}>
																				<div className={'controls-EditableArea__Text controls-text- controls-fontweight-default controls-inlineheight-default controls-fontsize-l'}>
																					<div className={'controls-EditableArea__Text__wrapper'}>
																						<span className={'controls-EditableArea__Text__baseline'}>﻿</span>
																						<span className={'controls-EditableArea__Text__inner'}>{taskIdN}</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={'ws-flexbox ws-flex-column controls-Tabs__item_notShrink controls-Tabs__item-maxWidth controls-Tabs__item_default'} style={{order: 30}}>
														<div name={'tabextra-discussions'} data-name={'extra-discussions'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item_align_right controls-Tabs__item_notShrink'} tabIndex={0} style={{order: 30}}>
															<div name={'TabContent1'} className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal controls-marker_state-default controls-Tabs__itemClickableArea_type-horizontal-default'}>
																<div className={'edws-MessagesTab edws-TaskTab ws-inline-flexbox ws-align-items-baseline controls-Tabs__item_state_default controls-text-secondary'} tabIndex={0}>
																	<div className={'ws-align-items-baseline'}>
																		<div title={'Обсуждения'} className={'icon-edws-TabHeader icon-24 controls-icon_style-secondary  icon-Chat'} />
																		<div className={'edws-TabCount controls-Tabs__content_text edws-TabCount-min'} />
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={'ws-flexbox ws-flex-column controls-Tabs__item_notShrink controls-Tabs__item-maxWidth controls-Tabs__item_extreme controls-Tabs_horizontal-padding-xs_last controls-Tabs__item_extreme_last'} style={{order: 31}}>
														<div name={'tabtimeline'} data-name={'timeline'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item_align_right controls-Tabs__item_notShrink'} tabIndex={0} style={{order: 31}}>
															<div name={'TabContent2'} className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal controls-marker_state-default controls-Tabs__itemClickableArea_type-horizontal-default'}>
																<div className={'edws-TimelineTab edws-TaskTab ws-inline-flexbox ws-align-items-baseline controls-Tabs__item_state_default controls-text-secondary'} tabIndex={0}>
																	<div className={'ws-align-items-baseline'}>
																		<div title={'Лента'} className={'icon-edws-TabHeader icon-24 icon-Lenta controls-icon_style-secondary'} />
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={'controls-Tabs__space controls-Tabs__space_inlineHeight-s'} />
												</div>
												<div className={'controls-Tabs__marker  ws-invisible'} />
											</div>
											<div className={'controls-LoadingIndicator controls-SwitchableArea ws-flex-grow-1 edo3-Dialog__fullHeight edo3-DialogLayout__relativeContainer controls-background-stack ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={2}>
												<div className={'edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-align-self-stretch .edo3-Dialog__drag-and-drop-area--65104'} tabIndex={3} key={'main'}>
													<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={0}>
														<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
															<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
																<div className={'edws-TaskDialog__AttachButtonDropAreaWrapper ws-flexbox ws-flex-grow-1 edo3-Dialog__fullHeight controls-Scroll-containerBase_userContent'} tabIndex={0}>
																	<div data-element={'DropArea'} id={'DropArea__' + str} className={'DropArea__container docview3-drop-area'} tabIndex={0}>
																		<div id={'DropArea__overlaidElement__' + str} className={'DropArea__overlaidElement'}>
																			<div name={'mainTabContainer'} className={'edws-TaskDialog__mainTab ws-flexbox ws-flex-column ws-flex-grow-1'} tabIndex={0}>
																				<div tabIndex={0} />
																				<div name={'mainInfoContainer'} className={'edws-TaskDialog__mainTab-mainInfoContainer'}>
																					<div tabIndex={1} name={'mainInformationTab'} className={'edws-TaskDialog__mainTab-mainInfo ws-flexbox ws-flex-column edws-boot'}>
																						<div name={'mainHead'} className={'ws-flexbox ws-justify-content-between ws-align-items-start edws-TaskDialog__mainTab-head'}>
																							<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-flexbox ws-flex-column ws-ellipsis edws-TaskDialog__mainTab-mainInfo-executor-container ws-justify-content-start'}>
																								<div className={'edws-DueDateChange__button ws-inline-flexbox ws-flex-column edws-TaskDialog__mainTab-mainInfo-milestone ws-flex-grow-0 ws-flex-shrink-0 ws-align-self-end ws-ellipsis'}>
																									<div className={'edws-DueDateChange__button-linkWrapper ws-inline-flexbox ws-flex-row-reverse ws-align-self-end ws-ellipsis'}>
																										<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter edws-DueDateChange__button-link ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis undefined'} title={'Веха / Срок'} tabIndex={0} onClick={changeSrok}>
																											<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
																												<span className={'controls-BaseButton__text controls-text-secondary controls-Button__text-secondary_viewMode-link controls-Button__text_viewMode-link'}>Веха / Срок</span>
																											</span>
																										</span>
																									</div>
																									<div tabIndex={0} />
																								</div>
																								<div className={'ws-flexbox ws-align-items-baseline edws-TaskDialog__mainTab-mainInfo-over ws-align-self-start'}>
																									<span tabIndex={-1} className={'controls_lookup_theme-default controls-Lookup__link controls-Lookup__link-inlineheight-xs controls-Lookup__link-default controls-fontsize-lookupLink edws-TaskDialog__mainTab-mainInfo-staff-chooser-link'} data-qa={'Lookup__link'}>
																										<span className={'controls-Lookup__link__text controls-Lookup__link_underline-fixed'}>Исполнитель</span>
																									</span>
																								</div>
																							</div>
																							<div className={'ws-flexbox ws-flex-column'}>
																								<div className={'edo3-Sticker ws-flexbox edo3-Sticker--withPhoto edo3-Sticker--photo-right edo3-Sticker__border ws-flex-grow-0 ws-flex-shrink-0 ws-align-self-end taskSticker'} tabIndex={-1}>
																									<div className={'edo3-Sticker__main-flexContainer controls-fontsize-m ws-flexbox ws-flex-column ws-align-items-end'}>
																										<div className={'edo3-Sticker__mainRow-container ws-flexbox ws-flex-row'}>
																											<div data-qa={'edo3-Sticker__mainInfo'} title={user_info.name} className={'edo3-Sticker__mainRow controls-fontsize-xs controls-inlineheight-xs ws-ellipsis ws-flex-shrink-1  edo3-Sticker__active controls-text-secondary'}>{user_info.name}</div>
																										</div>
																										<div title={getGroupsList.groups[user_info.user_group].group_name + " (" + servers[user_info.server].name + ")"} className={'edo3-Sticker__additionalRow controls-text-unaccented controls-fontsize-xs ws-ellipsis'}>{getGroupsList.groups[user_info.user_group].group_name + " (" + servers[user_info.server].name + ")"}</div>
																									</div>
																								</div>
																							</div>
																						</div>
																						<div ws-autofocus={'true'} className={'edws-StaffChooser edws-TaskDialog__mainTab-mainInfo-executor ws-flex-grow-0 ws-flex-shrink-0 ws-ellipsis'} tabIndex={1}>
																							<div className={'ws-flexbox edws-StaffChooser__lookupContainer ws-align-items-start'}>
																								<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default edws-StaffChooser__photo ws-flex-shrink-0 ws-flex-grow-0 ws-ellipsis'} tabIndex={0} style={{width: '40px', height: '40px'}}>
																									<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
																										<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound'} tabIndex={0} style={{lineHeight: '40px', width: '40px', height: '40px'}}>
																											<svg width={40} height={40} viewBox={'0 0 40 40'} className={'person-DefaultPhoto__stub person-Wrapper__picture'}>
																												<rect width={'100%'} height={'100%'} className={'person-DefaultPhoto__stub_background-default'} />
																												<g>
																													<path transform={'scale(0.4)'} d={'M 77.4 76.7 C 82.6 78.8 87.7 81.2 92.5 84.2 C 96.3 86.6 99.4 91.2 99.4 93 L 100 102 L 60.8 102 L 50.1 82 L 60.8 77 L 50.1 72 L 39.5 77 L 50.1 82 L 39.5 102 L 0 102 L 0.8 93 C 0.8 91.2 3.9 86.6 7.7 84.2 C 12.5 81.2 17.6 78.8 22.9 76.7 C 29.2 74.3 33.5 71.7 36 69.2 C 38.4 66.6 39.6 63.1 39.6 58.6 C 39.6 55.9 38.9 54.1 37.4 53.5 C 36.1 52.8 34.9 50 34.1 45 C 33.6 43 32.8 42 31.6 42.3 C 30.4 42.4 29.6 40.2 29.2 35.6 C 29.1 33.8 29.8 32.1 31.1 30.9 C 30.4 26.5 29.9 23.2 29.8 21.1 C 29.7 19.4 29.8 17.6 30.2 15.9 C 30.7 13.7 31.7 11.6 33.2 9.6 C 34.8 7.4 37 5.5 39.5 4.3 C 42.2 2.8 45.7 2 50.1 2 C 54.5 2 58.1 2.8 60.8 4.3 C 63.2 5.5 65.4 7.4 67 9.5 C 68.4 11.5 69.4 13.7 70 15.9 C 70.3 17.6 70.5 19.4 70.4 21.1 C 70.2 23.2 69.8 26.5 69.1 30.9 C 70.3 32.1 71.1 33.8 71 35.5 C 70.6 40.2 69.9 42.4 68.6 42.2 C 67.4 42 66.5 42.9 66.3 45 C 65.4 50 64.3 52.8 62.8 53.5 C 61.4 54.1 60.7 55.9 60.7 58.6 C 60.7 63.1 61.9 66.6 64.3 69.2 C 66.7 71.7 71.1 74.3 77.4 76.7 Z'} />
																												</g>
																											</svg>
																											<div style={{width: '40px'}}> </div>
																										</div>
																									</div>
																								</div>
																								<div className={'edws-StaffChooser__validateContainer controls-ValidateContainer__validationStatus-valid'} tabIndex={0}>
																									<div className={'controls_lookup_theme-default controls-Lookup edws-StaffChooser__lookup ws-flex-grow-0 ws-flex-shrink-1 ws-ellipsis'} tabIndex={1}>
																										<div className={'controls_suggestPopup_theme-default controls-SuggestV controls-Lookup__suggest'} tabIndex={0}>
																											<div className={'controls-Render js-controls-Render controls-Render_border-top-empty controls-Render_border-bottom controls-Render_background-same controls-Render_textAlign-left controls-Render_borderRadius controls-Render_state-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-valid_caretEmpty  controls-inlineheight-default controls-Render-inlineheight-default controls-Lookup__inputRender controls-Lookup__inputRender_horizontalPadding-null controls-Lookup__inputRender_singleLine controls-Suggest__layout-input'} tabIndex={0}>
																												<div className={'controls-Render__wrapper'}>
																													<span className={'controls-Render__baseline'}>﻿</span>
																													<div className={'controls_lookup_theme-default controls-SelectedCollection__collection-container controls-SelectedCollection__collection-container_singleLine controls-Lookup__collection   controls-Lookup__collection_with_input controls-Render__beforeField'} tabIndex={0}>
																														<div className={'controls-SelectedCollection__collection controls-SelectedCollection__collection_singleLine controls-SelectedCollection__collection_singleLine_fontSize-m controls-SelectedCollection__collection-oneRow'} tabIndex={-1}>
																														</div>
																														<span className={'controls-SelectedCollection__InfoBox  controls-Lookup__counter controls-SelectedCollection__counter-singleLine'} name={'infoBoxLink'} tabIndex={0}>
																															<div data-qa={'SelectedCollection__counterItems'} className={'controls-SelectedCollection__counterItems controls-SelectedCollection__counterItems_singleLine-right controls-SelectedCollection__counterItems_singleLine_backgroundStyle-default controls-background-default controls-SelectedCollection__counterItems-size-default controls-SelectedCollection__counterItems'} tabIndex={0}>
																																<span className={'controls-SelectedCollection__counter'}>({selectedUser.length})</span>
																															</div>
																														</span>
																													</div>
																													<div className={'controls-InputBase__field  controls-InputBase__field_margin-null controls-InputBase__field_theme_default_margin-null controls-Lookup__fieldWrapper  controls-Lookup__fieldWrapper_content_width_default  controls-Lookup__fieldWrapper_style-undefined controls-Lookup__fieldWrapper_multiSelect controls-Render__field controls-Render__field_textAlign_left ws-ellipsis'} data-qa={'controls-Render__field'} tabIndex={0}>
																														<input name={'input-' + now} onClick={su} className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-InputBase__nativeField_caretEmpty controls-InputBase__nativeField_caretEmpty_theme_default   controls-InputBase__nativeField_hideCustomPlaceholder'} type={'text'} placeholder={'﻿'} spellCheck={true} autoCorrect={'off'} autoCapitalize={'off'} inputMode={'text'} autoComplete={'off'} tabIndex={0} />
																														<div className={'controls-InputBase__placeholder  controls-InputBase__placeholder_displayed--caret'} tabIndex={0}>
																															<div className={'controls-Render__placeholder controls-Render__placeholder_overflow'} tabIndex={0}>
																																<span className={'controls-Lookup__placeholder_style-undefined'} tabIndex={0}>Укажите исполнителя</span>
																															</div>
																														</div>
																													</div>
																													<div className={'controls-Lookup__rightFieldWrapper controls-Lookup__rightFieldWrapper_singleLine controls-Render__afterField'} tabIndex={0}>
																														<svg data-qa={'Lookup__showSelector'} className={'  controls-icon_svg controls-Lookup__showSelector controls_lookup_theme-default controls-Lookup__icon controls-icon controls-Lookup__showSelector_horizontalPadding-null controls-Lookup__showSelector_singleLine'} fillRule={'evenodd'} tabIndex={0}>
																															<use xlinkHref={'/asset/resource/Controls-icons/common.svg#icon-Burger'} />
																														</svg>
																													</div>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																						<div className={'controls_RichEditor_theme-default richEditor_Editor ws-flexbox controls_RichEditor_theme-default edws-TaskDialog__mainTab-mainInfo-description controls-ValidateContainer__validationStatus-valid'} name={'taskDescrAttr'} tabIndex={2}>
																							<div className={'richEditor_Editor_toolbar_wrapper richEditor_Editor_toolbar_wrapper-closed ws-flexbox richEditor_EditorController_toolbar ws-flexbox ws-flex-shrink-0'} tabIndex={0}>
																								<div data-qa={'richEditor_Editor_toggleButton-closed'} className={'richEditor_Editor_toggleButton richEditor_Editor_toggleButton-closed'} tabIndex={-1}>
																									<div className={'richEditor_Editor_toggleButton__arrowContainer ws-flexbox ws-flex-column ws-justify-content-center ws-align-items-center'}>
																										<div className={'icon-Expand controls-icon_size-s richEditor_Editor_toggleButton__arrow'} />
																									</div>
																									<div className={'richEditor_Editor_toggleButton__triangleContainer'}>
																										<div className={'richEditor_Editor_toggleButton__triangle'} />
																									</div>
																								</div>
																							</div>
																							<div className={'controls-Render js-controls-Render controls-Render_border-top controls-Render_border-bottom controls-Render_background-same controls-Render_textAlign- controls-Render_borderRadius controls-Render_state-valid controls-fontsize- controls-fontweight-default controls-fontsize- controls-fontweight-default controls-Render-fontsize-undefined controls-text-  controls-Render_state-valid_caretEmpty controls-Render_multiline controls_RichEditor_theme-default  richEditor_Base_inputRender richEditor_Base_inputRender_size_s ws-flex-grow-1 richEditor_Editor_area'} tabIndex={0}>
																								<div className={'controls-Render__wrapper'}>
																									<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default richEditor_Base controls-Render__field controls-Render__field_textAlign_undefined  controls-Render__field_zIndex controls-Render__fullHeight'} id={'richEditor_Base_' + stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12)} data-qa={'controls-Render__field'} tabIndex={0} style={{minHeight: '42px', maxHeight: '500px'}}>
																										<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
																											<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
																												<div className={'richEditor_Base_scrollingContainer controls-Scroll-containerBase_userContent'} name={'editorWrapper'} tabIndex={0}>
																													<div className={'controls-LoadingIndicator richEditor_Base_textContainer  richEditor_Base_textContainer_editable'} tabIndex={0}>
																														<div className={'richEditor_TinyMCE_editorContainer controls_RichEditor_theme-default controls-loading-indicator_content'} name={'editorContainer'} tabIndex={0}>
																															<div className={'richEditor_TinyMCE richEditor_richContentRender richEditor_richContentRender_fontSize-m richEditor_richContentRender_lineHeight-m richEditor_richContentRender richEditor_TinyMCE__mceContainer  ws-dont-stop-native-event ws-flex-grow-1 mce-content-body'} spellCheck={'true'} contentEditable={'true'} tabIndex={0} id={'mce_0'} style={{position: 'relative'}} onInput={contentEdit}>
																																<p><br /></p>
																															</div>
																															<div className={'richEditor_TinyMCE_placeholderWrapper richEditor_TinyMCE_placeholderWrapper_fontSize-m richEditor_richContentRender_lineHeight-m'}>
																																<div className={'controls-Render__placeholder richEditor_TinyMCE_placeholder'} tabIndex={0}>Описание</div>
																															</div>
																															<div className={'controls_RichEditor_theme-default'} tabIndex={0} />
																															<div className={'controls_RichEditor_theme-default'} tabIndex={0} />
																															<div className={'controls_RichEditor_theme-default'} tabIndex={0} />
																															<div className={'controls_RichEditor_theme-default'} tabIndex={0} />
																															<div className={'controls_RichEditor_theme-default'} tabIndex={0} />
																														</div>
																													</div>
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
																				<div className={'edo3-FileViewer edo3-FileViewer__fullWidth ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-flex-column edws-TaskDialog__attachment'} tabIndex={-1}>
																					<div className={'edo3-FileViewer__fullWidth ws-align-self-stretch ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={0}>
																						<div className={'docview3-attachListContainer ws-flex-grow-1 edo3-FileViewer__fullWidth'} tabIndex={0}>
																							<div className={'docview3-Fullviewer__content docview3-Fullviewer__content_table ws-flexbox ws-flex-column docview3-Fullviewer'} tabIndex={0} style={{height: '100%'}}>
																								<div className={'docview3-Fullviewer__list__container'} tabIndex={0}>
																									<div className={'docview3-List  ws-flexbox ws-flex-column docview3-List_column docview3-Fullviewer__list docview3-Fullviewer__list_table'} tabIndex={0}>
																										<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-StickyBlock  controls-background-default-sticky  '} data-stickyblockid={'27'} tabIndex={0} style={{top: '0px'}}>
																											<div className={'docview3-List__header ws-flexbox ws-flex-shrink-0 ws-align-items-center controls-margin_left-m docview3-List__header_height controls-StickyBlock__content'} data-stickyblockid={'27'} name={'header'} tabIndex={0}>
																												<div className={'edo3-FileViewer__before-search-template-area ws-flexbox ws-align-items-center'} tabIndex={0}>
																													<div className={'docview3-attachButtonContainer'} tabIndex={0}>
																														<div tabIndex={0}>
																															{/*<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper docview3-AttachButton'} data-qa={'docview3-AddButton'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>*/}
																															{/*	<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>*/}
																															{/*		<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-label controls-icon icon-Attach'} />*/}
																															{/*		<span className={'controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-link controls-Button__text_captionPosition-default_end controls-Button__text_viewMode-link'} tabIndex={0}>Добавить</span>*/}
																															{/*	</span>*/}
																															{/*</span>*/}
																														</div>
																													</div>
																													{/*<div className={'edo3-FileViewer__userTemplate'}>*/}
																													{/*	<div data-qa={'edws-TaskDialog__addSubtaskButton'} name={'bottomAddAttr'} className={'edws-TaskDialog__bottomAddSubtask'} tabIndex={0}>*/}
																													{/*		<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper'} tabIndex={-1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'}>*/}
																													{/*			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>*/}
																													{/*				<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-label controls-icon icon-TFTask'} />*/}
																													{/*				<span className={'controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-link controls-Button__text_captionPosition-default_end controls-Button__text_viewMode-link'} tabIndex={0}>Подзадача</span>*/}
																													{/*			</span>*/}
																													{/*		</span>*/}
																													{/*	</div>*/}
																													{/*</div>*/}
																												</div>
																											</div>
																											<div data-stickyblockid={'27'} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																											<div data-stickyblockid={'27'} className={'controls-StickyBlock__observationTarget_top2'} />
																											<div data-stickyblockid={'27'} className={'controls-StickyBlock__observationTarget_top2Right'} />
																											<div data-stickyblockid={'27'} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																											<div data-stickyblockid={'27'} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																											<div data-stickyblockid={'27'} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																											<div data-stickyblockid={'27'} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
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
		</div>
	)
}

function contentEdit(e) {
	let el = e.currentTarget.innerHTML
	content = e.currentTarget.innerHTML
	if (el === '' || el === '<p><br></p>' || el === '<div><br></div>') {
		document.querySelector('.controls-Render__placeholder.richEditor_TinyMCE_placeholder').innerHTML = 'Описание'
	} else {
		document.querySelector('.controls-Render__placeholder.richEditor_TinyMCE_placeholder').innerHTML = ''
	}
}

function saveTask(e) {
	let tispol = selectedUserId.join(','),
		ttype = 0,
		tdate = (new Date()).getTime(),
		topis = content,
		tfiles = null,
		tsubtasks = false,
		tauthor_id = user_info.user_id,
		tstatus = 0,
		tsvas = null,
		uid = user_info.user_id
	let status = saveTaskBD(ttype, tispol, tdate, null, null, topis, tfiles, tsubtasks, tauthor_id, tsvas, tstatus, uid)
	if (status.message === 'ok') {
		e.currentTarget.closest('[templatename]').remove()
		let tasks = getTasks()
		tasks.tasks.reverse()
		if (window.localStorage.getItem('st') === '1') changeStatus('t', tasks.tasks[tasks.count - 1].id)
		else window.location.reload()
	}
}

function toDoWork(e) {
	window.localStorage.setItem('st', '1')
	saveTask(e)
}

function changeSrok() {}

function removeEl(e) {
	let id = +e.currentTarget.closest('[data-qa="SelectedCollection__item"]').attributes['data-position'].value,
		nsu = []
	selectedUser.forEach((el, i) => {
		if (i !== id) {
			nsu.push(el)
		}
	})
	selectedUser = nsu
	nsu = []
	selectedUserId.forEach((el, i) => {
		if (i !== id) {
			nsu.push(el)
		}
	})
	selectedUserId = nsu
	nsu = []
	renderSelectedUser()
}

function su() {
	selectStatus = !selectStatus
	let div = document.createElement('div')
	div.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-StickyTemplate-animation', 'controls-StickyTemplate-visibility', 'controls-Popup-corner-vertical-bottom', 'controls-Popup-corner-horizontal-left', 'controls-Popup-align-horizontal-right', 'controls-Popup-align-vertical-bottom', 'controls-Zoom')
	div.setAttribute('templatename', 'EDWS3/Tasks/taskDialog:Dialog:SelectUser');
	div.setAttribute('template', 'EDWS3/Tasks/taskDialog:Dialog:SelectUser');
	div.style.zIndex = '20'
	div.style.position = 'absolute'
	div.style.top = '145px'
	div.style.right = '65px'
	div.style.maxWidth = '696px'
	div.style.maxHeight = '801px'
	div.style.height = 'auto'
	div.style.margin = '0px'
	div.style.zoom = 1
	div.tabIndex = 0
	div.setAttribute('key', 'popup-' + stringGen(11) + (new Date()).getTime())
	document.querySelector('#popup').append(div)
	let el = document.querySelector("[templatename='EDWS3/Tasks/taskDialog:Dialog:SelectUser']")
	if (selectStatus) {
		ReactDOM.render(<UserInfoFromTask users={users} />, el)
	} else {
		el.remove()
	}
}

export function resetSelectStatus() {
	selectStatus = false
}

function renderSelectedUser() {
	ReactDOM.render(<React.Fragment>{selectedUser}</React.Fragment>, document.querySelector('.controls-SelectedCollection__collection'))
}

export default CreateTaskPopup