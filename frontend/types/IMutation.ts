export interface mutation {
  code: number
  message: string
}

export interface liked extends mutation {
  data?: {
    liked: number
  }
}
