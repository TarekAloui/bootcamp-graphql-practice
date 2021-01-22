const Author = require('../../models/Author')

const addAuthor = async (obj, { author }, context) => {
  try {
    const a = await Author.query().insert(author).returning('*')
    return a
  } catch (error) {
    throw new Error(`ERROR: failed at adding new Author \n ${error.message}`)
  }
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
