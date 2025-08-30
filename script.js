//--------- dom selectors -------------
const collapse = document.querySelector("#collapse");
const displayOption = document.querySelectorAll(".toggle-display");
const sidebarDiv = document.querySelector("#sidebar-div");
const themeOption = document.querySelector("#theme");
const themeSVG = document.querySelector("#theme-svg");

//--------- event listeners --------------
collapse.addEventListener("click", toggleSidebar);
themeOption.addEventListener("click", toggleTheme);

//---------- functions and helper variables ----------
let sidebarState = true; //true -> wide, false -> collapsed
function toggleSidebar() {
    const collapseSVG = document.querySelector("#collapse-svg");
    if (sidebarState) {
        //toggling grid column size of sidebar
        document.body.style.gridTemplateColumns = "0.05fr 1fr 1fr 1fr";
        //toggling icon
        collapseSVG.outerHTML = rightArrowSVG;
    }
    else {
        //toggling grid column size of sidebar
        document.body.style.gridTemplateColumns = "0.25fr 1fr 1fr 1fr";
        collapseSVG.outerHTML= leftArrowSVG;
    }

    //toggling the p text
    sidebarState ? styleVar = "none" : styleVar = "block";
    displayOption.forEach(item => {
        item.style.display = styleVar;
    })

    sidebarState = !sidebarState;
}

//--------------------------//

let themeState = true; //true-> dark, false -> light
function toggleTheme() {
    document.body.classList.toggle("light");
    const themeSVG = document.querySelector("#theme-svg");
    if (themeState) {
        themeSVG.outerHTML = sunSVG;
    }
    else {
        themeSVG.outerHTML = moonSVG;
    }
    themeState = !themeState;
}

//----------------------------//

//------------------ const variables -----------
const sunSVG = `<svg id="theme-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

const moonSVG = `<svg id="theme-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;

const leftArrowSVG = `<svg id = "collapse-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-to-line-icon lucide-arrow-left-to-line"><path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/></svg>`;

const rightArrowSVG = `<svg id = "collapse-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-to-line-icon lucide-arrow-right-to-line"><path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/></svg>`;
