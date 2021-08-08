import { Injectable } from "@nestjs/common";
import { test } from "@videoplatform2/lib";

@Injectable()
export class AppService {
	getTest(): string {
		return test("with lerna + nest + docker");
	}
}
