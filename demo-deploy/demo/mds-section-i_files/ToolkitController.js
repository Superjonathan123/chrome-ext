
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (ToolkitController == null) var ToolkitController = {};
ToolkitController._path = '/dwr';
ToolkitController.getToolkitLinksInfo = function(p2, p3, callback) {
  dwr.engine._execute(ToolkitController._path, 'ToolkitController', 'getToolkitLinksInfo', false, false, p2, p3, callback);
}
