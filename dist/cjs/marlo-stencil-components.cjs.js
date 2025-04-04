'use strict';

var index = require('./index-BfU-_3Lp.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.29.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('marlo-stencil-components.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["mal-multiselect_2.cjs",[[1,"mal-multiselect"],[1,"my-component",{"count":[32]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=marlo-stencil-components.cjs.js.map

//# sourceMappingURL=marlo-stencil-components.cjs.js.map