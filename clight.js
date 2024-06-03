// ==UserScript==
// @name         Codecademy: Light Mode
// @namespace    https://github.com/cybenv
// @version      0.4
// @description  Codecademy Enhanced Light Theme with Customizations
// @author       Seva
// @match        https://www.codecademy.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        .gamut-1mv8uod:not(.gamut-1ag67m1-FlexBox):not(.gamut-1ag67m1-FlexBox *):not(.gamut-80zlcx-Box):not(.gamut-80zlcx-Box *) {
            background-color: #FFF1E6;
        }

        .gamut-1ag67m1-FlexBox {
            background-color: #F5FCFF;
            border: 1px solid black;
            padding: 35px;
            position: relative;
            overflow: visible;
            box-shadow: -10px 15px 0px 0px rgba(0, 0, 0, 0.15);
        }
      
        .gamut-93stl9-Box,
        .gamut-93stl9-Box * {
            color: black;
        }

        div.gamut-80zlcx-Box,
        div.gamut-80zlcx-Box *:not(.gamut-1gjic71-BadgeBase):not(.gamut-1gjic71-BadgeBase *) {
            background-color: #FFFFFF;
        }

        div.gamut-80zlcx-Box {
            border: 1px solid black;
            color: black;
        }

        .styles_p__TNq46 > code.styles_code__L5_fh {
            display: inline-block;
            padding: 0.02em 0.4em;
            margin: 0;
            font-size: 75%;
            color: black;
            background-color: #C3E8FF;
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
