import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "./user.model";

@Resolver(() => User)
export class UserResolver {
	constructor(private prisma: PrismaService) { }

	@Query(() => [User])
	async users(@Info() info: GraphQLResolveInfo) {
		return this.prisma.user.findMany({
			...new PrismaSelect(info).value,
		});
	}

	@Query(() => User, { nullable: true })
	async user(@Args("id", { type: () => String }) id: string, @Info() info: GraphQLResolveInfo) {
		return this.prisma.user.findUnique({
			where: { id },
			...new PrismaSelect(info).value,
		});
	}
}
