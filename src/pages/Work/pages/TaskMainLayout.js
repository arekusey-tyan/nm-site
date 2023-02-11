import React from 'react'
import { subaction } from '../../../index.js'
import { getTasks } from '../../../utils/Request.js'
import { Tasks } from '../subpages/Tasks.tool.js'

class TaskPage extends React.Component {
	constructor(props) {
		super(props)
		this.page = this.page.bind(this)
	}

	page(pageName) {
		window.location.href = '/work/' + pageName.currentTarget.dataset.page;
	}
	
	render() {
		let tList = getTasks(),
			fromMe = 0,
			outMe = 0
		tList.tasks.forEach(element => {
			element.tispol.split(',').forEach(el => {
				if (el === window.localStorage.getItem('user_id')) fromMe++
			})
			if (element.tauthor_id === +window.localStorage.getItem('user_id')) outMe++
		})
		return (
			<>
				<div className='ws-flexbox ws-flex-grow-0 ws-flex-shrink-0'>
					<div data-qa='nanomagicPage-tabs' className='controls-Tabs controls-Tabs__horizontal controls-Tabs_inlineHeight-s nanomagicPage-MainLayout__tabs' name='container' tabIndex={0}>
						<div name='wrapper' className='controls-Tabs-wrapper controls-Tabs-wrapper__horizontal'>
							{['tasks-in-work', 'tasks-done', 'tasks-controlled'].includes(subaction) ?
								<>
									<div name='tabtasks-in-work' title='В работе' data-name='tasks-in-work' className='controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_first controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink' style={{ order: 30 }}>
										<div name='TabContent0' className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'tasks-in-work' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
											<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'tasks-in-work' ? 'controls-Tabs__item_view_selected controls-text-primary' : 'controls-Tabs__item_state_default controls-text-secondary')} href='/work/tasks-in-work' tabIndex={0} style={{}} data-qa={subaction === 'tasks-controlled' ? 'TabsItemSelected' : ''}>
												<div className='controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s' tabIndex={0}>В работе</div>
											</a>
										</div>
									</div>
									<div name='tabtasks-controlled' title='На контроле' data-name='tasks-controlled' className='controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink' style={{ order: 31 }}>
										<div name='TabContent1' className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'tasks-controlled' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
											<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'tasks-controlled' ? 'controls-Tabs__item_view_selected controls-text-primary' : 'controls-Tabs__item_state_default controls-text-secondary')} href='/work/tasks-controlled' tabIndex={0} style={{}} data-qa={subaction === 'tasks-controlled' ? 'TabsItemSelected' : ''}>
												<div className='controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s' tabIndex={0}>На контроле</div>
											</a>
										</div>
									</div>
									<div name='tabtasks-done' title='Выполненные' data-name='tasks-done' className='controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink' style={{ order: 32 }}>
										<div name='TabContent2' className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'tasks-done' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
											<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'tasks-done' ? 'controls-Tabs__item_view_selected controls-text-primary' : 'controls-Tabs__item_state_default controls-text-secondary')} href='/work/tasks-done' tabIndex={0} style={{}} data-qa={subaction === 'tasks-done' ? 'TabsItemSelected' : ''}>
												<div className='controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s' tabIndex={0}>Выполненные</div>
											</a>
										</div>
									</div>
								</> :
								<>
									<div name='tabtasks-from-me' title='Список' data-name='tasks-from-me' className='controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_first controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink' style={{ order: 30 }}>
										<div name='TabContent0' className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'tasks-from-me' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
											<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'tasks-from-me' ? 'controls-Tabs__item_view_selected controls-text-primary' : 'controls-Tabs__item_state_default controls-text-secondary')} href='/work/tasks-from-me' tabIndex={0} style={{}} data-qa={subaction === 'tasks-controlled' ? 'TabsItemSelected' : ''}>
												<div className='controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s' tabIndex={0}>Список</div>
											</a>
										</div>
									</div>
									<div name='tabtasks-returned' title='Вернулись' data-name='tasks-returned' className='controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink' style={{ order: 31 }}>
										<div name='TabContent1' className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'tasks-returned' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
											<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'tasks-returned' ? 'controls-Tabs__item_view_selected controls-text-primary' : 'controls-Tabs__item_state_default controls-text-secondary')} href='/work/tasks-returned' tabIndex={0} style={{}} data-qa={subaction === 'tasks-controlled' ? 'TabsItemSelected' : ''}>
												<div className='controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s' tabIndex={0}>Вернулись</div>
											</a>
										</div>
									</div>
								</>
							}
							<div className='controls-Tabs__space controls-Tabs__space_inlineHeight-s'>
								<div className='nanomagicPage-MainLayout__beforeTabsTemplateLeft ws-flexbox ws-align-items-baseline ws-align-self-baseline ws-flex-shrink-1' tabIndex={0} style={{ minWidth: '0px' }}>
									<div tabIndex={0}></div>
									<div className='hint-HintInfoboxContainer controls_Hint_theme-default nanomagicPage-MainLayout__filter nanomagicPage-MainLayout__filterLeft nanomagicPage-MainLayout__filterLeft_contrast' data-name='nanomagicPage-MainLayout__filterTemplate' tabIndex={0}>
										<div className='controls_filter_theme-default controls-FilterView controls-FilterView-left controls-FilterView_withButton' tabIndex={0}>
											<div className='controls-FilterView__wrapper'></div>
											<div name='detailPanelTarget' data-qa='FilterView__icon' data-name='FilterView__icon' className='controls-FilterView__icon controls-FilterView-button-left controls-FilterView__icon_state_enabled icon-FilterNew'></div>
										</div>
										<div tabIndex={0}></div>
									</div>
								</div>
							</div>
						</div>
						<div className='controls-Tabs__marker controls-Tabs__marker_style-primary controls-Tabs__marker_thickness ws-invisible' style={{}}></div>
					</div>
				</div>
				<div className='nanomagicPage-MainLayout__middle ws-flexbox SbisEnvUI-Parking_same-background'>
					<div className='edws-tasks-InWorkMD nanomagicPage-MainLayout__workspaceTemplate ws-workspace-width-1472' tabIndex={0}>
						<div className='hint-HintBannerContainer controls_Hint_theme-default edws-tasks-InWork-banner' tabIndex={0}>
							<div className='edws3-Controller_ErrorContainer ws-flexbox' tabIndex={0}>
								<div className='controls-MasterDetail controls-MasterDetail_masterPosition-left  ws-flexbox controls_list_theme-default edws-MasterDetail ws-flexbox edws-tasks-InWorkMD edws-MasterDetail' tabIndex={0}>
									<div className='controls-MasterDetail_master controls-MasterDetail_master-contrast controls-MasterDetail_master_width' style={{ width: '330px', maxWidth: '748px', minWidth: '200px' }}>
										<div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-default edws-MasterArea_scroll edws-MasterArea_nanomagicPage masterTasksInWork controls-MasterDetail_master-template controls-master-template-newDesign controls-master-template-newDesign-left controls-MasterDetail_master-template' fixcompatible='1' tabIndex={0}>
											<div className='controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{ overscrollBehaviorY: 'auto' }}>
												<div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content-direction_column'>
													<div className='edws-MasterView controls-Scroll-containerBase_userContent' tabIndex={0}>
														<div tabIndex={0}>
															<div tabIndex={0}></div>
															<div className='controls-BaseControl controls_list_theme-default controls_toggle_theme-default' tabIndex={0}>
																<div name='fakeFocusElem' tabIndex={0} className='controls-BaseControl__fakeFocusElem'></div>
																<div name='viewContainer' className='controls-BaseControl__viewContainer controls-BaseControl__View_ controls-GridControl__viewContainer' tabIndex={0}>
																	<div className='controls_list_theme-default controls-itemActionsV_menu-hidden' name='gridWrapper' tabIndex={0}>
																		<div name='grid' className='controls-Grid controls-Grid_master controls-Grid_grid-layout' tabIndex={0} style={{ gridTemplateColumns: '1fr' }}>
																			<div className='controls-Grid__loadingIndicator' tabIndex={0} style={{ display: 'none' }}>
																				<div className='controls-Grid__loadingIndicator-content'>
																					<div className='controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-top controls-BaseControl__loadingIndicator__position-top controls-BaseControl__loadingIndicator__state-loading' data-qa='indicator_state_loading_position_top' style={{ display: 'none' }}>
																						<div className='controls-BaseControl__loadingIndicator-content'>
																							<div className='controls-BaseControl__loadingIndicatorImage'></div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div data-qa='loading-trigger-top' className='controls-BaseControl__loadingTrigger' tabIndex={0} style={{ top: '27.3px' }}></div>
																			<div name='itemsContainer' data-qa='items-container' className='controls-GridViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_delayed controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_'>
																				<div ws-creates-context='true' ws-delegates-tabfocus='true' attr-data-qa='key--1,ПапкаДокументов' item-key='-1,ПапкаДокументов' data-qa='row' className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master ' + (['tasks-in-work', 'tasks-done', 'tasks-controlled'].includes(subaction) ? 'controls-ListView__item_highlightOnHover js-controls-Grid__data-row' : '') + ' controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0} onClick={this.page} data-page='tasks-in-work'>
																					<div ws-creates-context='true' ws-delegates-tabfocus='true' className={(['tasks-in-work', 'tasks-done', 'tasks-controlled'].includes(subaction) ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master' + (['tasks-in-work', 'tasks-done', 'tasks-controlled'].includes(subaction) ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit controls-hover-background-master controls-Grid__row-cell-background-hover-master ' + (['tasks-in-work', 'tasks-done', 'tasks-controlled'].includes(subaction) ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (['tasks-in-work', 'tasks-done', 'tasks-controlled'].includes(subaction) ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} tabIndex={0} style={{ top: '0px', zIndex: 2 }}>
																						{['tasks-in-work', 'tasks-done', 'tasks-controlled'].includes(subaction) ? <div data-qa='marker' className='controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'></div> : ''}
																						<div ws-creates-context='true' ws-delegates-tabfocus='true' className='controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_s controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default controls-StickyBlock__content'>
																							<div className='controls_Layout_theme-default layout-MasterItem ws-inline-flexbox' tabIndex={0}>
																								<div className='layout-MasterItem__container layout-MasterItem__container_maxLineHeight ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline ws-align-items-baseline'>
																									<div title='Входящие' data-qa='layout-MasterItem__title' className='layout-MasterItem__title ws-ellipsis'>Входящие</div>
																									<div data-qa='layout-MasterItem__icon' className='layout-MasterItem__icon-right ws-flex-shrink-0 ws-align-self-center controls-icon_style-secondary controls-icon_size-s edws-MasterView__icon' tabIndex={0}></div>
																									<div className='layout-MasterItem__counters ws-inline-flexbox ws-flex-nowrap ws-align-self-baseline'>
																										{['tasks-in-work', 'tasks-controlled', 'tasks-done'].includes(subaction) ? <div className="layout-MasterItem__counters_gradient layout-MasterItem__counters_gradient_selected"></div> : ''}
																										<div className={`layout-MasterItem__counters_content ${['tasks-in-work', 'tasks-controlled', 'tasks-done'].includes(subaction) ? 'layout-MasterItem__counters_content_selected' : ''} ws-inline-flexbox ws-flex-nowrap`}>
																											<div data-qa='layout-MasterItem__mainCounter' className='layout-MasterItem__counter layout-MasterItem__counters_content_label layout-MasterItem__counter-'>{fromMe}</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div ws-creates-context='true' ws-delegates-tabfocus='true' attr-data-qa='key--1,ПапкаДокументов' item-key='-1,ПапкаДокументов' data-qa='row' className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master ' + (['tasks-from-me', 'tasks-returned'].includes(subaction) ? 'controls-ListView__item_highlightOnHover js-controls-Grid__data-row' : '') + ' controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0} onClick={this.page} data-page='tasks-from-me'>
																					<div ws-creates-context='true' ws-delegates-tabfocus='true' className={(['tasks-from-me', 'tasks-returned'].includes(subaction) ? 'controls-StickyBlock controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master controls-Grid__row-cell_master ' + (['tasks-from-me', 'tasks-returned'].includes(subaction) ? 'controls-Grid__row-cell_relative' : '') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit controls-hover-background-master controls-Grid__row-cell-background-hover-master ' + (['tasks-from-me', 'tasks-returned'].includes(subaction) ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (['tasks-from-me', 'tasks-returned'].includes(subaction) ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} tabIndex={0} style={{ top: '0px', zIndex: 2 }}>
																						{['tasks-from-me', 'tasks-returned'].includes(subaction) ? <div data-qa='marker' className='controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default'></div> : ''}
																						<div ws-creates-context='true' ws-delegates-tabfocus='true' className='controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_s controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default controls-StickyBlock__content'>
																							<div className='controls_Layout_theme-default layout-MasterItem ws-inline-flexbox' tabIndex={0}>
																								<div className='layout-MasterItem__container layout-MasterItem__container_maxLineHeight ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline ws-align-items-baseline'>
																									<div title='Исходящие' data-qa='layout-MasterItem__title' className='layout-MasterItem__title ws-ellipsis'>Исходящие</div>
																									<div data-qa='layout-MasterItem__icon' className='layout-MasterItem__icon-right ws-flex-shrink-0 ws-align-self-center controls-icon_style-secondary controls-icon_size-s edws-MasterView__icon' tabIndex={0}></div>
																									<div className='layout-MasterItem__counters ws-inline-flexbox ws-flex-nowrap ws-align-self-baseline'>
																										{['tasks-from-me', 'tasks-returned'].includes(subaction) ? <div className="layout-MasterItem__counters_gradient layout-MasterItem__counters_gradient_selected"></div> : ''}
																										<div className={`layout-MasterItem__counters_content ${['tasks-from-me', 'tasks-returned'].includes(subaction) ? 'layout-MasterItem__counters_content_selected' : ''} ws-inline-flexbox ws-flex-nowrap`}>
																											<div data-qa='layout-MasterItem__mainCounter' className='layout-MasterItem__counter layout-MasterItem__counters_content_label layout-MasterItem__counter-'>{outMe}</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div data-qa='loading-trigger-bottom' className='controls-BaseControl__loadingTrigger' tabIndex={0} style={{ bottom: '27.3px' }}></div>
																			<div className='controls-Grid__loadingIndicator' tabIndex={0} style={{ display: 'none' }}>
																				<div className='controls-Grid__loadingIndicator-content'>
																					<div className='controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-bottom controls-BaseControl__loadingIndicator__position-bottom controls-BaseControl__loadingIndicator__state-loading' data-qa='indicator_state_loading_position_bottom' style={{ display: 'none' }}>
																						<div className='controls-BaseControl__loadingIndicator-content'>
																							<div className='controls-BaseControl__loadingIndicatorImage'></div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className='controls__BaseControl__footer' tabIndex={0}></div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='controls-MasterDetail_resizing-line_wrapper controls-MasterDetail_resizingLine_masterPosition-left'>
										<div className='controls-ResizingLine controls_dragnDrop_theme-default controls-MasterDetail_resizing-line controls-MasterDetail_resizing-line-newDesign controls-MasterDetail_resizing-line_position-left' tabIndex={0}>
											<div className='controls-ResizingLine__wrapper'>
												<div className='controls-ResizingLine__areaWrapper controls-ResizingLine__areaWrapper_horizontal controls-ResizingLine__areaWrapper_horizontal_direction-direct'></div>
												<div className='controls-ResizingLine__border controls-ResizingLine__border_horizontal' tabIndex={0}></div>
											</div>
										</div>
									</div>
									<div fixcompatible={1} className='controls-MasterDetail_details controls-MasterDetail_details-contrast ws-flexbox ws-flex-grow-1' tabIndex={0}>
										<div className='brTasks detailTasksInWork controls-MasterDetail_detailsContent  controls-MasterDetail_details-bg-contrast controls-MasterDetail_details-newDesign tlr' tabIndex={0}>
											<div tabIndex={0}></div>
											<div className='person-PopupController__container' tabIndex={0}>
												<div className='edo3-Browser brTasksOnMe' tabIndex={0}>
													<div className='layout-Browser controls_Layout_theme-default edo3-Browser-browser' tabIndex={0}>
														<div tabIndex={0}></div>
														<div tabIndex={0}></div>
														<div className='layout-Browser__content layout-Browser__content' tabIndex={0}>
															<div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-default edo3-Browser-scroll-container undefined' tabIndex={0}>
																<div className='controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{ overscrollBehaviorY: 'auto' }}>
																	<div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content-direction_column controls-Scroll-ContainerBase__contentNotScrollable'>
																		<div className='Hint-ListWrapper controls_Hint_theme-default controls-Scroll-containerBase_userContent' tabIndex={0}>
																			<div className='controls-BaseControl controls_list_theme-default controls_toggle_theme-default edo3-Browser-view controls-air-m Hint-ListWrapper_list' tabIndex={0}>
																				<div name='fakeFocusElem' tabIndex={0} className='controls-BaseControl__fakeFocusElem'></div>
																				<div name='viewContainer' className='controls-BaseControl__viewContainer controls-BaseControl__View_28a45c23-1a96-415e-bd0a-41522719a689 controls-GridControl__viewContainer' tabIndex={0}>
																					<div className='controls_list_theme-default controls-itemActionsV_menu-hidden' name='gridWrapper' tabIndex={0}>
																						<div name='grid' className='controls-Grid controls-Grid_default controls-Grid_grid-layout controls-Grid_support-ladder controls-GridView__ladderOffset-' tabIndex={0} style={{ gridTemplateColumns: 'max-content 0px auto 1fr 160px' }}>
																							<div className='controls-Grid__loadingIndicator' tabIndex={0} style={{ display: 'none' }}>
																								<div className='controls-Grid__loadingIndicator-content'>
																									<div className='controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-top controls-BaseControl__loadingIndicator__position-top controls-BaseControl__loadingIndicator__state-loading' data-qa='indicator_state_loading_position_top' style={{ display: 'none' }}>
																										<div className='controls-BaseControl__loadingIndicator-content'>
																											<div className='controls-BaseControl__loadingIndicatorImage'></div>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div data-qa='loading-trigger-top' className='controls-BaseControl__loadingTrigger' tabIndex='0' style={{ top: '260.7px' }}></div>
																							<div name='itemsContainer' data-qa='items-container' className='controls-GridViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_'>
																								<Tasks />
																							</div>
																							<div data-qa='loading-trigger-bottom' className='controls-BaseControl__loadingTrigger' tabIndex={0} style={{ bottom: '307.7px' }}></div>
																							<div className='controls-Grid__loadingIndicator' tabIndex={0} style={{}}>
																								<div className='controls-Grid__loadingIndicator-content'>
																									<div className='controls-BaseControl__loadingIndicator controls-BaseControl__loadingIndicator-bottom controls-BaseControl__loadingIndicator__position-bottom controls-BaseControl__loadingIndicator__state-hidden-loading'>
																										<div className='controls-BaseControl__loadingIndicator-content'>
																											<div className='controls-BaseControl__loadingIndicatorImage'></div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div className='controls__BaseControl__footer' tabIndex={0}></div>
																				</div>
																				{/* <div className='controls-BaseControl__pagingContainer controls-BaseControl__pagingContainer_position-right'>
																					<div className='controls-BaseControl__pagingWrapper'>
																						<div className='controls_paging_theme-default controls-PagingV controls-BaseControl__scrollPaging' tabIndex={0}>
																							<div className='controls-Paging__contrast'>
																								<div className='controls-Paging__wrapper'>
																									<span title='В начало' data-qa='Paging__Begin' className='controls-Paging__btn controls-Paging__btn-Begin controls-Paging__arrow controls-Paging__arrow__state-disabled'>
																										<i className='controls-Paging_icon-Begin controls-Paging__icon'></i>
																									</span>
																									<span title='Назад' data-qa='Paging__Prev' className='controls-Paging__btn controls-Paging__btn-Prev  controls-Paging__btn_separated  controls-Paging__arrow controls-Paging__arrow__state-disabled'>
																										<i className='controls-Paging_icon-Prev controls-Paging__icon'></i>
																									</span>
																									<span title='Вперёд' data-qa='Paging__Next' className='controls-Paging__btn controls-Paging__btn-Next   controls-Paging__btn_separated  controls-Paging__arrow controls-Paging__arrow__state-normal'>
																										<i className='controls-Paging_icon-Next controls-Paging__icon'></i>
																									</span>
																									<span title='В конец' data-qa='Paging__End' className='controls-Paging__btn controls-Paging__btn-End  controls-Paging__btn_separated  controls-Paging__arrow controls-Paging__arrow__state-normal'>
																										<i className='controls-Paging_icon-End controls-Paging__icon'></i>
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div> */}
																			</div>
																		</div>
																	</div>
																</div>
																<div name='topShadow' data-qa='Scroll__shadow_top' className='controls-Scroll__shadow controls-Scroll__shadow_horizontal controls-Scroll__shadow_top controls-Scroll__shadow_top_style-default  ws-invisible'></div>
																<div data-qa='Scroll__shadow_bottom' className='controls-Scroll__shadow controls-Scroll__shadow_horizontal controls-Scroll__shadow_bottom controls-Scroll__shadow_bottom_style-default'></div>
																<div className='controls_scroll_theme-default controls-VScrollbar  controls-VScrollbar_vertical controls-VScrollbar_vertical_size-l   controls-VScrollbar_horizontal-track_size-l controls-Scroll__scrollbar controls-Scroll__scrollbar_hidden' name='scrollbar' data-qa='VScrollbar_vertical' tabIndex={0} style={{ top: '0px', bottom: '0px' }}>
																	<div name='thumb' className='controls-VScrollbar__thumbWrapper controls-VScrollbar__thumbWrapper_size-l controls-VScrollbar__thumbWrapper_vertical controls-padding_top-3xs controls-padding_bottom-3xs' tabIndex={0} style={{ transform: 'translateY(0px)', height: '465.574px' }}>
																		<div data-qa='VScrollbar__thumb' className='controls-VScrollbar__thumb controls-VScrollbar__thumb_accented controls-VScrollbar__thumb_size-l controls-VScrollbar__thumb_accented controls-VScrollbar__thumb_accented_vertical controls-VScrollbar__thumb_vertical controls-VScrollbar__thumb_vertical_size-l'></div>
																	</div>
																</div>
															</div>
														</div>
														<div className='layout-Browser__hint' tabIndex={0}></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div tabIndex={0}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}


export default TaskPage