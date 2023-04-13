export default class UsersService {
  static fetchUsers() {
    return fetch(`${process.env.REACT_APP_ENDPOINT}/users`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then(response => response.json());
  }
}
