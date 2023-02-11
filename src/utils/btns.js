import React from "react";
import {stringGen} from './functions.js'
import ReactDOM from 'react-dom/client'
import Hint from '../pages/Work/pages/Hint/HelpMenu/Hint.js'
import {resetSelectStatus, selectStatus} from '../pages/Work/pages/Tasks/CreateTaskPopup.js'

export function closeBtn() {
	return (
		<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter controls-StackTemplate__close_button controls-stack-Button__rightPanel__close ws-flex-shrink-0 controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl'} data-qa={'controls-stack-Button__close'} tabIndex={-1} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} title={'Закрыть'} onClick={closeThisPopup}>
			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'}>
				<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-label controls-icon icon-Close'} tabIndex={0} />
			</span>
		</span>
	)
}
export function calendarBtn() {
	return (
		<div className={'informers-InformersBar-informer_content_wrapper'}>
			<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} />
			<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container'} data-qa={'informers_informerContent_TodayInformer_icon'}>
				<div title={'Дела на сегодня'} className={'WTM-Today__Informer'} tabIndex={0} style={{display: 'contents'}}>
					<div className={'WTM-Today__Informer_number'} style={{marginTop: '1px'}}>{new Date(new Date()).getDate()}</div>
					<div className={'WTM-Today__Informer_day'} style={{fontSize: '11px', marginTop: '-4px'}}>{['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][(new Date(new Date())).getDay() % 7]}</div>
				</div>
			</div>
		</div>
	)
}
export function phoneBtn() {
	return (
		<div className={'informers-InformersBar-informer_content_wrapper'}>
			<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} title={'Звонок'} />
			<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container'} data-qa={'informers_informerContent_Calls_icon'} title={'Звонок'}>
				<div className={'icon-PhoneNull controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext'} />
			</div>
		</div>
	)
}
export function messageBtn() {
	return (
		<div className={'informers-InformersBar-informer_content_wrapper'}>
			<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} title={'Новое сообщение'} />
			<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container informers_InformersBar-informers_container-last'} data-qa={'informers_informerContent_Messages_icon'} title={'Новое сообщение'}>
				<div className={'icon-EmptyMessage controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext'} />
			</div>
		</div>
	)
}
export function hintBtn() {
	return (
		<div className={'hint-helpButton__helpButtonWrapper nanomagicPage-HelpButton ws-align-self-center'} data-qa={'nanomagicPage-helpButton'} tabIndex={0} key={'helpButton'} onClick={help}>
			<div data-hint-target={'helpButton'} className={'hint-helpButton__wrapper controls_Hint_theme-default hint-helpButton__container controls-Popup__isolatedFocusingContext ws-flexbox ws-align-items-end'} tabIndex={0}>
				<div name={'helpButtonTarget'} className={'hint-helpButton__button hint-helpButton__button-compressed'}>
					<div className={'hint-helpButton__icon'} />
				</div>
			</div>
		</div>
	)
}

function closeThisPopup(e) {
	e.currentTarget.closest("[templatename]").remove()
	if (selectStatus) {
		resetSelectStatus()
		document.querySelector("[templatename='EDWS3/Tasks/taskDialog:Dialog:SelectUser']").remove()
	}
}
function help() {
	let e = document.querySelector("[templatename='Hint/HelpMenu:PopupTemplate']"),
		popup = document.querySelector('#popup')
	if (e === null) {
		let el = document.createElement('div') // HTMLDivElement
		el.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-Popup-corner-vertical-top', 'controls-Popup-corner-horizontal-right', 'controls-Popup-align-horizontal-left', 'controls-Popup-align-vertical-top', 'controls-Zoom');
		el.setAttribute('templatename', 'Hint/HelpMenu:PopupTemplate');
		el.setAttribute('template', 'Hint/HelpMenu:PopupTemplate');
		el.tabIndex = 0;
		el.key = 'popup-' + stringGen(11) + (new Date()).getTime();
		el.style.zIndex = '2000';
		el.style.position = 'absolute';
		el.style.inset = 'auto 8px 38px auto';
		el.style.width = 'auto';
		el.style.maxWidth = '1879px';
		el.style.maxHeight = '909px';
		el.style.height = 'auto';
		el.style.margin = '0px';
		el.style.zoom = 1;
		let subRoot = ReactDOM.createRoot(el)
		subRoot.render(<Hint />)
		popup.append(el)
	} else {
		document.querySelector('[name="helpButtonTarget"] div.hint-helpButton__icon').classList.remove('hint-helpButton__openAnimation', 'hint-helpButton__menu-opened')
		popup.querySelector('[templatename="Hint/HelpMenu:PopupTemplate"]').remove()
	}
}