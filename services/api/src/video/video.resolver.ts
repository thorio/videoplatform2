import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "src/prisma/prisma.service";
import { Video } from "./video.model";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";

@Resolver(() => Video)
export class VideoResolver {
	constructor(private prisma: PrismaService) { }

	@Query(() => [Video])
	async videos(@Info() info: GraphQLResolveInfo) {
		return this.prisma.video.findMany({
			...new PrismaSelect(info).value,
		});
	}

	@Query(() => Video, { nullable: true })
	async video(@Args("id", { type: () => String }) id: string, @Info() info: GraphQLResolveInfo) {
		return this.prisma.video.findUnique({
			where: { id },
			...new PrismaSelect(info).value,
		});
	}
}
