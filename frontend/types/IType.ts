export interface IType {
  data: ITypeItem[]
  meta: ITypeMeta
}

export interface ITypeMeta {
  pagination: {
    pageCount: number
    total: number
  }
}

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
