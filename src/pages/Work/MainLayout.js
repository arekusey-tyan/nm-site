import React from 'react'
import { subaction } from '../../index.js'
import { FilterTool } from './subpages/Filter.tool.js'
import { PageName } from './subpages/PageName.tool.js'
import { SearchTool } from './subpages/Search.tool.js'
import { SortingTool } from './subpages/Sorting.tool.js'
import { ToolBar } from './subpages/ToolBar.tool.js'
import DefaultMainLayout from './pages/DefaultMainLayout.js'
import TaskPage from './pages/TaskMainLayout.js'

class PageId extends React.Component {
	render() {
		if (['tasks-in-work', 'tasks-controlled', 'tasks-done', 'tasks-from-me', 'tasks-returned'].includes(subaction)) {
			return <TaskPage />
		}
		if (subaction === ['tasks-process', 'tasks-stat', 'tasks-by-staff']) {
		}
		return <DefaultMainLayout />
	}
}

class MainLayout extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
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
}

export { MainLayout }