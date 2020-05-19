export type TreeOptions<T> = {
  children: (node: T) => T[];
}
