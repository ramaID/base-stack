import { promises as fs } from "fs";
import chalk from "chalk";

const appDirectory = "app";

const removeAllReadmeFromApp = async (currentDirectory: string) => {
  const files = await fs.readdir(currentDirectory);

  for (const file of files) {
    // Check if the current file is directory
    const isDirectory = (
      await fs.stat(`${currentDirectory}/${file}`)
    ).isDirectory();
    if (isDirectory) {
      await removeAllReadmeFromApp(`${currentDirectory}/${file}`);
    }
    if (file.includes("README.md")) {
      await fs.unlink(`${currentDirectory}/${file}`);
    }
  }
};

const removeTheCleanupFromPackageJsonAndScripts = async () => {
  const packageJson = JSON.parse(
    await fs.readFile("package.json", { encoding: "utf-8" })
  );

  delete packageJson.scripts.cleanup;
  await fs.writeFile(
    "package.json",
    JSON.stringify(packageJson, null, 2),
    "utf-8"
  );

  console.log(chalk.green("Cleanup script is removed from package.json"));
  await fs.unlink("scripts/cleanup.ts");
};

removeAllReadmeFromApp(appDirectory).then(() => {
  console.log(
    chalk.green("All README.md files are removed from app directory")
  );
});
removeTheCleanupFromPackageJsonAndScripts();
