/* 
 * =====================================================================================================================
 * =================================================== main.js =========================================================
 * =====================================================================================================================
 * PACKAGE      : websiteleton
 * TEAM         : bizBizeWeb (https://bizBizeWeb.com)
 * AUTHOR       : Emre Can ÖZTAŞ (ecoz)
 * MAIL         : info@bizBizeWeb.com
 * LICENSE      : MIT 
 * DESCRIPTION  : APP JS Codes
 * =====================================================================================================================
 */

$(document).ready(function() {
	theming();
});

var theming = function() {
    // Sidenav (Menu screen)
    $('.menu-screen').sidenav({
        edge: 'left'
    });
    
    // Image responsive
	$('img').addClass('responsive-img');

    // Card Shadow
    $('.card').addClass('z-depth-3');

    // Modals
    $('.modal').modal();
};