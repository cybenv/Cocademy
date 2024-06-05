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
            color: black; /* Цвет текста 'My Home' */
        }

        .gamut-aqft1r-ResetElement-AnchorBase {
            color: black; /* Цвет текста 'Syllabus' */
        }

        .gamut-11n1gpx-ResetElement-AnchorBase {
            color: black; /* Цвет текста 'Get Unstuck' */
        }

        .gamut-1cgj4ay-ResetElement-AnchorBase {
            color: black; /* Цвет текста 'Tools' */
        }

        .gamut-7fo7a4-Box :hover {
            color: #ff8668; /* Цвет текста при наведении */
        }

        /* Нижняя панель */

        div.styles_footer__uX91v {
            background-color: #FFFFFF; /* Цвет фона нижней панели */
        }

        button#discovery-back {
            color: #ff8668; /* Цвет текста кнопки 'Back' */
            border-color: #ff8668; /* Цвет обводки кнопки 'Back' */
        }

        button#discovery-back:active {
            background-color: #ff8650; /* Цвет кнопки 'Back' при нажатии */
        }

        button#discovery-next {
            color: #fff; /* Цвет текста кнопки 'Back' */
            border-color: #ff8668; /* Цвет обводки кнопки 'Back' */
            background-color: #ff8668; /* Цвет кнопки 'Next' при нажатии */
        }

        button#discovery-back :hover {
            background-color: #ff8668; /* Цвет кнопки 'Back' при нажатии */
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