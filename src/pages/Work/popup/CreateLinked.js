import React from 'react'

class CreateLinked extends React.Component {
	constructor(props) {
		super(props)
		this.closeCreateLinked = this.closeCreateLinked.bind(this)
		this.openCreateTaskPopup = this.openCreateTaskPopup.bind(this)
		this.openLinkTaskPopup = this.openLinkTaskPopup.bind(this)
	}

	closeCreateLinked(e) {
		e.currentTarget.closest('[template="Controls/menu:Popup"]').remove()
	}

	openCreateTaskPopup(e) {}

	openLinkTaskPopup(e) {}

	render() {
		return (
			<div className='controls_dropdownPopup_theme-default controls-Menu__popup controls-Menu__popup_with-closeButton controls_popupTemplate_theme-default controls-Popup__template' tabIndex={0}>
				<div className='controls_popupTemplate_theme-default controls-StickyTemplate controls-PopupTemplate__roundBorder controls_border-radius-s controls-StickyTemplate-borderStyle-default controls-StickyTemplate-hoverBorderStyle- controls-StickyTemplate-borderSize-default controls-StickyTemplate-backgroundColor controls-Popup__isolatedFocusingContext controls-Menu__popup-template controls-Menu__popup-direction-vertical-bottom controls-Menu__popup-offset controls-Menu__popup-shadow-default undefined' tabIndex={0}>
					<div className='controls-StickyTemplate__top-area controls-PopupTemplate__roundBorder_top controls_border-radius-s controls-StickyTemplate-backgroundColor controls-StickyTemplate__top-area-withClose_external' tabIndex={0}>
						<div className={'controls-StickyTemplate__top-area-content'}>
							<div className={'controls_dropdownPopup_theme-default controls_list_theme-default controls-Menu__popup-header'}>
								<span className={'controls-Header__caption controls-heading__uppercase controls-fontweight-normal controls-Header-fontsize-m controls-Header_readonly controls-Header__caption_style-label ws-ellipsis'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Создать/связать'} tabIndex={0}>Создать/связать</span>
							</div>
							<span className={'controls_popupTemplate_theme-default controls-Button__close sbisname-window-title-close controls-StickyTemplate__close_button controls-StickyTemplate__close_button_position-right controls-StickyTemplate__close_button-external controls-StickyTemplate__close_button-external-with-header'} title={'Закрыть'} data-qa={'controls-stack-Button__close'} sbName={'floatAreaCloseButton'} tabIndex={0} onClick={this.closeCreateLinked}>
								<span className={'controls-Button__close__wrapper controls-Button__close_external controls-Button__close_external_offset'}>
									<svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 12 12'} className={'controls-Button__close__icon_external'}>
										<path xmlns={'http://www.w3.org/2000/svg'} d={'M12.7,12l5.16-5.16a0.49,0.49,0,0,0-.7-0.7L12,11.3,6.84,6.14a0.49,0.49,0,0,0-.7.7L11.3,12,6.14,17.16a0.49,0.49,0,1,0,.7.7L12,12.7l5.16,5.16a0.49,0.49,0,0,0,.7-0.7Z'} transform={'translate(-6 -6)'} />
									</svg>
								</span>
							</span>
						</div>
					</div>
					<div className='controls-StickyTemplate__content-area controls-PopupTemplate__roundBorder_bottom  controls_border-radius-s controls-StickyTemplate-backgroundColor'>
						<div className='controls-Menu__popup-content' tabIndex={0}>
							<div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-default controls-ScrollContainer__flex controls-Menu__scroll controls-Menu__popup-list_margin-top' tabIndex={0}>
								<div className='controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
									<div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'>
										<div className='controls_breadcrumbs_theme-default controls_dropdownPopup_theme-default controls-menu controls-Menu__popup-list controls-padding_left-xs controls-padding_right-xs controls-Scroll-containerBase_userContent' data-index={0} tabIndex={0}>
											<div className='ws-flexbox ws-flex-column' tabIndex={0}>
												<div className='controls-ListViewV controls-ListView_default controls_list_theme-default controls_dropdownPopup_theme-default' tabIndex={0}>
													<div name={'itemsContainer'} className={'controls-ListViewV__itemsContainer controls-ListViewV__itemsContainer--newRender'}>
														<div className={'controls-Menu__row controls-Menu__row_overflow controls-Menu__row_roundBorder controls-Menu__row-rightPadding_menu-rightTemplate controls-Menu__row_align_center controls-ListView__itemV js-controls-ListView__measurableContainer controls-ListView__itemContent controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_menu-default controls-ListView__item-rightPadding_ controls-ListView__item-leftPadding_s controls-Menu__row_state_default controls-Menu__row_hoverBackgroundStyle-default controls-ListView__item-rightPadding_menu-close controls-Menu__defaultItem  controls-Menu__text-default controls-margin_bottom-xs controls-Menu__row-separator controls-Menu__row_singleLine edo3-Dialog__toolbar-linkedDocHeaderItem controls-Menu__row_margin-bottom'} data-target={'menu_item_otherRule'} data-qa={'item'} attr-data-qa={'leaf'} type-data-qa={'leaf'} tabIndex={0} key={'list-render-otherRule'}>
															<div className={'controls-Menu__row_selected controls-Menu__row_selected_align'} tabIndex={0} />
															<div className={'controls-Menu__content_baseline'}>
																<div title={'Создать'} className={'controls-Menu__content controls-Menu__content_singleLine controls-Menu__content_align_right'} tabIndex={0}>
																	<div className={'controls-icon_size-m controls-icon_style-secondary icon-Addition controls-icon controls-Menu__icon controls-Menu__icon-left'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} />
																	<div className={'ws-ellipsis controls-Menu__content-wrapper_width'}>Создать</div>
																</div>
															</div>
															<div className={'controls-Menu__row__rightTemplate_separator'} />
															<div className={'controls-Menu__row__rightTemplate_wrapper'}>
																<img src={'/asset/resource/EDO3/Utils/images/toolbarPoint.svg'} tabIndex={0} />
															</div>
														</div>
														<div className={'controls-Menu__row controls-Menu__row_overflow controls-Menu__row_roundBorder controls-Menu__row_align_center controls-ListView__itemV js-controls-ListView__measurableContainer controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_menu-default controls-ListView__item-rightPadding_ controls-ListView__item-leftPadding_s controls-Menu__row_state_default controls-Menu__row_hoverBackgroundStyle-default controls-ListView__item-rightPadding_s controls-Menu__defaultItem  controls-Menu__text-default controls-margin_bottom-xs controls-Menu__row-separator controls-Menu__row_singleLine controls-Menu__row_margin-bottom'} data-target={'menu_item_' + Math.fround(Math.random() * 100000000000) * 9999} data-qa={'item'} attr-data-qa={'node'} type-data-qa={'node'} tabIndex={0}>
															<div className={'controls-Menu__row_selected controls-Menu__row_selected_align'} tabIndex={0} />
															<div className={'controls-Menu__content_baseline'}>
																<div title={'Задача'} className={'controls-Menu__content  controls-Menu__content_singleLine controls-Menu__content_align_right'} tabIndex={0}>
																	<div className={'controls-icon_size-m controls-icon_style-secondary  controls-icon controls-Menu__icon controls-Menu__icon-left controls-Menu__icon-invisible'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} />
																	<div className={'ws-ellipsis controls-Menu__content-wrapper_width'}>Задача</div>
																</div>
															</div>
															<div className={'controls-Menu__arrow controls-Menu__arrow_default icon-MarkCRightLight controls-Menu__arrow_align'} tabIndex={0} />
														</div>
														<div className={'controls-Menu__row controls-Menu__row_overflow controls-Menu__row_roundBorder controls-Menu__row-rightPadding_menu-rightTemplate controls-Menu__row_align_center controls-ListView__itemV js-controls-ListView__measurableContainer controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_menu-default controls-ListView__item-rightPadding_ controls-ListView__item-leftPadding_s controls-Menu__row_state_default controls-Menu__row_hoverBackgroundStyle-default controls-ListView__item-rightPadding_menu-close controls-Menu__defaultItem  controls-Menu__text-default controls-margin_bottom-xs controls-Menu__row-separator controls-Menu__row_singleLine edo3-Dialog__toolbar-linkedDocHeaderItem controls-Menu__row_margin-bottom'} data-target={'menu_item_otherDocType'} data-qa={'item'} attr-data-qa={'leaf'} type-data-qa={'leaf'} tabIndex={0} key={'list-render-otherDocType'}>
															<div className={'controls-Menu__row_selected controls-Menu__row_selected_align'} tabIndex={0} />
															<div className={'controls-Menu__content_baseline'}>
																<div title={'Связать с'} className={'controls-Menu__content  controls-Menu__content_singleLine controls-Menu__content_align_right'} tabIndex={0}>
																	<div className={'controls-icon_size-m controls-icon_style-secondary icon-RelatedDocumentsDown controls-icon controls-Menu__icon controls-Menu__icon-left'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} />
																	<div className={'ws-ellipsis controls-Menu__content-wrapper_width'}>Связать с</div>
																</div>
															</div>
															<div className={'controls-Menu__row__rightTemplate_separator'} />
															<div className={'controls-Menu__row__rightTemplate_wrapper'}>
																<img src={'/asset/resource/EDO3/Utils/images/toolbarPoint.svg'} tabIndex={0} />
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
		)
	}
}

export default CreateLinked