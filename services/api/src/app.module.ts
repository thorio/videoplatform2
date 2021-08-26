import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "./prisma/prisma.service";
import { UserResolver } from "./user/user.resolver";
import { VideoResolver } from "./video/video.resolver";


@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: true,
			playground: true,
		}),
	],
	providers: [
		PrismaService,
		UserResolver,
		VideoResolver,
	],
})
export class AppModule { }
