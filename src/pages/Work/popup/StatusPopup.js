import React from 'react'

class StatusPopup extends React.Component {
	constructor(props) {
		super(props)

		this.task = props.task
		this.author = props.author
		this.group = props.group

		this.closeStatusPopup = this.closeStatusPopup.bind(this)
		this.submitCompleteTask = this.submitCompleteTask.bind(this)
	}

	closeStatusPopup(e) {
		e.currentTarget.closest('[templatename="EDO3/passage:Panel"]').remove()
	}

	stringGen(len) {
		let str = '',
			maskArr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
		for (let i = 0; i < len; i++)
			str += maskArr[Math.round(Math.random() * maskArr.length)]
		return str
	}

	submitCompleteTask(e) {}

	render() {
		return (
			<div className={'controls_popupTemplate_theme-default controls-Stack__content-wrapper ws-workspace-width-500 controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
				<div className={'controls_popupTemplate_theme-default controls-StackTemplate controls-StackTemplate__with-right-panel edo3-PassagePanelContent__notAdaptiveView controls-Stack__content controls-hint-area'} tabIndex={0}>
					<div className={'controls-StackTemplate-shadow__container controls-StackTemplate-shadow_direction-right__container'}>
						<div className={'controls-StackTemplate-shadow controls-StackTemplate-shadow_direction-right'}>
							<div className={'controls-StackTemplate-shadow__content'} />
						</div>
					</div>
					<div className={'controls-StackTemplate-content_wrapper controls-StackTemplate_backgroundColor'} tabIndex={0}>
						<div className={'controls-StackTemplate__rightPanel controls-StackTemplate__rightPanel-outside controls-StackTemplate__rightBorder_visible'} tabIndex={0}>
							<div className={'ws-flexbox ws-flex-column ws-justify-content-between ws-flex-grow-0 ws-flex-shrink-0 controls-StackTemplate__rightPanel-wrapper'}>
								<div className={'ws-flexbox ws-flex-column ws-flex-shrink-0 ws-align-items-center'}>
									<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter controls-StackTemplate__close_button controls-stack-Button__rightPanel__close ws-flex-shrink-0 controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl'} data-qa={'controls-stack-Button__close'} tabIndex={-1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Закрыть'} onClick={this.closeStatusPopup}>
										<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'}>
											<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-label controls-icon icon-Close'} tabIndex={0} />
										</span>
									</span>
									<div className={'edo3-PassagePanelContent__toolbar-area ws-flexbox ws-flex-column ws-align-items-center controls-margin_top-xs'} tabIndex={0}>
										<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter controls-margin_bottom-xs controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Настройки'} tabIndex={0}>
											<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
												<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-TFSettings'} tabIndex={0} />
											</span>
										</span>
										<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper controls-margin_bottom-xs controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'История ввода'} tabIndex={0}>
											<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
												<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-ExpandList'} tabIndex={0} />
											</span>
										</span>
									</div>
								</div>
								<div className={'nanomagicPage-widgets__rightPanel__bottomButtons ws-flexbox controls-padding_bottom-xs'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
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
															<div className={'informers-InformersBar-informer_content_wrapper'}>
																<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} title={'Новое сообщение'} />
																<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container informers_InformersBar-informers_container-last'} data-qa={'informers_informerContent_Messages_icon'} title={'Новое сообщение'}>
																	<div className={'icon-EmptyMessage controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext'} />
																</div>
															</div>
															<div className={'informers-InformersBar-informer_content_wrapper'}>
																<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} title={'Звонок'} />
																<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container '} data-qa={'informers_informerContent_Calls_icon'} title={'Звонок'}>
																	<div className={'icon-PhoneNull controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext'} />
																</div>
															</div>
															<div className={'informers-InformersBar-informer_content_wrapper'}>
																<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} />
																<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container '} data-qa={'informers_informerContent_TodayInformer_icon'}>
																	<div title={'Дела на сегодня'} className={'WTM-Today__Informer'} tabIndex={0} style={{display: 'contents'}}>
																		<div className={'WTM-Today__Informer_number'} style={{marginTop: '1px'}}>{new Date(new Date).getDate()}</div>
																		<div className={'WTM-Today__Informer_day'} style={{fontSize: '11px', marginTop: '-4px', color: 'ver(--primary_text-color)'}}>{['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][(new Date(new Date())).getDay() % 7]}</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div />
								</div>
								<div className={'hint-helpButton__helpButtonWrapper nanomagicPage-HelpButton ws-align-self-center'} data-qa={'nanomagicPage-helpButton'} title={0} key={'helpButton'}>
									<div data-hint-target={'helpButton'} className={'hint-helpButton__wrapper controls_Hint_theme-default hint-helpButton__container controls-Popup__isolatedFocusingContext ws-flexbox ws-align-items-end'} tabIndex={0}>
										<div name={'helpButtonTarget'} className={'hint-helpButton__button hint-helpButton__button-compressed'}>
											<div className={'hint-helpButton__icon'} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={'controls-StackTemplate-content'}>
							<div className={'controls-StackTemplate__content-area controls-StackTemplate_backgroundColor'}>
								<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default edo3-PassagePanelContent__scroll-container'} tabIndex={0}>
									<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
										<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
											<div className={'edo3-PassagePanelContent  ws-flexbox ws-flex-column ws-flex-shrink-0 ws-flex-grow-1 controls-Scroll-containerBase_userContent'} tabIndex={0}>
												<div className={'edo3-ActiveStage edo3-PassagePanelContent__active-event'} tabIndex={0}>
													<div className={'ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'} tabIndex={0}>
														<div className={'controls-margin_top-m ws-flexbox ws-flex-grow-0 ws-align-items-center ws-ellipsis ws-justify-content-between'}>
															<div className={'ws-flexbox ws-ellipsis ws-align-items-baseline'}>
																<span data-qa={'edo3-ActiveStage__title'} className={'controls-Header__caption  controls-Header__fontweight-default controls-fontsize-l controls-Header-fontsize-l controls-Header_readonly controls-Header__caption_style-secondary ws-ellipsis '} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Выполнение'} tabIndex={0}>Выполнение</span>
																<div className={'controls-margin_left-s controls-margin_right-s ws-flexbox ws-flex-grow-0 ws-align-items-baseline'}>
																	<span className={'controls-text-unaccented controls-fontsize-m'}>с {new Date(this.task.tstart_date * 1000).toLocaleString("ru-RU", {day: '2-digit', month: 'short'})}</span>
																	<span className={'controls-margin_left-2xs controls-margin_right-2xs controls-text-unaccented controls-fontsize-xs'}>{new Date(this.task.tstart_date * 1000).toLocaleString("ru-RU", {hour: '2-digit', minute: '2-digit'})}</span>
																	<span className={'controls-fontsize-xs controls-text-readonly'}></span>
																</div>
															</div>
															<div className={'ws-flexbox ws-flex-row ws-align-items-center ws-flex-shrink-0'} />
														</div>
														<div className={'ws-flexbox ws-flex-column'}>
															<div className={'edo3-ActiveStage__comment ws-flexbox controls-margin_top-m'}>
																<div data-element={'DropArea'} id={'DropArea_' + this.stringGen(8) + '-' + this.stringGen(4) + '-' + this.stringGen(4) + '-' + this.stringGen(4) + '-' + this.stringGen(12)} className={'DropArea__container docview3-drop-area ws-flexbox ws-flex-grow-1'} tabIndex={0}>
																	<div id={'DropArea__overlaidElement__' + this.stringGen(8) + '-' + this.stringGen(4) + '-' + this.stringGen(4) + '-' + this.stringGen(4) + '-' + this.stringGen(12)} className={'DropArea__overlaidElement'}>
																		<div className={'controls-Render js-controls-Render controls-Render_border-top controls-Render_border-bottom controls-Render_background-same controls-Render_textAlign-left controls-Render_borderRadius controls-Render_state-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-valid_caretEmpty controls-Render_multiline controls-Area controls-Area_line-height_m ws-flexbox ws-flex-grow-1 controls-ValidateContainer__validationStatus-valid'} tabIndex={1} ws-autofocus={'true'} style={{'--calculated-line-min-height_inputArea': 'calc(2 * var(--line-height_m_inputArea))', '--calculated-line-min-height_inputArea-scroll': 'calc(2 * var(--line-height_m_inputArea) + (2 * var(--padding-vertical_inputArea)))', '--calculated-line-max-height_inputArea-scroll': 'calc(undefined * var(--line-height_m_inputArea) + (2 * var(--padding-vertical_inputArea)))'}}>
																			<div className={'controls-Render__wrapper controls-Render__wrapper_footer'}>
																				<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default controls-Area__scroll controls-InputBase__field controls-Area__minHeight_countLines_2_size_m_indented controls-Render__field controls-Render__field_textAlign_left  controls-Render__field_zIndex'} data-qa={'controls-Render__field'} tabIndex={0} style={{minHeight: 'var(--calculated-line-min-height_inputArea-scroll)'}}>
																					<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
																						<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
																							<div className={'controls-Area__fieldWrapper controls-Area__field_margin-null controls-Scroll-containerBase_userContent'} name={'fieldWrapper'} tabIndex={0}>
																								<div name={'fakeField'} className={'controls-Area__fakeField controls-Area__minHeight_countLines_2_size_m'} style={{minHeight: 'var(--calculated-line-min-height_inputArea)'}}>
																									<div className={'controls-Render__placeholder'} tabIndex={0}>Комментарий</div>
																								</div>
																								<textarea name={'input_' + new Date(new Date()).toTimeString()} className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-Area__realField controls-InputBase__nativeField_caretFilled controls-InputBase__nativeField_hideCustomPlaceholder'} wrap={'hard'} placeholder={'﻿'} spellCheck={'true'} tabIndex={0} />
																								<div className={'controls-InputBase__placeholder controls-InputBase__placeholder_displayed-under-caret'}>
																									<div className={'controls-Render__placeholder'} tabIndex={0}>Комментарий</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className={'edo3-ActiveFileViewer ws-flexbox ws-flex-column edo3-ActiveStage__cursorText controls-padding_top-3xs controls-padding_bottom-3xs controls-padding_left-2xs controls-padding_right-2xs controls-Area__footer controls-Area__field_margin-undefined'} tabIndex={-1}>
																					<div className={'ws-flexbox ws-align-self-end  controls-margin_bottom-2xs'}>
																						<div className={'docview3-attachButtonContainer controls-margin_right-2xs'} tabIndex={0}>
																							<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper docview3-AttachButton'} data-qa={'docview3-AddButton'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Прикрепить'} tabIndex={0}>
																								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-label controls-icon icon-Attach'} tabIndex={0} />
																								</span>
																							</span>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={'edo3-PassageList controls-margin_top-st'} tabIndex={1} ws-autofocus={'true'}>
																<div className={'edo3-PassageList__buttons-area controls-padding_bottom-m'} tabIndex={1} key={this.stringGen(8) + '_' + this.stringGen(4) + '_' + this.stringGen(4) + '_' + this.stringGen(4) + '_' + this.stringGen(12) + '_ButtonsArea'} style={{maxWidth: '179px'}}>
																	<div className={'edo3-PassageList__button-area edo3-PassageList__height-item ws-flexbox ws-align-items-center'}>
																		<span className={'controls-BaseButton controls-Button_outlined controls-Button_radius-outlined controls-Button_hoverIcon controls-Button_clickable controls-Button_outlined_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_outlined_shadow-none controls-notFocusOnEnter edo3-PassageList__button controls-inlineheight-default controls-Button-inlineheight-default controls-Button_outlined_default'} data-qa={'edo3-PassageList__action-button'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Выполнено'} tabIndex={0} onClick={this.submitCompleteTask}>
																			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-outlined controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-left controls-Button__wrapper_padding-default controls-Button__wrapper_mode-button controls-Button__wrapper_inline-height_default'}>
																				<span className={'controls-BaseButton__text controls-Button__text_clickable_bg-same controls-Button__text_viewMode-outlined'} tabIndex={0}>Выполнено</span>
																			</span>
																		</span>
																	</div>
																	<div className={'edo3-PassageList__button-area edo3-PassageList__height-item ws-flexbox ws-align-items-center controls-padding_top-st'}>
																		<span className={'controls-BaseButton controls-Button_outlined controls-Button_radius-outlined controls-Button_hoverIcon controls-Button_clickable controls-Button_outlined_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_outlined_shadow-none controls-notFocusOnEnter edo3-PassageList__button controls-inlineheight-default controls-Button-inlineheight-default controls-Button_outlined_default'} data-qa={'edo3-PassageList__action-button'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Не выполнено'} tabIndex={0}>
																			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-outlined controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-left controls-Button__wrapper_padding-default controls-Button__wrapper_mode-button controls-Button__wrapper_inline-height_default'}>
																				<span className={'controls-BaseButton__text controls-Button__text_clickable_bg-same controls-Button__text_viewMode-outlined'} tabIndex={0}>Не выполнено</span>
																			</span>
																		</span>
																	</div>
																</div>
																<div className={'edo3-PassageList__arrow-area edo3-PassageList__brace-arrow  controls-padding_bottom-s ws-flexbox ws-justify-content-center'}>
																	<div className={'edo3-PassageList__arrow ws-flexbox ws-align-self-center'}>
																		<svg className={'controls-icon_size-2xl  controls-icon_svg EDO3-icon_style-secondary edo3-PassageList__icon-brace'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} fillRule={'evenodd'} tabIndex={0}>
																			<use xlinkHref={'/asset/resource/EDO3-icons/arrows.svg#icon-Brace'} />
																		</svg>
																	</div>
																</div>
																<div className={'edo3-PassageList__selection-area ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis edo3-PassageList__padding_top-2xl  controls-margin_bottom-st'} tabIndex={-1} key={this.stringGen(8) + '_' + this.stringGen(4) + '_' + this.stringGen(4) + '_' + this.stringGen(4) + '_' + this.stringGen(12) + '_SelectionArea'}>
																	<div className={''}>
																		<div className={'edo3-PassageList__button-border controls-padding_top-s'}>
																			<div title={'Проверка'} className={'controls-padding_bottom-3xs ws-ellipsis'}>
																				<span>Проверка</span>
																			</div>
																			<div className={'ws-flexbox'}>
																				<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default controls-margin_right-2xs'} tabIndex={0} style={{width: '32px', height: '32px'}}>
																					<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
																						<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound controls-PopupPreviewer person-Wrapper__clickable'} tabIndex={0} style={{lineHeight: '32px', height: '32px', width: '32px'}}>
																							<picture className={'ws-flexbox person-Wrapper__picture'}>
																								<img loading={'lazy'} src={'/asset/resource/users/foto/' + this.author.foto} className={'person-DefaultPhoto__image'} />
																							</picture>
																							<div style={{width: '32px'}}>&nbsp;</div>
																						</div>
																					</div>
																				</div>
																				<div className={'ws-ellipsis'}>
																					<div className={'controls-text-secondary ws-ellipsis ws-flexbox ws-align-items-center'}>
																						<span className={'ws-ellipsis controls-fontsize-m controls-PopupPreviewer person-Opener'} tabIndex={0}>{this.author.name}</span>
																					</div>
																					<div className={'edo3-PassageList__description-area controls-text-unaccented controls-fontsize-xs controls-inlineheight-xs ws-ellipsis ws-flexbox ws-align-items-start'}>
																						<span className={'ws-ellipsis'}>{this.group.group_name}</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div className={'edo3-PassageList__buttons-area controls-padding_bottom-m controls-padding_top-3xs'} tabIndex={-1} key={this.stringGen(8) + '_' + this.stringGen(4) + '_' + this.stringGen(4) + '_' + this.stringGen(4) + '_' + this.stringGen(12) + '_ButtonsArea'} style={{maxWidth: '179px'}}>
																	<div className={'edo3-PassageList__button-area edo3-PassageList__height-item ws-flexbox ws-align-items-center'}>
																		<span className={'controls-BaseButton controls-Button_outlined controls-Button_radius-outlined controls-Button_hoverIcon controls-Button_clickable controls-Button_outlined_style-primary controls-Button_bg-same controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_outlined_shadow-none controls-notFocusOnEnter edo3-PassageList__button controls-inlineheight-default controls-Button-inlineheight-default controls-Button_outlined_default'} data-qa={'edo3-PassageList__action-button'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Переназначить'} tabIndex={0}>
																			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-outlined controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-left controls-Button__wrapper_padding-default controls-Button__wrapper_mode-button controls-Button__wrapper_inline-height_default'}>
																				<span className={'controls-BaseButton__text controls-Button__text_clickable_bg-same controls-Button__text_viewMode-outlined'} tabIndex={0}>Переназначить</span>
																			</span>
																		</span>
																	</div>
																</div>
																<div className={'edo3-PassageList__arrow-area edo3-PassageList__default-arrow controls-padding_top-3xs controls-padding_bottom-s ws-flexbox ws-justify-content-center'}>
																	<div className={'edo3-PassageList__arrow ws-flexbox ws-align-self-center'}>
																		<svg className={'controls-icon_size-s  controls-icon_svg EDO3-icon_style-secondary edo3-PassageList__icon-common'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} fillRule={'evenodd'} tabIndex={0}>
																			<use xlinkHref={'/asset/resource/EDO3-icons/arrows.svg#icon-Common'} />
																		</svg>
																	</div>
																</div>
																<div className={'edo3-PassageList__selection-area ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis edo3-PassageList__padding_top-xl controls-padding_top-3xs controls-margin_bottom-st'} tabIndex={1} key={this.stringGen(8) + '_' + this.stringGen(4) + '_' + this.stringGen(4) + '_' + this.stringGen(4) + '_' + this.stringGen(12) + '_SelectionArea'}>
																	<div className={''}>
																		<div className={'ws-flexbox controls-padding_top-xs controls-ValidateContainer__validationStatus-valid'} data-qa={'staffCommon-Lookup'} tabIndex={0}>
																			<div className={'controls_lookup_theme-default controls-Lookup staffCommon-Lookup__wrapper ws-flex-grow-1'} tabIndex={0}>
																				<div className={'controls_suggestPopup_theme-default controls-SuggestV controls-Lookup__suggest'} tabIndex={0}>
																					<div className={'controls-Render js-controls-Render controls-Render_border-top-empty controls-Render_border-bottom controls-Render_background-same controls-Render_textAlign-left controls-Render_borderRadius controls-Render_state-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-valid_caretEmpty  controls-inlineheight-default controls-Render-inlineheight-default controls-Lookup__inputRender controls-Lookup__inputRender_horizontalPadding-null controls-Lookup__inputRender_singleLine controls-Suggest__layout-input'} tabIndex={0}>
																						<div className={'controls-Render__wrapper'}>
																							<span className={'controls-Render__baseline'}>﻿</span>
																							<div className={'controls-InputBase__field  controls-InputBase__field_margin-null controls-InputBase__field_theme_default_margin-null controls-Lookup__fieldWrapper  controls-Lookup__fieldWrapper_content_width_default  controls-Lookup__fieldWrapper_style-undefined controls-Lookup__fieldWrapper_multiSelect controls-Render__field controls-Render__field_textAlign_left ws-ellipsis'} data-qa={'controls-Render__field'} tabIndex={0}>
																								<input name={'input-' + new Date().toTimeString()} className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-InputBase__nativeField_caretEmpty controls-InputBase__nativeField_caretEmpty_theme_default   controls-InputBase__nativeField_hideCustomPlaceholder'} type={'text'} placeholder={'﻿'}spellCheck={'true'} autoCorrect={'off'} autoCapitalize={'off'} inputMode={'text'} autoComplete={'off'} tabIndex={0} />
																								<div className={'controls-InputBase__placeholder  controls-InputBase__placeholder_displayed--caret'} tabIndex={0}>
																									<div className={'controls-Render__placeholder controls-Render__placeholder_overflow'} tabIndex={0}>
																										<span className={'controls-Lookup__placeholder_style-undefined'} tabIndex={0}>Укажите сотрудника</span>
																									</div>
																								</div>
																							</div>
																							<div className={'controls-Lookup__rightFieldWrapper controls-Lookup__rightFieldWrapper_singleLine controls-Render__afterField'} tabIndex={0}>
																								<svg data-qa={'Lookup__showSelector'} className={'  controls-icon_svg controls-Lookup__showSelector controls_lookup_theme-default controls-Lookup__icon controls-icon controls-Lookup__showSelector_horizontalPadding-null controls-Lookup__showSelector_singleLine'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} fillRule={'evenodd'} tabIndex={0}>
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
}

export default StatusPopup