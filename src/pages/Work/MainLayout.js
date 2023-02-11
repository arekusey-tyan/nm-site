import React from 'react'
import { subaction } from '../../index.js'
import { FilterTool } from './subpages/Filter.tool.js'
import { PageName } from './subpages/PageName.tool.js'
import { SearchTool } from './subpages/Search.tool.js'
import { SortingTool } from './subpages/Sorting.tool.js'
import { ToolBar } from './subpages/ToolBar.tool.js'
import DefaultMainLayout from './pages/DefaultMainLayout.js'
import TaskPage from './pages/Tasks/TaskMainLayout.js'
import RecipePage from './pages/RecipePage.js'
import MyGeneralInfo from './pages/MyGeneralInfo.js'
import {stringGen} from '../../utils/functions.js'
import StaffList from './pages/Persons/StaffList/StaffList.js'
import DocumentPage from './pages/DocumentView/DocumentPage.js'

function PageId() {
	if (['tasks-in-work', 'tasks-controlled', 'tasks-done', 'tasks-from-me', 'tasks-returned'].includes(subaction)) {
		return <TaskPage />
	}
	if (['tasks-process', 'tasks-stat', 'tasks-by-staff'].includes(subaction)) {
	}
	if (subaction === 'recipes') {
		return <RecipePage />
	}
	if (['staff-list'].includes(subaction)) {
		return <StaffList />
	}
	if (['documents-all'].includes(subaction)) {
		return <DocumentPage />
	}
	return <DefaultMainLayout />
}

function MainLayout() {
	if (['my-general-info', 'my-wall', 'my-training-skills', 'notice-settings-my-page', 'my-workplace', 'system-access', 'staff-actions-in-system', 'business-processes', 'my-signatures', 'identList', 'access-and-roles'].includes(subaction)) {
		return (
			<div className={'nanomagicPage-CardLayout__workspaceWrapper controls-padding_right-2xs ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 nanomagicPage-MainLayout__content'}>
				<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0} />
				<MyGeneralInfo key={'' + stringGen(10)} />
			</div>
		)
	} else
		return (
			<div className='nanomagicPage-MainLayout__workspaceWrapper nanomagicPage-MainLayout__workspaceWrapper_contrast ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 nanomagicPage-MainLayout__content' tabIndex={0}>
				<div ws-creates-context='true' ws-delegates-tabfocus='true' tabIndex={0} />
				<div name='header' className='nanomagicPage-MainLayout__header_blockLayout ws-flexbox ws-flex-row ws-flex-shrink-0 ws-align-items-center ws-workspace-width-1472'>
					<div className='nanomagicPage-MainLayout__headerLeft ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center controls-padding_right-m' style={{ minWidth: '0px' }}>
						<PageName />
						<ToolBar />
					</div>
					<div className={'ws-flexbox nanomagicPage-MainLayout__search ws-flex-shrink-0 ws-justify-content-' + (['tasks-in-work', 'staff-verification', 'dialogs', 'contacts', 'people', 'tasks-controlled', 'tasks-done', 'claim-chats', 'support-service', 'support-service_statistic', 'support-service_state', 'support-service_types', 'support-service_claims'].includes(subaction) ? 'start' : 'end')} tabIndex={0}>
						<SearchTool />
					</div>
					{['staff-list', 'contact-center', 'claim-chats',].includes(subaction) ? <FilterTool /> : ''}
					{['tasks-controlled', 'tasks-in-work', 'support-service_claims'].includes(subaction) ? <SortingTool /> : ''}
				</div>
				<div className='nanomagicPage-MainLayout__workspace ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-flex-column'>
					<PageId />
				</div>
			</div>
		)
}

export { MainLayout }