import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;
}
