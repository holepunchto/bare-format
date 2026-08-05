# bare-format

String formatting for JavaScript.

```
npm i bare-format
```

## Usage

```js
const format = require('bare-format')

format('Hello %s', 'world!')
// Hello world!
```

## License

Apache-2.0

<!-- bare-refgen:api start -->

## API

### Functions

#### `format(...args: unknown[]): string`

Formats `args` into a string, printf-style. If the first argument is a string containing `%s`, `%d`, `%i`, `%f`, `%j`, `%o`, `%O`, or `%c` placeholders, each is substituted with the corresponding argument; any remaining arguments are appended, space-separated, using `bare-inspect` for non-string values.

**Parameters**

| Parameter | Type        | Default | Description                                                              |
| --------- | ----------- | ------- | ------------------------------------------------------------------------ |
| `args`    | `unknown[]` | —       | An optional printf-style format string followed by the values to format. |

**Returns** `string` — The formatted string.
<!-- bare-refgen:api end -->
