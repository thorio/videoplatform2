import { Controller, Get } from "@nestjs/common";
import { PrismaClient, User, Video } from "@prisma";

@Controller()
export class AppController {
	constructor(private readonly prisma: PrismaClient) { }

	@Get()
	async getHello(): Promise<(User & { videos: Video[]; })[]> {
		const a = await this.prisma.user.findMany({
			include: {
				videos: true,
			},
		});
		this.prisma.$disconnect();
		return a;
	}
}
