/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
declare module '*.scss' {
  const content: { [classname: string]: string }
  export = content
}
