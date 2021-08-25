import { Prisma, PrismaClient } from "../.prisma";
import faker from "faker";

const users = 20;
const videosPerUser = 5;

faker.seed(1510387813002811);
const prisma = new PrismaClient();

async function main() {
	let promises = new Array(users).fill(0).map(() => {
		return prisma.user.create({
			data: getUser(),
		});
	});

	await Promise.all(promises);
}

function getUser(): Prisma.UserCreateInput {
	return {
		passwordHash: faker.datatype.hexaDecimal(20),
		username: faker.internet.userName(),
		videos: {
			createMany: {
				data: getVideos(),
			},
		},
	};
}

function getVideos(): Prisma.VideoCreateManyUploaderInput[] {
	return new Array(videosPerUser).fill(0).map(() => ({
		tags: faker.music.genre(),
		title: faker.company.catchPhrase(),
	}));
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	}).finally(() => {
		prisma.$disconnect();
	});
