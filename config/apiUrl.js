const baseURL = 'http://127.0.0.1:7001/blog'

const servicePath = {
  list: baseURL + '/list',   // index params: null
  getArticleById: baseURL + '/getArticleById' // detail params: id
}

export default servicePath