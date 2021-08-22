import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService, PrismaClient],
})
export class AppModule { }
