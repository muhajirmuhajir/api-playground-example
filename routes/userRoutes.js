const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.get_all_users);
router.post('/', userController.create_user);

module.exports = router