const express = require('express')
const userController = require('../controller/user.controller')
const bodyParser = require('body-parser');
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth')
const upload = require('../middlewares/multer')

const router = express.Router()

router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid address'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 character long')
     , userController.registerUser)

router.post('/login',
     body('email').isEmail().withMessage('Email must be a valid address'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 character long'),
    userController.loginUser
 )

router.get('/profile', authMiddleware, userController.getUserProfile )
router.post('/update-profile',upload.single('image'),authMiddleware, userController.updateProfile)
router.post('/delete-profile', authMiddleware ,  userController.deleteProfile)
router.get("/get-pinnedFeatures", authMiddleware, userController.getPinnedFeatures);
router.post("/pin-feature", authMiddleware, userController.pinFeature);
router.post("/unpin-feature", authMiddleware, userController.unpinFeature);
router.get('/get-dashboard', authMiddleware ,  userController.getDashboardData)

module.exports = router