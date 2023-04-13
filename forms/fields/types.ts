export interface IField {
  name: string,
  type: string,
  label: string|null,
  rules: ((value: string) => (boolean|string))[],
}
