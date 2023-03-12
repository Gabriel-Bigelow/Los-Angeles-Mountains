function moveImage () {
    let heroContainer = document.getElementById('hero-container');
    let heroImage = document.getElementById('hero');
    let historyBG = document.getElementById("history-bg");
    let scheduleBG = document.getElementById('schedule-bg');

    if (window.innerWidth > 1200 ) {
        heroImage.style.height = 'auto';
    } else if (window.innerWidth > 650) {
        heroImage.style.height = "500px";
    } else {
        heroImage.style.height = "300px";
    }

    if (window.innerWidth > heroImage.naturalWidth) {
        heroImage.style.width = "100%";
    } else {
        heroImage.style.width = `auto`;
    }

    heroContainer.style.height = `${heroImage.getBoundingClientRect().height}px`;

    
    if (window.innerWidth > historyBG.naturalWidth) {
        historyBG.style.width = "100%";
    } else {
        historyBG.style.width = `auto`;
    }

    if (window.innerWidth > scheduleBG.naturalWidth) {
        scheduleBG.style.width = "100%";
    } else {
        scheduleBG.style.width = `auto`;
    }
}

window.addEventListener('resize', moveImage)