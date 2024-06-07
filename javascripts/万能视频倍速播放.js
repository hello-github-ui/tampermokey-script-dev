// ==UserScript==
// @name         万能视频倍速播放
// @namespace    使用说明网址 找插件网
// @version      2024-04-11
// @description  去万能视频倍速播放
// @author       qiyue
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 获取video标签
    let tmn = window.setInterval(function () {
        let video = document.getElementsByTagName("video")[0];
        if (video) {
            video.playbackRate = 8;
            window.clearInterval(tmn);
        }
    }, 1000)
})();
