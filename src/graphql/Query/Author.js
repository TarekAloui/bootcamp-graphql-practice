const Address = require('../../models/Address')
const Author = require('../../models/Author')
const Book = require('../../models/Book')

const allAuthors = async () => {
  try {
    const authors = await Author.query().limit(5) // reason for limit is to avoid db max connection error for the front-end requests
    return authors
  } catch (error) {
    throw new Error('ERROR: failed to get all authors')
  }
}

const authorById = async (obj, { id }) => {
  try {
    const author = await Author.query().findById(id)
    return author
  } catch (error) {
    throw new Error('ERROR: failed to get user by id')
  }
}

const books = async ({ id }, params, context) => {
  const b = await Book.query().where('authorId', id)
  return b
}

const address = async ({ id }, params, context) => {
  const adr = (await Author.query().findOne('id', id)).$relatedQuery('address')
  return adr
}

const resolver = {
  Query: {
    allAuthors,
    authorById,
  },

  Author: {
    books,
    address,
  },
}

module.exports = resolver
