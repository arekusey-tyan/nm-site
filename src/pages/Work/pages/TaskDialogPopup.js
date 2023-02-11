import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateLinked from '../popup/CreateLinked.js'
import {getUserById, getUserGroup, getUserByIds} from "../../../utils/Request.js"
import IspolnitelList from '../subpages/IspolnitList.js'
import StatusPopup from '../popup/StatusPopup.js'
import TimeLine from '../popup/TimeLine.js'
import Discussion from '../popup/Discussion.js'

class TaskDialogPopup extends React.Component {
    constructor(props) {
        super(props)

		this.task = props.data
		this.author = getUserById(this.task.tauthor_id)
		this.ispolns = getUserByIds(this.task.tispol.split(','))
		this.group = getUserGroup(this.author.user_group).group[0]

        this.closeThisPopup = this.closeThisPopup.bind(this)
        this.createLinked = this.createLinked.bind(this)
		this.openStatusPopup = this.openStatusPopup.bind(this)
		this.renderLenta = this.renderLenta.bind(this)
		this.renderChat = this.renderChat.bind(this)
		this.renderMain = this.renderMain.bind(this)
    }

    createLinked(event) {
        let popup = document.getElementById('popup')
        let element = document.createElement('div')
        element.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-Toolbar-vertical__popup__list', 'controls-Popup-corner-vertical-top', 'controls-Popup-corner-horizontal-right', 'controls-Popup-align-horizontal-left', 'controls-Popup-align-vertical-bottom', 'controls-Zoom')
        element.setAttribute('templatename', 'Controls/menu:Popup')
        element.setAttribute('template', 'Controls/menu:Popup')
        element.tabIndex = 0
        element.setAttribute('key', 'popup-' + Math.fround(Math.random() * 1000000000))
        element.style.zIndex = 20
        element.style.position = 'absolute'
        element.style.inset = '77px 316px auto auto'
        element.style.width = 'auto'
        element.style.maxWidth = '1920px'
        element.style.height = 'auto'
        element.style.maxHeight = '868px'
        element.style.margin = '0px'
        element.style.zoom = '1'

        if (document.querySelector("[template='Controls/menu:Popup']")) document.querySelector("[templatename='Controls/menu:Popup']").remove()
        popup.append(element)
        let dom = ReactDOM.createRoot(element)
        dom.render(<CreateLinked />)
    }

    closeThisPopup(e) {
        e.currentTarget.closest("[templatename='EDWS3/Tasks/taskDialog:Dialog']").remove()
    }

    openStatusPopup(e) {
		let popup = document.getElementById('popup'),
			elem = document.createElement('div')
		elem.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-Stack__last-item')
		elem.setAttribute('templatename', 'EDO3/passage:Panel')
		elem.setAttribute('template', 'EDO3/passage:Panel')
		elem.style.zIndex = 20
		elem.style.position = 'fixed'
		elem.style.inset = '0px 374px 0px auto'
		elem.style.width = '500px'
		elem.style.maxWidth = '500px'
		elem.style.minWidth = '500px'
		elem.style.height = 'auto'
		elem.tabIndex = 0
		elem.setAttribute('key', 'popup-' + Math.floor(Math.random() * 1999999) * 999)
		popup.append(elem)
		let dom = ReactDOM.createRoot(elem)
		dom.render(<StatusPopup author={this.author} key={Math.round(Math.random() * 9999)} group={this.group} task={this.task} />)
	}

	removeSelected(elSel) {
		if (elSel !== null) {
			elSel.classList.toggle('controls-marker_style-tabsprimary')
			elSel.classList.toggle('controls-marker_state-default')
			elSel.firstChild.classList.toggle('controls-Tabs__item_state_default')
			elSel.firstChild.classList.toggle('controls-text-secondary')
			elSel.firstChild.classList.toggle('controls-Tabs__item_view_selected')
			elSel.firstChild.classList.toggle('controls-text-primary')
			elSel.firstChild.removeAttribute('data-qa')
			elSel.firstChild.firstChild.firstChild.classList.toggle('edws-Dialog__tabs-selected')
		}
	}

	renderLenta(e) {
    	let fc = e.currentTarget.firstChild,
			el = document.querySelector('.controls-marker_main.controls-marker_tabsMain'),
			elSel = document.querySelector('.controls-Tabs__itemClickableArea.controls-marker_style-tabsprimary:not([name="TabContent0"])')
		this.removeSelected(elSel)
		if (!fc.classList.contains('controls-marker_style-tabsprimary')) {
			fc.classList.toggle('controls-marker_style-tabsprimary')
			fc.classList.toggle('controls-marker_state-default')
			fc.firstChild.classList.toggle('controls-Tabs__item_state_default')
			fc.firstChild.classList.toggle('controls-text-secondary')
			fc.firstChild.classList.toggle('controls-Tabs__item_view_selected')
			fc.firstChild.classList.toggle('controls-text-primary')
			fc.firstChild.setAttribute('data-qa', 'TabsItemSelected')
			fc.firstChild.firstChild.firstChild.classList.toggle('edws-Dialog__tabs-selected')
		}
		if (el !== null) {
			el.classList.toggle('controls-marker_main')
			el.classList.toggle('controls-marker_tabsMain')
			el.firstChild.removeAttribute('data-qa')
			let div = document.createElement('div'),
				div2 = document.createElement('div')
			div.classList.add('edo3-DocumentName__overlay')
			div2.classList.add('edo3-DateNumber__overlay')
			el.firstChild.appendChild(div)
			el.nextSibling.appendChild(div2)
		}
		document.querySelector('[data-key="main"]').classList.add('ws-hidden')
		document.querySelector('[data-key="extra-discussion"]').classList.add('ws-hidden')
		document.querySelector('[data-key="timeline"]').classList.remove('ws-hidden')
	}

