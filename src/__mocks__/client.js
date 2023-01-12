import {JSDOM} from 'jsdom'
import jsdomGlobal from 'jsdom-global'

jsdomGlobal()
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
