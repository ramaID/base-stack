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
      await fs.unlink(`${appDirectory}/${file}`);
    }
  }
};

removeAllReadmeFromApp(appDirectory).then(() => {
  console.log(
    chalk.green("All README.md files are removed from app directory")
  );
});
