import { body } from "express-validator"

const validators = {
	signUpVal: [
        body("username").isString(),
    ],
	logInVal: [
		body("username").trim().isString().not().matches(/\s+/)
	]
}

export { validators }