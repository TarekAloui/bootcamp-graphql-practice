const Book = require('../../models/Book')

const addBook = async (obj, {
  title, language, numPages, datePublished, bestseller,
}, context) => {
  try {
    const book = await Book.query().insert({
      title,
      language,
      numPages,
      datePublished,
      bestseller,
    }).returning('*')
    return book
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