	renderChat(e) {
		let fc = e.currentTarget.firstChild,
			el = document.querySelector('.controls-marker_main.controls-marker_tabsMain'),
			elSel = document.querySelector('.controls-Tabs__itemClickableArea.controls-marker_style-tabsprimary:not([name="TabContent0"])')
		this.removeSelected(elSel)
		if (!fc.classList.contains('controls-marker_style-tabsprimary')) {
			fc.classList.toggle('controls-marker_style-tabsprimary')
			fc.classList.toggle('controls-marker_state-default')
			fc.firstChild.classList.toggle('controls-Tabs__item_state_default')
			fc.firstChild.classList.toggle('controls-text-secondary')
			fc.firstChild.classList.toggle('controls-Tabs__item_view_selected')
			fc.firstChild.classList.toggle('controls-text-primary')
			fc.firstChild.setAttribute('data-qa', 'TabsItemSelected')
			fc.firstChild.firstChild.firstChild.classList.toggle('edws-Dialog__tabs-selected')
		}
		if (el !== null) {
			el.classList.toggle('controls-marker_main')
			el.classList.toggle('controls-marker_tabsMain')
			el.firstChild.removeAttribute('data-qa')
			let div = document.createElement('div'),
				div2 = document.createElement('div')
			div.classList.add('edo3-DocumentName__overlay')
			div2.classList.add('edo3-DateNumber__overlay')
			el.firstChild.appendChild(div)
			el.nextSibling.appendChild(div2)
		}
		document.querySelector('[data-key="main"]').classList.add('ws-hidden')
		document.querySelector('[data-key="extra-discussion"]').classList.remove('ws-hidden')
		document.querySelector('[data-key="timeline"]').classList.add('ws-hidden')
	}

	renderMain(e) {
		let el = e.currentTarget,
			elSel = document.querySelector('.controls-Tabs__itemClickableArea.controls-marker_style-tabsprimary:not([name="TabContent0"])')
		this.removeSelected(elSel)
		if (el !== null) {
			el.firstChild.classList.toggle('controls-marker_main')
			el.firstChild.classList.toggle('controls-marker_tabsMain')
			el.firstChild.firstChild.setAttribute('data-qa', 'TabsItemSelected')
			let div = document.createElement('div')
			el.firstChild.firstChild.lastChild.remove()
			el.lastChild.lastChild.remove()
		}
		document.querySelector('[data-key="main"]').classList.remove('ws-hidden')
		document.querySelector('[data-key="extra-discussion"]').classList.add('ws-hidden')
		document.querySelector('[data-key="timeline"]').classList.add('ws-hidden')
	}

