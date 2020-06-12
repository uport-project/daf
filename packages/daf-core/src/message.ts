import { IMessage, IMetaData } from './types'

export class Message implements IMessage {
  constructor(data?: { raw: string; metaData?: IMetaData[] }) {
    if (data?.raw) {
      this.raw = data.raw
    }
    if (data?.metaData) {
      this.metaData = data.metaData
    }
  }

  id: string

  createdAt?: Date

  expiresAt?: Date

  threadId?: string

  type: string

  raw?: string

  data?: any

  replyTo?: string[]

  replyUrl?: string

  from?: string

  to?: string

  metaData?: IMetaData[]

  addMetaData(meta: IMetaData) {
    if (this.metaData) {
      this.metaData.push(meta)
    } else {
      this.metaData = [meta]
    }
  }

  getLastMetaData(): IMetaData | null {
    if (this.metaData?.length > 0) {
      return this.metaData[this.metaData.length - 1]
    } else {
      return null
    }
  }

  isValid() {
    if (this.type === null || this.type === '') {
      return false
    }
    if (!this.raw || this.raw === null || this.raw === '') {
      return false
    }
    return true
  }
}