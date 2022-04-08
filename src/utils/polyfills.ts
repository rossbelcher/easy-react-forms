// https://tc39.github.io/ecma262/#sec-array.prototype.find

import { getUkTime, getUKTimeString } from "./date-helpers";

export function customPolyfill() {

  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function (predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;
        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') {
          throw TypeError('predicate must be a function');
        }
        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];
        // 5. Let k be 0.
        var k = 0;
        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          // e. Increase k by 1.
          k++;
        }
        // 7. Return undefined.
        return undefined;
      },
      configurable: true,
      writable: true
    });
  }

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  Number.isNaN = Number.isNaN || function isNaN(input) {
    return typeof input === 'number' && input !== input;
  }

  Promise.prototype.finally = Promise.prototype.finally || {
    finally(fn) {
      const onFinally = callback => Promise.resolve(fn()).then(callback);
      return this.then(
        result => onFinally(() => result),

        reason => onFinally(() => Promise.reject(reason))
      );
    }
  }.finally;

  if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target === null || target === undefined) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource !== null && nextSource !== undefined) {
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

  // @ts-ignore
  window.getUkTime = getUkTime;
  // @ts-ignore
  window.getUKTimeString = getUKTimeString;

  // @ts-ignore
  window.exportToExcelEs6 = (name, str, ext) => {
    if (!name) name = 'Export';
    if (!str) str = document.getElementById("toWord");
    if (!ext) ext = 'xls';
    if (window.navigator.msSaveOrOpenBlob) {
      const blob = new Blob(["\ufeff", str], { type: 'application/vnd.ms-excel'});
      window.navigator.msSaveOrOpenBlob(blob, `${name}.${ext}`);
    } else {
      const downloadLink = document.createElement("a");
      const blob = new Blob(["\ufeff", str]);
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = `${name}.${ext}`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }

  // @ts-ignore
  window.exportToWordEs6 = (name = null, str = null, landscape = false) => {
    if (!name) name = 'Export';
    if (!str) str = document.getElementById('toWord')
    const downloadLink = document.createElement('a');
    var css = (
      '<style>' +
      '@page Section{size: 841.95pt 595.35pt;mso-page-orientation: landscape;}' +
      'div.Section {page: Section;}' +
      '</style>'
    );
    if (landscape) str = '<div class="Section">' + str + '</div>';
    const blob = new Blob(['\ufeff', css + str], {
      type: 'application/msword'
    });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = name;

    document.body.appendChild(downloadLink);
    if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(blob, `${name}.doc`); // IE10-11
    else downloadLink.click();  // other browsers
    document.body.removeChild(downloadLink);
  }

  // @ts-ignore
  window.exportToMailEs6 = (subject = null, str = null, fileName = null, toAddress = null, ccAddress = null) => {
    if (!fileName) fileName = 'Export';
    const emlContent = new Blob([`data:message/rfc822 eml,\nTo: ${toAddress}\nCC: ${ccAddress}\nSubject: ${subject}\nX-Unsent: 1\nContent-Type: text/html;charset="utf-8"\n\n${str}`]);
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(emlContent, `${fileName}.eml`);
    } else {
      if (!document.querySelector('#downloadEmail')) {
        document.body.insertAdjacentHTML('beforeend', `<a id="downloadEmail" download="${fileName}.eml" style="display: none">Download</a>`);
      }
      const downloadBtn: any = document.querySelector('#downloadEmail');
      downloadBtn.href = URL.createObjectURL(emlContent);
      downloadBtn.click();
    }
  }
}