    render() {
        return (
            <>
                <div className='controls-Popup ws-float-area-show-complete controls-Scroll_webkitOverflowScrollingTouch  controls-Stack__last-item' templatename='EDWS3/Tasks/taskDialog:Dialog' template='EDWS3/Tasks/taskDialog:Dialog' tabIndex={0} key={'popup-' + this.id} style={{ zIndex: 10, position: 'fixed', inset: '0px 370px 0px auto', width: '700px', maxWidth: '1400px', minWidth: '450px', height: 'auto' }}>
                    <div className='controls_popupTemplate_theme-default controls-Stack__content-wrapper ws-workspace-width-700 controls_popupTemplate_theme-default controls-Popup__template' tabIndex={0}>
                        {/*<div className='controls-ResizingLine controls_dragnDrop_theme-default controls-Stack__resizingLine' tabIndex={0}>*/}
                        {/*	<div className='controls-ResizingLine__wrapper'>*/}
                        {/*		<div className='controls-ResizingLine__areaWrapper controls-ResizingLine__areaWrapper_horizontal controls-ResizingLine__areaWrapper_horizontal_direction-reverse'></div>*/}
                        {/*		<div className='controls-ResizingLine__border controls-ResizingLine__border_horizontal' tabIndex={0}></div>*/}
                        {/*	</div>*/}
                        {/*</div>*/}
                        <div className='edo3-Dialog__formController edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 edws3-usualCard controls-Stack__content controls-hint-area' tabIndex={0}>
                            <div className='edo3-Dialog' tabIndex={0}>
                                <div className='controls_popupTemplate_theme-default controls-StackTemplate controls-StackTemplate__with-right-panel edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1' tabIndex={0}>
                                    <div className='controls-StackTemplate-shadow__container controls-StackTemplate-shadow_direction-right__container'>
                                        <div className='controls-StackTemplate-shadow controls-StackTemplate-shadow_direction-right'>
                                            <div className='controls-StackTemplate-shadow__content' />
                                        </div>
                                    </div>
                                    <div className='controls-StackTemplate-content_wrapper controls-StackTemplate_backgroundColor' tabIndex={0}>
                                        <div className='controls-StackTemplate__rightPanel controls-StackTemplate__rightPanel-outside controls-StackTemplate__rightBorder_visible' tabIndex={0}>
                                            <div className='ws-flexbox ws-flex-column ws-justify-content-between ws-flex-grow-0 ws-flex-shrink-0 controls-StackTemplate__rightPanel-wrapper'>
                                                <div className='ws-flexbox ws-flex-column ws-flex-shrink-0 ws-align-items-center'>
													<span className='controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter controls-StackTemplate__close_button controls-stack-Button__rightPanel__close ws-flex-shrink-0 controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl' data-qa='controls-stack-Button__close' tabIndex={-1} ws-creates-context='true' ws-delegates-tabfocus='true' title='Закрыть' onClick={this.closeThisPopup}>
														<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'>
															<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-label controls-icon icon-Close' tabIndex={0} />
														</span>
													</span>
                                                    <div data-qa='controls-StackTemplate__maximized_button' title='Свернуть/Развернуть' className='controls-StackTemplate__maximized_button controls-StackTemplate__rightPanel__maximized'></div>
                                                    <div className='controls-Toolbar controls-margin_top-xs' data-qa='edo3-Toolbar__container' tabIndex={-1}>
                                                        <div name='toolbarItems' className='controls-Toolbar_content controls-Toolbar_content-vertical'>
                                                            <div onClick={this.createLinked} data-name='linkedDocuments' data-qa='linkedDocuments' title='Создать/связать' className='controls-Toolbar__item controls-Toolbar__item' tabIndex={0}>
																<span className='controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-Toolbar__button undefined controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
																	<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'>
																		<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Linked' tabIndex={0} />
																	</span>
																</span>
                                                            </div>
                                                            <div data-name='deleteDocument' data-qa='deleteDocument' title='Удалить' className='controls-Toolbar__item controls-Toolbar__item controls-Toolbar__item_vertical-spacing_big' tabIndex={0}>
																<span className='controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-Toolbar__button undefined controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
																	<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'>
																		<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-danger controls-icon icon-Erase' tabIndex={0} />
																	</span>
																</span>
                                                            </div>
                                                            <div data-name='printDocument' data-qa='printDocument' title='Распечатать' className='controls-Toolbar__item controls-Toolbar__item controls-Toolbar__item_vertical-spacing_big' tabIndex={0}>
																<span className='controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-Toolbar__button undefined controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
																	<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'>
																		<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Print' tabIndex={0} />
																	</span>
																</span>
                                                            </div>
                                                            <span className='controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter controls-Toolbar__menu controls-Toolbar__menu_vertical-spacing-small controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl' data-qa='controls-Toolbar__menu' ws-creates-context='true' ws-delegates-tabfocus='true' title='Открыть меню' tabIndex={0}>
																<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'>
																	<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-SettingsNew' tabIndex={0} />
																</span>
															</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='nanomagicPage-widgets__rightPanel__bottomButtons ws-flexbox controls-padding_bottom-xs' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
                                                    <div className='nanomagicPage-widgets__wrapper ws-flexbox ws-flex-shrink-1 ws-justify-content-between ws-align-items-center'>
                                                        <div className='nanomagicPage-widgets__informersWrapper nanomagicPage-widgets__informersWrapper-shadow ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center ws-justify-content-end'>
                                                            <div id='autoSign' className='ws-flexbox ws-justify-content-center' tabIndex={0}>
                                                                <div className='edo-AutoSign__informer_noSpacing' />
                                                                <div tabIndex={0} />
                                                            </div>
                                                            <div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-default informers_InformersBar' tabIndex={0}>
                                                                <div className='controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{ overscrollBehaviorY: 'auto' }}>
                                                                    <div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content-direction_column'>
                                                                        <div className='informers_InformersBar ws-inline-flexbox ws-flex-shrink-0 ws-align-items-center ws-flex-column-reverse controls-Scroll-containerBase_userContent' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
                                                                            <div className='informers-InformersBar-informer_content_wrapper'>
                                                                                <div className='informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container' title='Новое сообщение' />
                                                                                <div className='informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container informers_InformersBar-informers_container-last' data-qa='informers_informerContent_Messages_icon' title='Новое сообщение'>
                                                                                    <div className='icon-EmptyMessage controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext' />
                                                                                </div>
                                                                            </div>
                                                                            <div className='informers-InformersBar-informer_content_wrapper'>
                                                                                <div className='informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container' title='Звонок' />
                                                                                <div className='informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container ' data-qa='informers_informerContent_Calls_icon' title='Звонок'>
                                                                                    <div className='icon-PhoneNull controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext' />
                                                                                </div>
                                                                            </div>
                                                                            <div className='informers-InformersBar-informer_content_wrapper'>
                                                                                <div className='informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container' />
                                                                                <div className='informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container ' data-qa='informers_informerContent_TodayInformer_icon'>
                                                                                    <div title='Дела на сегодня' className='WTM-Today__Informer' tabIndex={0} style={{ display: 'contents' }}>
                                                                                        <div className='WTM-Today__Informer_number' style={{ marginTop: '1px' }}>{new Date(new Date()).getDate()}</div>
                                                                                        <div className='WTM-Today__Informer_day' style={{ fontSize: '11px', marginTop: '-4px' }}>{['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][(new Date(new Date())).getDay() % 7]}</div>
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
                                                                <div className='hint-helpButton__icon' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='controls-StackTemplate-content'>
                                            <div className='controls-StackTemplate__top-area  controls-StackTemplate_headerBackgroundColor' tabIndex={0}>
                                                <div className='controls-StackTemplate__top-area-content'>
                                                    <div className='controls-StackTemplate__headerContentTemplate controls-StackTemplate__headerContentTemplate_padding-right'>
                                                        <div className='edo3-Dialog__head-firstLine edo3-Dialog__head-item ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center ws-justify-content-between ws-ellipsis' tabIndex={0}>
                                                            <div className='edo3-Dialog__head-firstLine-buttons ws-flex-shrink-1 ws-flex-first ws-flexbox ws-ellipsis'>
                                                                <div className='ws-flexbox' tabIndex={0}>
                                                                    <div data-qa='edo3-ReadOnlyStateTemplate__changeButton' className='extControls-singleButton__container controls-inlineheight-m controls-margin_left-l' tabIndex={30} title='Изменить'>
                                                                        <div className='extControls-doubleButton_bordered-m_captionPosition-start'>
                                                                            <div className='extControls-singleButton__mainText controls-text-unaccented extControls-doubleButton__captionContent-start-m controls-fontsize-m'>Изменить</div>
                                                                        </div>
                                                                        <div className='controls-inlineheight-m controls-Button_filled_m controls-Button_circle_height-m controls-Button_filled controls-Button_filled_style-pale extControls-singleButton__icon extControls-singleButton__icon-pale extControls-doubleButton__icon_captionPosition-start extControls-doubleButton__icon-absolute'>
                                                                            <div className='controls-BaseButton__icon controls-icon controls-icon_size-s controls-icon_style-secondary icon-Edit' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='ws-flexbox ws-align-items-center ws-ellipsis ws-flex-shrink-2' onClick={this.openStatusPopup}>
                                                                    <div tabIndex={90} className='edo3-PassageButton ws-flexbox edo3-Dialog__head-firstLine-passageButton ws-ellipsis ws-flex-shrink-1'>
                                                                        <div className='extControls-doubleButton extControls-doubleButton-inside  extControls-doubleButton_cursor edo3-PassageButton__button ws-ellipsis' tabIndex={0}>
                                                                            <div className='extControls-doubleButton__wrapper ws-flexbox ws-align-items-baseline extControls-doubleButton__wrapper_style-primary controls-inlineheight-m'>
                                                                                <div data-qa='extControls-doubleButton__icon' className='controls-Button-inlineheight-m controls-inlineheight-m controls-Button_filled_m controls-Button_circle_height-m extControls-doubleButton__icon extControls-doubleButton__mainAction extControls-doubleButton__icon_captionPosition-start extControls-doubleButton__icon-absolute' name='Button' tabIndex={0} title='Выполнено'>
                                                                                    <div className='ws-flexbox ws-justify-content-center ws-align-items-center controls-Button_clickable extControls-doubleButton__mainButton  controls-Button_filled_style-primary'>
                                                                                        <svg fillRule='evenodd' tabIndex={-1} className='controls-BaseButton__icon controls-icon controls-icon_size-s controls-icon_style-contrast controls-icon_svg'>
                                                                                            <use xlinkHref={'/asset/resource/img/arrows.svg#icon-Follow'} />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                                <span className='extControls-doubleButton__wave extControls-doubleButton_caption-m extControls-doubleButton__mainAction extControls-doubleButton__wave_style-primary extControls-doubleButton_bordered extControls-doubleButton_bordered-m_captionPosition-start extControls-doubleButton__wave_captionPosition-start  extControls-doubleButton_text-default controls-fontsize-m'>
																					<span name='mainActionCaption' data-qa='extControls-doubleButton__wave' className='ws-ellipsis extControls-doubleButton__captionContent-start-m'>Выполнено</span>
																				</span>
                                                                                <span data-qa='extControls-doubleButton__caption' title='Выполнение' className='ws-ellipsis extControls-doubleButton__caption extControls-doubleButton_caption-m controls-inlineheight-m extControls-doubleButton_bordered  extControls-doubleButton_same  extControls-doubleButton_bordered-m_captionPosition-start extControls-doubleButton__caption_captionPosition-start extControls-doubleButton_text-default controls-fontsize-m extControls-doubleButton__caption_style-default extControls-doubleButton_fontsize-m'>
																					<span className='extControls-doubleButton__captionContent-start-m ws-ellipsis'>Выполнение</span>
																				</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='controls-StackTemplate__content-area controls-StackTemplate_backgroundColor'>
                                                <div className='edo3-Dialog__bodyContent edo3-Dialog__fullHeight ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 controls-background-stack' tabIndex={0}>
                                                    <div className='controls-background-stackHeader controls-padding_left-m controls-padding_right-m' tabIndex={0} />
                                                    <div className='edo3-Dialog__head-crumbs edo3-Dialog__head-item ws-flex-shrink-0 controls-background-stackHeader' tabIndex={0} />
                                                    <div className='edo3-DialogLayout ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 edo3-Dialog__layout controls-background-stack' tabIndex={1100}>
                                                        <div className='controls-Tabs controls-Tabs__horizontal  controls-Tabs_inlineHeight-s edo3-DialogLayout-tabs controls-background-stackHeader ws-flex-shrink-0' tabIndex={-1} name='container'>
                                                            <div name='wrapper' className='controls-Tabs-wrapper controls-Tabs-wrapper__horizontal'>
                                                                <div name='tabmain' data-name='main' className='controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_first controls-Tabs__item-maxWidth controls-Tabs__item_align_left controls-Tabs__item_extreme controls-Tabs__item_extreme_first controls-Tabs__item_canShrink' style={{ order: 1 }} onClick={this.renderMain}>
                                                                    <div name='TabContent0' className='controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker_main controls-marker_tabsMain controls-Tabs__itemClickableArea_type-horizontal-default'>
                                                                        <div className='edo3-DocumentName ws-flexbox ws-align-items-baseline ws-ellipsis controls-Tabs__item_view_main' data-qa='TabsItemSelected' tabIndex={0}>
																			<span className='controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-4xl controls-Button_link__wrapper-fontsize-4xl controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper ws-ellipsis edo3-DocumentName__menu ws-flexbox ws-ellipsis' ws-creates-context='true' ws-delegates-tabfocus='true' title='Задача' tabIndex={0}>
																				<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'>
																					<span className='controls-BaseButton__text controls-text-default controls-Button__text-default_viewMode-link controls-Button__text_viewMode-link' tabIndex={0}>{+this.task.ttype !== 0 ? 'Задача' : '???'}</span>
																				</span>
																			</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='edo3-DateNumber' tabIndex={0}>
                                                                        <div className='controls_editableArea_theme-default controls-EditableArea  controls-EditableArea_readonly edo3-DateNumber__editor ws-flexbox ws-align-items-baseline' tabIndex={0}>
                                                                            <div className='controls-EditableArea__wrapper'>
                                                                                <div className='ws-flexbox ws-align-items-baseline' tabIndex={0}>
                                                                                    <div className='controls_editableArea_theme-default controls-EditableArea__editorWrapper controls-Tabs__content_text ws-flex-shrink-0 edo3-DateNumber__inputMargin controls-Tabs__content_text' tabIndex={0}>
                                                                                        <div className='controls-EditableArea__Text controls-text- controls-fontweight-default controls-inlineheight-default controls-fontsize-l'>
                                                                                            <div className='controls-EditableArea__Text__wrapper'>
                                                                                                <span className='controls-EditableArea__Text__baseline'>﻿</span>
                                                                                                <div className='controls-EditableArea__Text__inner'>{new Date(this.task.tdate).toLocaleDateString("ru-RU", {day: '2-digit', month: '2-digit', year: '2-digit'})}</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span className='ws-flex-shrink-0 controls-Tabs__content_additionaltext edo3-DateNumber__inputMargin controls-Tabs__content_additionaltext' tabIndex={0}>№</span>
                                                                                    <div title='6' className='controls_editableArea_theme-default controls-EditableArea__editorWrapper controls-Tabs__content_additionaltext ws-flex-shrink-1 edo3-DateNumber__textInput controls-Tabs__content_additionaltext' tabIndex={0}>
                                                                                        <div className='controls-EditableArea__Text controls-text- controls-fontweight-default controls-inlineheight-default controls-fontsize-l'>
                                                                                            <div className='controls-EditableArea__Text__wrapper'>
                                                                                                <span className='controls-EditableArea__Text__baseline'>﻿</span>
                                                                                                <div className='controls-EditableArea__Text__inner'>{this.task.id}</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div name='tabextra-discussions' data-name='extra-discussions' className='controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_notShrink' style={{ order: 30 }} onClick={this.renderChat}>
                                                                    <div name='TabContent1' className='controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal controls-marker_state-default controls-Tabs__itemClickableArea_type-horizontal-default'>
                                                                        <div className='edws-MessagesTab edws-TaskTab ws-inline-flexbox ws-align-items-baseline controls-Tabs__item_state_default controls-text-secondary' tabIndex={0}>
                                                                            <div className='ws-align-items-baseline'>
                                                                                <div title='Обсуждения' className='icon-edws-TabHeader icon-24 controls-icon_style-secondary  icon-Chat' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div name='tabtimeline' data-name='timeline' className='controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_last controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_extreme controls-Tabs__item_extreme_last controls-Tabs__item_notShrink' style={{ order: 31 }} onClick={this.renderLenta}>
                                                                    <div name='TabContent2' className='controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal controls-marker_state-default controls-Tabs__itemClickableArea_type-horizontal-default'>
                                                                        <div className='edws-TimelineTab edws-TaskTab ws-inline-flexbox ws-align-items-baseline controls-Tabs__item_state_default controls-text-secondary' tabIndex={0}>
                                                                            <div className='ws-align-items-baseline'>
                                                                                <div title='Лента' className='icon-edws-TabHeader icon-24 icon-Lenta controls-icon_style-secondary' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='controls-Tabs__space controls-Tabs__space_inlineHeight-s' />
                                                            </div>
                                                            <div className='controls-Tabs__marker  ws-invisible' />
                                                        </div>
                                                        <div className='controls-LoadingIndicator controls-SwitchableArea ws-flex-grow-1 edo3-Dialog__fullHeight edo3-DialogLayout__relativeContainer controls-background-stack ws-flexbox ws-flex-grow-1 ws-flex-shrink-1' tabIndex={2}>
                                                            <div className={'edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-align-self-stretch .edo3-Dialog__drag-and-drop-area--64882'} tabIndex={3} data-key='main'>
                                                                <div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-default edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1' tabIndex={0}>
                                                                    <div className='controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{ overscrollBehaviorY: 'auto' }}>
                                                                        <div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content-direction_column'>
                                                                            <div className='edws-TaskDialog__AttachButtonDropAreaWrapper ws-flexbox ws-flex-grow-1 edo3-Dialog__fullHeight controls-Scroll-containerBase_userContent' tabIndex={0}>
                                                                                <div data-element='DropArea' id='DropArea__33400c5d-7f9b-42ff-9527-a6b17302382b' className='DropArea__container docview3-drop-area' tabIndex={0}>
                                                                                    <div id='DropArea__overlaidElement__33400c5d-7f9b-42ff-9527-a6b17302382b' className='DropArea__overlaidElement'>
                                                                                        <div name='mainTabContainer' className='edws-TaskDialog__mainTab ws-flexbox ws-flex-column ws-flex-grow-1' tabIndex={0}>
                                                                                            <div tabIndex={0} />
                                                                                            <div name='mainInfoContainer' className='edws-TaskDialog__mainTab-mainInfoContainer'>
                                                                                                <div tabIndex={1} name='mainInformationTab' className='edws-TaskDialog__mainTab-mainInfo ws-flexbox ws-flex-column edws-boot'>
                                                                                                    <div name='mainHead' className='ws-flexbox ws-justify-content-between ws-align-items-start edws-TaskDialog__mainTab-head'>
                                                                                                        <div className='ws-flex-grow-1 ws-flex-shrink-1 ws-flexbox ws-flex-column ws-ellipsis edws-TaskDialog__mainTab-mainInfo-executor-container ws-justify-content-end'>
																											<span tabIndex='-1' className='controls_lookup_theme-default controls-Lookup__link controls-Lookup__link-inlineheight-xs controls-Lookup__link-readOnly controls-fontsize-lookupLink edws-TaskDialog__mainTab-mainInfo-staff-chooser-link ws-align-self-start' data-qa='Lookup__link'>
																												<span className='controls-Lookup__link__text'>Исполнитель</span>
																											</span>
                                                                                                        </div>
                                                                                                        <div className='ws-flexbox ws-flex-column'>
                                                                                                            <div className='edo3-Sticker ws-flexbox edo3-Sticker--withPhoto edo3-Sticker--photo-right ws-flex-grow-0 ws-flex-shrink-0 ws-align-self-end taskSticker' tabIndex='-1'>
                                                                                                                <div className='edo3-Sticker__main-flexContainer controls-fontsize-m ws-flexbox ws-flex-column ws-align-items-end'>
                                                                                                                    <div className='edo3-Sticker__mainRow-container ws-flexbox ws-flex-row'>
                                                                                                                        <div data-qa='edo3-Sticker__mainInfo' title={this.author.name} className='edo3-Sticker__mainRow controls-fontsize-xs controls-inlineheight-xs ws-ellipsis ws-flex-shrink-1  edo3-Sticker__active controls-text-secondary'>{this.author.name}</div>
                                                                                                                    </div>
                                                                                                                    <div title={this.group.group_name} className='edo3-Sticker__additionalRow controls-text-unaccented controls-fontsize-xs ws-ellipsis'>{this.group.group_name}</div>
                                                                                                                </div>
                                                                                                                <div className='person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default edo3-Sticker__photo' tabIndex={0} style={{ width: '32px', height: '32px' }}>
                                                                                                                    <div className='person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'>
                                                                                                                        <div className='person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound controls-PopupPreviewer person-Wrapper__clickable' tabIndex={0} style={{ lineHeight: '32px', height: '32px', width: '32px' }}>
                                                                                                                            <picture className='ws-flexbox person-Wrapper__picture'>
                                                                                                                                <img loading={'lazy'} src={'/asset/resource/users/foto/' + this.author.foto} className={'person-DefaultPhoto__image'} />
                                                                                                                            </picture>
                                                                                                                            <div style={{ width: '32px' }}>&nbsp;</div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='edws-StaffChooser edws-TaskDialog__mainTab-mainInfo-executor ws-flex-grow-0 ws-flex-shrink-0 ws-ellipsis' tabIndex={1}>
                                                                                                        <div className='ws-flexbox edws-StaffChooser__lookupContainer ws-align-items-start'>
                                                                                                            <div className='person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default edws-StaffChooser__photo ws-flex-shrink-0 ws-flex-grow-0 ws-ellipsis' tabIndex={0} style={{ width: '40px', height: '40px' }}>
                                                                                                                <div className='person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'>
                                                                                                                    <div className='person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound controls-PopupPreviewer person-Wrapper__clickable' tabIndex={0} style={{ lineHeight: '40px', height: '40px', width: '40px' }}>
                                                                                                                        <picture className='ws-flexbox person-Wrapper__picture'>
                                                                                                                            <source media='(-webkit-device-pixel-ratio: 3)' srcSet='/previewer/120/fs-public/person_avatar_files/f1950dd9-734e-4243-bdcd-81018c9f00d5 3x' />
                                                                                                                            <source media='(-webkit-device-pixel-ratio: 2)' srcSet='/previewer/80/fs-public/person_avatar_files/f1950dd9-734e-4243-bdcd-81018c9f00d5 2x' />
                                                                                                                            <source media='(-webkit-device-pixel-ratio: 1.5)' srcSet='/previewer/60/fs-public/person_avatar_files/f1950dd9-734e-4243-bdcd-81018c9f00d5 1.5x' />
                                                                                                                            <source media='(-webkit-device-pixel-ratio: 1)' srcSet='/previewer/40/fs-public/person_avatar_files/f1950dd9-734e-4243-bdcd-81018c9f00d5 1.0x' />
                                                                                                                            <img loading='lazy' src='/previewer/40/fs-public/person_avatar_files/f1950dd9-734e-4243-bdcd-81018c9f00d5' className='person-DefaultPhoto__image' />
                                                                                                                        </picture>
                                                                                                                        <div style={{ width: '40px' }}>&nbsp;</div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className='edws-StaffChooser__validateContainer controls-ValidateContainer__validationStatus-valid' tabIndex={0}>
                                                                                                                <div className='controls_lookup_theme-default controls-Lookup edws-StaffChooser__lookup ws-flex-grow-0 ws-flex-shrink-1 ws-ellipsis' tabIndex={1}>
                                                                                                                    <div className='controls_suggestPopup_theme-default controls-SuggestV controls-Lookup__suggest' tabIndex={0}>
                                                                                                                        <div className='controls-Render js-controls-Render controls-Render_border-top-empty controls-Render_border-bottom controls-Render_background-same controls-Render_textAlign-left controls-Render_borderRadius controls-Render_state-readonly controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-readonly_caretEmpty  controls-inlineheight-default controls-Render-inlineheight-default controls-Lookup__inputRender controls-Lookup__inputRender_horizontalPadding-null controls-Lookup__inputRender_singleLine controls-Suggest__layout-input' tabIndex={0}>
                                                                                                                            <div className='controls-Render__wrapper'>
                                                                                                                                <span className='controls-Render__baseline'>﻿</span>
                                                                                                                                <div className='controls_lookup_theme-default controls-SelectedCollection__collection-container controls-SelectedCollection__collection-container_singleLine controls-Lookup__collection controls-Render__beforeField' tabIndex={0}>
                                                                                                                                    <div className='controls-SelectedCollection__collection controls-SelectedCollection__collection_singleLine controls-SelectedCollection__collection_singleLine_fontSize-m controls-SelectedCollection__collection-oneRow' tabIndex={0}>
																																		<IspolnitelList data={this.ispolns} />
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='controls_RichEditor_theme-default richEditor_Editor ws-flexbox controls_RichEditor_theme-default edws-TaskDialog__mainTab-mainInfo-description controls-ValidateContainer__validationStatus-valid' name='taskDescrAttr' tabIndex={2}>
                                                                                                        <div className='controls-Render js-controls-Render controls-Render_border-top controls-Render_border-bottom controls-Render_background-same controls-Render_textAlign- controls-Render_borderRadius controls-Render_state-readonly-text-multiline controls-fontsize- controls-fontweight-default controls-fontsize- controls-fontweight-default controls-Render-fontsize-undefined controls-text-  controls-Render_state-readonly-text-multiline_caretEmpty controls-Render_multiline controls_RichEditor_theme-default  richEditor_Base_inputRender richEditor_Base_inputRender_size_s ws-flex-grow-1 richEditor_Editor_area' tabIndex={0}>
                                                                                                            <div className='controls-Render__wrapper'>
                                                                                                                <div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-default richEditor_Base controls-Render__field controls-Render__field_textAlign_undefined  controls-Render__field_zIndex controls-Render__fullHeight' id='richEditor_Base_0deef3bf-7b37-4f1d-a05b-314bf22c20ab' data-qa='controls-Render__field' tabIndex={0} style={{ minHeight: '42px' }}>
                                                                                                                    <div className='controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{ overscrollBehaviorY: 'auto' }}>
                                                                                                                        <div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content-direction_column'>
                                                                                                                            <div className='richEditor_Base_scrollingContainer controls-Scroll-containerBase_userContent' name='editorWrapper' tabIndex={0}>
                                                                                                                                <div className='controls_RichEditor_theme-default richEditor_richContentRender richEditor_richContentRender_fontSize-m richEditor_richContentRender_lineHeight-m richEditor_richContentRender richEditor_richContentRender_readOnly richEditor_Base_textContainer' tabIndex={0}>
																																	{this.task.topis}
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div tabIndex={0}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className='edo3-FileViewer edo3-FileViewer__fullWidth  ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-flex-column edws-TaskDialog__attachment' tabIndex={-1}>
                                                                                                <div className='edo3-FileViewer__fullWidth ws-align-self-stretch ws-flexbox ws-flex-grow-1 ws-flex-shrink-1' tabIndex={0}>
                                                                                                    <div className='docview3-attachListContainer ws-flex-grow-1 edo3-FileViewer__fullWidth' tabIndex={0}>
                                                                                                        <div className='docview3-Fullviewer__content docview3-Fullviewer__content_table ws-flexbox ws-flex-column docview3-Fullviewer' tabIndex={0} style={{ height: '100%' }}>
                                                                                                            <div className='docview3-Fullviewer__list__container' tabIndex={0}>
                                                                                                                <div className='docview3-List  ws-flexbox ws-flex-column docview3-List_column docview3-Fullviewer__list docview3-Fullviewer__list_table' tabIndex={0}>
                                                                                                                    <div ws-creates-context='true' ws-delegates-tabfocus='true' className='controls-StickyBlock  controls-background-default-sticky  ' data-stickyblockid='4' tabIndex={0} style={{ top: '0px' }}>
                                                                                                                        <div className='docview3-List__header ws-flexbox ws-flex-shrink-0 ws-align-items-center controls-margin_left-m docview3-List__header_height controls-StickyBlock__content' name='header' tabIndex={0} data-stickyblockid='4'>
                                                                                                                            <div className='edo3-FileViewer__before-search-template-area ws-flexbox ws-align-items-center' tabIndex={0}>
                                                                                                                                <div className='docview3-attachButtonContainer' tabIndex={0}>
                                                                                                                                    <div tabIndex={0}>
																																		<span className='controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper docview3-AttachButton' data-qa='docview3-AddButton' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
																																			<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'>
																																				<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-label controls-icon icon-Attach' tabIndex={-1}></i>
																																				<span className='controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-link controls-Button__text_captionPosition-default_end controls-Button__text_viewMode-link' tabIndex={0}>Добавить</span>
																																			</span>
																																		</span>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                                <div className='edo3-FileViewer__userTemplate'>
                                                                                                                                    <div data-qa='edws-TaskDialog__addSubtaskButton' name='bottomAddAttr' className='edws-TaskDialog__bottomAddSubtask' tabIndex={0}>
																																		<span className='controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper' tabIndex={-1} ws-creates-context='true' ws-delegates-tabfocus='true'>
																																			<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'>
																																				<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-label controls-icon icon-TFTask' tabIndex={-1}></i>
																																				<span className='controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-link controls-Button__text_captionPosition-default_end controls-Button__text_viewMode-link' tabIndex={0}>Подзадача</span>
																																			</span>
																																		</span>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <div data-stickyblockid='4' className='controls-StickyBlock__observationTarget_top' style={{ top: '-2px' }}></div>
                                                                                                                        <div data-stickyblockid='4' className='controls-StickyBlock__observationTarget_top2'></div>
                                                                                                                        <div data-stickyblockid='4' className='controls-StickyBlock__observationTarget_top2Right'></div>
                                                                                                                        <div data-stickyblockid='4' className='controls-StickyBlock__observationTarget_bottomLeft' style={{ bottom: '-2px' }}></div>
                                                                                                                        <div data-stickyblockid='4' className='controls-StickyBlock__observationTarget_bottomRight' style={{ bottom: '-2px' }}></div>
                                                                                                                        <div data-stickyblockid='4' className='controls-StickyBlock__observationTarget_left' style={{ left: '-2px' }}></div>
                                                                                                                        <div data-stickyblockid='4' className='controls-StickyBlock__observationTarget_right' style={{ right: '-2px' }}></div>
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
                                                                    </div>
                                                                </div>
                                                            </div>
															<div className={'edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-align-self-stretch .edo3-Dialog__drag-and-drop-area--64886 ws-hidden'} tabIndex={3} data-key={'extra-discussion'}>
																<Discussion data={this.task} key={'discussion'} />
															</div>
															<div className={'edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-align-self-stretch edws-TaskDialog-extended__rightContent ws-hidden'} tabIndex={3} data-key={'timeline'}>
																<TimeLine data={this.task} key={'timeline'} />
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
            </>
        )
    }
}

export default TaskDialogPopup