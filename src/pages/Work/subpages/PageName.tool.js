import React from 'react'
import { subaction } from '../../../index.js'

function PageName() {
	if ([''].includes(subaction)) {
		return (
			<a className='ws-flexbox ws-flex-shrink-1 ws-flex-grow-1 NavigationPanels-Container NavigationPanels-Logo NavigationPanels-Logo-default NavigationPanels-HeaderLogo nanomagicPage-MainLayout__logo navigation_theme controls-margin_left-xl ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline' data-qa='NavigationPanels-logo' href='/' tabIndex={0}>
				<div className='ws-flexbox NavigationPanels-Container' tabIndex={0}>
					<div className='ws-flexbox NavigationPanels-Sidebar__sabyLogo NavigationPanels-Sidebar__sabyLogo-Header'>
						<span className='NavigationPanels-Sidebar__sabyLogo_title_default NavigationPanels-Sidebar__sabyLogo_title-Header'>NanoMagic RPG</span>
					</div>
				</div>
			</a>
		)
	}
	if (['tasks-in-work', 'tasks-controlled', 'tasks-done'].includes(subaction)) {
		return (
			<div className='nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-maring_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline' tabIndex={0}>
				<span className='controls-Header__caption controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top' ws-creates-context='true' ws-delegates-tabfocus='true' title='Задачи на мне' tabIndex={0}>Задачи на мне</span>
			</div>
		)
	}
	if (['tasks-from-me', 'tasks-returned'].includes(subaction)) {
		return (
			<div className='nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-maring_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline' tabIndex={0}>
				<span className='controls-Header__caption controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top' ws-creates-context='true' ws-delegates-tabfocus='true' title='Задачи от меня' tabIndex={0}>От меня</span>
			</div>
		)
	}
	if (['recipes'].includes(subaction)) {
		return (
			<div className='nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-maring_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline' tabIndex={0}>
				<span className='controls-Header__caption controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top' ws-creates-context='true' ws-delegates-tabfocus='true' title='Рецепты' tabIndex={0}>Рецепты</span>
			</div>
		)
	}
	if (['staff-list'].includes(subaction)) {
		return (
			<div className='nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-maring_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline' tabIndex={0}>
				<span className='controls-Header__caption controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top' ws-creates-context='true' ws-delegates-tabfocus='true' title='Сотрудники' tabIndex={0}>Сотрудники</span>
			</div>
		)
	}
	return ''
}

export { PageName }