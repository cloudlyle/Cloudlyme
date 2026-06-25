export type ID = string

export type Timestamp = string // ISO 8601

export interface SelectOption<T = string> {
  label: string
  value: T
}
