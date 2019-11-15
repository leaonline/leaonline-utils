import { Meteor } from 'meteor/meteor'

export const debug = (...args) => {
  if (Meteor.isDevelopment) {
    console.debug(...args)
  }
}
