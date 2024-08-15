const entry = App.configDir + "/main.ts";
const outdir = "/tmp/ags/js";

try {
  // prettier-ignore
  await Utils.execAsync([
    'bun', 'build', entry,
    '--outdir', outdir,
    '--external', 'resource://*',
    '--external', 'gi://*',
  ])
  await import(`file://${outdir}/main.js`);
} catch (error) {
  console.error(error);
}

// empty export to make this a module
export {};
