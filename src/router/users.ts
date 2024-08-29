import express from 'express';

import { delateUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';


export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', isAuthenticated, isOwner, delateUser);
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};