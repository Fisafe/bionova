import mongoose, { Schema, Document } from 'mongoose'

export interface Example extends Document {
  name: string
}

const ExampleSchema = new Schema<Example>({
  name: { type: String, required: true }
})

export const ExampleModel = mongoose.model<Example>('Example', ExampleSchema)
