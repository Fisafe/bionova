import { ExampleModel, Example as ReponseExample } from '../models/example'

interface Example {
  name: string
}

export class ExampleService {
  static async create (data: Example): Promise<ReponseExample> {
    const example = await ExampleModel.create({ name: data.name })
    return example
  }

  static async list (): Promise<ReponseExample[]> {
    const examples = await ExampleModel.find()
    return examples
  }
}
