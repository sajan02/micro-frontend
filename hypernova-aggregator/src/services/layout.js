
const axios = require('axios')

module.exports.getLayout = () => {
  return axios.post('http://0.0.0.0:3031/batch', {
    header: {
      name: 'Header',
      data: {
        title: 'Nineleaps',
        links: [
          {
            url: 'https://www.nineleaps.com/',
            text: 'Home'
          }
        ]
      }
    }
  })
    .then(({ data }) => {
      return data.results
    })
}
