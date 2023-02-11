import { body } from "express-validator"

const validators = {
	signUpVal: [
        body("username").isString(),
    ],
	logInVal: [
		body("username").trim().isString().not().matches(/\s+/)
	],
	register: [
		body("username").trim().isString().not().matches(/\s+/),
		body("pass").trim().isString().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/)
	]
}

export { validators }