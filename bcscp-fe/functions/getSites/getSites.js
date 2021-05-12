const NetlifyAPI = require('netlify')

const handler = async function (event) {
  
  const client = new NetlifyAPI(event.queryStringParameters.token)

  try {
    const response = await client.listSites()
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: response }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
