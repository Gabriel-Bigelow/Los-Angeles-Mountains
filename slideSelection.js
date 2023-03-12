let mountain2Src = './images/history1.webp';
let climbSrc = './images/history2.webp';
let carousel3Src = './images/history3.webp';

function transitionImage (target, src, alt) {
    target.style.opacity = 0;
    setTimeout(() => {
        target.src = src;
        target.alt = alt;
        target.style.opacity = 1;
    }, 200);
}

let shrinkImages = true;
window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
        let carousel = document.getElementById('carousel');  
        
        for (let i = 0; i < 3; i++) {
            carousel.children[i].style.width = '220px';
            carousel.children[i].style.height = '135px';
        }
        shrinkImages = true;
    } else if (shrinkImages) {
        for (let i = 0; i < 3; i++) {
            carousel.children[i].style.width = '0px';
            carousel.children[i].style.height = '0px';
        }
        shrinkImages = false;
    }
})

function selectCarousel (event) {
    let historyBG = document.getElementById('history-bg');
    let paragraph = document.getElementById('history-text-paragraph');
    let dot

    let carousel = document.getElementById('carousel');
    if (window.innerWidth < 500) {
        if (event.target.id === "carousel" || event.target.id === "carousel-dots") {
            for (let i = 0; i < 3; i++) {
                carousel.children[i].style.width = '220px';
                carousel.children[i].style.height = '135px';
            }
        } else {
            for (let i = 0; i < 3; i++) {
                carousel.children[i].style.width = '0px';
                carousel.children[i].style.height = '0px';
            }
        }
    }


    const activeDots = document.getElementsByClassName('active-dot');

    if (event.target.src !== historyBG.src && event.target.id !== "carousel") {
        for (let dot of activeDots) {
            for (let className of dot.classList) {
                if (className === "active-dot") {
                    dot.classList.remove('active-dot');
                    dot.classList.add('inactive-dot');
                }
            }
        }

        switch(event.target.id) {
            case "carousel-1":
                paragraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.`
                dot = document.getElementById('dot-1');
                dot.classList.remove('inactive-dot');
                dot.classList.add('active-dot');

                transitionImage(
                    historyBG,
                    mountain2Src,
                    "A wooded, slightly snowy mountain, preceded by a lake and white house.",
                );
                break;
            case "carousel-2":
                paragraph.innerHTML = `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                dolorem eum fugiat quo voluptas nulla pariatur?`
                dot = document.getElementById('dot-2');
                dot.classList.remove('inactive-dot');
                dot.classList.add('active-dot');

                transitionImage(
                    historyBG,
                    climbSrc,
                    "a man stands on top of a mountain, overlooking the foggy ground below.",
                );
                break;
            case "carousel-3":
                paragraph.innerHTML = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`;
                dot = document.getElementById('dot-3');
                dot.classList.remove('inactive-dot');
                dot.classList.add('active-dot');

                transitionImage(
                    historyBG,
                    carousel3Src,
                    "Fog and clouds rolling off the side of a mountain",
                )
                break
            default:
                break;
        }
    }
}

let mountainTab1Src = './images/schedule1.webp';
let mountainTab2Src = './images/schedule2.webp';
let activeSpanID = "mountain-1";

function selectMountain ({target}) {

    const spans = document.getElementsByClassName('outer-span');
    const scheduleBG = document.getElementById('schedule-bg');
    
    if (target.id !== activeSpanID && target.id.includes('mountain-')) {
        for (let span of spans) {
            for (let className of span.classList) {
                if (className === "active-span") {
                    span.classList.remove('active-span');
                    span.classList.add('inactive-span');
                }
            }
        }
        
        switch (target.id) {
            case "mountain-1":
                transitionImage(
                    scheduleBG,
                    mountainTab1Src,
                    "A very snowy mountain peak with birds flying around it."
                )
                target.parentNode.classList.remove('inactive-span');
                target.parentNode.classList.add('active-span');
                break;
            case "mountain-2":
                transitionImage(
                    scheduleBG,
                    mountainTab2Src,
                    "A very snowy mountain peak with birds flying around it."
                )
                target.parentNode.classList.remove('inactive-span');
                target.parentNode.classList.add('active-span');
                break;
            default:
                break;
        }
    }
    activeSpanID = target.id;
}