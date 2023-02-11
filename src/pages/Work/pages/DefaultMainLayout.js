import React from 'react'

class DefaultMainLayout extends React.Component {
	render() {
		return (
			<div className='nanomagicPage-MainLayout__middle ws-flexbox SbisEnvUI-ParkingBody_same-background'>
				<div className='ws-flexbox nanomagicPage-widgets__emptyView' tabIndex={0}>
					<div className='ws-flexbox nanomagicPage-widgets__emptyViewWrapper ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 controls__block-wrapper tr'>
						<div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-default nanomagicPage-widgets__emptyViewScroll controls__block' tabIndex={0}>
							<div className='controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{ overscrollBehaviorY: 'auto' }}>
								<div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content-direction_column'>
									<div className='hint-text_color hint-EmptyView hint-EmptyView_rowLayout hint-EmptyView_rowLayout_subtypeLayout_common_marginSize_l hint-EmptyView_rowLayout_top hint-EmptyView_rowLayout_l hint-EmptyView_rowLayout_subtypeLayout_common_offset_top_l  ws-flexbox ws-flex-wrap ws-flex-column-reverse ws-align-items-center ws-justify-content-end controls_Hint_theme-default controls-Scroll-containerBase_userContent' tabIndex={0}>
										<div className='hint-Template__wrapBlock' />
										<div className='hint-EmptyView__rowCentralizer hint-EmptyView__rowCentralizer_top ws-flexbox ws-justify-content-center'>
											<div className='hint-EmptyView__rowWrapper hint-EmptyView__rowWrapper_l hint-EmptyView__rowWrapper_top  ws-flexbox ws-flex-column ws-justify-content-between'>
												<div className='hint-EmptyView__main hint-EmptyView__main_l ws-flexbox ws-flex-wrap ws-align-items-start hint-EmptyView__minHeight_l  ws-justify-content-start'>
													<div className='hint-EmptyView__textWrapper hint-EmptyView__textWrapper_l hint-EmptyView__rowTextWrapper_l ws-flexbox ws-align-items-center ws-flex-grow-1 hint-EmptyView__rowTextWrapper_withImage_l'>
														<div className='hint-EmptyView__text hint-EmptyView__text_l'>
															<div className='hint-EmptyView__title hint-EmptyView__title_l'>Виджеты</div>
															<div className='controls_Hint_theme-default hint-Template-Content hint-Template-Content_l hint-text_color' tabIndex={0}>
																<div className='hint-Template-Markup hint-text_color controls_Hint_theme-default hint-Template-Content__contentMarkup controls-margin_top-xl' tabIndex={0}>
																	<p className='hint-Template-Markup__blockOffset_l' tabIndex={0}>
																		<span className='controls-fontsize-m' tabIndex={0}>Это удобный способ быстро проанализировать состояния всех сфер деятельности из одной точки сайта и при необходимости сразу перейти в нужный раздел.</span>
																	</p>
																	<span className='controls-fontsize-m' tabIndex={0}>Чтобы добавить виджеты, кликните на кнопку </span>
																	<span className='controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter hint-Template-Markup__link_unaccented' data-qa='hint-Template-Markup__link' target='_blank' ws-creates-context='true' ws-delegates-tabfocus='true' title='Настроить страницу' tabIndex={0}>
																		<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'>
																			<svg fillRule='evenodd' className='controls-Button__icon controls-BaseButton__icon controls-icon_size-xs controls-icon_style-label controls-icon_svg ' tabIndex={-1}>
																				<use xlinkHref='/asset/resource/img/designtime.svg#icon-DashboardEditor' />
																			</svg>
																			<span className='controls-BaseButton__text controls-text-hint-Template-Markup__link_unaccented controls-Button__text-hint-Template-Markup__link_unaccented_viewMode-link controls-Button__text_captionPosition-default_end controls-Button__text_viewMode-link' tabIndex={0} />
																		</span>
																	</span>
																	<span className='controls-fontsize-m' tabIndex={0}>в тулбаре и выберите темы, которые вам интересны.</span>
																</div>
															</div>
														</div>
													</div>
													<div className='hint-EmptyView__imageHider' />
													<div className='hint-Template__imageWrapper controls_Hint_theme-default hint-Template__imageWrapper_l_emptyView hint-Template-HelpPersonImage-Common_widgets hint-EmptyView__imageWrapper_l hint-EmptyView__imageWrapper_l_position_right hint-EmptyView__imageWrapper_verticalOffset_l' tabIndex={0} style={{ backgroundImage: 'url(/asset/resource/cdn/HelpPersonCommon/1.0.4/default/widgets.svg)' }} />
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

export default DefaultMainLayout