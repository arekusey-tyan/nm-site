import React from 'react'
import {stringGen} from '../../../../utils/functions.js'

const base = './static/uploads/';
let path = ''
let result = getFile(base + path)

function DocumentPage() {
	let str1 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12),
		str2 = stringGen(8) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(4) + '-' + stringGen(12)
	return (
		<>
			<div className={'nanomagicPath-MainLayout__middle ws-flexbox SbisEnvUI-ParkingBody_same-background'}>
				<div className={'sdPageContent__centerArea nanomagicPage-MainLayout__workspaceTemplate ws-workspace-width-1728'} tabIndex={0}>
					<div className={'sdPageContent__View sdPageContent__View__with-master-padding'} tabIndex={0}>
						<div className={'controls-MasterDetail controls-MasterDetail_masterPosition-left  ws-flexbox controls_list_theme-default controls-newBrowser sdPageContent__View__new-browser controls__block-wrapper__'} tabIndex={0}>
							<div />
							<div />
							<div fixcompatible={1} className={'controls-MasterDetail_details controls-MasterDetail_details-contrast ws-flexbox ws-flex-grow-1'}>
								<div className={'controls-newBrowser__detail controls-MasterDetail_detailsContent  controls-MasterDetail_details-bg-contrast controls-MasterDetail_details-newDesign tlr'} tabIndex={0}>
									<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default diskRegistry__scroll-container sdPageContent__View__detail-content sdPageContent__View__detail-content__vm-table controls-newBrowser__detail-list'} tabIndex={0}>
										<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} style={{overscrollBehaviorY: 'auto'}} tabIndex={0}>
											<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
												<div className={'diskRegistry diskRegistry__fix-hint-template ws-flexbox ws-flex-column controls-Scroll-containerBase_userContent'} tabIndex={0}>
													<div className={'diskFolderHeader sdHeaderLayout ws-flexbox ws-flex-column ws-flex-shrink-0'} tabIndex={0}>
														<div />
														<div class__={'sdPageContent__View__detail-content-margin controls-MasterDetail_details-bg-contrast controls-MasterDetail_details-newDesign tlr'} className={'diskRegistry__detail-content-wrapper ws-flexbox'} tabIndex={0}>
															<div data-element={'DropArea'} id={'DropArea-' + str1} className={'DropArea__container docview3-drop-area diskRegistry__dropArea sdPageContent__View__detail-content-margin controls-MasterDetail_details-bg-contrast controls-MasterDetail_details-newDesign tlr'} tabIndex={0}>
																<div id={'DropArea__overlaidElement__' + str1} className={'DropArea__overlaidElement'}>
																	<div className={'docview3-attachListContainer ws-flex-grow-1'} tabIndex={0}>
																		<div className={'docview3-List  ws-flexbox ws-flex-column docview3-DiskList'} style={{height: '100%'}} tabIndex={0}>
																			<div className={'docview3-List__container ws-flexbox ws-flex-column'} tabIndex={0}>
																				<div className={'controls_list_theme-default controls-Explorer docview3-List__view docview3-List__view-without-scroll undefined'} tabIndex={0}>
																					<div className={'controls-Explorer__wrapper'} tabIndex={0}>
																						<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default controls-Explorer__view'} tabIndex={0}>
																							<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
																							<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_' + str2 + ' controls-GridControl__viewContainer'} tabIndex={0}>
																								<div className={'controls_list_theme-default controls-itemActionsV_menu-hidden'} name={'gridWrapper'} tabIndex={0}>
																									<div name={'grid'} className={'controls-Grid controls-Grid_default controls-Grid_grid-layout'} style={{gridTemplateColumns: '1fr 125px 28px auto 74px'}} tabIndex={0}>
																										<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-GridViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_' + str2}>
																											{getElems()}
																										</div>
																									</div>
																								</div>
																								<div className={'controls__BaseControl__footer'} tabIndex={0} />
																							</div>
																						</div>
																					</div>
																					<div tabIndex={0} />
																				</div>
																				<div tabIndex={0} />
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
									</div>
								</div>
							</div>
							<div tabIndex={0} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

