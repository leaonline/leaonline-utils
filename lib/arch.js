import { Meteor } from 'meteor/meteor'

export const onServer = x => Meteor.isServer ? x : undefined
export const onClient = x => Meteor.isClient ? x : undefined
export const onMobile = x => Meteor.isCordova ? x : undefined
export const isomorph = obj => {
  if (Meteor.isServer && obj.onServer) return obj.onServer()
  if (Meteor.isClient && obj.onClient ) return obj.onClient()
}

export const onServerExec = fct => Meteor.isServer && fct()
