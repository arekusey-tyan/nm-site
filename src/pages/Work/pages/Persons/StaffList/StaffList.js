import React from 'react'
import {subaction} from '../../../../../index.js'
import {userCount, user_count_from_servers, getCurator, getUsersFromServer} from '../../../../../utils/Request.js'
import {create_html_element, stringGen} from '../../../../../utils/functions.js'

function StaffList() {
	let id1 = Math.floor(Math.random() * 100),
		id2 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12)

	console.log(user_count_from_servers)

	return (
		<>
			<div className={'ws-flexbox ws-flex-grow-0 ws-flex-shrink-0'}>
				<div data-qa={'nanomagicPage-tabs'} className={'controls-Tabs controls-Tabs__horizontal  controls-Tabs_inlineHeight-s nanomagicPage-MainLayout__tabs'} name={'container'} tabIndex={0}>
					<div name={'wrapper'} className={'controls-Tabs-wrapper controls-Tabs-wrapper__horizontal'}>
						<div name={'tabstaff-list'} title={'Список'} data-name={'staff-list'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_first controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 30}}>
							<div name={'TabContent0'} className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'staff-lists' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
								<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'staff-list' ? 'controls-Tabs__item_view_selected' : 'controls-Tabs__item_state_default') + ' controls-text-primary'} data-qa={(subaction === 'staff-list' ? 'TabsItemSelected' : '')} href={'/work/staff-list'} tabIndex={0}>
									<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Список</div>
								</a>
							</div>
						</div>
						<div name={'tabstaff-posts'} title={'Должности'} data-name={'staff-posts'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 32}}>
							<div name={'TabContent1'} className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'staff-posts' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
								<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'staff-posts' ? 'controls-Tabs__item_view_selected' : 'controls-Tabs__item_state_default') + ' controls-text-secondary'} data-qa={(subaction === 'staff-posts' ? 'TabsItemSelected' : '')} href={'/work/staff-posts'} tabIndex={0}>
									<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Должности</div>
								</a>
							</div>
						</div>
						<div name={'tabstaff-statistic-new'} title={'Статистика'} data-name={'staff-statistic-new'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 31}}>
							<div name={'TabContent2'} className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'staff-statistic-new' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
								<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'staff-statistic-new' ? 'controls-Tabs__item_view_selected' : 'controls-Tabs__item_state_default') + ' controls-text-secondary'} data-qa={(subaction === 'staff-statistic-new' ? 'TabsItemSelected' : '')} href={'/work/staff-statistic-new'} tabIndex={0}>
									<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Статистика</div>
								</a>
							</div>
						</div>
						<div name={'tabstaff-structure'} title={'Структура'} data-name={'staff-structure'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 33}}>
							<div name={'TabContent3'} className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'staff-structure' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
								<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'staff-structure' ? 'controls-Tabs__item_view_selected' : 'controls-Tabs__item_state_default') + ' controls-text-secondary'} data-qa={(subaction === 'staff-structure' ? 'TabsItemSelected' : '')} href={'/work/staff-structure'} tabIndex={0}>
									<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Структура</div>
								</a>
							</div>
						</div>
						<div name={'tabstaff-verification'} title={'Проверка'} data-name={'staff-verification'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_last controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_extreme controls-Tabs__item_extreme_last controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 34}}>
							<div name={'TabContent4'} className={'controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (subaction === 'staff-verification' ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'}>
								<a className={'ws-flexbox ws-align-items-center ' + (subaction === 'staff-verification' ? 'controls-Tabs__item_view_selected' : 'controls-Tabs__item_state_default') + ' controls-text-secondary'} data-qa={(subaction === 'staff-verification' ? 'TabsItemSelected' : '')} href={'/work/staff-verification'} tabIndex={0}>
									<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Проверка</div>
								</a>
							</div>
						</div>
						<div className={'controls-Tabs__space controls-Tabs__space_inlineHeight-s'}>
							<div className={'nanomagicPage-MainLayout__beforeTabsTemplateLeft ws-flexbox ws-align-items-baseline ws-align-self-baseline ws-flex-shrink-1 ws-flex-grow-1'} tabIndex={0} style={{minWidth: '0px'}}>
								<div tabIndex={0} style={{display: 'none'}} />
							</div>
						</div>
					</div>
					<div className={'controls-Tabs__marker controls-Tabs__marker_style-primary controls-Tabs__marker_thickness ws-invisible'} style={{width: '46.7656px', right: '381.453px'}} />
				</div>
			</div>
			<div className={'nanomagicPage-MainLayout__middle ws-flexbox SbisEnvUI-ParkingBody_same-background'}>
				<div className={'staff-Page__listContainer ws-flexbox controls__block-wrapper tr nanomagicPage-MainLayout__workspaceTemplate ws-workspace-width-1728'} style={{maxHeight: '100%'}} tabIndex={0}>
					<div className={'ws-flex-grow-1 ws-flex-shrink-1 staff-Page__mainContainer controls__block'} style={{minWidth: '1783px'}} tabIndex={0}>
						<div className={'layout-Browser controls_Layout_theme-default staffCommon-List'} tabIndex={0} ws-autofocus={'true'}>
							<div tabIndex={0} />
							<div className={'layout-Browser__content layout-Browser__content'} tabIndex={0}>
								<div scope={'[object Object]'} className={'staffCommon-List__container ws-flexbox ws-flex-column'} tabIndex={0}>
									<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default staffCommon-List__scrollContainer ws-flex-grow-1 controls-air-m'} tabIndex={0}>
										<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} style={{overscrollBehaviorY: 'auto'}} tabIndex={0}>
											<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column controls-Scroll-ContainerBase__contentNotScrollable'}>
												<div className={'Hint-ListWrapper controls_Hint_theme-default controls-Scroll-containerBase_userContent'} tabIndex={0}>
													<div className={'controls_list_theme-default controls-Explorer staffCommon-List__view Hint-ListWrapper_list'} data-qa={'staffCommon-List_view'} tabIndex={0}>
														<div className={'controls-Explorer__wrapper'} tabIndex={0}>
															<div />
															<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default controls-Explorer__view'} tabIndex={0}>
																<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
																<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_' + id2 + ' controls-GridControl__viewContainer'} tabIndex={0}>
																	<div className={'controls_list_theme-default controls-itemActionsV_menu-hidden'} name={'gridWrapper'} tabIndex={0}>
																		<div name={'grid'} className={'controls-Grid controls-Grid_default controls-Grid_grid-layout'} style={{gridTemplateColumns: "max-content 1fr"}} tabIndex={0}>
																			<div name={'itemContainer'} data-qa={'items-container'} className={'controls-GridViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_' + id2}>
																				<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-1'} item-key={1} key={1} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_default controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-default controls-ListView__item_showActions staffCommon-List__view_row undefined'} tabIndex={0}>
																					<div className={' controls-Grid__row-cell controls-Grid__cell_default controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null js-controls-ListView__notEditable js-controls-DragScroll__notDraggable controls-GridView__checkbox controls-GridView__checkbox_position-default controls-Grid__row-cell-checkbox controls-Grid__row-cell-checkbox-default controls-GridView__checkbox_relative controls-Grid__row-cell__first-default  controls-hover-background-default controls-Grid__row-cell-background-hover-default '} data-qa={'cell'} colSpan={1} rowSpan={1}>
																						<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls_toggle_theme-undefined controls-CheckboxMarker controls-CheckboxMarker_outlined controls-CheckboxMarker_theme-undefined controls-CheckboxMarker__state-false controls-CheckboxMarker__icon-border-color__enabled js-controls-ListView__notEditable controls-List_DragNDrop__notDraggable js-controls-ListView__checkbox js-controls-DragScroll__notDraggable controls-CheckboxMarker_inList controls-ListView__checkbox-onhover controls-Grid__item_background-hover_default controls-hover-background-default controls-GridView__checkbox controls-Grid__border-radius-inherit controls-GridView__checkbox_relative controls-GridView__checkbox_position-default controls-Grid__row-checkboxCell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default '} tabIndex={-1} data-qa={'controls-CheckboxMarker'}>
																							<svg viewBox={'0 0 12 12'} xmlns={'http://www.w3.org/2000/svg'} className={'controls-CheckboxMarker__icon-checked controls-CheckboxMarker__icon-size-s controls-CheckboxMarker__icon-checked-horizontalPadding-default'} tabIndex={0} data-qa={'controls-CheckboxMarker_state-false'}>
																								<path d={'M8 0.5H4C2.067 0.5 0.5 2.067 0.5 4V8C0.5 9.933 2.067 11.5 4 11.5H8C9.933 11.5 11.5 9.933 11.5 8V4C11.5 2.067 9.933 0.5 8 0.5Z'} className={'controls-CheckboxMarker__icon-border_enabled controls-CheckboxMarker__icon-border-state-false'} />
																								<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M8 0.5C8 0.22386 7.77614 0 7.5 0H4C1.79086 0 0 1.79086 0 4V8C0 10.2091 1.79086 12 4 12H8C10.2091 12 12 10.2091 12 8V7.5C12 7.22386 11.7761 7 11.5 7C11.2239 7 11 7.22386 11 7.5V8C11 9.6569 9.6569 11 8 11H4C2.34315 11 1 9.6569 1 8V4C1 2.34315 2.34315 1 4 1H7.5C7.77614 1 8 0.77614 8 0.5Z'} className={'controls-CheckboxMarker__icon-subtract '} />
																								<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M11.7609 1.16985C12.0549 1.41657 12.0814 1.84159 11.8201 2.11915L6.43652 8.77431C6.29706 8.92242 6.09549 9.00491 5.88564 8.99977C5.67579 8.99463 5.47903 8.90237 5.34789 8.74764L3.15612 6.16144C2.91036 5.87145 2.96017 5.44831 3.26737 5.21632C3.57456 4.98433 4.02283 5.03134 4.26858 5.32133L5.93279 7.28503L10.7553 1.22569C11.0166 0.948133 11.4669 0.923132 11.7609 1.16985Z'} className={'controls-CheckboxMarker__icon-checked-color_transparent'} />
																								<rect x={3} y={3} width={'6'} height={'6'} rx={2} className={'controls-CheckboxMarker__state-null__icon-color__transparent'} />
																							</svg>
																						</div>
																					</div>
																					<div className={' controls-Grid__row-cell controls-Grid__cell_default controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_default controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer controls-Grid__row-cell__last-default'} data-qa={'cell'} colSpan={1} rowSpan={1}>
																						<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingLastCol_m controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-default  staffCommon-List__view_department'} data-qa={'cell_content'} tabIndex={0}>
																							<div className={'js-controls-Tree__row-expander controls-TreeGrid__row-expander js-controls-ListView__notEditable controls-TreeGrid__row_default-expander_size_xl controls-TreeGrid__row_expander_position_default controls-TreeGrid__row-expander__spacingTop_default controls-TreeGrid__row-expander__spacingBottom_default controls-TreeGrid__row-expander_node_default_position_default controls-TreeGrid__row-expander_node_default controls-TreeGrid__row-expander_node_iconSize_default controls-TreeGrid__row-expander_node_iconStyle_default controls-TreeGrid__row-expander_collapsed controls-TreeGrid__row-expander_node_default_collapsed'} data-qa={'row-expander'} tabIndex={-1} onClick={expandUser}/>
																							<div className={'ws-flexbox ws-flex-grow-1 staffCommon-List__view_item'} tabIndex={0}>
																								<div className={'person-BaseInfo ws-flexbox ws-align-items-baseline person-BaseInfo__textAlignment_fontsize-2xl controls_Person_theme-default controls-Grid__editArrow-cellContent controls-Grid__editArrow-overflow-ellipsis'} tabIndex={0}>
																									<div data-qa={'person-Information__photo'} className={'ws-flex-shrink-0 person-BaseInfo__photo person-BaseInfo__textAlignment_fontsize-2xl'} />
																									<div className={'ws-flexbox ws-flex-column ws-flex-grow-1 person-BaseInfo__content'}>
																										<div className={'ws-flexbox person-BaseInfo__line  ws-align-items-baseline'}>
																											<div className={'ws-inline-flexbox ws-align-items-baseline person-BaseInfo__titleContainer person-BaseInfo__content'}>
																												<span className={'undefined ws-ellipsis controls-PopupPreviewer person-Wrapper__clickable ws-ellipsis'} data-qa={'person-Information__fio'} dir={'auto'} tabIndex={0}>NanoMagicRPG 1.12.2</span>
																											</div>
																											<span className={'controls-text-readonly ws-flexbox ws-align-items-baseline ws-ellipsis person-BaseInfo__additionalContent'} style={{minWidth: '66px'}}>
																												<span className={'ws-ellipsis'} tabIndex={0}>
																													<span title={getCurator(34)[0].name} className={'ws-ellipsis ws-flex-shrink-0 controls-padding_left-s controls-fontsize-m'}>{getCurator(34)[0].name}</span>
																												</span>
																												<span title={`${user_count_from_servers[34]} сотрудника`} className={'ws-flex-shrink-0 controls-padding_left-s controls-fontsize-m'} tabIndex={0}>({user_count_from_servers[34]})</span>
																											</span>
																										</div>
																									</div>
																								</div>
																								<div className={'controls-Grid__editArrow-wrapper js-controls-ListView__visible-on-hoverFreeze js-controls-Grid__editArrow'}>
																									<div className={'controls-Grid__editArrow-withTextOverflow'} />
																									<div className={'controls-Grid__editArrow-blur controls-Grid__editArrow-blur_default'} />
																									<div className={'controls-Grid__editArrow controls-Grid__editArrow_background_default'} data-qa={'edit-arrow'}>
																										<svg className={'controls-Grid__editArrow-icon'} viewBox={'0 0 16 16'} xmlns={'http://www.w3.org/2000/svg'}>
																											<path transform={''} d={'M9,9.94l-6,6v-2l4-4-4-4v-2Zm5,0-6,6v-2l4-4-4-4v-2Z'} />
																										</svg>
																									</div>
																								</div>
																							</div>
																						</div>
																						<div className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default  controls-itemActionsV_position_bottomRight controls-itemActionsV_padding-bottom_default  controls-itemActionsV_inside'}>
																							<div className={'controls-itemActionsV__wrapper'}>
																								<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Открыть карточку'} data-qa={'controls-itemActions__action'} tabIndex={-1} ws-no-focus={'true'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'}>
																									<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
																										<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																											<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-CollapseExpand'} tabIndex={0} />
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
																	<div className={'controls__BaseControl__footer'} tabIndex={0} />
																</div>
															</div>
														</div>
														<div tabIndex={0} />
													</div>
													<div className={'Hint-ListWrapper_hintWrapper'}>
														<div className={'Hint-ListWrapper_wrapBlock Hint-ListWrapper_wrapBlock_l'} />
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

function expandUser(e) {
	let el = e.currentTarget.closest('[data-qa="row"]'),
		count = user_count_from_servers[34],
		users = getUsersFromServer(34),
		elems
	for (let i = 0; i < count; i++) {
		elems = create_html_element('div', {
			'ws-creates-context': 'true',
			'ws-delegates-tabfocus': 'true',
			'attr-data-qa': `key-${users[i].user_id},Empl`,
			'item-key': `${users[i].user_id},Empl`,
			key: `${users[i].user_id},Empl`,
			'data-qa': 'row',
			'class': 'controls-ListView__itemV controls-Grid__row controls-Grid__row_default controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-default controls-ListView__item_showActions staffCommon-List__view_row undefined',
			tabIndex: 0
		})
		el.after(elems)
	}
}

export default StaffList