function getElems() {
	let elems = [],
		files = result.files
	for (let i = 0; i < files.length; i++) {
		let file = files[i],
			key = file?.key ?? stringGen(32)
		if (file.dir) elems[i] = <div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-' + key} item-key={key} key={i} data-qa={'row'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_default controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-default controls-ListView__item_showActions'} tabIndex={0}>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_default controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer controls-Grid__row-cell__first-default'} data-qa={'cell'} colSpan={1} rowSpan={1}>
				<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_m controls-Grid__cell_spacingRight controls-Grid__row-cell_rowSpacingTop_l controls-Grid__row-cell_rowSpacingBottom_l controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-default controls-Grid__cell_spacingFirstCol_m  docview3-List_list-item__title-column'} data-qa={'cell_content'} tabIndex={0}>
					<div className={'js-controls-Tree__row-expander controls-TreeGrid__row-expander js-controls-ListView__notEditable controls-TreeGrid__row_default-expander_size_m controls-TreeGrid__row_expander_position_default controls-TreeGrid__row-expander__spacingTop_l controls-TreeGrid__row-expander__spacingBottom_l controls-TreeGrid__row-expander_node_default_position_default controls-TreeGrid__row-expander_node_default controls-TreeGrid__row-expander_node_iconSize_default controls-TreeGrid__row-expander_node_iconStyle_default controls-TreeGrid__row-expander_collapsed controls-TreeGrid__row-expander_node_default_collapsed'} data-qa={'row-expander'} />
					<a href={`https://www.workspace-loliland.ru/shared/disk/${key}`} className={'docview3-List_list-item__title ws-ellipsis docview3-List__file-link docview3-List_list-item__title-folder  controls-text-default ws-flexbox ws-align-items-center   sdDocumentsMC-List_list-item__title-folder'} tabIndex={0}>
						<div title={file.name} className={'docview3-List_list-item__title__name   docview3-List_list-item__title_'}>{file.name}</div>
					</a>
				</div>
			</div>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_default controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__columnSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer'} data-qa={'cell'} colSpan={1} rowSpan={1}>
				<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingLeft controls-Grid__cell_spacingRight controls-Grid__row-cell_rowSpacingTop_l controls-Grid__row-cell_rowSpacingBottom_l controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-default '} data-qa={'cell_content'} tabIndex={0}>
					<div className={'docview3-List_list-item__responsible ws-flexbox ws-align-items-center ws-ellipsis controls-text-unaccented controls-fontsize-xs'} tabIndex={0}>
						<div className={'ws-ellipsis docview3-DiskList__responsible-column controls-PopupPreviewer docview3-List_list-item__responsible-preview'} title={'Владелец папки'} tabIndex={0}>{file?.author ?? 'NanoMagic'}</div>
					</div>
				</div>
			</div>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_default controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__columnSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer'} data-qa={'cell'} colSpan={1} rowSpan={1}>
				<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingLeft controls-Grid__cell_spacingRight controls-Grid__row-cell_rowSpacingTop_l controls-Grid__row-cell_rowSpacingBottom_l controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-default '} data-qa={'cell_content'} tabIndex={0}>
					<span className={'docview3-List_list-item__flags ws-flexbox ws-align-items-center ws-align-self-center'} tabIndex={0} />
				</div>
			</div>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_default controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__columnSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer'} data-qa={'cell'} colSpan={1} rowSpan={1}>
				<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingLeft controls-Grid__cell_spacingRight controls-Grid__row-cell_rowSpacingTop_l controls-Grid__row-cell_rowSpacingBottom_l controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-default '} data-qa={'cell_content'} tabIndex={0}>
					<div className={'docview3-List_list-item__size   sdDocumentsMC-List_list-item__size  ws-ellipsis ws-flexbox ws-align-items-center ws-flex-shrink-0 ws-flex-grow-1 ws-justify-content-end controls-text-unaccented controls-fontsize-xs'} tabIndex={0}>{file.size}</div>
				</div>
			</div>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_default controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__columnSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer controls-Grid__row-cell__last-default'} data-qa={'cell'} colSpan={1} rowSpan={1}>
				<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingLeft controls-Grid__cell_spacingLastCol_m controls-Grid__row-cell_rowSpacingTop_l controls-Grid__row-cell_rowSpacingBottom_l controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__row-cell__content_halign_right controls-Grid__item_background-hover_undefined controls-hover-background-default '} data-qa={'cell_content'} tabIndex={0}>
					<span title={''} className={'docview3-List_list-item__date ws-flexbox ws-align-items-center ws-ellipsis controls-text-unaccented controls-fontsize-xs'} tabIndex={0}>{'9 янв'}</span>
				</div>
				<div className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default  docview3-List__table-item-actions-position  controls-itemActionsV_inside'}>
					<div className={'controls-itemActionsV__wrapper'}>
						<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Копировать ссылку'} data-qa={'controls-itemActions__action'} tabIndex={-1} ws-no-focus={'true'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'}>
							<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Link'} tabIndex={0} />
								</span>
							</span>
						</div>
						<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Скачать'} data-qa={'controls-itemActions__action'} tabIndex={-1} ws-no-focus={'true'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'}>
							<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Save'} tabIndex={0} />
								</span>
							</span>
						</div>
						<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Удалить'} data-qa={'controls-itemActions__action'} tabIndex={-1} ws-no-focus={'true'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'}>
							<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-danger controls-icon icon-Erase'} tabIndex={0} />
								</span>
							</span>
						</div>
						<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m'} data-qa={'controls-itemActions__action'} tabIndex={-1} ws-no-focus={'true'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'}>
							<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-SettingsNew'} tabIndex={0} />
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		else elems[i] = <div>{file.name}</div>
	}
	return elems
}

function getFile(path) {
	let xhr = new XMLHttpRequest()
	xhr.open('POST', `https://www.workspace-loliland.ru/api/files/gets`, false)
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send(JSON.stringify({path: path}))
	return JSON.parse(xhr.response)
}

export default DocumentPage