import React from 'react'
import bg from '../uploads/bg2.mp4'
import Posts from './Main/Posts.js'
import {getTasksForUser, getUserById, logIn} from "../utils/Request.js";

class MainPage extends React.Component {
	constructor(props) {
		super(props)
		this.login = this.login.bind(this)
		this.closeNav = this.closeNav.bind(this)
		this.openNav = this.openNav.bind(this)
		this.user = getUserById(window.localStorage.getItem('user_id'))
	}

	login(event) {
		event.preventDefault()
		let data = new FormData(event.target)
        let pass = data.get('password')
		let json = JSON.stringify({
            username: data.get('username')
        })
        let res = logIn(json)
        if (res.message === `It's ok`) {
            window.localStorage.setItem('user_id', res.user.user_id)
            window.location.reload()
        } else
            document.querySelector('.response').innerHTML = '<b>' + res.errs[0].param + '</b>: ' + res.errs[0].msg
	}

	async openNav(e) {
		let el = await document.getElementById("sideBar")
		el.style.width = '250px'
		el.style.zIndex = 100
	}

	async closeNav(e) {
		e.preventDefault()
		let el = await document.getElementById("sideBar")
		el.style.width = 0 + "px"
		el.style.zIndex = 0
	}

	render() {
		if (window.localStorage.getItem('user_id') !== null) {
			if (this.user === undefined) this.user = getUserById(window.localStorage.getItem('user_id'))
			document.body.classList.add('d-flex', 'flex-column')
			this.tasks = getTasksForUser(this.user.user_id)
			return (
				<>
					<div className="bbg"></div>
					<header className="bg-dark" style={{height: '72px'}}>
						<div id="sideBar" className="sidenav" style={{ width: 0 + 'px', zIndex: 0 }}>
							<a href="#" className="closebtn" onClick={this.closeNav}>×</a>
							<a className="d-flex align-items-center" href="/">
								<div className="ecn d-flex">
									<i className="fa fa-desktop" aria-hidden="true"></i>
								</div>
								<div className="mr-4">Главная</div>
							</a>
							<a className="d-flex align-items-center" href="/guides">
								<div className="ecn d-flex">
									<i className="fa fa-desktop" aria-hidden="true"></i>
								</div>
								<div className="mr-4">Гайды</div>
							</a>
							<a className="d-flex align-items-center" href="/work">
								<div className="ecn d-flex">
									<i className="fa fa-desktop" aria-hidden="true"></i>
								</div>
								<div className="mr-4">Работа</div>
							</a>
							<a className="d-flex align-items-center" href="/forum">
								<div className="ecn d-flex">
									<i className="fa fa-desktop" aria-hidden="true"></i>
								</div>
								<div className="mr-4">Форум</div>
							</a>
							<a className="d-flex align-items-center" href="/prices">
								<div className="ecn d-flex">
									<i className="fa fa-desktop" aria-hidden="true"></i>
								</div>
								<div className="mr-4">Цены</div>
							</a>
						</div>
						<div id="navbtn" onClick={this.openNav}>
							<a href="#" role="button" style={{ float: 'left' }} onClick={event => event.preventDefault()}>
								<table>
									<tbody>
										<tr>
											<td style={{ width: '20px' }}></td>
											<td><span style={{ fontSize: '30px' }}>☰</span></td>
											<td><div className="logo" id="navbarDropdownMenuLink"></div></td>
										</tr>
									</tbody>
								</table>
							</a>
						</div>
						<div style={{ float: 'right' }}>
							<div className="nav-item dropdown drp active">
								<a className="nav-link p-2 p-md-4" href="#" id="login_menu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
									<div className="d-flex align-items-center">
										<img width={18 + 'px'} height={18 + 'px'} src={this.user.foto} className="profoto mr-2" />
										{this.user.name}
									</div>
								</a>
								<div className='dropdown-menu dropdown-menu-right' aria-labelledby='login_menu'>
									{this.user.user_group < 6 ? <a className='dropdown-item dfx' href='/addnews'>
										<div className="ecn">
											<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill="currentColor" className='bi bi-plus-circle-dotted' viewBox='0 0 16 16'>
												<path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
											</svg>
										</div>
										<div className="mr-4">Добавить новость</div>
									</a> : ''}
									<a className='dropdown-item dfx' href={`/user/${this.user.name}`}>
										<div className="ecn">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
												<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
											</svg>
										</div>
										<div className="mr-4">Моя страница</div>
									</a>
									{this.user.user_group != 12 ? <a className='dropdown-item dfx' href={`/work/task-in-work`}>
										<div className="ecn">
											<i className="fa fa-bolt" aria-hidden="true"></i>
										</div>
										<div className="mr-4">Задачи</div>
										<div style={{ color: '#FFA500', textDecoration: 'none' }} className="ml-auto f80">{this.tasks.count}</div>
									</a> : ''}
									<div className="dropdown-divider"></div>
									{this.user.user_group < 4 ? <a className="dropdown-item" target="_blank" href="/admin">Управление сайтом</a> : ''}
									<a className="dropdown-item" href='/api/logout'>Выйти</a>
								</div>
							</div>
						</div>
						<div style={{ float: 'right' }}>
							<a className="nav-link px-2 py-2 p-md-4" href="/feedback" style={{ display: 'flex', alignItems: 'center' }}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-life-preserver" viewBox="0 0 16 16">
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
								</svg>
								<span className="ml-2">Контакты</span>
							</a>
						</div>
					</header>
					<div className="container my-4 flex-shrink-0">
						<div className='row'>
							<div className="col-12 col-lg-9">
								<section className='grid'>
									<div className="content">
										<Posts />
									</div>
								</section>
							</div>
						</div>
					</div>
				</>
			)
		} else {
			return (
				<>
					<video playsInline autoPlay muted loop style={{ zIndex: -1 }}>
						<source src={bg} />
					</video>
					<div id="login">
						<div className="login">
							<div id="authm" className="p-0">
								<div className="row no-gutters">
									<div className="col-12 p-md-4">
										<div className="h5 text-center" style={{ marginBottom: 200 + 'px' }}>Авторизация</div>
										<form className="py-3" onSubmit={this.login}>
											<div className="form-group">
												<input type="text" className="form-control" id="inputEmail" name="username" placeholder="Ваш логин" />
											</div>
											<div className="form-group">
												<input className="form-control" type="password" id="inputPassword" name="password" placeholder="Ваш пароль" />
											</div>
											<div className="mb-3 mt-2">
												<a className="f90" href="/lostpassword">Восстановить пароль</a>
											</div>
											<button className="btn btn-primary btn-block px-3" style={{ paddingTop: 10 + 'px' }}>Войти</button>
											<input name="login" type="hidden" id="login" value="submit" />
											<a className="btn btn-primary btn-block px-3 mt-2" href="/register">Создать аккаунт</a>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer f90 mt-auto">
						<div className="container py-3 text-muted">
							<div className="row">
								<div className="col-12 col-md-8 align-items-center">
									<ul className="list-inline mb-3 mb-md-0">
										<li className="list-inline-item ttle"><a href="/terms" className="" style={{ color: '#fff' }}>Соглашение</a></li>
										<li className="list-inline-item ttle"><a href="/privacy" className="" style={{ color: '#fff' }}>Конфиденциальность</a></li>
										<li className="list-inline-item ttle"><a href="/feedback" className="" style={{ color: '#fff' }}>Обратная связь</a></li>
									</ul>
								</div>
								<div className="col-12 col-md-2 align-items-center">
									<div className="d-flex mb-3 mb-md-0"> </div>
								</div>
								<div className="col-12 col-md-2">
									<div className="d-flex align-items-center h-100">
										<div className="ttle">© <span style={{ fontWeight: 400 }}>NanoMagic</span> 2022-{new Date(new Date()).getFullYear()}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="response"></div>
				</>
			)
		}
	}
}

export default MainPage