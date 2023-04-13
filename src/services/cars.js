export default class CarsService {
  static fetchCars() {
    return fetch(`${process.env.REACT_APP_ENDPOINT}/cars`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }).then(response => response.json());
  }
}
