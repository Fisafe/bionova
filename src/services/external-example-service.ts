import axios from 'axios'

export class ExternalExampleService {
  static async advice (): Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://api.adviceslip.com/advice'
    }

    return axios
      .request(options)
      .then(function (response) {
        return response.data
      })
      .catch(function () {
        throw new Error('Error external api')
      })
  }
}
