import React from 'react'

class IspolnitelList extends React.Component {
	constructor(props) {
		super(props)

		this.ispolns = props.data
	}

	render() {
		let renderElem = []
		for (let i = 0, j = 0; i < this.ispolns.length; i++) {
			renderElem[j++] = (
				<div className='undefined js-controls-SelectedCollection__item controls-SelectedCollection__item controls-SelectedCollection__collectionItem_layout_oneRow' data-qa='SelectedCollection__item' tabIndex={0} style={{ order: 0 }} key={'il-' + j}>
					<div className='controls-SelectedCollection__item controls-SelectedCollection__item-single controls-SelectedCollection__item-single-readOnly controls-SelectedCollection__item_layout_oneRow' tabIndex={0}>
						<span className='controls-SelectedCollection__item__caption-wrapper'>
							<div className='controls-SelectedCollection__item__caption-oneRow' tabIndex={0}>
								<span className='edws-StaffChooser__itemTpl-name'>{this.ispolns[i].user.name}</span>
							</div>
						</span>
						{i !== this.ispolns.length - 1 ? <span className='controls-text-accent'>,&nbsp;</span> : ''}
					</div>
				</div>
			)
		}
		return renderElem
	}
}

export default IspolnitelList