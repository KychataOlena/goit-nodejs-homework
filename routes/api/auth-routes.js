const express = require("express");

const ctrl = require("../../controlers-decorator/auth-controllers");

const { schemas } = require("../../models/user");

const { validateBody } = require("../../utils");

const { authenticate, upload } = require("../../middlewares");
// const authControllers = require("../../auth-controllers");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchems), ctrl.register);

router.get("/verify/:verificationCode", ctrl.verify);

router.post(
  "/verify",
  validateBody(schemas.userEmailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validateBody(schemas.loginSchems), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
