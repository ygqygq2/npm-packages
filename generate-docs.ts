import * as shell from "shelljs";
import * as glob from "glob";
import * as fs from "fs";

// 获取 packages 目录下的所有子目录
const packages: string[] = glob.sync("packages/*");

packages.forEach((packageDir: string) => {
  console.log(`\nGenerating docs for packages...`);

  // 更改当前工作目录到包的目录
  shell.cd(packageDir);

  if (fs.existsSync("typedoc.json")) {
    console.log(`Generating docs for ${packageDir}...`);
    const result = shell.exec("pnpm run docs", { silent: false });

    if (result.code !== 0) {
      console.error(`Error generating docs for ${packageDir}:`);
      console.error(result.stderr);
    } else {
      console.log(`Docs generated for ${packageDir}`);
    }
  } else {
    console.log(`No typedoc.json found in ${packageDir}, skipping...`);
  }

  // 更改当前工作目录回到原来的目录
  shell.cd("../..");
});
