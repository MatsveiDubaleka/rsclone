class authController {
  async registration(req, res) {
    try {
    console.log(lol);
    } catch (e) {
      console.error(e)
    }
  }
  
  async login(req, res) {
    try {
    
    } catch (e) {
      console.error(e)
    }
  }
  
  async getUsers(req, res) {
    try {
      res.json('server works correctly')
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = new authController()