const db = require('../lib/db');

class UserController {
  async index(req, res) {
    try {
      const users = [];
      const dbUsers = await db.collection('user').get();

      dbUsers.forEach(user => users.push({
        id: user.id,
        ...user.data()
      }))

      return res.json(users);
    } catch (e) {
      console.error(e)
      return res.status(500).json();
    }

  }
}

module.exports = new UserController();