import { PrismaClient } from "../.prisma";
import faker from "faker";

faker.seed(1510387813002811);
const prisma = new PrismaClient();
const users = 20;
const videosPerUser = 5;

async function main() {
	let i = users;
	while (i-- > 0) {
		await prisma.user.create({
			data: {
				passwordHash: faker.datatype.hexaDecimal(20),
				username: faker.internet.userName(),
				videos: {
					createMany: {
						data: new Array(videosPerUser).fill(0).map(() => ({
							tags: faker.music.genre(),
							title: faker.company.catchPhrase(),
						}))
					}
				}
			},
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	}).finally(() => {
		prisma.$disconnect();
	});
