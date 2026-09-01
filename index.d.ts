/**
 * Formats `args` into a string, printf-style. If the first argument is a string containing `%s`,
 * `%d`, `%i`, `%f`, `%j`, `%o`, `%O`, or `%c` placeholders, each is substituted with the
 * corresponding argument; any remaining arguments are appended, space-separated, using
 * `bare-inspect` for non-string values.
 * @param args - An optional printf-style format string followed by the values to format.
 * @returns The formatted string.
 */
declare function format(...args: unknown[]): string

declare namespace format {
  export function format(...args: unknown[]): string

  export function formatWithOptions(opts: {}, ...args: unknown[]): string
}

export = format
