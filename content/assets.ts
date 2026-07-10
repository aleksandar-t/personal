const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath =
  configuredBasePath && configuredBasePath !== "/"
    ? configuredBasePath.replace(/\/$/, "")
    : "";

export function assetPath(path: `/${string}`) {
  return `${basePath}${path}`;
}
