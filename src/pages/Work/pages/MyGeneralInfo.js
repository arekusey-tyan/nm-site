import React from 'react'
import ReactDOM from 'react-dom/client'
import {user_info, getUserStatus, getGroupsList, getUserImg, servers} from '../../../utils/Request.js'
import {stringGen, plural} from '../../../utils/functions.js'
import {subaction} from '../../../index.js'
import $ from 'jquery'
import PersonCardExpEditor from './PersonCard/Experience/Editor.js'

let str1 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12),
	str2 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12),
	str3 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12),
	str4 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12),
	str5 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12),
	id1 = Math.floor(Math.random() * 1000),
	id2 = Math.floor(Math.random() * 1000000),
	id3 = Math.floor(Math.random() * 10000000000),
	types = ['Для коллег', 'Скрыто', 'Для всех'],
	ug_status = getUserStatus(window.localStorage.getItem('user_id')),
	groups = getGroupsList.groups,
	user_group = groups[user_info.user_group]

function MyGeneralInfo() {
	let date = '',
		y,
		burn_date = user_info.burn_day,
		[d, m, y2] = burn_date.split('.'),
		bd = new Date(y2, m - 1, d).getTime(),
		sex = 0,
		drem = [],
		start = ug_status[1].ugd_start,
		end = ug_status[ug_status.length - 1].ugd_end,
		stag = 0, sd, sm, sy
	if (end === null) {
		end = new Date().getTime()
	} else {
		end = end.split('.')
		end = new Date(+end[2], +end[1] - 1, +end[0]).getTime()
	}
	if (start === null) {
		start = new Date().getTime()
	} else {
		start = start.split('.')
		start = new Date(+start[2], +start[1] - 1, +start[0]).getTime()
	}
	stag = end - start
	sy = Math.floor(stag / (1000 * 60 * 60 * 24 * 365.25))
	stag -= sy * (1000 * 60 * 60 * 24 * 365.25)
	sm = Math.floor(stag / (1000 * 60 * 60 * 24 * 30.4375))
	stag -= sm * (1000 * 60 * 60 * 24 * 30.4375)
	sd = Math.floor(stag / (1000 * 60 * 60 * 24))
	stag = (sy !== 0 ? `${sy} ${plural(sy, 'год', 'года', 'лет')}` : '') + (sm !== 0 ? ` ${sm} ${plural(sm, 'месяц', 'месяца', 'месяцев')}` : '') + (sd !== 0 ? ` ${sd} ${plural(sd, 'день', 'дня', 'дней')}` : (sm !== 0 || sy !== 0 ? '' : '1 день'))
	for (let i = 0; i < ug_status.length; i++) {
		let [d1, m1, y1] = ug_status[i].ugd_start.split('.'),
			[d3, m3, y3] = ug_status[i].ugd_end !== null ? ug_status[i].ugd_end.split('.') : [null, null, null],
			dk = new Date(y3, m3 - 1, d3).getTime(),
			now = new Date().getTime(),
			dy, dm, dr
		dr = ug_status[i].ugd_end !== null ? dk : now
		dr -= new Date(+y1, +m1 - 1, +d1).getTime()
		dy = Math.floor(dr / (1000 * 60 * 60 * 24 * 365.25))
		dr -= dy * (1000 * 60 * 60 * 24 * 365.25)
		dm = Math.floor(dr / (1000 * 60 * 60 * 24 * 30.4375))
		dr -= dm * (1000 * 60 * 60 * 24 * 30.4375)
		dr = Math.floor(dr / (1000 * 60 * 60 * 24))
		drem[i] = (dy !== 0 ? `${dy} ${plural(dy, 'год', 'года', 'лет')}` : '') + (dm !== 0 ? ` ${dm} ${plural(dm, 'месяц', 'месяца', 'месяцев')}` : '') + (dr !== 0 ? ` ${dr} ${plural(dr, 'день', 'дня', 'дней')}` : (dm !== 0 || dy !== 0 ? '' : '1 день'))
	}
	y = Date.now() - bd
	y = Math.floor(y / (1000 * 60 * 60 * 24 * 365.25))
	date = `${y} ${plural(y, 'год', 'года', 'лет')}`
	let elems = []
	for (let i = 0; i < ug_status.length; i++)
		elems[i] = <>
			<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-' + id3} item-key={id3} key={id3} data-qa={'item'} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0}>
				<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_s controls-ListView__item_default-bottomPadding_s controls-ListView__item-rightPadding_default controls-ListView__item-leftPadding_xl  '}>
					<div className={'personData_Experience__itemWrapper'} tabIndex={0}>
						<div className={'ws-ellipsis personData_Experience__item'}>
							<div className={'personData_Experience__itemRow'}>
								<div className={'personData_Experience__org ws-ellipsis'}>
									<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter ws-ellipsis personData_Experience__orgName controls-inlineheight-default controls-Button-inlineheight-default controls-Button_link_default'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Сервера майнкрафт LoliLand.ru'} tabIndex={0} key={'experienceItemName-full-1475711569'}>
										<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none controls-Button__wrapper_link_default'}>
											<span className={'controls-BaseButton__text controls-text-default controls-Button__text-default_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>LoliLand.ru</span>
										</span>
									</span>
								</div>
								<span className={'controls-text-label'}>{ug_status[i].ugd_start} - {ug_status[i].ugd_end ?? 'Настоящее время'}</span>
							</div>
							<div className={'personData_Experience__itemRow'}>
								<span title={'Директор'} className={'personData_Experience__post ws-ellipsis'}>{groups[+ug_status[i].ug_start].group_name}</span>
								<span className={'controls-text-label controls-margin_left-m'}>{drem[i]}</span>
							</div>
							<div className={'personData_Experience__goals ws-line-clamp ws-line-clamp_2'}>{ug_status[i]?.ugd_comment}</div>
						</div>
						<div className={'personData_Experience__privacyBtn'} />
					</div>
				</div>
				<div className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default  controls-itemActionsV_position_bottomRight controls-itemActionsV_padding-bottom_default  controls-itemActionsV_inside'}>
					<div className={'controls-itemActionsV__wrapper'}>
						<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_personData_Experience__actionBtn controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Удалить'} data-qa={'controls-itemActions__action'} tabIndex={-1} ws-no-focus={'true'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'}>
							<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-personData_Experience__actionBtn controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-danger controls-icon icon-Erase'} tabIndex={0} />
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	return (
		<>
			<div className={'ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 nanomagicPage-CardLayout__workspaceCenter'}>
				<div className={'nanomagicPage-CardLayout__workspaceLeftOffset'} />
				<div className={'ws-flexbox ws-flex-column ws-flex-grow-3 ws-flex-shrink-1 nanomagicPage-CardLayout__mainBlock'}>
					<div className={'personProfile-header personProfile-header_blockLayout ws-flex-shrink-0 ws-flex-grow-0 ws-flexbox ws-flex-row nanomagicPage-CardLayout__top'} tabIndex={0}>
						<div className={'personProfile-header__Logo controls-margin_left-xl controls-margin_top-xs controls-margin_bottom-xs'}>
							<div className={'ws-flex-shrink-0 rtl_marginLeftMedium person-Slip__photo_container controls_Person_theme-default person-Slip__photo person-Slip__photo_background person-Slip__photo_rounded'} tabIndex={0}>
								<div className={'controls_Person_theme-default ws-flexbox ws-flex-shrink-0 person-Photo__view'} tabIndex={0} style={{height: '144px'}}>
									<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Slip__photo_noRound'} tabIndex={0} style={{lineHeight: '144px', width: '144px', height: '144px'}}>
										<picture className={'ws-flexbox person-Wrapper__picture'}>
											{getUserImg(user_info.user_id)}
										</picture>
										<div style={{width: '144px'}}>&nbsp;</div>
									</div>
								</div>
								<div className={'person-Slip__photo_imageGallery'} tabIndex={0}>
									<div className={'docview3-PhotoGallery docview3-PhotoGallery__show-commands-on-hover docview3-PhotoGallery_default'} tabIndex={0}>
										<div className={'docview3-PhotoGallery__view docview3-PhotoGallery__view-default docview3-PhotoGallery__view--pointer'} tabIndex={0} style={{height: '144px', width: '144px'}}>
											<div className={'docview3-PhotoGallery__zoomLayer'} />
											<div className={'docview3-Preview ws-flexbox ws-justify-content-center ws-align-items-center docview3-selectDisable'} data-id={'f1950dd9-734e-4243-bdcd-81018c9f00d5?hmac=9f429932583b5e0360f67db59cb07164cffff553'} tabIndex={0} style={{height: '144px', width: '144px'}}>
												<img draggable={false} name={'preview'} src={'/asset/resource/users/image/' + user_info.foto} className={'docview3-Preview__image ws-align-self-start ws-flex-shrink-0 docview3-Preview__image_none  person-Slip__photo_size'} tabIndex={0} alt={''} />
											</div>
											<div className={'docview3-PhotoGallery__toolbar'} tabIndex={0}>
												<div className={'ws-flexbox ws-align-items-center docview3-PhotoGallery__controls ws-justify-content-between'}>
													<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-s controls-Button_link__wrapper-fontsize-s controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper docview3-AttachButton docview3-PhotoGallery__add'} data-qa={'docview3-AddButton'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Заменить'} tabIndex={0}>
														<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
															<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Attach'} tabIndex={0} />
														</span>
													</span>
													<div className={'controls-Toolbar docview3-PhotoGallery__commands'} tabIndex={0}>
														<div name={'toolbarItems'} className={'controls-Toolbar_content controls-Toolbar_content-horizontal'}>
															<div data-name={'editImage_with_icon_no_parent'} data-qa={'editImage_with_icon_no_parent'} title={'Редактировать'} className={'controls-Toolbar__item controls-Toolbar__item'} tabIndex={0}>
																<span className={'controls-BaseButton controls-Button_icon controls-Button_radius-icon controls-Button_hoverIcon controls-Button_clickable controls-Button_icon_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_icon__wrapper-fontsize-m controls-Button_icon_shadow-none controls-Toolbar__button undefined'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
																	<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-icon controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																		<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Edit'} tabIndex={0} />
																	</span>
																</span>
															</div>
															<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style- controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-Toolbar__menu controls-Toolbar__menu_horizontal-spacing-small controls-inlineheight-m controls-Button-inlineheight-m controls-Button_link_m'} data-qa={'controls-Toolbar__menu'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Открыть меню'} tabIndex={0}>
																<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_link_m'}>
																	<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-SettingsNew'} tabIndex={0} />
																</span>
															</span>
														</div>
													</div>
												</div>
												<div className={'docview3-PhotoGallery__controls-background'} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={'ws-flex-grow-1 personProfile-header__body ws-ellipsis'}>
							<div className={'personProfile-header__top'} />
							<div data-qa={'personProfile-header__position'} className={'personProfile-header__position controls-text-label ws-ellipsis'}>{user_group.group_name}</div>
							<div className={'controls_breadcrumbs_theme-default controls-BreadCrumbsView personProfile-header__depPath'} data-qa={'personProfile-header__department'} tabIndex={0}>
								<div className={'controls-BreadCrumbsView__wrapper'}>
									<div className={'controls-BreadCrumbsView__itemsTemplate'} tabIndex={0}>
										<div className={'controls-BreadCrumbsView__items'}>
											<div className={'controls-BreadCrumbsView__crumb controls-fontsize-m  controls-BreadCrumbsView__max-width controls-BreadCrumbsView__crumb_color  controls-BreadCrumbsView__crumb_withOverflow controls-BreadCrumbsView__crumb_withOverflow_withoutArrow controls-BreadCrumbsView__crumb__left_edge'} tabIndex={0}>
												<div className={'controls-BreadCrumbsView__crumb-text-ellipsis'}>
													<span title={'LoliLand.ru'} className={'controls-BreadCrumbsView__titleWrapper'}>
														<span className={'controls-BreadCrumbsView__title controls-BreadCrumbsView__title_enabled'}>LoliLand.ru</span>
													</span>
												</div>
											</div>
											<div className={'controls-BreadCrumbsView__crumb controls-fontsize-m  controls-BreadCrumbsView__max-width controls-BreadCrumbsView__crumb_color  controls-BreadCrumbsView__crumb_withOverflow'} tabIndex={0}>
												<div className={'controls-BreadCrumbsView__crumb-text-ellipsis'}>
													<svg className={'controls-BreadCrumbsView__arrow controls-BreadCrumbsView__arrow_enabled'} viewBox={'0 0 16 16'} xmlns={'http://www.w3.org/2000/svg'} tabIndex={0}>
														<path d={'M5.41374 4.00339L11 9.5V10.5L5.41374 16L4.70663 15.2929L9.99783 10.00169L4.70663 4.71049L5.41374 4.00339Z'} xmlns={'http://www.w3.org/2000/svg'} />
													</svg>
													<span title={'Сервер ' + servers[user_info.server].name} className={'controls-BreadCrumbsView__titleWrapper'}>
														<span className={'controls-BreadCrumbsView__title controls-BreadCrumbsView__title_enabled'}>{servers[user_info.server].name}</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div title={user_info.name} data-qa={'personProfile-header__name'} className={'personProfile-header__name personProfile-header__name-blockLayout ws-ellipsis'}>{user_info.name}</div>
						</div>
					</div>
					<div className={'ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 nanomagicPage-CardLayout__masterDetailWrapper'} tabIndex={0}>
						<div className={'controls-MasterDetail controls-MasterDetail_masterPosition-right ws-flexbox controls_list_theme-default nanomagicPage-CardLayout__masterDetail nanomagicPage-CardLayout__mainBlock_blockLayout'} tabIndex={0}>
							<div className={'controls-MasterDetail_master controls-MasterDetail_master-contrast controls-MasterDetail_master_width'} style={{width: '27%', maxWidth: '192px', minWidth: '192px'}}>
								<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default nanomagicPage-CardLayout__masterScroll controls-MasterDetail_master-template controls-master-template-newDesign controls-master-template-newDesign-right controls-MasterDetail_master-template'} fixcompatible={'1'} tabIndex={0}>
									<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} style={{overscrollBehaviorY: 'auto'}} tabIndex={0}>
										<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
											<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default nanomagicPage-MasterView nanomagicPage-CardLayout__master_blockLayout controls-Scroll-containerBase_userContent'} tabIndex={0}>
												<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
												<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_' + str1 + ' controls-GridControl__viewContainer'} tabIndex={0}>
													<div className={'controls_list_theme-default controls-itemActionsV_menu-hidden'} name={'gridWrapper'} tabIndex={0}>
														<div name={'grid'} className={'controls-Grid controls-Grid_master controls-Grid_grid-layout'} style={{gridTemplateColumns: '100%'}} tabIndex={0}>
															<div className={'controls-Grid__loadingIndicator'} tabIndex={0} style={{display: 'none'}}>
																<div className={'controls-Grid__loadingIndicator-content'}>
																	<div className={'controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-top controls-BaseControl__loadingIndicator__position-top controls-BaseControl__loadingIndicator__state-loading'} data-qa={'indicator_state_loading_position_top'} style={{display: 'none'}}>
																		<div className={'controls-BaseControl__loadingIndicator-content'}>
																			<div className={'controls-BaseControl__loadingIndicatorImage'} />
																		</div>
																	</div>
																</div>
															</div>
															<div data-qa={'loading-trigger-top'} className={'controls-BaseControl__loadingTrigger'} tabIndex={0} style={{top: '138px'}} />
															<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-GridViewV__itemsContainer controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_' + str1}>
																<div />
																<a href={'/work/my-general-info'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-generalInfo'} item-key={'generalInfo'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'my-general-info' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'my-general-info' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'my-general-info' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'my-general-info' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} data-qa={'cell'} data-stickyblockid={'5'} tabIndex={0} style={{}}>
																			{subaction === 'my-general-info' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'my-general-info'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__generalInfo'} title={'О себе'} className={'ws-ellipsis ws-align-self-baseline'}>О себе</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__generalInfo'} title={'О себе'} className={'ws-ellipsis ws-align-self-baseline'}>О себе</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/my-wall'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'my-wall' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'my-wall' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'my-wall' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'my-wall' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'my-wall' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'my-wall'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__wall'} title={'Моя стена'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Моя стена</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__wall'} title={'Моя стена'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Моя стена</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/my-training-skills'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'my-training-skills' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'my-training-skills' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'my-training-skills' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'my-training-skills' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'my-training-skills' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'my-training-skills'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__trainigs-skills'} title={'Обучение и навыки'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Обучение и навыки</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__trainigs-skills'} title={'Обучение и навыки'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Обучение и навыки</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/notice-settings-my-page'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'notice-settings-my-page' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'notice-settings-my-page' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'notice-settings-my-page' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'notice-settings-my-page' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'notice-settings-my-page' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'notice-settings-my-page'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__notice-settings-my-page'} title={'Уведомления'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Уведомления</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__notice-settings-my-page'} title={'Уведомления'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Уведомления</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/my-workplace'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'my-workplace' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'my-workplace' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'my-workplace' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'my-workplace' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'my-workplace' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'my-workplace'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__myWorkplace'} title={'Рабочее место'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Рабочее место</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__myWorkplace'} title={'Рабочее место'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Рабочее место</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/system-access'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'system-access' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'system-access' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'system-access' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'system-access' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'system-access' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'system-access'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__systemAccess'} title={'Доступ в систему'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Доступ в систему</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__systemAccess'} title={'Доступ в систему'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Доступ в систему</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/staff-actions-in-system'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'staff-actions-in-system' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'staff-actions-in-system' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'staff-actions-in-system' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'staff-actions-in-system' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'staff-actions-in-system' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'staff-actions-in-system'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__actions-in-system'} title={'Действия'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Действия</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__actions-in-system'} title={'Действия'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Действия</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/business-processes'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'business-processes' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'business-processes' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'business-processes' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'business-processes' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'business-processes' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'business-processes'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__businessProcesses'} title={'Бизнес-процессы'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Бизнес-процессы</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__businessProcesses'} title={'Бизнес-процессы'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Бизнес-процессы</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/my-signatures'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'my-signatures' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'my-signatures' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'my-signatures' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'my-signatures' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'my-signatures' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'my-signatures'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__my-signatures'} title={'Подписи'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Подписи</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__my-signatures'} title={'Подписи'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Подписи</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/identList'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'identList' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'identList' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'identList' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'identList' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'identList' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'identList'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__identList'} title={'Проходная'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Проходная</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__identList'} title={'Проходная'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Проходная</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
																<a href={'/work/access-and-roles'} className={'controls-ListView__itemV ws-flex-shrink-1 ws-flex-grow-1 nanomagicPage-MasterView__ItemTemplate-reference'} tabIndex={0}>
																	<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-wall'} item-key={'wall'} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<div className={(subaction === 'access-and-roles' ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (subaction === 'access-and-roles' ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (subaction === 'access-and-roles' ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (subaction === 'access-and-roles' ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__item controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
																			{subaction === 'access-and-roles' ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'} /> : ''}
																			{subaction === 'access-and-roles'
																				? <>
																					<div data-stickyblockid={id1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell-content'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																							<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																								<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__accessAndRoles'} title={'Доступ и роли'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Доступ и роли</div>
																							</div>
																						</div>
																					</div>
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top'} style={{top: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_top2Right'} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomLeft'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_bottomRight'} style={{bottom: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_left'} style={{left: '-2px'}} />
																					<div data-stickyblockid={id1} className={'controls-StickyBlock__observationTarget_right'} style={{right: '-2px'}} />
																				</>
																				: <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default '} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'nanomagicPage-MasterView__ItemTemplate ws-inline-flexbox ws-ellipsis ws-justify-content-between'} tabIndex={0}>
																						<div className={'nanomagicPage-MasterView__ItemTemplate-main  ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline'}>
																							<div data-qa={'nanomagicPage-MainLayoutMasterItemTemplateMain__accessAndRoles'} title={'Доступ и роли'} className={'ws-ellipsis ws-align-self-baseline'}>(В разработке) Доступ и роли</div>
																						</div>
																					</div>
																				</div>
																			}
																		</div>
																	</div>
																</a>
															</div>
															<div data-qa={'loading-trigger-bottom'} className={'controls-BaseControl__loadingTrigger'} tabIndex={0} style={{bottom: '138px'}} />
															<div className={'controls-Grid__loadingIndicator'} style={{display: 'none'}} tabIndex={0}>
																<div className={'controls-Grid__loadingIndicator-content'}>
																	<div className={'controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-bottom controls-BaseControl__loadingIndicator__position-bottom controls-BaseControl__loadingIndicator__state-loading'} data-qa={'indicator_state_loading_position_bottom'} style={{display: 'none'}}>
																		<div className={'controls-BaseControl__loadingIndicator-content'}>
																			<div className={'controls-BaseControl__loadingIndicatorImage'} />
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={'controls__BaseControl__footer'} tabIndex={0} />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div fixcompatible={'1'} className={'controls-MasterDetail_details controls-MasterDetail_details-contrast ws-flexbox ws-flex-grow-1'} tabIndex={0}>
								<div className={'nanomagicPage-CardLayout__workspace controls-MasterDetail_detailsContent ws-flex-grow-1 controls-MasterDetail_details_bg-same'} tabIndex={0}>
									<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default myProfile-generalInfo__width ws-flexbox ws-flex-column myProfile-generalInfo nanomagicPage-MainLayout__workspaceTemplate ws-workspace-width-1536'} tabIndex={0}>
										<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} style={{overscrollBehaviorY: 'auto'}} tabIndex={0}>
											<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'} style={{maxHeight: window.innerHeight - 120 + 'px'}}>
												<div className={'personData_Page controls__block-layout controls-Scroll-containerBase_userContent'} tabIndex={0}>
													<div className={'controls-margin_bottom-xs personData_Page__block controls__block-layout-item'}>
														<div className={'myProfile-generalInfo__widthFix'}>
															<div className={'myProfile-generalInfo__column myProfile-generalInfo__columnOffset'}>
																<div className={'personData_PageFrom controls-margin_top-s controls-margin_bottom-3xs controls-margin_left-xl'} tabIndex={0}>
																	<div className={'controls-margin_top-2xs controls-margin_bottom-2xs personData_PageFrom__field'}>
																		<div className={'ws-flexbox ws-align-items-center'}>
																			<a className={'controls-Label controls-Label_underline_none personData_PageFrom__title'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
																				<div className={'controls-Label__wrapper'}>
																					<div className={'controls-Label__caption controls-fontsize-undefined controls-Label__caption_fontsize-default controls-Label__caption_fontColorStyle-label controls-Label__caption_underline_none controls-Label__caption_underline_none_edit'}>Дата рождения</div>
																				</div>
																			</a>
																			<span data-qa={'personProfile-GeneralInfo__birthDate_readOnly'} className={''}>{new Date(y2, m - 1, d).toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'})}</span>
																			<a data-qa={'personProfile-GeneralInfo__age'} className={'controls-Label controls-Label_underline_none controls-margin_left-s'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
																				<div className={'controls-Label__wrapper'}>
																					<div className={'controls-Label__caption controls-fontsize-undefined controls-Label__caption_fontsize-default controls-Label__caption_fontColorStyle-label controls-Label__caption_underline_none controls-Label__caption_underline_none_edit'}>{date}</div>
																				</div>
																			</a>
																			<div title={sex ? 'Женский' : 'Мужской'} data-qa={'personProfile-GeneralInfo__gender_man'} className={'myProfile-generalInfo__genderIcon'}>
																				<svg ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-icon_size-m controls-icon_style-secondary controls-icon_svg undefined'} fillRule={'evenodd'} tabIndex={0}>
																					<use xlinkHref={'/asset/resource/Person-icons/Gender.svg#icon-'+ (sex ? 'Woman' : 'Man') + 'Bold'} />
																				</svg>
																			</div>
																		</div>
																		<div className={'ws-flexbox ws-align-items-baseline'}>
																			{/*<div className={'controls-Dropdown controls-margin_right-m controls-margin_left-m'} data-qa={'personProfile-BirthYear__privacy'} tabIndex={0}>*/}
																			{/*	<div tabIndex={0} className={'controls-Dropdown__wrapper controls-Dropdown-fontsize'}>*/}
																			{/*		<div name={'popupTarget'} tabIndex={0} className={'controls-Dropdown__content-wrapper  controls-Dropdown__text_enabled controls-Dropdown__item_style-undefined controls-Dropdown__defaultItem controls-text-link'}>*/}
																			{/*			<div title={'Показывать дату рождения'} className={'controls-Dropdown__text-wrapper controls-Dropdown__text-wrapper-hovered'}>*/}
																			{/*				<div data-qa={'controls-Dropdown__content'} className={'controls-Dropdown__text'}>Показывать дату рождения</div>*/}
																			{/*				<span className={'controls-Dropdown__hasMoreText'} />*/}
																			{/*			</div>*/}
																			{/*		</div>*/}
																			{/*	</div>*/}
																			{/*</div>*/}
																			{/*<div className={'personData_Page__formPrivacyWrapper'}>*/}
																			{/*	<div className={'controls-Dropdown controls-margin_right-m controls-margin_left-3xs'} data-qa={'personProfile-BirthDate__privacy'}>*/}
																			{/*		<div tabIndex={0} className={'controls-Dropdown__wrapper controls-Dropdown-fontsize'}>*/}
																			{/*			<div name={'popupTarget'} tabIndex={0} className={'controls-Dropdown__content-wrapper  controls-Dropdown__text_enabled controls-Dropdown__item_style-undefined controls-Dropdown__defaultItem controls-text-link'}>*/}
																			{/*				<div title={'Для всех'} className={'controls-Dropdown__text-wrapper controls-Dropdown__text-wrapper-hovered'}>*/}
																			{/*					<div data-qa={'controls-Dropdown__content'} className={'controls-Dropdown__text'}>Для всех</div>*/}
																			{/*					<span className={'controls-Dropdown__hasMoreText'} />*/}
																			{/*				</div>*/}
																			{/*			</div>*/}
																			{/*		</div>*/}
																			{/*	</div>*/}
																			{/*</div>*/}
																		</div>
																	</div>
																</div>
																<div className={'controls-margin_top-xs controls-margin_bottom-m'}>
																	{user_info.info
																		? <div className={'controls_spoiler_theme-default controls-Cut__container'} tabIndex={0}>
																			<div className={'controls-Cut'} tabIndex={0} style={{maxHeight: 'calc(110px + var(--line-height_m_inputArea);'}}>
																				<div name={'content'} className={'controls-Cut__content'}>
																					<div className={'controls-padding_left-xl controls-padding_right-m myProfile-generalInfo__note'} tabIndex={0}>
																						<div className={'controls_RichEditor_theme-default richEditor_richContentRender richEditor_richContentRender_fontSize-m richEditor_richContentRender_lineHeight-m richEditor_richContentRender richEditor_richContentRender_readOnly myProfile-generalInfo__note_blockContacts'} tabIndex={0}>
																							{user_info.info}
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		: <div className={'controls-text-label controls-margin_left-xl controls-margin_top-xs'}>
																			<span>Расскажите </span>
																			<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} title={'о себе'}>
																					<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
																						<span className={'controls-BaseButton__text controls-text-link controls-Button__text-link_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>о себе</span>
																					</span>
																				</span>
																			<span>: интересы, увлечения </span>
																		</div>}
																</div>
															</div>
														</div>
													</div>
													<div className={'controls-margin_bottom-xs personData_Page__block controls__block-layout-item'}>
														<div className={'controls-margin_top-m controls-margin_bottom-m myProfile-generalInfo__widthFix'}>
															<div className={'personCard-Contact__list myProfile-generalInfo__blockContact ws-ellipsis'} tabIndex={0}>
																<div className={'controls-padding_left-xl personCard-Contact__header'}>
																	<span className={'controls-Header__caption controls-heading__uppercase controls-Header__fontweight-default controls-fontsize-m controls-Header-fontsize-m controls-Header_readonly controls-Header__caption_style-primary personCard-Contact__title '} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>Контакты</span>
																	<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-m controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper controls-margin_left-m personCard-Contact__addBtn controls-inlineheight-m controls-Button-inlineheight-m controls-Button_filled_m'} data-qa={'personCard-Contact__addContactBtn'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Добавить контакт'} tabIndex={0}>
																		<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_m'}>
																			<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-default controls-icon icon-RoundPlus'} />
																		</span>
																	</span>
																</div>
																<div className={'personCard-Contact'} tabIndex={0}>
																	<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default personCard-Contact__columnsContainer'} tabIndex={0}>
																		<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
																		<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_' + str2} tabIndex={0}>
																			<div className={'controls-ListViewV controls_list_theme-default controls-ListView_default controls-itemActionsV_menu-hidden'} tabIndex={0}>
																				<div className={'controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-top controls-BaseControl__loadingIndicator__position-top controls-BaseControl__loadingIndicator__state-loading'} data-qa={'indicator_state_loading_position_top'} style={{display: 'none'}}>
																					<div className={'controls-BaseControl__loadingIndicator-content'}>
																						<div className={'controls-BaseControl__loadingIndicatorImage'} />
																					</div>
																				</div>
																				<div data-qa={'loading-trigger-top'} className={'controls-BaseControl__loadingTrigger'} tabIndex={0} style={{top: '57.6px'}} />
																				<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-ListViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_' + str2}>
																					<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key--4'} item-key={-4} data-qa={'item'} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0}>
																						<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_s controls-ListView__item-leftPadding_xl  '}>
																							<div className={'personCard-Contact__viewColumns'} tabIndex={0}>
																								<div className={'personCard-Contact__contactItem controls-margin_top-2xs controls-margin_bottom-2xs'}>
																									<div className={'personCard-Contact__videocall'} tabIndex={0}>
																										<div className={'ws-align-self-center controls-margin_right-s icon-16 icon-VideoCall icon-primary'} />
																										<div className={'personCard-Contact__title'}>Видеозвонок</div>
																										<div className={'controls-Dropdown personCard-Contact__privacyBtn controls-margin_right-2xs'} data-qa={'personCard-Contact__videoPrivacy'} tabIndex={0}>
																											<div tabIndex={0} className={'controls-Dropdown__wrapper controls-Dropdown-fontsize'}>
																												<div name={'popupTarget'} tabIndex={0} className={'controls-Dropdown__content-wrapper  controls-Dropdown__text_enabled controls-Dropdown__item_style-undefined controls-Dropdown__defaultItem controls-text-link'}>
																													<div title={'Для всех'} className={'controls-Dropdown__text-wrapper controls-Dropdown__text-wrapper-hovered'}>
																														<div data-qa={'controls-Dropdown__content'} className={'controls-Dropdown__text'}>Для всех</div>
																														<span className={'controls-Dropdown__hasMoreText'} />
																													</div>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key--3'} item-key={-3} data-qa={'item'} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0}>
																						<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_s controls-ListView__item-leftPadding_xl  '}>
																							<div className={'personCard-Contact__viewColumns'} tabIndex={0}>
																								<div className={'personCard-Contact__contactItem controls-margin_top-2xs controls-margin_bottom-2xs'}>
																									<div className={'personCard-Contact__workplace personCard-Contact__workplace_secondLine'} tabIndex={0}>
																										<div className={'controls-margin_right-s ws-align-self-baseline controls-margin_top-2xs icon-16 icon-MapMarkerNull icon-primary'} />
																										<div className={'personCard-Contact__title personCard-Contact__city'}>{user_info.land}</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-......'} item-key={123} data-qa={'item'} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0}>
																						<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_s controls-ListView__item-leftPadding_xl  '}>
																							<div className={'personCard-Contact__viewColumns'} tabIndex={0}>
																								<div className={'personCard-Contact__contactItem controls-margin_top-2xs controls-margin_bottom-2xs'}>
																									<span className={'icon-16 icon-EmailNew icon-primary controls-icon_size-s personCard-Contact__icon controls-margin_top-2xs'} />
																									<div className={'personCard-Contact__contactValues'}>
																										<div className={'personCard-Contact__dataContact'}>
																											<div className={'personCard-Contact__value'}>{user_info.email}</div>
																											<div className={'controls-Dropdown personCard-Contact__privacyBtn'} data-qa={'personCard-Contact__privacy'} tabIndex={0}>
																												<div tabIndex={0} className={'controls-Dropdown__wrapper controls-Dropdown-fontsize'}>
																													<div name={'popupTarget'} tabIndex={0} className={'controls-Dropdown__content-wrapper  controls-Dropdown__text_enabled controls-Dropdown__item_style-undefined controls-Dropdown__defaultItem controls-text-link'}>
																														<div title={'Скрыто'} className={'controls-Dropdown__text-wrapper controls-Dropdown__text-wrapper-hovered'}>
																															<div data-qa={'controls-Dropdown__content'} className={'controls-Dropdown__text'}>{types[user_info.email_status]}</div>
																															<span className={'controls-Dropdown__hasMoreText'}/>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>
																										<div className={'personCard-Contact__comment controls-text-unaccented controls-fontsize-xs'} />
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div data-qa={'loading-trigger-bottom'} className={'controls-BaseControl__loadingTrigger'} tabIndex={0} style={{bottom: '57.6px'}} />
																				<div className={'controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-bottom controls-BaseControl__loadingIndicator__position-bottom controls-BaseControl__loadingIndicator__state-loading'} data-qa={'indicator_state_loading_position_bottom'} style={{display: 'none'}}>
																					<div className={'controls-BaseControl__loadingIndicator-content'}>
																						<div className={'controls-BaseControl__loadingIndicatorImage'} />
																					</div>
																				</div>
																			</div>
																			<div className={'controls__BaseControl__footer'} tabIndex={0} />
																		</div>
																	</div>
																	<div />
																</div>
															</div>
														</div>
													</div>
													<div className={'controls-margin_bottom-xs personData_Page__block controls__block-layout-item'}>
														<div className={'controls-margin_top-xs controls-margin_bottom-s myProfile-generalInfo__widthFix'}>
															<div className={'ProfileAccess-SocialProfiles'} tabIndex={0}>
																<div className={'controls-margin_left-xl controls-margin_top-xs controls-inlineheight-m ws-flexbox ws-align-items-center'}>
																	<span className={'controls-Header__caption controls-heading__uppercase controls-Header__fontweight-default controls-fontsize-m controls-Header-fontsize-m controls-Header_readonly controls-Header__caption_style-primary controls-margin_right-m '} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>Профили (В разработке)</span>
																</div>
																<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default controls-BaseButton__emptyTemplate__wrapper controls-margin_top-2xs'} tabIndex={0}>
																	<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
																	<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_' + str3 + ' controls-BaseControl__viewContainer_empty'} tabIndex={0}>
																		<div className={'controls-ListViewV controls_list_theme-default controls-ListView_default controls-itemActionsV_menu-hidden'} tabIndex={0}>
																			<div className={'controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-top controls-BaseControl__loadingIndicator__position-top controls-BaseControl__loadingIndicator__state-loading'} data-qa={'indicator_state_loading_position_top'} style={{display: 'none'}}>
																				<div className={'controls-BaseControl__loadingIndicator-content'}>
																					<div className={'controls-BaseControl__loadingIndicatorImage'} />
																				</div>
																			</div>
																			<div data-qa={'loading-trigger-top'} className={'controls-BaseControl__loadingTrigger'} tabIndex={0} style={{top: '19.2px'}} />
																			<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-ListViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_87ceb8ae-8d30-4561-a836-57dae4a6dec0'} />
																			<div className={'controls-BaseControl__emptyTemplate'} tabIndex={0}>
																				<div className={'controls-BaseControl__emptyTemplate__contentWrapper'}>
																					<div className={'ProfileAccess-SocialProfiles__table-empty controls-text-unaccented controls-margin_left-xl controls-margin_right-m controls-margin_top-s'} tabIndex={0}>Укажите профили, которые будут использоваться для входа в систему</div>
																					<div className={'ws-flexbox controls-margin_left-xl controls-margin_right-m controls-margin_top-s controls-margin_bottom-xs'} tabIndex={0}>
																						<img alt={''} className={'oauth-List__iconRadius controls-icon_size-m ws-flex-shrink-0 oauth__icon'} src={'/asset/resource/AuthControlsCDN/1.0.0/oauthIcons/vk.svg'} title={'ВКонтакте'} tabIndex={0} />
																						<img alt={''} className={'oauth-List__iconRadius controls-icon_size-m ws-flex-shrink-0 oauth__icon'} src={'/asset/resource/AuthControlsCDN/1.0.0/oauthIcons/apple.svg'} title={'Apple'} tabIndex={0} />
																						<img alt={''} className={'oauth-List__iconRadius controls-icon_size-m ws-flex-shrink-0 oauth__icon'} src={'/asset/resource/AuthControlsCDN/1.0.0/oauthIcons/gosuslugi.svg'} title={'Госуслуги'} tabIndex={0} />
																						<img alt={''} className={'oauth-List__iconRadius controls-icon_size-m ws-flex-shrink-0 oauth__icon'} src={'/asset/resource/AuthControlsCDN/1.0.0/oauthIcons/yandex.svg'} title={'Яндекс'} tabIndex={0} />
																						<img alt={''} className={'oauth-List__iconRadius controls-icon_size-m ws-flex-shrink-0 oauth__icon'} src={'/asset/resource/AuthControlsCDN/1.0.0/oauthIcons/google.svg'} title={'Google'} tabIndex={0} />
																						<img alt={''} className={'oauth-List__iconRadius controls-icon_size-m ws-flex-shrink-0 oauth__icon'} src={'/asset/resource/AuthControlsCDN/1.0.0/oauthIcons/mail.svg'} title={'Mail.ru'} tabIndex={0} />
																						<img alt={''} className={'oauth-List__iconRadius controls-icon_size-m ws-flex-shrink-0 oauth__icon'} src={'/asset/resource/AuthControlsCDN/1.0.0/oauthIcons/ok.svg'} title={'Одноклассники'} tabIndex={0} />
																					</div>
																				</div>
																			</div>
																			<div data-qa={'loading-trigger-bottom'} className={'controls-BaseControl__loadingTrigger'} tabIndex={0} style={{bottom: '19.2px'}} />
																			<div className={'controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-bottom controls-BaseControl__loadingIndicator__position-bottom controls-BaseControl__loadingIndicator__state-loading'} data-qa={'indicator_state_loading_position_bottom'} style={{display: 'none'}}>
																				<div className={'controls-BaseControl__loadingIndicator-content'}>
																					<div className={'controls-BaseControl__loadingIndicatorImage'} />
																				</div>
																			</div>
																		</div>
																		<div className={'controls__BaseControl__footer'} tabIndex={0} />
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className={'controls-margin_bottom-xs personData_Page__block controls__block-layout-item'}>
														<div className={'myProfile-generalInfo__widthFix'}>
															<div className={'personData_Page__experience'} tabIndex={0}>
																<div>
																	<div className={'controls-margin_left-xl controls-margin_right-m'}>
																		<div className={'personData_Experience__header'}>
																			<span className={'controls-Header__caption controls-heading__uppercase controls-Header__fontweight-default controls-fontsize-m controls-Header-fontsize-m controls-Header_readonly controls-Header__caption_style-primary personData_Experience__title '} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>Опыт работы</span>
																			<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-m controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter personData_Experience__addBtn controls-inlineheight-m controls-Button-inlineheight-m controls-Button_filled_m'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} onClick={changeRole}>
																				<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_m'}>
																					<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-default controls-icon icon-RoundPlus'} />
																				</span>
																			</span>
																			<a className={'controls-Label controls-Label_underline_none personData_Experience__commonExperience'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
																				<div className={'controls-Label__wrapper'}>
																					<div className={'controls-Label__caption controls-fontsize-undefined controls-Label__caption_fontsize-default controls-Label__caption_fontColorStyle-label controls-Label__caption_underline_none controls-Label__caption_underline_none_edit'}>{stag}</div>
																				</div>
																			</a>
																		</div>
																	</div>
																	<div className={''}>
																		<div className={'personData_Experience__content'} tabIndex={0}>
																			<div data-qa={'person-Experience__list'} className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default'} tabIndex={0}>
																				<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
																				<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_' + str4} tabIndex={0}>
																					<div className={'controls-ListViewV controls_list_theme-default controls-ListView_default controls-itemActionsV_menu-hidden'} tabIndex={0}>
																						<div className={'controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-top controls-BaseControl__loadingIndicator__position-top controls-BaseControl__loadingIndicator__state-loading'} data-qa={'indicator_state_loading_position_top'} style={{display: 'none'}}>
																							<div className={'controls-BaseControl__loadingIndicator-content'}>
																								<div className={'controls-BaseControl__loadingIndicatorImage'} />
																							</div>
																						</div>
																						<div data-qa={'loading-trigger-top'} className={'controls-BaseControl__loadingTrigger'} tabIndex={0} style={{top: '57.9px'}} />
																						<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-ListViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_' + str4}>
																							{elems}
																						</div>
																						<div data-qa={'loading-trigger-bottom'} className={'controls-BaseControl__loadingTrigger'} tabIndex={0} style={{bottom: '57.9px'}} />
																						<div className={'controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-bottom controls-BaseControl__loadingIndicator__position-bottom controls-BaseControl__loadingIndicator__state-loading'} data-qa={'indicator_state_loading_position_bottom'} style={{display: 'none'}}>
																							<div className={'controls-BaseControl__loadingIndicator-content'}>
																								<div className={'controls-BaseControl__loadingIndicatorImage'} />
																							</div>
																						</div>
																					</div>
																					<div className={'controls__BaseControl__footer'} tabIndex={0} />
																				</div>
																			</div>
																			<div tabIndex={0}>
																				<div tabIndex={0} />
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className={'controls-Scroll-containerBase_userContent'} tabIndex={0} />
											</div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
						<div className={'nanomagicPage-CardLayout__workspaceRightOffset'} />
					</div>
				</div>
			</div>
		</>
	)
}

function changeRole(e) {
	let popup = document.querySelector('#popup'),
		root = ReactDOM.createRoot(popup),
		div = <PersonCardExpEditor />
	if (user_info.user_group < 4) root.render(div)
}

function saveDate() {
	let value = '01.01.1970',
		id = window.localStorage.getItem('user_id')
	$.get(`https://www.workspace-loliland.ru/api/users/saveDate/${id}/${value}`)
	window.location.reload()
}

export default MyGeneralInfo