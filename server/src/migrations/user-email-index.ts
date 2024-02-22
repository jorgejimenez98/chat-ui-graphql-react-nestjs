import { Db } from 'mongodb'

/* eslint-disable no-console */
module.exports = {
  async up(db: Db) {
    await db.collection('users').createIndex({ email: 1}, { unique: true})
  }
}