import { ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.model";

@ObjectType()
export class Video {
	id: string;
	title: string;
	tags: string;
	uploader: User;
}
