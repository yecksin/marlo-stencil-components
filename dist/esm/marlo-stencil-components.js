import { p as promiseResolve, b as bootstrapLazy } from './index-3qBtqk6a.js';
export { s as setNonce } from './index-3qBtqk6a.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.29.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
//# sourceMappingURL=marlo-stencil-components.js.map

//# sourceMappingURL=marlo-stencil-components.js.map