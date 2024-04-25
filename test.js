const test = require('brittle')
const format = require('.')

test('%s', (t) => {
  t.is(format('hello %s', 'world'), 'hello world', 'string')
  t.is(format('hello %s', 42), 'hello 42', 'number')
})

test('%d', (t) => {
  t.is(format('hello %d', 42), 'hello 42', 'number')
  t.is(format('hello %d', 42n), 'hello 42n', 'bigint')
})

test('unknown modifier', (t) => {
  t.is(format('hello %e', 42), 'hello %e 42')
})

test('unknown modifier followed by %s', (t) => {
  t.is(format('hello %e %s', 42, 'world'), 'hello %e 42 world')
})
