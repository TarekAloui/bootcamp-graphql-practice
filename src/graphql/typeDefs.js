const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    allBooks: [Book]!
    allAuthors: [Author]!
    allPublishers: [Publisher]!
    bookById(id: ID!): Book
    authorById(id: ID!): Author
    booksByAuthor(authorId: ID!): [Book]!

  }

  type Mutation {
    addAuthor(author: addAuthorInput!): Author!
    addBook(book: addBookInput!): Book!
  }

  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int
    email: String
  }

  input addBookInput {
    title: String!
    language: String
    numPages: Int
    datePublished: String
    bestseller: Boolean
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: Int!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: Int
    numBooksPublished: Int
    address: Address
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int
    email: String
    books: [Book]
    numBooksPublished: Int
    address: Address
  }

  type Book {
    id: ID!
    title: String!
    language: String
    numPages: Int
    datePublished: String
    bestseller: Boolean
  }
`
