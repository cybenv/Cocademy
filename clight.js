// ==UserScript==
// @name         Codecademy: Light Mode
// @namespace    https://github.com/cybenv
// @version      1.1
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
            border-bottom: 1px solid black; /* Цвет нижней границы верхней панели */
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

        footer {
            border-top: 1px solid black;
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
            background-color: #ff8668; /* Цвет кнопки 'Back' при наведении */
        }

        /* Main страницы */
        main :not(.gamut-1ag67m1-FlexBox):not(.gamut-1ag67m1-FlexBox *) {
            background-color: #FFF1E6; /* Цвет фона для всего body */
        }

        .gamut-1ag67m1-FlexBox {
            background-color: #fffef9; /* Устанавливает светло-кремовый цвет фона для основного контейнера контента */
            border: 1px solid black; /* Добавляет тонкую черную рамку вокруг контейнера */
            display: grid; /* Устанавливает тип отображения содержимого, чтобы оно занимало всю доступную ширину */
            box-shadow: -10px 10px 0px 1px rgba(0, 0, 0, 0.15); /* Добавляет тень к контейнеру */
            padding-left: 2rem; /* Добавляет отступ слева от контейнера */
            padding-right: 2rem; /* Добавляет отступ справа от контейнера */
            padding-top: 1.5rem; /* Добавляет отступ сверху от контейнера */
            padding-bottom: 1.5rem; /* Добавляет отступ снизу от контейнера */
        }

        /* Начало изменений для черного цвета шрифта */
        .styles_h2__X9hwU,
        .styles_h3__VPpU9,
        .styles_h4__t9RTs,
        .styles_p__TNq46,
        .styles_li__mfNCB,
        .styles_blockquote__2o8ay,
        .styles_details__ovHPh {
            color: black;
        }
        /* Конец изменений для черного цвета шрифта */

        @media (max-width: 425px) { /* Применяем только на экранах меньше 425px */
            .gamut-1ag67m1-FlexBox {
                display: block; /* Меняем display на block */
                width: auto; /* Позволяем элементу принимать нужную ширину */
            }
        }

        .styles_p__TNq46 > code.styles_code__L5_fh {
            display: inline-block; /* Устанавливает тип отображения элемента code как inline-block */
            padding: 0.02em 0.4em; /* Устанавливает внутренние отступы сверху и снизу, слева и справа */
            margin: 0; /* Убирает внешние отступы элемента */
            font-size: 75%; /* Устанавливает размер шрифта 75% от родительского */
            color: #2a2a29; /* Устанавливает цвет текста */
            background-color: #dfd6f1; /* Устанавливает фоновый цвет */
            border: 1px solid black; /* Добавляет рамку */
            border-radius: 2px; /* Добавляет радиус */
        }

        a.gamut-d5kubd-AnchorBase {
            color: #444fb2; /* Меняет цвет якоря */
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
