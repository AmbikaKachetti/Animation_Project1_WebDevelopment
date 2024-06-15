let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');
let section5 = document.getElementById('section5');

window.addEventListener('scroll', (event) => {
    // console.log(event);
    // console.log("Section1", section1.getBoundingClientRect().top);

    // section 1
    let section1topvalue = section1.getBoundingClientRect().top;
    // console.log(section1topvalue);
    if (section1topvalue < -280) {
        // console.log('HI');
        section1.style.opacity = 0;
        section1.style.transition = '2s';
    }
    else {
        section1.style.transition = '2s';
        section1.style.opacity = 1;
    }

    // section 2
    let section2topvalue = section2.getBoundingClientRect().top;
    // console.log(section2topvalue);
    if (section2topvalue < -238) {
        section2.style.opacity = 0;
        section2.style.transition = '2s';
    }
    else if (section2topvalue < 161) {
        section2.style.opacity = 1;
        section2.style.transition = '2s';
    }
    else {
        section2.style.opacity = 0;
    }

    // section 3
    let imgSection3 = document.getElementById('img_section3');

    let section3topvalue = section3.getBoundingClientRect().top;
    // console.log(section3topvalue);
    if (section3topvalue < -30) {
        // operations
        imgSection3.style.left = 0;
        imgSection3.style.transition = '2s';
    }
    else {
        imgSection3.style.transition = '2s';
        imgSection3.style.left = -600;
    }

    // section 4
    let section4topvalue = section4.getBoundingClientRect().top;
    // console.log(section4topvalue);
    if (section4topvalue < -131) {
        section4.style.opacity = 0;
        section4.style.transition = '2s';
    }
    else if (section2topvalue < 980) {
        section4.style.opacity = 1;
        section4.style.transition = '2s';
    }
    else {
        section4.style.opacity = 0;
    }

    // section 5
    let section5topvalue = section5.getBoundingClientRect().top;
    console.log(section5topvalue);
    if (section5topvalue < -111) {
        section5.style.opacity = 0;
        section5.style.transition = '2s';
    }
    else if (section2topvalue < 355) {
        section5.style.opacity = 1;
        section5.style.transition = '2s';
    }
    else {
        section5.style.opacity = 0;
    }

    // section 6
    let imgSection6 = document.getElementById('img_section6');

    let section6topvalue = section6.getBoundingClientRect().top;
    // console.log(sectiontopvalue);
    if (section6topvalue < -30) {
        // operations
        imgSection6.style.right = 0;
        imgSection6.style.transition = '2s';
    }
    else {
        imgSection6.style.transition = '2s';
        imgSection6.style.right = -600;
    }
})