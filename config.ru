require 'rubygems'
require 'middleman/rack'
require './middlewares/custom_auth'

use Rack::Session::Cookie, key: 'rack.session',
                           path: '/',
                           expire_after: 2_592_000, # 30 days
                           secret: '5421ed297d662683617a57af6d09e54b444da34aa1e1086c56a4ffbc46434d9db7c86e3a9d90e0557ecc8a68f3fb0336183f084fdc4b01bf0af35d0545d8d1c5'
use CustomAuth, password: 'p@$$word'

run Middleman.server
