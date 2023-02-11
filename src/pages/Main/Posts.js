import React from "react"
import {getPosts, getUserById} from "../../utils/Request.js";

class Post extends React.Component {
	constructor(props) {
		super(props)
		this.el = props.val
		this.postLink = this.postLink.bind(this)
	}

	postLink(id) {
		window.location.href = `/posts/${id.currentTarget.dataset.id}`
	}

	render() {
		let content = this.el.map((el) => {
            this.name = getUserById(el.author).name
			return (<article className="grid-item scp" data-id={el.id} onClick={this.postLink} key={el.id}>
				<div className="info tdn">
					<div className="cat">
						<a href={`/category/${el.category}`}>{el.category}</a>
					</div>
					<a href={`/posts/${el.id}`} className="pressed-btn">{el.title}</a>
					<div className="info-text">
						<p></p>
						<p>{el.descr}</p>
						<p></p>
					</div>
					<table className="it">
						<tbody>
							<tr>
								<td className="post_author bg-lg fz12">Автор: <a href={`/users/${el.author}`}>{this.name}</a></td>
								<td className="post_date bg-lg fz12">{el.date}</td>
								{/* <td className="post_view bg-lg fz12">Просмотры: {el.view}</td> */}
							</tr>
						</tbody>
					</table>
				</div>
			</article>)
		})
		return content
	}
}

class Posts extends React.Component {
	constructor(props) {
		super(props);

		this.posts = []
        this.posts = getPosts().posts
	}

	render() {
		if (this.posts.length != 0) {
			return (
				<>
					<Post val={this.posts} />
				</>
			)
		}
		return (
			<>
				<div className="grid-item scp">
                    <div className="info">
                        <div className="pressed-btn" style={{left: '34%', position: 'relative', top: '30px'}}>Новостей нет</div>
                    </div>
				</div>
			</>
		)
	}
}

export default Posts