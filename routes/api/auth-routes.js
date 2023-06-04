const express = require("express");

const ctrl = require("../../controlers-decorator/auth-controllers");

const { schemas } = require("../../models/user");

const { validateBody } = require("../../utils");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchems), ctrl.register);

module.exports = router;
