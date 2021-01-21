const Author = require('../../models/Author')

const addAuthor = async (obj, {
  firstName, lastName, age, email, addressId,
}, context) => {
  try {
    const newAuthor = await Author.transaction(async trx => {
      const author = await Author.query(trx).insert({
        firstName,
        lastName,
        age,
        email,
        addressId,
      }).returning('*')
      await author.$relatedQuery('address', trx).insert(address)
      return author
    })

    return newAuthor
  } catch (error) {
    throw new Error('ERROR: failed at adding new Author')
  }
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
