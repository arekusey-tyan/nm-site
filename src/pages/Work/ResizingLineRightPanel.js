import React from 'react'

class ResizingLineRightPanel extends React.Component {
	render() {
		return (
			<div className='viewSettings-ResizingLine__container nanomagicPage-MainLayout__ResizingLine_RightPanel nanomagicPage-MainLayout__ResizingLine_RightPanel__left' tabIndex={0}>
				<div className='controls-ResizingLine controls_dragnDrop_theme-default viewSettings-ResizingLine__resizer viewSettings-ResizingLine__reverse' tabIndex={0}>
					<div className='controls-ResizingLine__wrapper'>
						<div className='controls-ResizingLine__areaWrapper controls-ResizingLine__areaWrapper_horizontal controls-ResizingLine__areaWrapper_horizontal_direction-reverse'></div>
						<div className='controls-ResizingLine__border controls-ResizingLine__border_horizontal' tabIndex={0}></div>
					</div>
				</div>
			</div>
		)
	}
}

class ResizingLineMain extends React.Component {
	render() {
		return (
			<div className='viewSettings-ResizingLine__container nanomagicPage-MainLayout__ResizingLine' tabIndex={0}>
				<div className='controls-ResizingLine controls_dragnDrop_theme-default viewSettings-ResizingLine__resizer viewSettings-ResizingLine__direct' tabIndex={0}>
					<div className='controls-ResizingLine__wrapper'>
						<div className='controls-ResizingLine__areaWrapper controls-ResizingLine__areaWrapper_horizontal controls-ResizingLine__areaWrapper_horizontal_direction-direct'></div>
						<div className='controls-ResizingLine__border controls-ResizingLine__border_horizontal' tabIndex={0}></div>
					</div>
				</div>
			</div>
		)
	}
}

export { ResizingLineRightPanel, ResizingLineMain }