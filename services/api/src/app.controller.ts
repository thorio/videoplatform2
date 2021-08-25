import { Controller, Get } from "@nestjs/common";
import { User, Video } from "@prisma";
import { PrismaService } from "./prisma/prisma.service";

@Controller()
export class AppController {
	constructor(private readonly prisma: PrismaService) { }

	@Get()
	async getHello(): Promise<(User & { videos: Video[]; })[]> {
		const a = await this.prisma.user.findMany({
			include: {
				videos: true,
			},
		});

		return a;
	}
}
