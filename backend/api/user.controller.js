import UsersDAO from "../dao/usersDAO.js";

export default class UserController {
    static async apiPostUser(req, res, next) {
        console.log(req.body)
        try {
            const userId = req.body.userId
            const user = req.body.user
            const password = req.body.password
            const hash = req.body.hash
            const date = new Date()

            const UserResponse = await UsersDAO.addUser(
                userId,
                user,
                password,
                hash,
                date,
                date,
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
    static async apiUpdateUser(req, res, next) {
        try {
            const userId = req.body.userId
            const user = req.body.user
            const password = req.body.password
            const hash = req.body.hash
            const date = new Date()
            const join_date = req.body.join_date

            const UserResponse = await UsersDAO.updateUser(
                user,
                password,
                hash,
                date,
                join_date,
            )

            var { error } = UserResponse
            if (error) {
                res.status(400).json({ error })
            }
            if (UserResponse.modifiedCount === 0) {
                throw new Error(

                    "unable to update user - user may not exist"
                )
            }
            res.json({ status: "success"})
        } catch (e) {
            res.status(500).json({ error: e.message})
        }
    }
    
    static async apiDeleteUser(req, res, next) {
        try{
            const userId = req.body.userId
            const userResponse = await UsersDAO.deleteUser(
                userId,
            )
            res.json({ status: "success"})
        } catch (e) {
            res.status(500).json({ error: e.message})
        }
    }

    static async apiGetUser(req, res, next) {
        try{
            let filters = {}
            filters.user = req.body.user
            const userResponse = await UsersDAO.getUsers({ filters })
            res.json(userResponse)
        } catch (e) {
            res.status(500).json({ error: e.message})
        }
    }


    static async apiLogIn(req, res, next) {
        try{
            let filters = {}
            filters.user = req.body.user
            const user = await UsersDAO.getUsers({ filters })
            if (user.totalNumUsers == 1 && 
                user.usersList[0].password == req.body.password) {
                    res.json({ status: "success"})
            } else {
                res.json({ status: "fail, user and password don't exist..."})
            }
            
        } catch (e) {
            res.status(500).json({ error: e.message})
        }
    }
}