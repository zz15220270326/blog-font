import axios from 'axios'

const baseURL = 'http://127.0.0.1:7001'
export const getAxios = (url) => {
  return new Promise((resolve, reject) => {
    axios.request({
      baseURL,
      url,
      method: 'GET',
    })
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}