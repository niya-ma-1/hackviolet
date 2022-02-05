import express from "express"
import UsersCtrl from "./users.controller.js"
import UserCtrl from "./user.controller.js"

const router = express.Router()

router.route("/").get(UsersCtrl.apiGetUsers)

router
    .route("/user")
    .post(UserCtrl.apiPostUser)
    .put(UserCtrl.apiUpdateUser)
    .delete(UserCtrl.apiDeleteUser)
    .get(UserCtrl.apiGetUser)

router
    .route("/login")
    .post(UserCtrl.apiLogIn)


export default router