import { execSync } from "child_process";
import { fileURLToPath } from "url";
import fs from "fs";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
	const commitDate = execSync("git log -1 --format=%cd").toString().trim();

	fs.writeFileSync(
		path.join(__dirname, "./public/last-updated.json"),
		JSON.stringify({ lastUpdated: commitDate }, null, 2)
	);

	console.log(
		"Successfully wrote last-updated.json with commit date:",
		commitDate
	);
} catch (error) {
	console.error("Failed to write last-updated.json:", error);
}
