declare function format(...args: [format: string, ...any]): string

declare namespace format {
  export function format(...args: [format: string, ...any]): string

  export function formatWithOptions(
    opts: {},
    ...args: [format: string, ...any]
  ): string
}

export = format
