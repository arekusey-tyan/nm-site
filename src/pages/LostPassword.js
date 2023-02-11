import bg from "../uploads/bg2.mp4";
import React from "react";

export default function LostPassword() {
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
								<div className="h5 text-center" style={{ marginBottom: 200 + 'px' }}>Восстановление пароля</div>
								<form className="py-3">
									<div className="form-group">
										<input type="text" className="form-control" id="inputEmail" name="username" placeholder="Ваш логин" />
									</div>
									<button className="btn btn-primary btn-block px-3" style={{ paddingTop: 10 + 'px' }} onClick={changePass}>Восстанвить</button>
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

function changePass() {}