import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Movie {
  @Transform(({ value }) => value.toString())
  _id?: mongoose.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  banner: Blob;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: '' })
  director: string;

  @Prop({ required: true, default: new Date().toISOString() })
  producer: string;

  @Prop({ required: false, default: new Date().getMonth() + 1 })
  createdAt: number;

  @Prop({ required: false, default: new Date().getFullYear() })
  updatedAt: number;
}

export type MovieDocument = Movie & Document;

export const MovieSchema = SchemaFactory.createForClass(Movie);
