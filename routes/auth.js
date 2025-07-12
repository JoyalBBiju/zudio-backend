const express = require('express');
const router = express.Router();

const { register, login, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

// Public Routes
router.post('/register', register);
router.post('/login', login);

// Protected Routes (require x-auth-token)
router.get('/users', auth, getAllUsers);
router.get('/users/:id', auth, getUserById);
router.put('/users/:id', auth, updateUser);
router.delete('/users/:id', auth, deleteUser);

module.exports = router;

