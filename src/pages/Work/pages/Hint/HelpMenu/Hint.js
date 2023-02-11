import React from 'react'
import {loadStyle} from '../../../../../utils/functions.js'

function Hint() {
	(function () {
		loadStyle('work', 'Hint/routes.min');
		loadStyle('work', 'Hint/HelpMenu.min');
	})();
	document.querySelector('[name="helpButtonTarget"] div.hint-helpButton__icon').classList.add('hint-helpButton__openAnimation', 'hint-helpButton__menu-opened')
	return (
		<div className={'controls_popupTemplate_theme-default controls-InfoBoxTemplate controls-InfoBoxTemplate__arrow-side-position-bottom controls-InfoBoxTemplate__arrow-side-end controls-InfoBoxTemplate_horizontal-direction-left hint-helpMenu__template controls_Hint_theme-default controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
			<div className={'controls-InfoBoxTemplate__backgroundStyle-secondary controls-InfoBoxTemplate__content controls-border-radius-m controls-InfoBoxTemplate_style_default controls-InfoBoxTemplate_style-bottom_default'}>
				<div className={'controls-InfoBoxTemplate_style_marker_default controls-InfoBoxTemplate__content-area controls_border-radius-m'} tabIndex={0}>
					<div className={'hint-helpMenu__helpMenu ws-flexbox'}>
						<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default hint-helpMenu__scrollContainer'} tabIndex={0}>
							<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
								<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
									<div className={'ws-flexbox ws-justify-content-center hint-helpMenu__itemsWrapper controls-Scroll-containerBase_userContent'} tabIndex={0}>
										<div className={'ws-flex-column ws-flexbox ws-justify-content-center hint-helpMenu__items'}>
											<div className={'controls-margin_top-m ws-flexbox ws-align-items-end ws-justify-content-between'}>
												<div className={'ws-flexbox ws-flex-column controls-margin_bottom-m hint-helpMenu__userItemList'}>
													<a href={'/help/staff/employees'} target={'_blank'} className={'hint-helpMenu__menuItem hint-helpMenu__mainItem ws-align-items-center controls-text-default'}>
														<div className={'hint-helpMenu__icon hint-helpMenu__icon_knowledgeBase'} />
														<div title={'База знаний'} className={'hint-helpMenu__title ws-ellipsis'}>База знаний</div>
													</a>
													<div className={'hint-helpMenu__menuItem hint-helpMenu__mainItem ws-align-items-center controls-margin_top-3xs'}>
														<div className={'hint-helpMenu__icon hint-helpMenu__icon_consult icon-icon_consult controls-icon_size-m controls-icon_style-default'} />
														<div title={'Поддержка WS-Loliland.ru'} className={'hint-helpMenu__title ws-ellipsis'}>Поддержка WS-Loliland.ru</div>
													</div>
													<div className={'hint-helpMenu__menuItem hint-helpMenu__mainItem ws-align-items-center controls-margin_top-3xs'}>
														<div className={'hint-helpMenu__icon hint-helpMenu__icon_master icon-icon_master controls-icon_size-m controls-icon_style-default'} />
														<div title={'Диагностика места'} className={'hint-helpMenu__title ws-ellipsis'}>Диагностика места</div>
													</div>
													<div className={'hint-helpMenu__menuItem hint-helpMenu__mainItem ws-align-items-center controls-margin_top-3xs'}>
														<div className={'hint-helpMenu__icon icon-Send controls-icon_size-m controls-icon_style-default'} />
														<div title={'Запросить помощь'} className={'hint-helpMenu__title ws-ellipsis'}>Запросить помощь</div>
													</div>
												</div>
												<div className={'hint-helpMenu__helpPerson'} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={'controls-InfoBoxTemplate__arrow-wrapper controls-InfoBoxTemplate__arrow-wrapper-bottom'}>
				<div className={'controls-InfoBoxTemplate__backgroundStyle-secondary controls-InfoBoxTemplate__arrow controls-InfoBoxTemplate__arrow-default controls-InfoBoxTemplate__arrow-bottom controls-InfoBoxTemplate__arrow-position-end'} />
			</div>
		</div>
	)
}

export default Hint;