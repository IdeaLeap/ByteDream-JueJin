export interface ITypeItem {
  type: string
  alias: string
  tags: { data: ITagItem[] }
}

export interface ITagItem {
  id: string
  tag: string
  alias: string
}
