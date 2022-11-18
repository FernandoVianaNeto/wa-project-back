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
  banner: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  director: string;

  @Prop({ required: true, default: new Date().toISOString() })
  producer: string;

  @Prop({ required: false, default: new Date().toISOString() })
  createdAt: string;

  @Prop({ required: false, default: '' })
  updatedAt: string;
}

export type MovieDocument = Movie & Document;

export const MovieSchema = SchemaFactory.createForClass(Movie);
