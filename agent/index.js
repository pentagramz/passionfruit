import checksec from './app/checksec'
import imports from './app/imports'
import cookies from './app/binarycookie'
import keychain from './app/keychain'
import dumpdecrypted from './app/dumpdecrypted'
import screenshot from './app/screenshot'


import { info, userDefaults } from './app/info'
import { classes, ownClasses, methods, inspect } from './app/classdump'
import { tables, data, query } from './app/sqlite'
import { ls, home, plist, text, download } from './app/finder'
import { dumpWindow, toggleTouchID, toggleDebugOverlay } from './app/ui'
import { hook, unhook, swizzle, unswizzle } from './app/hook'

/*

disable to default hooks speed up

require('./jailbreak') // try bypass jailbreak
require('./pasteboard') // monitor pasteboard

toggleTouchID(false)
// hook('libSystem.B.dylib', 'open', { args: ['char *', 'int']})

hook('libsqlite3.dylib', 'sqlite3_open', { args: ['char *', 'int'], ret: 'int' })
hook('libsqlite3.dylib', 'sqlite3_prepare_v2', { args: ['pointer', 'char *', 'int', 'pointer', 'pointer'] })
hook('libsqlite3.dylib', 'sqlite3_bind_int', { args: ['pointer', 'int', 'int'] })
hook('libsqlite3.dylib', 'sqlite3_bind_null', { args: ['pointer', 'int'] })
hook('libsqlite3.dylib', 'sqlite3_bind_text', { args: ['pointer', 'int', 'char *', 'int', 'pointer'] })

// swizzle('NSURL', 'URLWithString_', false)
swizzle('NSString', 'stringWithContentsOfFile_usedEncoding_error_')
*/

rpc.exports = {
  checksec,
  info,
  userDefaults,

  classes,
  ownClasses,
  methods,
  inspect,
  imports,

  ls,
  home,
  plist,
  text,
  download,

  cookies,

  tables,
  data,
  query,

  dumpWindow,
  toggleTouchID,
  toggleDebugOverlay,

  dumpKeyChain: keychain.list,

  hook,
  unhook,
  swizzle,
  unswizzle,

  dumpdecrypted,
  screenshot,
}
