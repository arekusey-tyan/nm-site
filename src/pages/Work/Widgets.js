import React from 'react'

class Widgets extends React.Component {
	render() {
		return (
			<div className='nanomagicPage-widgets__rightPanelWrapper ws-flexbox ws-justify-content-start nanomagicPage-widgets__rightPanel_wide ws-flex-grow-0 ws-flex-shrink-0 nanomagicPage-MainLayout__rightPanel__left' tabIndex={0} style={{ width: '48px' }}>
				<div className='nanomagicPage-widgets__rightPanel nanomagicPage-widgets__rightPanel_blockLayout nanomagicPage-widgets__rightPanel_wide_blockLayout ws-flexbox ws-justify-content-between ws-flex-grow-0 ws-flex-shrink-0'>
					<div className='nanomagicPage-widgets__rightPanel__topButtons ws-flexbox ws-flex-column ws-flex-shrink-0'>
						<div className='engineUser-UserStatus ws-flexbox controls_EngineUser_theme-default nanomagicPage-MainLayout__commandItem-default' data-name='engineUser-UserStatus' tabIndex={0}>
							<span className='controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter engineUser-UserStatus_name controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl' ws-creates-context='true' ws-delegates-tabfocus='true' title='Главный С.А. / Работаю' tabIndex={0}>
								<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'>
									<span className='controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-ghost controls-Button__text_viewMode-ghost' tabIndex={0}>
										<span className='engineUser-UserStatus_marker engineUser-UserStatus_fullCircle' tabIndex={0}>ГС</span>
									</span>
								</span>
							</span>
						</div>
					</div>
					<div ws-creates-context='true' ws-delegates-tabfocus='true' className='nanomagicPage-widgets__rightPanel__bottomButtons ws-flexbox' tabIndex={0}>
						<div className='nanomagicPage-widgets__wrapper ws-flexbox ws-flex-shrink-1 ws-justify-content-between ws-align-items-center'>
							<div className='nanomagicPage-widgets__informersWrapper nanomagicPage-widgets__informersWrapper-shadow ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center ws-justify-content-end'>
								<div id='autoSign' className='ws-flexbox ws-justify-content-center' tabIndex={0}>
									<div className='edo-AutoSign__informer_noSpacing'></div>
									<div tabIndex={0}></div>
								</div>
								<div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-default informers_InformersBar' tabIndex={0}>
									<div className='controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
										<div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content-direction_column'>
											<div className='informers_InformersBar ws-inline-flexbox ws-flex-shrink-0 ws-align-items-center ws-flex-column-reverse controls-Scroll-containerBase_userContent' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
												<div className='informers-InformersBar-informer_content_wrapper'>
													<div className='informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container' title='Новое сообщение'></div>
													<div className='informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container informers_InformersBar-informers_container-last' data-qa='informers_informerContent_Messages_icon' title='Новое сообщение'>
														<div className='icon-EmptyMessage controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext'></div>
													</div>
												</div>
												<div className='informers-InformersBar-informer_content_wrapper'>
													<div className='informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'></div>
													<div className='informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container' data-qa='informers_informerContent_TodayInformer_icon'>
														<div title='Дела на сегодня' className='WTM-Today__Informer' tabIndex={0} style={{display: 'contents'}}>
															<div className='WTM-Today__Informer_number' style={{marginTop: '1px'}}>{new Date(new Date()).getDate()}</div>
															<div className='WTM-Today__Informer_day' style={{fontSize: '11px', marginTop: '-4px'}}>{['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][(new Date(new Date())).getDay() % 7]}</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='hint-helpButton__helpButtonWrapper nanomagicPage-HelpButton ws-align-self-center' data-qa='nanomagicPage-helpButton' tabIndex={0} key='helpButton'>
							<div data-hint-target='helpButton' className='hint-helpButton__wrapper controls_Hint_theme-default hint-helpButton__container controls-Popup__isolatedFocusingContext ws-flexbox ws-align-items-end' tabIndex={0}>
								<div name='helpButtonTarget' className='hint-helpButton__button hint-helpButton__button-compressed'>
									<div className='hint-helpButton__icon'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export { Widgets }