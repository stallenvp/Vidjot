if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://<Khaleel Younis>:<Ducks1994!>@ds121268.mlab.com:21268/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}