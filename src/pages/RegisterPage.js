import bg from '../uploads/bg2.mp4'
import React from 'react'
import {regUser} from '../utils/Request.js'
import {md5} from '../utils/md5.js'

function RegisterPage() {
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
								<div className="h5 text-center" style={{ marginBottom: 200 + 'px' }}>Регистрация пользователя</div>
								<form className="py-3">
									<div className="form-group"><input type="text" className="form-control" id="inputEmail" name="username" placeholder="Ваш логин" /></div>
									<div className="form-group"><input type={'password'} className={'form-control'} id={'inputPassword'} name={'password'} placeholder={'Ваш пароль'} /></div>
									<div className="form-group"><input type={'password'} className={'form-control'} id={'inputPassword2'} name={'password2'} placeholder={'Повторите пароль'} /></div>
									<button className="btn btn-primary btn-block px-3" style={{ paddingTop: 10 + 'px' }} onClick={register}>Зарегестрироваться</button>
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
			<div className="response" />
		</>
	)
}

function register(e) {
	e.preventDefault()
	let el1 = document.querySelector("[name='username']").value,
		el2 = document.querySelector('[name="password"]').value,
		el3 = document.querySelector('[name="password2"]').value
	if (el2 === el3) {
		let json = JSON.stringify({login: el1, password: md5(md5(md5(md5(el2))))})
		regUser(json)
		window.location.href = '/'
	}
}

export default RegisterPage