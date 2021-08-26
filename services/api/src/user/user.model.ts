import { ObjectType } from "@nestjs/graphql";
import { Video } from "src/video/video.model";

@ObjectType()
export class User {
	id: string;
	username: string;
	videos: Video[];
}
