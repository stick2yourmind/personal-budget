import log4js from 'log4js'
import path from 'path'

log4js.configure({
  appenders: {
    console: { type: 'console' },
    errorFile: { filename: path.join(__dirname, '../../log/error.log'), type: 'file' },
    warningFile: { filename: path.join(__dirname, '../../log/warn.log'), type: 'file' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' },
    error: { appenders: ['console', 'errorFile'], level: 'error' },
    info: { appenders: ['console'], level: 'info' },
    warn: { appenders: ['console', 'warningFile'], level: 'warn' }
  }
})

export const infoLogger = log4js.getLogger('info')
export const warnLogger = log4js.getLogger('warn')
export const errorLogger = log4js.getLogger('error')
