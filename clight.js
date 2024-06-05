// ==UserScript==
// @name         Codecademy: Light Mode
// @namespace    https://github.com/cybenv
// @version      0.6
// @description  Codecademy Enhanced Light Theme with Customizations
// @author       Seva
// @match        https://www.codecademy.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        header.gamut-7fo7a4-Box {
            background-color: #fffcf9;
            border-bottom: 0.9px solid black;
        }
 
        header.gamut-7fo7a4-Box * {
            color: #3d3a39;
        }

        header.gamut-7fo7a4-Box :hover {
        color: #ff8668;
        }

        div.styles_footer__uX91v {
            background-color: #fffcf9;
        }

        footer {
            background-color: #fffcf9;
            border-top: 0.9px solid black;
        }

        .gamut-1541y8v-ResetElementAnchor-createButtonComponent, 
        button#discovery-next, button#discovery-back {
            color: #3d3a39;
        }

        button#discovery-next {
            background-color: #ff8668;
            border-color: #ff8668;
        }

        button#discovery-back {
            border-color: #ff8668;
        }

        .styles_sectionRight__sgWaF .gamut-1541y8v-ResetElementAnchor-createButtonComponent {
            background-color: #ff8668;
            border: #ff8668;
            color: #3d3a39;
        }

        .styles_sectionRight__sgWaF a.gamut-1541y8v-ResetElementAnchor-createButtonComponent {
            color: #3d3a39;
            background-color: #ff8668;
        }
        /* Main страницы */
        .gamut-1mv8uod :not(.gamut-1ag67m1-FlexBox):not(.gamut-1ag67m1-FlexBox *):not(.gamut-80zlcx-Box):not(.gamut-80zlcx-Box *) {
            background-color: #FFF1E6;
        }
        /* Контент окно курса */
        .gamut-1ag67m1-FlexBox {
            background-color: #fffef9;
            border: 0.9px solid black;
            padding: 35px;
            position: relative;
            overflow: visible;
            box-shadow: -10px 15px 0px 0px rgba(0, 0, 0, 0.15);
        }

        h1.gamut-oqq5yh-StyledText, 
        span.styles_markdown__Y5HHD {
            color: #3d3a39;
        }

        .gamut-93stl9-Box, 
        .gamut-93stl9-Box * {
            color: #2a2a29;
        }

        div.gamut-80zlcx-Box, 
        div.gamut-80zlcx-Box *:not(.gamut-1gjic71-BadgeBase):not(.gamut-1gjic71-BadgeBase *) {
            background-color: #fffef9;
        }

        div.gamut-80zlcx-Box {
            border: 0.9px solid black;
            color: #2a2a29;
        }

        .styles_p__TNq46 > code.styles_code__L5_fh {
            display: inline-block;
            padding: 0.02em 0.4em;
            margin: 0;
            font-size: 75%;
            color: #2a2a29;
            background-color: #dfd6f1;
        }

        div * > a.gamut-d5kubd-AnchorBase {
            color: #444fb2;
        }
    `;

    function addGlobalStyle(css) {
        const head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle(css);
})();