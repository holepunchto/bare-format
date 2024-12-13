declare function format(format: string, ...args: unknown[]): string

declare namespace format {
  export function format(format: string, ...args: unknown[]): string

  export function formatWithOptions(
    opts: {},
    format: string,
    ...args: unknown[]
  ): string
}

export = format
