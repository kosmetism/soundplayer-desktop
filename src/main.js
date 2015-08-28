require('Application');

var Window = require('Window');
var WebView = require('WebView');

var win = new Window();
win.title = 'Hello World';
win.extendIntoTitle = true;
win.titleTransparent = true;
win.alwaysOnTop = true;
win.textured = true;
win.titleVisible = false;

var view = new WebView();
view.alpha = 0.92;
view.top = 0;
view.left = view.right = view.bottom = 0;
view.transparent = true;
view.location = 'app://src/layouts/index.html';
win.appendChild(view);

application.exitAfterWindowsClose = true;
application.icon = 'http://img02.cdn2-rdio.com/album/4/9/2/0000000000018294/2/square-1200.jpg';

win.visible = true;
