const Publisher = require('../../models/Publisher')

const allPublishers = async () => {
  try {
    const publishers = await Publisher.query()
    return publishers
  } catch (error) {
    throw new Error('ERROR: failed at getting all publishers')
  }
}

const resolver = {
  Query: {
    allPublishers,
  },
}

module.exports = resolver
