import React from 'react'
import {getUserById, getUserByIds, getUserGroup} from '../../../utils/Request.js'

class Discussion extends React.Component {
	constructor(props) {
		super(props)

		this.task = props.data
		this.author = getUserById(this.task.tauthor_id)
		this.ispolns = getUserByIds(this.task.tispol.split(','))
		this.group = getUserGroup(this.author.user_group).group[0]
	}

	render() {
		return ''
	}
}

export default Discussion