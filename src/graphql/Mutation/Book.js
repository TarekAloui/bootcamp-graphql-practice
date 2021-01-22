const Book = require('../../models/Book')

const addBook = async (obj, { book }, context) => {
  try {
    const b = await Book.query().insert(book).returning('*')
    return b
  } catch (error) {
    throw new Error('ERROR: failed at getting all books')
  }
}

const resolver = {
  Mutation: {
    addBook,
  },
}

module.exports = resolver
