import React from 'react'
import {
	getUserById,
	getUserByIds,
	getUserGroup,
	getTaskInfo,
	getUserImg,
	getGroupsList,
	users
} from '../../../utils/Request.js'
import {stringGen} from '../../../utils/functions.js'
import ReactDOM from 'react-dom/client'
import StatusPopup from './StatusPopup.js'

let author, group, task

function openStatusPopup() {
	let popup = document.getElementById('popup'),
		elem = document.createElement('div')
	elem.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-Stack__last-item')
	elem.setAttribute('templatename', 'EDO3/passage:Panel')
	elem.setAttribute('template', 'EDO3/passage:Panel')
	elem.style.zIndex = 20
	elem.style.position = 'fixed'
	elem.style.inset = '0px 54px 0px auto'
	elem.style.width = '500px'
	elem.style.maxWidth = '500px'
	elem.style.minWidth = '500px'
	elem.style.height = 'auto'
	elem.tabIndex = 0
	elem.setAttribute('key', 'popup-' + Math.floor(Math.random() * 1999999) * 999)
	popup.append(elem)
	let dom = ReactDOM.createRoot(elem)
	dom.render(<StatusPopup author={author} key={Math.round(Math.random() * 9999)} group={group} task={task} />)
}

function TimeLine(props) {
	task = props.data
	author = getUserById(task.tauthor_id)
	group = getUserGroup(author.user_group).group[0]
	let islist = task.tispol.split(','),
		ispolns = getUserByIds(islist),
		task_info = getTaskInfo(task.id),
		countUser = ispolns.length,
		u = []
	let stickyBlockId = Math.floor(Math.random() * 100),
		stickyBlockId2 = Math.floor(Math.random() * 100),
		stickyBlockId3 = Math.floor(Math.random() * 100),
		stickyBlockId4 = Math.floor(Math.random() * 100)
	let str = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12)
	users.forEach(el => {
		u[el.user_id] = el
	})
	return (
		<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={0}>
			<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} readonly={''} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
				<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
					<div className={'edo3-TimelineContainer edo3-TimelineContainer__fixedHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-flex-grow-1 edo3-Dialog__fullHeight controls-Scroll-containerBase_userContent'} tabIndex={0}>
						<div className={'msg-addressee-manager ws-flexbox edo3-TimelineContainer__fixedHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={0}>
							<div data-element={'DropArea'} id={'DropArea__' + str} className={'DropArea__container docview3-drop-area'} tabIndex={0}>
								<div id={'DropArea__overlaidElement__' + str} className={'DropArea__overlaidElement'}>
									<div className={'edo3-Timeline edo3-Timeline__fullHeight ws-flexbox ws-flex-shrink-1 ws-flex-grow-1'} tabIndex={0}>
										<div className={'edo3-Timeline__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-flex-column'}>
											<div className={'edo3-Timeline__mainContent edo3-Timeline__fullHeight'}>
												<div className={'edo3-Timeline__headingTitle'} tabIndex={0}>
													<div className={'edo3-Timeline__controlPanel ws-flexbox'}>
														<span className={'controls-Header__caption  controls-Header__fontweight-default controls-fontsize-l controls-Header-fontsize-l controls-Header_readonly controls-Header__caption_style-default controls-inlineheight-s controls-margin_left-m ws-align-self-center '} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>Лента</span>
													</div>
												</div>
												<div className={'controls-StickyBlock  controls-background-default-sticky edo3-Timeline__controlPanel-stickyHeader edo3-Timeline__controlPanel-margin_right edo3-Timeline__controlPanel-margin_left ws-flexbox ws-align-self-end ws-justify-content-end ws-flex-shrink-0 '} data-stickyblockid={stickyBlockId4} style={{top: '0px', zIndex: 30}}>
													<div className={'edo3-Timeline__controlPanel ws-flexbox ws-justify-content-end ws-align-items-center'} data-stickyblockid={stickyBlockId4} tabIndex={0}>
														<div className={'ws-flexbox ws-align-items-baseline controls-padding_top-3xs controls-padding_right-s controls-padding_bottom-3xs controls-padding_left-s edo3-Timeline__controlPanel-unfixed-buttonsContainer'}>
															<div className={'controls-Toolbar controls-margin_right-m'} tabIndex={0}>
																<div className={'controls-Toolbar_content controls-Toolbar_content-horizontal'}>
																	<div data-name={'rollbackLastStage'} data-qa={'rollbackLastStage'} title={'Откатить последний этап'} className={'controls-Toolbar__item controls-Toolbar__item'} tabIndex={0}>
																		<span className={'controls-BaseButton controls-Button_icon controls-Button_radius-icon controls-Button_hoverIcon controls-Button_clickable controls-Button_icon_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_icon__wrapper-fontsize-m controls-Button_icon_shadow-none controls-Toolbar__button '}>
																			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-icon controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																				<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Undo2'} tabIndex={0} />
																			</span>
																		</span>
																	</div>
																	<span className={'controlscontrols-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style- controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-Toolbar__menu controls-Toolbar__menu_horizontal-spacing-small controls-inlineheight-m controls-Button-inlineheight-m controls-Button_link_m'} data-qa={'controls-Toolbar__menu'} title={'Открыть меню'} tabIndex={0}>
																		<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_link_m'}>
																			<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-SettingsNew'} tabIndex={0} />
																		</span>
																	</span>
																</div>
															</div>
															<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-inlineheight-default controls-Button-inlineheight-default controls-Button_link_default'} data-qa={'edo3-Timeline__controlPanel-showParticipantsButton'} title={'Участники (' + countUser + ')'} tabIndex={0} onClick={Timeline__participants_show}>
																<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none controls-Button__wrapper_link_default'}>
																	<span className={'controls-BaseButton__text controls-text-secondary controls-Button__text-secondary_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>{'Участники (' + countUser + ')'}</span>
																</span>
															</span>
														</div>
													</div>
													<div data-stickyblockid={stickyBlockId4} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
													<div data-stickyblockid={stickyBlockId4} className={'controls-StickyBlock__observationTarget_top2'} />
													<div data-stickyblockid={stickyBlockId4} className={'controls-StickyBlock__observationTarget_top2Right'} />
													<div data-stickyblockid={stickyBlockId4} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
													<div data-stickyblockid={stickyBlockId4} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
													<div data-stickyblockid={stickyBlockId4} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
													<div data-stickyblockid={stickyBlockId4} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
												</div>
												<div name={'timelineEventList'} className={'edo3-Timeline__eventList edo3-Timeline__scrollContent  ws-flex-shrink-0'} tabIndex={0}>
													<div className={'edo3-TimelineDocflowEvent ws-flexbox ws-flex-column edo3-Timeline__eventFullWidth'} tabIndex={0}>
														<div className={'edo3-TimelineDocflowEvent__header ws-align-items-baseline ws-flexbox'}>
															<div className={'edo3-TimelineDocflowEvent__statusIcon ws-align-self-center edo3-Timeline__stateIcon-'} tabIndex={0} />
															<div className={'edo3-TimelineDocflowEvent__headersContainer controls-fontsize-l ws-align-items-baseline ws-ellipsis ws-flexbox ws-flex-shrink-1 ws-flex-grow-1'}>
																<div title={'Создано'} className={'edo3-TimelineDocflowEvent__header-bold ws-flex-shrink-1 ws-ellipsis edo3-TimelineDocflowEvent__style-default'}>Создано</div>
																<div className={'edo3-Timeline__duration ws-flexbox ws-flex-shrink-0 controls-margin_right-m controls-fontsize-xs controls-text-unaccented'} tabIndex={0}>
																	<span>{timeRemain(task_info.tInfo[0].ts_create)}</span>
																</div>
															</div>
															<div title={format1(task_info.tInfo[0].ts_create)} className={'edo3-Timeline__time controls-fontsize-xs controls-text-unaccented ws-flexbox ws-flex-shrink-0 ws-align-items-center'} tabIndex={0}>{format2(task_info.tInfo[0].ts_create)}</div>
														</div>
														<div className={'edo3-TimelinePassage edo3-TimelinePassage__indents ws-flexbox'} tabIndex={0}>
															<div className={'edo3-TimelinePassage__photo'} tabIndex={0}>
																<div className={'edo3-Timeline__photo ws-flexbox controls-roundedCorner_size_m'} tabIndex={0} key={stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12) + '_undefined'} style={{width: '32px', height: '32px'}}>
																	<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default'} tabIndex={0} style={{width: '32px', height: '32px'}}>
																		<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
																			<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound controls-PopupPreviewer person-Wrapper__clickable'} tabIndex={0} style={{lineHeight: '32px', height: '32px', width: '32px'}}>
																				<picture className={'ws-flexbox person-Wrapper__picture'}>
																					{getUserImg(author.user_id)}
																				</picture>
																				<div style={{width: '32px'}}>&nbsp;</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={'edo3-TimelinePassage__mainContent ws-flexbox ws-flex-column ws-flex-shrink-1 ws-flex-grow-1 ws-ellipsis'}>
																<div className={'edo3-TimelinePassage__header ws-flexbox'}>
																	<div className={'edo3-TimelinePassage__headerContainer edo3-TimelineDocflowEvent__style-default ws-align-items-baseline ws-flexbox ws-flex-shrink-1 ws-flex-grow-1 ws-ellipsis'}>
																		<div title={author.name} className={'edo3-TimelinePassage__responsibleName edo3-TimelinePassage__responsibleName-clickable ws-ellipsis ws-flex-shink-0'} tabIndex={0}>{author.name}</div>
																		<div title={getGroupsList.groups[author.user_group].group_name} className={'edo3-TimelinePassage__responsibleDepartment controls-fontsize-xs controls-text-unaccented ws-flex-shrink-4 ws-ellipsis'}>{getGroupsList.groups[author.user_group].group_name}</div>
																	</div>
																</div>
																<div className={'edo3-TimelinePassage__body'} />
															</div>
														</div>
													</div>
													{task.tstatus !== 0 ? <div className={'edo3-TimelineDocflowEvent ws-flexbox ws-flex-column edo3-Timeline__eventFullWidth'} tabIndex={0}>
														<div className={'edo3-TimelineDocflowEvent__header ws-align-items-baseline ws-flexbox'}>
															<div className={'edo3-TimelineDocflowEvent__statusIcon ws-align-self-center edo3-Timeline__stateIcon-' + ['', 'active', 'positive', 'negative'][task.tstatus] + ' icon-' + ['', 'Refresh', 'Successful', 'Unsuccess'][task.tstatus]} />
															<div className={'edo3-TimelineDocflowEvent__headersContainer controls-fontsize-l ws-align-items-baseline ws-ellipsis ws-flexbox ws-flex-shrink-1 ws-flex-grow-1'}>
																<div title={'Выполнение'} className={'edo3-TimelineDocflowEvent__header-bold ws-flex-shrink-1 ws-ellipsis edo3-TimelineDocflowEvent__style-' + ['', 'active', 'positive', 'negative'][task.tstatus] + ' edo3-TimelineDocflowEvent__header-clickable'} onClick={task.tstatus === 1 ? openStatusPopup : ''}>Выполнение</div>
																<div className={'edo3-Timeline__duration ws-flexbox ws-flex-shrink-0 controls-margin_right-m controls-fontsize-xs controls-text-unaccented'} tabIndex={0}>
																	<span>{timeRemain(task_info.tInfo[1].ts_create)}</span>
																</div>
															</div>
															<div title={format1(task_info.tInfo[1].ts_create)} className={'edo3-Timeline__time controls-fontsize-xs controls-text-unaccented ws-flexbox ws-flex-shrink-0 ws-align-items-center'} tabIndex={0}>{format2(task_info.tInfo[1].ts_create)}</div>
														</div>
														<div className={'edo3-TimelinePassage edo3-TimelinePassage__indents ws-flexbox'} tabIndex={0}>
															<div className={'edo3-TimelinePassage__photo'} tabIndex={0}>
																<div className={'edo3-Timeline__photo ws-flexbox controls-roundedCorner_size_m'} style={{width: '32px', height: '32px'}} tabIndex={0}>
																	<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default'} style={{width: '32px', height: '32px'}} tabIndex={0}>
																		<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
																			<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound controls-PopupPreviewer person-Wrapper__clickable'} style={{width: '32px', height: '32px'}} tabIndex={0}>
																				<picture className={'ws-flexbox person-Wrapper__picture'}>
																					{getUserImg(+(task_info.tInfo[1].ts_ispoln.split(',')[0]))}
																				</picture>
																				<div style={{width: '32px'}}> </div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={'edo3-TimelinePassage__mainContent ws-flexbox ws-flex-column ws-flex-shrink-1 ws-flex-grow-1 ws-ellipsis'}>
																<div className={'edo3-TimelinePassage__header ws-flexbox'}>
																	<div className={'edo3-TimelinePassage__headerContainer edo3-TimelineDocflowEvent__style-' + ['', 'active', 'default', 'default'][task.tstatus] + ' ws-align-items-baseline ws-flexbox ws-flex-shrink-1 ws-flex-grow-1 ws-ellipsis'}>
																		<div title={u[+task_info.tInfo[1].ts_ispoln.split(',')[0]].name} className={'edo3-TimelinePassage__responsibleName edo3-TimelinePassage__responsibleName-clickable ws-ellipsis ws-flex-shink-0'} tabIndex={0}>{u[+task_info.tInfo[1].ts_ispoln.split(',')[0]].name}</div>
																		<div title={getGroupsList.groups[u[+task_info.tInfo[1].ts_ispoln.split(',')[0]].user_group].group_name} className={'edo3-TimelinePassage__responsibleDepartment controls-fontsize-xs controls-text-unaccented ws-flex-shrink-4 ws-ellipsis'}>{getGroupsList.groups[u[+task_info.tInfo[1].ts_ispoln.split(',')[0]].user_group].group_name}</div>
																	</div>
																</div>
																<div className={'edo3-TimelinePassage__body'}>{task.tstatus === 1 ? '' : task.tstatus === 0 ? '' : <React.Fragment>
																	<div className={'edo3-TimelinePassage__action edo3-TimelinePassage__lineGap ws-flexbox ws-justify-content-between ws-ellipsis ws-flex-shrink-1'}>
																		<div className={'edo3-TimelinePassage__actionContainer ws-flexbox ws-ellipsis ws-align-items-baseline ws-flex-shrink-1 ws-flex-grow-1'}>
																			{task.tstatus === 3 ? <div title={'Не выполнено'} className={'edo3-TimelinePassage__actionName controls-padding_left-3xs controls-text-danger ws-ellipsis ws-flex-shrink-0'}>Не выполнено{+task_info.tInfo[2].tclose_id !== u[+task_info.tInfo[2].ts_ispoln.split(',')[0]].user_id ? ' (' + u[+task_info.tInfo[2].tclose_id].name + ')' : ''}</div> : ''}
																			{task.tstatus === 2 ? <div title={'Выполнено'} className={'edo3-TimelinePassage__actionName controls-padding_left-3xs controls-text-default ws-ellipsis ws-flex-shrink-0'}>Выполнено{+task_info.tInfo[2].tclose_id !== u[+task_info.tInfo[2].ts_ispoln.split(',')[0]].user_id ? ' (' + u[+task_info.tInfo[2].tclose_id].name + ')' : ''}</div> : ''}
																			<div className={'edo3-TimelinePassage__actionIcon edo3-TimelinePassage__actionIcon-default icon-Sent2 controls-icon_size-s ws-flex-shrink-0'} />
																			<div title={'Проверка'} className={'edo3-TimelinePassage__actionTarget controls-text-unaccented ws-ellipsis ws-flex-shrink-1'}>Проверка</div>
																		</div>
																		<div title={format1(task_info.tInfo[2].ts_create)} className={'edo3-Timeline__time controls-fontsize-xs controls-text-unaccented ws-flexbox ws-flex-shrink-0 ws-align-items-end'}>{format2(task_info.tInfo[2].ts_create)}</div>
																	</div>
																	{task_info.tInfo[2].ts_comment_complete !== '' ? <div className={'edo3-TimelineDescription edo3-TimelineDescription__lineBreak edo3-TimelinePassage__description edo3-TimelinePassage__lineGap'} tabIndex={0}>
																		<span className={'edo3-TimelineDescription__text edo3-TimelineDescription__lineBreak controls-padding_left-3xs controls-MultilineText-container'} tabIndex={0}>
																			<div className={'controls-MultilineText-display_wrapper'}>{task_info.tInfo[2].ts_comment_complete}</div>
																		</span>
																	</div> : ''}
																</React.Fragment>}</div>
															</div>
														</div>
													</div> : ''}
													<div className={'edo3-TimelineDocflowEvent ws-flexbox ws-flex-column edo3-Timeline__eventFullWidth'} tabIndex={0} key={'feature_1_'}>
														{task.tstatus > 1 ? <React.Fragment>
															<div className={'edo3-TimelineDocflowEvent__header ws-align-items-baseline ws-flexbox'}>
																<div className={'edo3-TimelineDocflowEvent__statusIcon ws-align-self-center edo3-Timeline__stateIcon-active icon-Refresh'} />
																<div className={'edo3-TimelineDocflowEvent__headersContainer controls-fontsize-l ws-align-items-baseline ws-ellipsis ws-flexbox ws-flex-shrink-1 ws-flex-grow-1'}>
																	<div title={'Проверка'} className={'edo3-TimelineDocflowEvent__header-bold ws-flex-shrink-1 ws-ellipsis edo3-TimelineDocflowEvent__style-active edo3-TimelineDocflowEvent__header-clickable'} onClick={false}>Проверка</div>
																</div>
																<div title={format1(task_info.tInfo[2].ts_create)} className={'edo3-Timeline__time controls-fontsize-xs controls-text-unaccented ws-flexbox ws-flex-shrink-0 ws-align-items-center'} tabIndex={0}>{format2(task_info.tInfo[2].ts_create)}</div>
															</div>
															<div className={'edo3-TimelinePassage edo3-TimelinePassage__indents ws-flexbox'} tabIndex={0}>
																<div className={'edo3-TimelinePassage__photo'} tabIndex={0}>
																	<div className={'edo3-Timeline__photo ws-flexbox controls-roundedCorner_size_m'} style={{width: '32px', height: '32px'}} tabIndex={0}>
																		<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default'} style={{width: '32px', height: '32px'}} tabIndex={0}>
																			<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
																				<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound controls-PopupPreviewer person-Wrapper__clickable'} style={{width: '32px', height: '32px'}} tabIndex={0}>
																					<picture className={'ws-flexbox person-Wrapper__picture'}>
																						{getUserImg(+(task.tauthor_id))}
																					</picture>
																					<div style={{width: '32px'}}> </div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div className={'edo3-TimelinePassage__mainContent ws-flexbox ws-flex-column ws-flex-shrink-1 ws-flex-grow-1 ws-ellipsis'} tabIndex={0}>
																	<div className={'edo3-TimelinePassage__header ws-flexbox'}>
																		<div className={'edo3-TimelinePassage__headerContainer edo3-TimelineDocflowEvent__style-' + ['', 'active', 'default', 'default'][task.tstatus] + ' ws-align-items-baseline ws-flexbox ws-flex-shrink-1 ws-flex-grow-1 ws-ellipsis'}>
																			<div title={u[+task.tauthor_id].name} className={'edo3-TimelinePassage__responsibleName edo3-TimelinePassage__responsibleName-clickable ws-ellipsis ws-flex-shink-0'} tabIndex={0}>{u[+task.tauthor_id].name}</div>
																			<div title={getGroupsList.groups[u[+task.tauthor_id].user_group].group_name} className={'edo3-TimelinePassage__responsibleDepartment controls-fontsize-xs controls-text-unaccented ws-flex-shrink-4 ws-ellipsis'}>{getGroupsList.groups[u[+task.tauthor_id].user_group].group_name}</div>
																		</div>
																	</div>
																	<div className={'edo3-TimelinePassage__body'} />
																</div>
															</div>
														</React.Fragment> : ''}
													</div>
												</div>
												<div className={'edo3-Timeline__participants edo3-Timeline__participants-state-closed controls-background-default'} tabIndex={0}>
													<div className={'controls-StickyBlock  controls-background-default-sticky edo3-Timeline__participants_sticky-header controls-background-default '} tabIndex={0} style={{top: '0px', zIndex: 30}}>
														<div className={'ws-flexbox ws-flex-column'} tabIndex={0} style={{height: '831px', maxHeight: '831px'}}>
															<div className={'edo3-Timeline__controlPanel ws-flexbox ws-justify-content-between ws-align-items-center ws-flex-shrink-0 controls-padding_left-m controls-padding_right-m'}>
																<div className={'edo3-Timeline__participants-header controls-fontsize-l controls-text-secondary'}>{'Участники (' + countUser + ')'}</div>
																<div data-qa={'edo3-Timeline__participants-hideParticipantsButton'} className={'edo3-Timeline__participants-closeLink controls-text-unaccented'} onClick={Timeline__participants_hide}>Свернуть</div>
															</div>
															<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default edo3-Timeline__participants-scroll'} tabIndex={0}>
																<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
																	<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
																		<div className={'edo3-Timeline__participants-item ws-flexbox'} tabIndex={0}>
																			<div className={'edo3-Timeline__photo ws-flexbox controls-roundedCorner_size_m edo3-Timeline__participants-photo ws-flex-shrink-0'} tabIndex={0} style={{width: '32px', height: '32px'}}>
																				<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default'} tabIndex={0} style={{width: '32px', height: '32px'}}>
																					<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
																						<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound controls-PopupPreviewer person-Wrapper__clickable'} tabIndex={0} style={{lineHeight: '32px', height: '32px', width: '32px'}}>
																							<picture className={'ws-flexbox person-Wrapper__picture'}>
																								{getUserImg(ispolns[0].user.user_id)}
																							</picture>
																							<div style={{width: '32px'}}> </div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className={'edo3-Timeline__participants-info ws-flexbox ws-flex-column ws-ellipsis ws-flex-grow-1 ws-flex-shrink-1'}>
																				<div className={'ws-flexbox ws-align-items-center ws-ellipsis'}>
																					<div className={'ws-flexbox ws-align-items-center ws-ellipsis ws-flex-grow-1'}>
																						<div title={ispolns[0].user.name} className={'edo3-Timeline__participants-name controls-fontsize-l controls-text-default ws-ellipsis ws-flex-shrink-1 edo3-Timeline__message-sender-default'} tabIndex={0}>{ispolns[0].user.name}</div>
																					</div>
																					<div className={'edo3-Timeline__participants-time ws-flex-shrink-0'} />
																				</div>
																				<div title={getGroupsList.groups[ispolns[0].user.user_group].group_name} className={'edo3-Timeline__participants-department controls-fontsize-xs controls-text-unaccented ws-ellipsis ws-flex-shrink-1'}>{getGroupsList.groups[ispolns[0].user.user_group].group_name}</div>
																			</div>
																			<div className={'edo3-Timeline__participants-actionsContainer'}>
																				<div className={'edo3-Timeline__participants-action controls-icon_style-secondary icon-EmptyMessage controls-icon_size-m'} />
																				<div className={'edo3-Timeline__participants-action controls-icon_style-secondary icon-VideoCall controls-icon_size-m'} />
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className={'controls-StickyBlock__observationTarget_top'} data-stickyblockid={stickyBlockId3} style={{top: '-2px'}} />
														<div className={'controls-StickyBlock__observationTarget_top2'} data-stickyblockid={stickyBlockId3} />
														<div className={'controls-StickyBlock__observationTarget_top2Right'} data-stickyblockid={stickyBlockId3} />
														<div className={'controls-StickyBlock__observationTarget_bottomLeft'} data-stickyblockid={stickyBlockId3} style={{bottom: '-2px'}} />
														<div className={'controls-StickyBlock__observationTarget_bottomRight'} data-stickyblockid={stickyBlockId3} style={{bottom: '-2px'}} />
														<div className={'controls-StickyBlock__observationTarget_left'} data-stickyblockid={stickyBlockId3} style={{left: '-2px'}} />
														<div className={'controls-StickyBlock__observationTarget_right'} data-stickyblockid={stickyBlockId3} style={{right: '-2px'}} />
													</div>
													<div className={'controls-StickyBlock  controls-background-default-sticky  '} style={{bottom: '0px'}} tabIndex={0}>
														<div tabIndex={0} />
														<div className={'controls-StickyBlock__observationTarget_top'} data-stickyblockid={stickyBlockId2} style={{top: '-2px'}} />
														<div className={'controls-StickyBlock__observationTarget_top2'} data-stickyblockid={stickyBlockId2} />
														<div className={'controls-StickyBlock__observationTarget_top2Right'} data-stickyblockid={stickyBlockId2} />
														<div className={'controls-StickyBlock__observationTarget_bottomLeft'} data-stickyblockid={stickyBlockId2} style={{bottom: '-2px'}} />
														<div className={'controls-StickyBlock__observationTarget_bottomRight'} data-stickyblockid={stickyBlockId2} style={{bottom: '-2px'}} />
														<div className={'controls-StickyBlock__observationTarget_left'} data-stickyblockid={stickyBlockId2} style={{left: '-2px'}} />
														<div className={'controls-StickyBlock__observationTarget_right'} data-stickyblockid={stickyBlockId2} style={{right: '-2px'}} />
													</div>
												</div>
											</div>
											<div className={'controls-StickyBlock  controls-background-default-sticky edo3-Timeline__messagesSticky ws-flexbox ws-flex-column ws-flex-shrink-0 '} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} data-stickyblockid={stickyBlockId} tabIndex={0} style={{zIndex: 30, bottom: '0px'}}>
												<div className={'edo3-Timeline__messageEditor ws-flexbox ws-flex-column-reverse ws-flex-shrink-0'} name={'messageContainer'} tabIndex={0} data-stickyblockid={stickyBlockId}>
													<div className={'msg-send-cloud msg-send-cloud_auto-height edo3-Timeline__fullHeight ws-flexbox ws-flex-shrink-1 ws-flex-grow-1'} tabIndex={0}>
														<div className={'msg-addressee-provider'} tabIndex={0}>
															<div tabIndex={0} />
															<div className={'msg-send-editor    ws-flexbox ws-flex-column msg-sendEditor__default   msg-send-editor__with-background edo3-Timeline__message-box_border-top'} name={'editorTemplate'} tabIndex={0}>
																<div tabIndex={0} />
																<div id={'receiversAndButtons'} className={'msg-send-editor__container-up ws-flex-shrink-0'} tabIndex={-1}>
																	<div name={'containerReceivers'} className={'msg-send-editor__receivers ws-flexbox  ws-hidden'} />
																</div>
																<div className={'msg-send-editor__container-down ws-flexbox ws-flex-shrink-1 ws-flex-grow-1'} tabIndex={0}>
																	<div className={'ws-flexbox ws-flex-shrink-0 msg-send-editor__container-down-buttons  msg-send-editor__container-down-buttons_left-buttons'}>
																		<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter msg-send-editor__toolbar-button_16 msg-send-editor__toolbar-whomField'} data-qa={'msg-send-editor__select-receiver'} tabIndex={-1} title={'Выбрать получателя'}>
																			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																				<svg fillRule={'evenodd'} className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-default controls-icon_svg '} tabIndex={0}>
																					<use xlinkHref={'/asset/resource/Message-icons/addressees.svg#icon-contact'} />
																				</svg>
																			</span>
																		</span>
																		<div className={'msg-send-editor__left-button ws-flex-grow-0 ws-flex-shrink-0'} tabIndex={0}>
																			<div className={'docview3-attachButtonContainer'} tabIndex={0}>
																				<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-primary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper docview3-AttachButton msg-send-editor__attach'} data-qa={'docview3-AddButton'} tabIndex={-1} title={'Прикрепить'}>
																					<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																						<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-default controls-icon icon-Attach'} tabIndex={0} />
																					</span>
																				</span>
																			</div>
																		</div>
																	</div>
																	<div ws-autofocus={'true'} className={'ws-flexbox ws-flex-grow-1 ws-flex-shrink-1  msg-send-editor__rich-editor'}>
																		<div tabIndex={1} className={'textEditor_extended_editor ws-flex-grow-1 ws-flex-shrink-1 ws-flexbox ws-flex-column msg-send-editor__input-field msg-send-editor__controller_rich msg-send-editor-light'} data-qa={'textEditor_extended_editor'}>
																			<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default textEditor_extended_ScrollContainer'} tabIndex={0}>
																				<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
																					<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
																						<div className={'controls-Render js-controls-Render  controls-Render_background-contrast controls-Render_textAlign- controls-Render_borderRadius controls-Render_state-valid controls-fontsize- controls-fontweight-default controls-fontsize- controls-fontweight-default controls-Render-fontsize-undefined controls-text-  controls-Render_state-valid_caretEmpty controls-Render_multiline textEditor_extended_Render textEditor_extended_Render_withHorizontalPadding controls-Scroll-containerBase_userContent'} tabIndex={0}>
																							<div className={'controls-Render__wrapper'}>
																								<div data-qa={'controls-Render__field'} className={'ws-flexbox ws-flex-column controls-Render__field controls-Render__field_textAlign_undefined'} tabIndex={0}>
																									<div className={'textEditor_extended_baseEditor textEditor_extended_baseEditor_lineHeight-s textEditor_extended_baseEditor_minLines-1'}>
																										<div className={'textEditor_base_toolbarContainer'} tabIndex={0}>
																											<div name={'toolbarTarget'} className={'textEditor_base_toolbarTarget'} style={{left: '0px', top: '0px'}} />
																											<div data-qa={'textEditor_base_editor'} className={'textEditor_base_editor ws-dont-stop-native-event'} tabIndex={0}>
																												<div className={'textEditor_base_wrapper'} tabIndex={0}>
																													<div className={'textEditor_slate_Viewer textEditor_slate_Render controls-fontsize-undefined textEditor_slate_Render_lineHeight-s '}>
																														<div role={'textbox'} data-qa={'textEditor_slate_Field'} className={'textEditor_slate_Field textEditor_slate_Container'} autoCorrect={'on'} autoComplete={'on'} spellCheck={'true'} data-state-editor={'true'} data-slate-node={'value'} contentEditable={'true'} zIndex={-1} style={{position: 'relative', outline: 'none', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
																															<p className={'textEditor_Viewer__Paragraph'} data-slate-node={'element'}>
																																<span data-slate-node={'text'}>
																																	<span data-slate-leaf={'true'}>
																																		<span data-slate-zero-width={'n'} data-slate-length={0}>
																																			<span>﻿</span>
																																			<br />
																																		</span>
																																	</span>
																																</span>
																															</p>
																														</div>
																													</div>
																												</div>
																												<div className={'textEditor_base_Placeholder textEditor_base_Placeholder_lineHeight-s controls-fontsize-'}>
																													<div className={'msg-send-editor-placeholder msg-send-editor-placeholder_padding-s'} title={'Сообщение или статус документа...'} tabIndex={0}>Сообщение или статус документа...</div>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div name={'footerTemplate'} className={'msg-send-editor__footer-template ws-flexbox ws-flex-column'} tabIndex={0} />
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className={'msg-send-editor__toolbar  msg-send-editor__toolbar-inline ws-flex-shrink-0'} tabIndex={0}>
																			<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-PopupPreviewer msg-send-editor__toolbar-smile'} data-qa={'emotions-Button__openButton'} tabIndex={-1}>
																				<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																					<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-default controls-icon icon-NewSmile'} tabIndex={0} />
																				</span>
																			</span>
																			<div tabIndex={-1} className={'msg-send-menu msg-send-editor__toolbar-menu'}>
																				<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_readonly controls-Button_link_style-readonly controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper'} data-qa={'msg-send-menu__toolbar'} readonly={''} tabIndex={0}>
																					<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																						<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-readonly controls-icon icon-SettingsNew'} />
																					</span>
																				</span>
																			</div>
																		</div>
																	</div>
																	<div className={'msg-send-editor-send ws-flexbox ws-flex-shrink-0 msg-send-editor__send ws-justify-content-end'}>
																		<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-primary controls-Button_bg-contrast controls-Button_circle_height-l controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-small controls-notFocusOnEnter msg-send-editor__send ws-justify-content-end controls-inlineheight-l controls-Button-inlineheight-l controls-Button_filled_l'} data-qa={'msg-send-editor__send-button'} tabIndex={1} title={'Отправить'}>
																			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_l'}>
																				<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-contrast controls-icon icon-BtArrow'} tabIndex={0} />
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div data-stickyblockid={stickyBlockId} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
												<div data-stickyblockid={stickyBlockId} className={'controls-StickyBlock__observationTarget_top2'} />
												<div data-stickyblockid={stickyBlockId} className={'controls-StickyBlock__observationTarget_top2Right'} />
												<div data-stickyblockid={stickyBlockId} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
												<div data-stickyblockid={stickyBlockId} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
												<div data-stickyblockid={stickyBlockId} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
												<div data-stickyblockid={stickyBlockId} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
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

function format1(date) {
	let d = new Date(+date),
		str = ""
	str += d.toLocaleString('ru-RU', {day: '2-digit', month: 'short'})
	str += '\''
	str += d.toLocaleString('ru-RU', {year: '2-digit'})
	str += ' '
	str += d.toLocaleString('ru-RU', {hour: '2-digit', minute: '2-digit'})
	return str
}

function format2(date) {
	let d = new Date(+date),
		str = ""
	str += d.toLocaleString("ru-RU", {day: '2-digit', month: 'short'})
	str = str.substring(0, str.length - 1)
	str += ' '
	str += d.toLocaleString("ru-RU", {hour: '2-digit', minute: '2-digit'})
	return str
}

function timeRemain(d) {
	let d2 = Date.now(),
		d3 = d2 - d,
		day = 0,
		year = 0,
		hour = 0,
		minute = 0
	d3 = Math.floor(d3 / 1000)
	year = Math.floor(d3 / (365 * 24 * 60 * 60))
	d3 = d3 - year * (365 * 24 * 60 * 60)
	day = Math.floor(d3 / (24 * 3600))
	d3 = d3 - day * 24 * 3600
	hour = Math.floor(d3 / 3600)
	d3 = d3 - hour * 3600
	minute = Math.floor(d3 / 60)
	return ((year > 0 ? `${year} г.` : '') + (day > 0 ? ` ${day} д.` : '') + (hour > 0 ? ` ${hour} ч.` : '') + (minute > 0 ? ` ${minute} м.` : '') + ' назад').trim()
}

function Timeline__participants_show() {
	let el = document.querySelector('.edo3-Timeline__participants.edo3-Timeline__participants-state-closed')
	el.classList.remove('edo3-Timeline__participants-state-closed')
	el.classList.add('edo3-Timeline__participants-state-opened')
}

function Timeline__participants_hide() {
	let el = document.querySelector('.edo3-Timeline__participants.edo3-Timeline__participants-state-opened')
	el.classList.add('edo3-Timeline__participants-state-closed')
	el.classList.remove('edo3-Timeline__participants-state-opened')
}

export default TimeLine