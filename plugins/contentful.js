

const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: 'lepujgn7pcyr',//process.env.CTF_SPACE_ID,
  accessToken: 'd2028ec37484b0fef44cb323a170d9b430bf72c7cfef412f15b80905ca6def9a'//process.env.CTF_CDA_ACCESS_TOKEN
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}