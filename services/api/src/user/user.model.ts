import { Field, ObjectType } from "@nestjs/graphql";
import { Video } from "src/video/video.model";

@ObjectType()
export class User {
	@Field()
	id: string;

	@Field()
	username: string;

	@Field(() => [Video])
	videos: Video[];
}
