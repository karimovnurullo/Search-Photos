/* ============================= Fade In Animation =============================
================================================================================ */

const obderver1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeIn__css');
        } else {
            entry.target.classList.remove('karimov__fadeIn__css');
        }
    });
});
const hiddenElements1 = document.querySelectorAll('.karimov__fadeIn');
hiddenElements1.forEach((el) => obderver1.observe(el));

const obderver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInDown__css');
        } else {
            entry.target.classList.remove('karimov__fadeInDown__css');
        }
    });
});
const hiddenElements2 = document.querySelectorAll('.karimov__fadeInDown');
hiddenElements2.forEach((el) => obderver2.observe(el));
const obderver3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInDownBig__css');
        } else {
            entry.target.classList.remove('karimov__fadeInDownBig__css');
        }
    });
});
const hiddenElements3 = document.querySelectorAll('.karimov__fadeInDownBig');
hiddenElements3.forEach((el) => obderver3.observe(el));
const obderver4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInLeft__css');
        } else {
            entry.target.classList.remove('karimov__fadeInLeft__css');
        }
    });
});
const hiddenElements4 = document.querySelectorAll('.karimov__fadeInLeft');
hiddenElements4.forEach((el) => obderver4.observe(el));
const obderver5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInLeftBig__css');
        } else {
            entry.target.classList.remove('karimov__fadeInLeftBig__css');
        }
    });
});
const hiddenElements5 = document.querySelectorAll('.karimov__fadeInLeftBig');
hiddenElements5.forEach((el) => obderver5.observe(el));
const obderver6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInRight__css');
        } else {
            entry.target.classList.remove('karimov__fadeInRight__css');
        }
    });
});
const hiddenElements6 = document.querySelectorAll('.karimov__fadeInRight');
hiddenElements6.forEach((el) => obderver6.observe(el));
const obderver7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInRightBig__css');
        } else {
            entry.target.classList.remove('karimov__fadeInRightBig__css');
        }
    });
});
const hiddenElements7 = document.querySelectorAll('.karimov__fadeInRightBig');
hiddenElements7.forEach((el) => obderver7.observe(el));
const obderver8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInUp__css');
        } else {
            entry.target.classList.remove('karimov__fadeInUp__css');
        }
    });
});
const hiddenElements8 = document.querySelectorAll('.karimov__fadeInUp');
hiddenElements8.forEach((el) => obderver8.observe(el));
const obderver9 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInUpBig__css');
        } else {
            entry.target.classList.remove('karimov__fadeInUpBig__css');
        }
    });
});
const hiddenElements9 = document.querySelectorAll('.karimov__fadeInUpBig');
hiddenElements9.forEach((el) => obderver9.observe(el));
const obderver10 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInTopLeft__css');
        } else {
            entry.target.classList.remove('karimov__fadeInTopLeft__css');
        }
    });
});
const hiddenElements10 = document.querySelectorAll('.karimov__fadeInTopLeft');
hiddenElements10.forEach((el) => obderver10.observe(el));
const obderver11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInTopRight__css');
        } else {
            entry.target.classList.remove('karimov__fadeInTopRight__css');
        }
    });
});
const hiddenElements11 = document.querySelectorAll('.karimov__fadeInTopRight');
hiddenElements11.forEach((el) => obderver11.observe(el));
const obderver12 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInBottomLeft__css');
        } else {
            entry.target.classList.remove('karimov__fadeInBottomLeft__css');
        }
    });
});
const hiddenElements12 = document.querySelectorAll('.karimov__fadeInBottomLeft');
hiddenElements12.forEach((el) => obderver12.observe(el));
const obderver13 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeInBottomRight__css');
        } else {
            entry.target.classList.remove('karimov__fadeInBottomRight__css');
        }
    });
});
const hiddenElements13 = document.querySelectorAll('.karimov__fadeInBottomRight');
hiddenElements13.forEach((el) => obderver13.observe(el));


/* ============================= Fade Out Animation =============================
================================================================================ */


const obderver14 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOut__css');
        } else {
            entry.target.classList.remove('karimov__fadeOut__css');
        }
    });
});
const hiddenElements14 = document.querySelectorAll('.karimov__fadeOut');
hiddenElements14.forEach((el) => obderver14.observe(el));
const obderver15 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutDown__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutDown__css');
        }
    });
});
const hiddenElements15 = document.querySelectorAll('.karimov__fadeOutDown');
hiddenElements15.forEach((el) => obderver15.observe(el));
const obderver16 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutDownBig__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutDownBig__css');
        }
    });
});
const hiddenElements16 = document.querySelectorAll('.karimov__fadeOutDownBig');
hiddenElements16.forEach((el) => obderver16.observe(el));
const obderver17 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutLeft__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutLeft__css');
        }
    });
});
const hiddenElements17 = document.querySelectorAll('.karimov__fadeOutLeft');
hiddenElements17.forEach((el) => obderver17.observe(el));
const obderver18 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutLeftBig__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutLeftBig__css');
        }
    });
});
const hiddenElements18 = document.querySelectorAll('.karimov__fadeOutLeftBig');
hiddenElements18.forEach((el) => obderver18.observe(el));
const obderver19 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutRight__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutRight__css');
        }
    });
});
const hiddenElements19 = document.querySelectorAll('.karimov__fadeOutRight');
hiddenElements19.forEach((el) => obderver19.observe(el));
const obderver20 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutRightBig__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutRightBig__css');
        }
    });
});
const hiddenElements20 = document.querySelectorAll('.karimov__fadeOutRightBig');
hiddenElements20.forEach((el) => obderver20.observe(el));
const obderver21 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutUp__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutUp__css');
        }
    });
});
const hiddenElements21 = document.querySelectorAll('.karimov__fadeOutUp');
hiddenElements21.forEach((el) => obderver21.observe(el));
const obderver22 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutUpBig__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutUpBig__css');
        }
    });
});
const hiddenElements22 = document.querySelectorAll('.karimov__fadeOutUpBig');
hiddenElements22.forEach((el) => obderver22.observe(el));
const obderver23 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutTopLeft__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutTopLeft__css');
        }
    });
});
const hiddenElements23 = document.querySelectorAll('.karimov__fadeOutTopLeft');
hiddenElements23.forEach((el) => obderver23.observe(el));
const obderver24 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutTopRight__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutTopRight__css');
        }
    });
});
const hiddenElements24 = document.querySelectorAll('.karimov__fadeOutTopRight');
hiddenElements24.forEach((el) => obderver24.observe(el));
const obderver25 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutBottomLeft__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutBottomLeft__css');
        }
    });
});
const hiddenElements25 = document.querySelectorAll('.karimov__fadeOutBottomLeft');
hiddenElements25.forEach((el) => obderver25.observe(el));
const obderver26 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeOutBottomRight__css');
        } else {
            entry.target.classList.remove('karimov__fadeOutBottomRight__css');
        }
    });
});
const hiddenElements26 = document.querySelectorAll('.karimov__fadeOutBottomRight');
hiddenElements26.forEach((el) => obderver26.observe(el));



