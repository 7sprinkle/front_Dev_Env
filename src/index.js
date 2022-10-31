"use strict";


import "./index.scss"; // scssファイルのインポート
import "./api"; // scssファイルのインポート

function hello() {
  alert('hello world!');
}

window.hello = hello; // bundleされると関数名が内部で変更されるため再定義