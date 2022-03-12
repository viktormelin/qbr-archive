fx_version "cerulean"

description "React Boilerplate"
author ".dough#0001"
version '1.0.0'
repository 'https://github.com/dough-land/react-boilerplate'

lua54 'yes'

games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script "server/**/*"

files {
  'web/build/index.html',
  'web/build/**/*'
}