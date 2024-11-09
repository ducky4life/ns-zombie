// ==UserScript==
// @name         Z-day script
// @namespace    https://ducky4life.github.io/tgw
// @version      1.0.0
// @description  best used with containers on firefox if you have multiple puppets
// @author       Ducky
// @match        *://*.nationstates.net/*
// @grant        none
// ==/UserScript==


const regionactivitykey = "KeyA"
const tzeskey = "KeyS"
const curekey = "KeyD"
const hordekey = "KeyF"
const zombiecontrolkey = "KeyZ"



const link = window.location.href
const reg = /(?<=.nationstates.net).*$/
const domain = link.replace(reg, "")

document.addEventListener("keyup", function (event) {
	if (event.shiftKey || event.ctrlKey || event.altKey || document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
		return;
	} else {
		switch (event.code) {

                case regionactivitykey:
                window.location.assign(domain + "/page=activity/view=region");
		break;

                case tzeskey:
                document.getElementsByName("zsw_tzes")[0].click();
                break;

                case curekey:
                document.getElementsByName("zsw_cure")[0].click();
                break;

                case hordekey:
                document.getElementsByName("zsw_horde")[0].click(); // the button name may be wrong, im just guessing since i did not save the html file
                break;

                case zombiecontrolkey:
                window.location.assign(domain + "/page=zombie_control");
				break;
		}
	}
});
