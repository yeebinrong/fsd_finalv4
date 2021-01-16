/* -------------------------------------------------------------------------- */
//                  ######## SERVER CONFIGURATIONS ########
/* -------------------------------------------------------------------------- */
//#region

const secure = require('secure-env')
const { MongoClient} = require('mongodb')
const AWS = require('aws-sdk')

// Retrieve environment variables from .env
global.env = secure({secret: process.env.ENV_PASSWORD})

//######## MONGO ########
const MONGO_PASS = global.env.MONGO_PASS
const MONGO_DB = global.env.MONGO_DB
const MONGO_COLLECTION = global.env.MONGO_COLLECTION
const MONGO_COLLECTION2 = global.env.MONGO_COLLECTION2
const MONGO_URL = `mongodb+srv://bin:${MONGO_PASS}@cluster0.uagd3.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`


// MONGO CONFIUGRAIONS
const mongo = new MongoClient(MONGO_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    }
)

//######## AWS S3 ########
const AWS_ENDPOINT = new AWS.Endpoint(global.env.DIGITALOCEAN_ENDPOINT)

// S3 Configurations
const s3 = new AWS.S3({
    endpoint: AWS_ENDPOINT,
    accessKeyId: global.env.DIGITALOCEAN_ACCESS_KEY,
    secretAccessKey: global.env.DIGITALOCEAN_SECRET_ACCESS_KEY
})

const ENV_PASSWORD = process.env.ENV_PASSWORD
const AUTH0_JWKS_URI = global.env.AUTH0_JWKS_URI
const AUTH0_ISSUER = global.env.AUTH0_ISSUER

const EMAIL_USER = global.env.EMAIL_USER
//#endregion



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

module.exports = {
    MONGO_DB, MONGO_COLLECTION, MONGO_COLLECTION2, mongo, MONGO_URL, AWS_ENDPOINT, s3, ENV_PASSWORD, AUTH0_ISSUER, AUTH0_JWKS_URI, EMAIL_USER
}