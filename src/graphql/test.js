const Author = require('../models/Author')
const cleanup = require('../cleanup')

const f = async () => {
  const a = await Author.query().insert({
    firstName: 'tarek',
    lastName: 'aloui',
    age: 20,
    email: 'test&12ss12@gmail.com',
  }).returning('*')
  console.log(a.firstName)

  cleanup()
}

f()
