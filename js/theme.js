"use strict";(function(){var getTheme=window.localStorage&&window.localStorage.getItem("theme");var getCurTheme=document.body.classList.contains("dark-theme");var themeToggle=document.querySelector(".theme-toggle");var isDark=getTheme==="dark";if(window.localStorage.getItem("theme")=="dark"){document.getElementById("light").disabled=true;document.getElementById("dark").disabled=false}else{document.getElementById("dark").disabled=true;document.getElementById("light").disabled=false}if(getTheme!==null){document.body.classList.toggle("dark-theme",isDark)}themeToggle.addEventListener("click",function(){document.body.classList.toggle("dark-theme");window.localStorage&&window.localStorage.setItem("theme",document.body.classList.contains("dark-theme")?"dark":"light");if(document.body.classList.contains("dark-theme")){document.getElementById("light").disabled=true;document.getElementById("dark").disabled=false}else{document.getElementById("dark").disabled=true;document.getElementById("light").disabled=false}})})();

