//Talk about pipeline

let users

export default class UsersDAO {
    static async injectDB(conn) {
        if (users) {
            return
        }
        try {
            users = await conn.db(process.env.ATLAS_NS).collection("Users")
        } catch (e) {
            console.error(
                'Unable to establish a collection handle in usersDAO' + e,
            )
        }
    }

    static async getUsers({
        filters = null,
        page = 0,
        usersPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("user" in filters) {
                query = {"user": { $eq: filters["user"] } }
            }
        }
        let cursor

        try{
            cursor = await users.find(query)
        } catch (e) {
            console.error('Unable to issue find command, ' + e)
            return {usersList: [], totalNumUsers: 0}
        }

        const displayCursor = cursor.limit(usersPerPage).skip(usersPerPage * page)

        try {
            const usersList = await displayCursor.toArray()
            const totalNumUsers = await users.countDocuments(query)

            return { usersList, totalNumUsers }
        } catch (e) {
            console.error(
                'Unable to convert cursor to array or problem counting documents' + e
            )
            return { usersList: [], totalNumUsers: 0 }
        }
    }

    static async addUser(userId, user, password, hash, date, dateOg,) {
        try {
            const userDoc = {
                _id: userId,
                user: user,
                password: password,
                hash: hash,
                date: date,
                join_date: dateOg,
            }
            return await users.insertOne(userDoc)
        } catch (e) {
            console.error("Unable to post review: " + e)
            return { error: e}
        }
    }

    static async updateUser(user, password, hash, date){
        try {
            console.log(user)
            const updateUser = await users.updateOne(
                { user },
                { $set: {user, password, hash, date}},
                //Might have to change the line above ^
            )
            return updateUser
        } catch (e) {
            console.error("Unable to update user: " + e)
            return { error: e }
        }
    }

    static async deleteUser(userId){
        try{
            const deleteResponse = await users.deleteOne({
                _id: userId,
            })
            return deleteResponse
        } catch (e) {
            console.error("Unable to delete user: " + e)
            return { error: e}
        }
    }


    
}