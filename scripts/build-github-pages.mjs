import { spawn } from "node:child_process";
import { cp, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const nextCli = resolve(projectRoot, "node_modules", "next", "dist", "bin", "next");
const outDir = resolve(projectRoot, "out");
const docsDir = resolve(projectRoot, "docs");

await rm(outDir, { recursive: true, force: true });

const child = spawn(process.execPath, [nextCli, "build"], {
  cwd: projectRoot,
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://aleksandartomovski.com",
  },
  shell: false,
  stdio: "inherit",
});

child.on("exit", async (code) => {
  if (code !== 0) {
    process.exit(code ?? 1);
  }

  await rm(docsDir, { recursive: true, force: true });
  await cp(outDir, docsDir, { recursive: true });

  console.log("Static GitHub Pages export copied to docs/");
});
