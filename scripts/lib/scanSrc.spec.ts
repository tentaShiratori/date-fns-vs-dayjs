import { expect, test } from "bun:test";
import { scanSrc } from "./scanSrc";

test("return files", async () => {
	await expect(scanSrc()).resolves.toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				name: expect.any(String),
				filename: expect.any(String),
				dir: expect.any(String),
			}),
		]),
	);
});
