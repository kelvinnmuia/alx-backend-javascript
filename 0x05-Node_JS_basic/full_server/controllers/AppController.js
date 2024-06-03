/**
 * Contains the miscellaneous route handlers.
 * @author Kelvin Muia <https://github.com/kelvinnmuia>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
