import React from 'react'
import { MainLayout } from './Work/MainLayout.js'
import { NavigatorPanelsSidebar } from './Work/NavigatorPanelsSidebar.js'
import { ResizingLineMain, ResizingLineRightPanel } from './Work/ResizingLineRightPanel.js'
import { Widgets } from './Work/Widgets.js'

function WorkPage() {
	return (
		<div style={{width: 'inherit', height: 'inherit'}}>
			<a className={'vdom-focus-in'} tabIndex={1} />
			<div className={'bodyContent controls_theme__wrapper controls_theme-default undefined'} tabIndex={0}>
				<div id={'popup'} className={'controls-PopupContainer ws-float-area-stack-panel-overflow'} tabIndex={0} />
				<div className={'page-Controller bodyContent__zIndex-context'} tabIndex={0}>
					<div className={'nanomagicPage-ProgessBar page-Controller__progressBar'} tabIndex={0}>
						<div name={'progressBarStart'} className={''} />
						<div name={'progressBarEnd'} className={''} />
					</div>
					<div tabIndex={0} />
					<div className={'page-Controller__content controls-hint-area'} tabIndex={0}>
						<div name={'page'} className={'ws-flexbox ws-flex-column nanomagicPage-MainLayout controls-BlockLayout_background ws-site-width-1600'} tabIndex={0}>
							<div className={'ws-flexbox ws-flex-grow-1 nanomagicPge-MainLayout__blockWrapper'}>
								<div className={'nanomagicPage-MainLayout__mainContent controls-BlockLayout__block ws-flexbox ws-flex-shrink-1 ws-flex-grow-1 ws-flex-row'}>
									<NavigatorPanelsSidebar />
									{/* <ResizingLineRightPanel /> */}
									<Widgets />
									{/* <ResizingLineMain /> */}
									<MainLayout />
									<div tabIndex={0} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={'controls-LoadingIndicator'} tabIndex={0}>
					<div className={'controls-loading-indicator_content'} tabIndex={0} />
				</div>
			</div>
			<a className={'vdom-focus-out'} tabIndex={0} />
		</div>
	)
}

export default WorkPage