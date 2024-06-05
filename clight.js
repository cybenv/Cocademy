// ==UserScript==
// @name         Codecademy: Light Mode
// @namespace    https://github.com/cybenv
// @version      1.0
// @description  Codecademy Enhanced Light Theme with Customizations
// @author       Seva
// @match        https://www.codecademy.com/*
// @grant        none
// ==/UserScript==

(function() {
    const css = `
        /* Верхняя панель */
        .gamut-17zcbnm-Box header {
            background-color: #FFFFFF; /* Цвет фона верхней панели */
        }

        .gamut-jmy50 {
            color: black; /* Цвет логотипа */
        }

        .gamut-gi2olp-AnchorBase {
            color: black; /* Цвет 'My Home' */
        }

        .gamut-aqft1r-ResetElement-AnchorBase {
            color: black; /* Цвет 'Syllabus' */
        }

        .gamut-11n1gpx-ResetElement-AnchorBase {
            color: black; /* Цвет 'Get Unstuck' */
        }

        .gamut-1cgj4ay-ResetElement-AnchorBase {
            color: black; /* Цвет 'Tools' */
        }

        .gamut-7fo7a4-Box :hover {
            color: #ff8668; /* Цвет при наведении */
        }
    `;

    function addGlobalStyle(css) {
        const head = document.getElementsByTagName('head')[0];
        if (!head) {
            console.error('No head element found in the document.');
            return;
        }
        const style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) { // Для IE
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }

    addGlobalStyle(css);
})();