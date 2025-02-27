import { Dirent } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
interface File {
	/**
	 * 拡張子なしのファイル名
	 */
	name: string;
	filename: string;
	/**
	 * 相対パス形式のディレクトリ
	 */
	dir: string;
}

export async function scanSrc(): Promise<File[]> {
	const srcDir = path.resolve(__dirname, "../../src");
	const files = await fs.readdir(srcDir, {
		recursive: true,
		withFileTypes: true,
	});
	return files
		.filter((file) => file.isFile())
		.map((file) => {
			const parsed = path.parse(file.name);
			return {
				name: parsed.name,
				filename: parsed.base,
				dir: path.relative(srcDir, file.parentPath).replaceAll(path.sep, "/"),
			};
		});
}
