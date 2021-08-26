import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.model";

@ObjectType()
export class Video {
	@Field()
	id: string;

	@Field()
	title: string;

	@Field()
	tags: string;

	@Field(() => User)
	uploader: User;
}
