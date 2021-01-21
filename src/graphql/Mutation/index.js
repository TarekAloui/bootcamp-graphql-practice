const merge = require('lodash.merge')
const Book = require('./Book')
const Author = require('./Author')

const resolvers = [Book, Author]

module.exports = merge(...resolvers)
