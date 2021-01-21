const Author = require('../../models/Author')
const Book = require('../../models/Book')

const allBooks = async () => {
  try {
    const books = await Book.query()
    return books
  } catch (error) {
    throw new Error('ERROR: failed at getting all books')
  }
}

const bookById = async (obj, { id }) => {
  const book = await Book.query().findOne('id', id)
  return book
}

const booksByAuthor = async (obj, { authorId }) => {
  try {
    const books = await Author.query().findOne('id', authorId).$relatedQuery('books')
    return books
  } catch (error) {
    throw new Error('ERROR: failed at getting a book by author')
  }
}

const resolver = {
  Query: {
    allBooks,
    bookById,
    booksByAuthor,
  },
}

module.exports = resolver
