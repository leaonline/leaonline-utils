import { Meteor } from 'meteor/meteor'
import debug from 'debug'

export const debug = (...args) => {
  if (Meteor.isDevelopment) {
    console.debug(...args)
  }
}

const LogLevel = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  verbose: 'verbose',
  debug: 'debug',
  silly: 'silly'
}

const LogLevelIndex = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
}

const logLevel = Meteor.settings.public.logLevel
const name = Meteor.settings.public.appName

class Logger {
  constructor (name, scope, logLevel) {
    this.scope = scope
    this.DEBUG = this.ERROR = this.INFO = this.SILLY = this.VERBOSE = this.WARN = debug(`${name}:${this.scope}`)
    this.logLevel = logLevel || LogLevel.info
  }

  debug (message) {
    if (LogLevelIndex[this.logLevel] >= LogLevelIndex.debug) {
      this.DEBUG(message)
    }
  }

  error (message) {
    if (LogLevelIndex[this.logLevel] >= LogLevelIndex.error) {
      this.ERROR(message)
    }
  }

  info (message) {
    if (LogLevelIndex[this.logLevel] >= LogLevelIndex.info) {
      this.INFO(message)
    }
  }

  silly (message) {
    if (LogLevelIndex[this.logLevel] >= LogLevelIndex.silly) {
      this.SILLY(message)
    }
  }

  verbose (message) {
    if (LogLevelIndex[this.logLevel] >= LogLevelIndex.verbose) {
      this.VERBOSE(message)
    }
  }

  warn (message) {
    if (LogLevelIndex[this.logLevel] >= LogLevelIndex.warn) {
      this.WARN(message)
    }
  }
}

export const createLogger = (scope) => {
  return new Logger(name, scope, logLevel)
}
