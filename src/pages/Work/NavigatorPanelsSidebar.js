import React from 'react'
import { subaction } from '../../index.js'
import { getTasksForUser, getUserById } from '../../utils/Request.js'

let users = null;
let tasks = null;

function NavigatorPanelsSidebar() {
	if (users === null || +users.user_id !== +window.localStorage.getItem('user_id')) users = getUserById(window.localStorage.getItem('user_id'))
	if (tasks === null || +users.user_id !== +window.localStorage.getItem('user_id')) tasks = getTasksForUser(window.localStorage.getItem('user_id'))
	function mainPage() {
		window.location.pathname = '/work'
	}

	if (users.user_group === 12) window.location.href = '/'

	return (
		<div className='NavigationPanels-Sidebar__container NavigationPanels-Sidebar__wrapper ws-flexbox navigation_theme navigation_theme-onlinenavigation nanomagicPage-MainLayout__sidebar' tabIndex={0}>
			<div name='rootContainer' className='NavigationPanels-Sidebar ws-flexbox ws-flex-column NavigationPanels-Sidebar__width_minimal'>
				<div data-qa='NavigationPanels-Sidebar__header' className='NavigationPanels-Sidebar__header NavigationPanels-Sidebar__header_compact'>
					<div data-qa='NavigationPanels-Sidebar__headerTopLine' className='ws-flexbox NavigationPanels-Sidebar__headerTopLine' onClick={mainPage}>
						<div className='NavigationPanels-Sidebar__beforeLogoTemplate NavigationPanels-Sidebar__beforeLogoTemplate_compact online-QuickAdd ws-flex-grow-0 ws-flex-shrink-0 online-QuickAdd' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0}>
							<span className='controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-quickadd controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-small controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper online-QuickAdd_menu controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl' data-name='online-QuickAdd_menu' data-qa='QuickAdd-menu' ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0} key='asyncPart'>
								<span className='controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'>
									<i className='controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-contrast controls-icon icon-SabyBird' tabIndex={0}/>
								</span>
							</span>
						</div>
					</div>
					<div data-qa='NavigationPanels-Sidebar__headerBottonLine' className='ws-flexbox NavigationPanels-Sidebar__headerBottomLine'>
						<div data-qa='NavigationPanels-Sidebar__compactBtn' className='NavigationPanels-Sidebar__compactBtn NavigationPanels-Sidebar__compactBtn_compact ws-flexbox ws-flex-shrink-0 acc-icon-default acc-icon-Menu' tabIndex={0}/>
					</div>
				</div>
				<div className='controls-Scroll-Container controls-Scroll controls_scroll_theme-onlinenavigation NavigationPanels-Accordion NavigationPanels-Sidebar__accordion ws-flexbox ws-flex-column' tabIndex={0}>
					<div className='controls-Scroll-ContainerBase controls_scroll_theme-onlinenavigation controls-Scroll__content controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined controls-Scroll__backgroundShadow controls-Scroll__background-Shadow_style-accordion controls-Scroll__background-Shadow_top-auto_bottom-auto_style-default' name='content' data-qa='controls-Scroll__content' tabIndex={0} style={{ overscrollBehaviorY: 'auto' }}>
						<div name='userContent' className='controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content-direction_column'>
							<div className='navigation_theme navigation_theme-onlinenavigation controls_list_theme-onlinenavigation ws-flexbox ws-flex-grow-1 ws-align-items-stretch ws-flex-column NavigationPanels-Accordion__width_minimal controls-Scroll-containerBase_userContent' tabIndex={0}>
								<div name='restrictiveTarget' className='NavigationPanels-Accordion__subMenuRestrictArea'/>
								<div data-qa='NavigationPanels-Accordion__container' className='NavigationPanels-Accordion__container NavigationPanels-Accordion__container_compact ws-flexbox ws-flex-shrink-0 ws-flex-column NavigationPanels-Accordion_showSelectedOnly'>
									<svg width={0} height={0} className='clip-svg'>
										<defs>
											<clipPath id='NavigationPanels-Accordion__image_ellipse' clipPathUnits={'objectBoundingBox'}>
												<path d='M0.5, 0 C 0.625,0 0.7891304347826086, 0.0391304347826087 0.875, 0.125 S 1, 0.375 1, 0.5 S 0.9608695652173914, 0.7891304347826086 0.875,0.875 S 0.625, 1 0.5, 1 S 0.21086956521739128, 0.9608695652173914 0.125, 0.875 S 0, 0.625 0, 0.5 S 0.0391304347826087, 0.21086956521739128 0.125, 0.125 S 0.375,0 0.5,0'/>
											</clipPath>
										</defs>
									</svg>
									{!([11].includes(users.user_group)) ? <a name='item-contacts' data-qa='Контакты' href='/work/dialogs' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (subaction === 'dialogs' || subaction === 'people' || subaction === 'contacts' ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate' />
										<span data-qa='NavigationPanels-Accordion__icon' data='9' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default    acc-default-icon acc-icon acc-contacts' tabIndex={0} />
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>Контакты</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>Контакты</span>
										<span data-qa='NavigationPanels-Counter__arrow' title='Звонков: 0\nСообщений: 0\nКаналов: 0\nПриглашений: 0\nПочтовых диалогов: 0\nОбсуждений: 0\nПриглашений в группы: 0' className='NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color  NavigationPanels-Accordion__counter-background    NavigationPanels-Counter__compact  NavigationPanels-Counter__lvl-1  navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container NavigationPanels-Counter__arrow' tabIndex={0} key='counter_contacts.dialogs'>
											<svg viewBox='0 0 8 16' xmlns='http://www.w3.org/2000/svg' className='NavigationPanels-Counter__arrow_icon'>
												<polygon points='2.5,16 0.5,16 6,8 0.5,0 2.5,0 8,8 ' xmlns='http://www.w3.org/2000/svg' />
											</svg>
										</span>
									</a> : ''}
									{!([11].includes(users.user_group)) ? <a name='item-work' data-qa='Задачи' href='/work/tasks-in-work' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (['tasks-in-work', 'tasks-controlled', 'tasks-done', 'tasks-from-me', 'tasks-returned'].includes(subaction) ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate'/>
										<span data-qa='NavigationPanels-Accordion__icon' date='9' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon acc-icon acc-icon-work' tabIndex={0}/>
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>Задачи</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>Задачи</span>
										<span data-qa='NavigationPanels-Accordion__counter' title={`Всего ${tasks.count}`} className='NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color  NavigationPanels-Accordion__counter-background    NavigationPanels-Counter__compact  NavigationPanels-Counter__lvl-1  navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container' tabIndex={0} key='counter_tasks.onme'>
											<span data-qa='counter' className='NavigationPanels-Counter__default  NavigationPanels-Counter__compact-show NavigationPanels-Counter__compact-all'>{tasks.count}</span>
										</span>
									</a> : ''}
									{!([11].includes(users.user_group)) ? <a name='item-staff' data-qa='Сотрудники' href='/work/staff-list' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (subaction === 'staff-list' || subaction === 'staff-posts' || subaction === 'staff-statistic-new' || subaction === 'staff-structure' || subaction === 'staff-verification' ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate'/>
										<span data-qa='NavigationPanels-Accordion__icon' date='9' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default    acc-default-icon acc-icon acc-icon-staff' tabIndex={0}/>
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>Сотр-ки</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>Сотрудники</span>
										<span data-qa='NavigationPanels-Counter__arrow' className='NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color  NavigationPanels-Accordion__counter-background    NavigationPanels-Counter__compact  NavigationPanels-Counter__lvl-1  navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container NavigationPanels-Counter__arrow' tabIndex={0} key='counter_staff.employees'>
											<svg viewBox='0 0 8 16' xmlns='http://www.w3.org/2000/svg' className='NavigationPanels-Counter__arrow_icon'>
												<polygon points='2.5,16 0.5,16 6,8 0.5,0 2.5,0 8,8 ' xmlns='http://www.w3.org/2000/svg'/>
											</svg>
										</span>
									</a> : ''}
									{!([11].includes(users.user_group)) ? <a name='item-documents' data-qa='Документы' href='/work/documents-all' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (subaction === 'documents-all' ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate'/>
										<span data-qa='NavigationPanels-Accordion__icon' date='9' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default    acc-default-icon acc-icon acc-documents' tabIndex={0}/>
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>Док-ты</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>Документы</span>
										<span data-qa='NavigationPanels-Accordion__counter' className='NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color  NavigationPanels-Accordion__counter-background    NavigationPanels-Counter__compact  NavigationPanels-Counter__lvl-1  navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container   NavigationPanels-Counter__new_class' tabIndex={0} key='counter_documents.counter'>
											<span data-qa='counter_new' className='NavigationPanels-Counter__new_class NavigationPanels-Counter__new NavigationPanels-Counter__compact-show NavigationPanels-Counter__compact-new'>0</span>
										</span>
									</a> : ''}
									{!([11].includes(users.user_group)) ? <a name='item-contact-center' data-qa='Контакт-центр' href='/work/contact-center' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (subaction === 'contact-center' || subaction === 'claim-chats' || subaction === 'support-service' || subaction === 'mail-messagescc' ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate'/>
										<span data-qa='NavigationPanels-Accordion__icon' date='9' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default    acc-default-icon acc-icon acc-icon-Support' tabIndex={0}/>
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>К-центр</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>Контакт-центр</span>
										<span data-qa='NavigationPanels-Accordion__counter' title='Чаты:\n новые, неотвеченные - 0,\n мои - 0' className='NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color  NavigationPanels-Accordion__counter-background    NavigationPanels-Counter__compact  NavigationPanels-Counter__lvl-1  navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container' tabIndex={0} key='counter_contactCenter'/>
									</a> : ''}
									{/* <a name='item-calendar' data-qa='Календарь' href='/work/calendar' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (subaction === 'calendar' || subaction === 'month' || subaction === 'year' ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate'></span>
										<span data-qa='NavigationPanels-Accordion__icon' date='9' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default    acc-default-icon acc-icon acc-icon-calendar' tabIndex={0}></span>
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>Кален-рь</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>Календарь</span>
										<span data-qa='NavigationPanels-Counter__arrow' className='NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color  NavigationPanels-Accordion__counter-background    NavigationPanels-Counter__compact  NavigationPanels-Counter__lvl-1  navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container NavigationPanels-Counter__arrow' tabIndex={0} key='counter_calendar.counter'>
											<svg viewBox='0 0 8 16' xmlns='http://www.w3.org/2000/svg' className='NavigationPanels-Counter__arrow_icon'>
												<polygon points='2.5,16 0.5,16 6,8 0.5,0 2.5,0 8,8 ' xmlns='http://www.w3.org/2000/svg'></polygon>
											</svg>
										</span>
									</a> */}
									<a name='item-recipe' data-qa='Рецепты' href='/work/recipes' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (subaction === 'recipes' ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate'/>
										<span data-qa='NavigationPanels-Accordion__icon' date='24' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon acc-icon acc-accounting' tabIndex="0"/>
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>Рецепты</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>Рецепты</span>
									</a>
									<a name='item-myProfile' data-qa='Моя страница' href='/work/my-general-info' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (subaction === 'my-general-info' || subaction === 'my-wall' || subaction === 'my-training-skills' || subaction === 'notice-settings-my-page' || subaction === 'my-workplace' || subaction === 'system-access' || subaction === 'staff-actions-in-system' || subaction === 'access-and-roles' ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate'/>
										<img src={'/asset/resource/users/image/' + users.foto} data-qa='NavigationPanels-Accordion__icon' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_custom_icon  NavigationPanels-Accordion__icon_custom_compact  NavigationPanels-Accordion__prevent-default' />
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>{users.name}</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>{users.name}</span>
										<span data-qa='NavigationPanels-Accordion__counter' title='0 новых извещений. Всего 0' className='NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color  NavigationPanels-Accordion__counter-background    NavigationPanels-Counter__compact  NavigationPanels-Counter__lvl-1  navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container' tabIndex={0} key='counter_paysys.unreadtaxes'/>
									</a>
									{!([11].includes(users.user_group)) ? <a name='item-online-settings' data-qa='Настройки' href='/work/settings-interface' className={'NavigationPanels-Accordion__item NavigationPanels-Accordion__item_compact NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1 ' + '' + ' NavigationPanels-Accordion__item_showSelectedOnly ' + (subaction === 'settings-interface' || subaction === 'security-settings' ? 'NavigationPanels-Accordion__item_activeMenu' : ' ') + ' ' + ' ' + ' ws-flex-column'} tabIndex={0}>
										<span className='NavigationPanels-Accordion__item_substrate'/>
										<span data-qa='NavigationPanels-Accordion__icon' date='9' className='NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon acc-icon acc-icon-Setting' tabIndex={0}/>
										<span data-qa='NavigationPanels-Accordion__item_shortTitle' className='NavigationPanels-Accordion__item_shortTitle'>Настр-ки</span>
										<span data-qa='NavigationPanels-Accordion__title' className='NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'>Настройки</span>
									</a> : ''}
									<div className='controls-LoadingIndicator' tabIndex={0}>
										<div className='controls-loading-indicator_content' tabIndex={0}/>
									</div>
									<div tabIndex={0}/>
									<div tabIndex={0}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { NavigatorPanelsSidebar }