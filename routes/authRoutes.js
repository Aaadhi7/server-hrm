const express = require ('express')
const router = express.Router();
const authController = require('../controller/authController');


router.post('/login',authController.login);

router.post ('/forgot-password',authController.forgotPasswordController);
module.exports = router;