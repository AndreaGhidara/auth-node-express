import express from 'express';

import { delateUserById, getUserById, getUsers } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {

    try {
        const users = await getUsers();

        return res.status(200).json(users);

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }

}

export const delateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const delateUser = await delateUserById(id);

        return res.json(delateUser);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);

    }

}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { username } = req.body;


        if (!username) {
            return res.sendStatus(400);
        }

        const user = await getUserById(id);

        user.username = username;
        await user.save();

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}