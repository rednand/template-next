module.exports = {
  '*.{js, jsx, ts, tsx}': (filename) => [
    `yarn run lint --fix . ${filename.join(' --file')}`,
    `prettier --write ${filename.join(' ')}`
  ]
}
