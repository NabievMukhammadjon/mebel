// Подключение функционала "Чертогов Фрилансера"
import { isMobile, _slideToggle, _slideDown, _slideUp } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.getElementById('calcDemo')) {
    const demo = document.getElementById('calcDemo'),
          range = document.getElementById('calcRange');

    const allPrice = document.querySelector('.response-calc__price');
    const selectContent = document.querySelectorAll('.quantity-calc__option');
    const radioCalc = document.querySelectorAll('.radios-calc__radio');
    
    demo.innerHTML = range.value;
    
    function getMaterial() {
        let material;

        radioCalc.forEach((radio, i) => {
            if (radio.checked) {
                material = radio.dataset.number;
            }
        });

        radioCalc.forEach((radio, i) => {
            radio.addEventListener('click', e => {
                material = radio.dataset.number;
            });
        });

        return material;
    }
    // getMaterial();

    
    

    range.addEventListener('input', function() {
        demo.value = this.value;
        
        const material = getMaterial();
        console.log(material)
        
        selectContent.forEach((item, i) => {
            if (item.selected) {    
                allPrice.textContent = material * this.value * item.textContent;
            }
        });
    });
    
    demo.addEventListener('input', e => {
        const regex = /^\d+$/;
        const inputValue = e.target.value;
        
        if (!regex.test(inputValue)) {
            e.target.value = "";
        } else {
            range.value = inputValue;
            
            const material = getMaterial();

            selectContent.forEach((item, i) => {
                if (item.selected) {    
                    allPrice.textContent = material * inputValue * item.textContent;
                }
            }); 
        }
        if (inputValue > 100) {
            e.target.value = "";
        }
    });
}

document.querySelectorAll('.tabs-stages__title').forEach((btn, i) => {
    const tabsContent = document.querySelector('.tabs-stages__content');
    btn.addEventListener('click', (e) => {
        if (i === 0) {
            tabsContent.classList.add('border-top');
        } else {
            tabsContent.classList.remove('border-top');
        }
    });    
});

if(document.querySelector('.sales-page')) {
    const btnAll = document.querySelectorAll('.promotion-card__hide'),
          contentAll = document.querySelectorAll('.promotion-card__all');

    contentAll.forEach(item => {
        item.hidden = true;
    });

    btnAll.forEach((btn, i) => {
        btn.addEventListener('click', e => {
            if (contentAll[i].hidden) {
                _slideDown(btn.nextElementSibling);
                btn.textContent = 'Скрыть';
            } else {
                _slideUp(btn.nextElementSibling);
                btn.textContent = 'Подробнее';
            }
        });
    });
}

//========================================================================================================================================================
const tabsMobileCeilings = document.querySelector('.tabs-mobile-1'),
      tabsMobileCeilingsSpan = document.querySelector('.tabs-mobile-1 span'),
      tabsNavCeilings = document.querySelector('.ceilings-tabs__navs'),
      tabsTitleCeilings = document.querySelectorAll('.ceilings-tabs__title'),
      tabsBodyCeilings = document.querySelectorAll('.ceilings-tabs__body');

const calcBtn = document.querySelector('.calc__button');

if (tabsMobileCeilings) {   
    getWindowResize(tabsNavCeilings);
    mobileTogle(tabsMobileCeilings, tabsNavCeilings);
    clickTabsTitle(tabsTitleCeilings, tabsMobileCeilingsSpan, tabsNavCeilings, tabsBodyCeilings, tabsMobileCeilings);
}

// tabsTitleCeilings.forEach((title, i) => {
//     title.addEventListener('click', () => {
//         tabsMobileCeilingsSpan.textContent = title.textContent;
//         _slideToggle(tabsNavCeilings);
//         // removeClass();
//         removeClass(tabsTitleCeilings);
//         title.classList.add('_tab-active');
//         tabsBodyCeilings.forEach((item, index) => {
//             item.hidden = true;
//         }); 
//         tabsBodyCeilings[i].hidden = false;
//     });
// });

const tabsMobilePrice = document.querySelector('.tabs-mobile-2'),
      tabsMobileSpanPrice = document.querySelector('.tabs-mobile-2 span'),
      tabsNavPrice = document.querySelector('.tabs-price__navs'),
      tabsTitlePrice = document.querySelectorAll('.tabs-price__title'),
      tabsBodyPrice = document.querySelectorAll('.tabs-price__body');

if (tabsMobilePrice) {   
    getWindowResize(tabsNavPrice);
    mobileTogle(tabsMobilePrice, tabsNavPrice);
    clickTabsTitle(tabsTitlePrice, tabsMobileSpanPrice, tabsNavPrice, tabsBodyPrice, tabsMobilePrice);
}


//==================================
const tabsMobileCatalog = document.querySelector('.tabs-mobile-3'),
tabsMobileSpanCatalog = document.querySelector('.tabs-mobile-3 span'),
      tabsNavCatalog = document.querySelector('.catalog-tabs__navs'),
      tabsTitleCatalog = document.querySelectorAll('.catalog-tabs__title'),
      tabsBodyCatalog = document.querySelectorAll('.catalog-tabs__body');
      
if (tabsMobileCatalog) {   
    getWindowResize(tabsNavCatalog);
    mobileTogle(tabsMobileCatalog, tabsNavCatalog);
    clickTabsTitle(tabsTitleCatalog, tabsMobileSpanCatalog, tabsNavCatalog, tabsBodyCatalog, tabsMobileCatalog);
}

//==================================
const tabsMobileProduct = document.querySelector('.tabs-mobile-4'),
tabsMobileSpanProduct = document.querySelector('.tabs-mobile-4 span'),
tabsNavProduct = document.querySelector('.tabs-product__navs'),
tabsTitleProduct = document.querySelectorAll('.tabs-product__title'),
tabsBodyProduct = document.querySelectorAll('.tabs-product__body');

if (tabsMobileProduct) {   
    getWindowResize(tabsNavProduct);
    mobileTogle(tabsMobileProduct, tabsNavProduct);
    clickTabsTitle(tabsTitleProduct, tabsMobileSpanProduct, tabsNavProduct, tabsBodyProduct, tabsMobileProduct);
}

//==================================
const tabsMobileGallery = document.querySelector('.tabs-mobile-5'),
      tabsMobileSpanGallery = document.querySelector('.tabs-mobile-5 span'),
      tabsNavGallery = document.querySelector('.tabs-gallery__navs'),
      tabsTitleGallery = document.querySelectorAll('.tabs-gallery__title'),
      tabsBodyGallery = document.querySelectorAll('.tabs-gallery__body');

if (tabsMobileGallery) {   
    getWindowResize(tabsNavGallery);
    mobileTogle(tabsMobileGallery, tabsNavGallery);
    clickTabsTitle(tabsTitleGallery, tabsMobileSpanGallery, tabsNavGallery, tabsBodyGallery, tabsMobileGallery);
}
    

//========================================================================================================================================================
function getWindowResize(tabNav) {
    if (calcBtn || tabNav ) {
        windowResize(tabNav);
    
        window.addEventListener('resize', e => {
            windowResize(tabNav); 
        });
    }

}

// if (calcBtn || tabsNavCeilings ) {
//     windowResize(tabsNavCeilings);

//     window.addEventListener('resize', e => {
//         windowResize(tabsNavCeilings); 
//     });
// }

function removeClass(titles) {
    // tabsTitleCeilings.forEach((title, i) => {
    //     title.classList.remove('_tab-active');
    // });
    titles.forEach((title, i) => {
        title.classList.remove('_tab-active');
    });
}

function windowResize(tabNav) {
    if (window.innerWidth <= 991) {
        tabNav.hidden = true;
        if (calcBtn) {
            calcBtn.textContent = 'Рассчитать';
        }
    } else {
        tabNav.hidden = false;
        if (calcBtn) {
            calcBtn.textContent = 'Получить точный расчет';
        }
    }
}

function mobileTogle(btn, nav) {
    btn.addEventListener('click', e => {
        // _slideToggle(btn.nextSibling);
        _slideToggle(nav);
        btn.classList.toggle('_activeSpoll');
    });
}

function clickTabsTitle(titles, span, nav, bodys, btn) {
    titles.forEach((title, i) => {
        title.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                span.textContent = title.textContent;
                // _slideToggle(nav);
                _slideToggle(nav);
                // removeClass();
                removeClass(titles);
                btn.classList.remove('_activeSpoll');
                title.classList.add('_tab-active');
                bodys.forEach((item, index) => {
                    item.hidden = true;
                }); 
                bodys[i].hidden = false;
            }
        });
    });
}

//========================================================================================================================================================
//========================================================================================================================================================
if (document.getElementById("inputNumber")) {   
    let selector = document.getElementById("inputNumber");
    
    let im = new Inputmask("+7(999)999-99-99");
    im.mask(selector);
}
if (document.getElementById("popupTel")) {   
    let selector = document.getElementById("popupTel");
    
    let im = new Inputmask("+7(999)999-99-99");
    im.mask(selector);
}

//========================================================================================================================================================
const stagesTabsBtn = document.querySelectorAll('.tabs-stages__title'),
      stagesTabsBody = document.querySelectorAll('.tabs-stages__body'),
      stagesBtnPrev = document.querySelectorAll('.btns-states__btn_white'),
      stagesBtnNext = document.querySelectorAll('.btns-states__btn_blue');

stagesBtnNext.forEach((btn, i) => {
    btn.addEventListener('click', e => {
        if (stagesTabsBtn.length > i + 1) {
            if (stagesTabsBtn[i].classList.contains('_tab-active')) {
                stagesTabsBtn[i].classList.remove('_tab-active');
                stagesTabsBtn[i + 1].classList.add('_tab-active');
                stagesTabsBody[i].hidden = true;
                stagesTabsBody[i + 1].hidden = false;
            } else {
                stagesTabsBtn[i].classList.add('_tab-active');
                stagesTabsBtn[i + 1].classList.remove('_tab-active');
                stagesTabsBody[i].hidden = false;
                stagesTabsBody[i + 1].hidden = true;
            }
        } else {
            stagesTabsBody[i].hidden = true;
            stagesTabsBtn[i].classList.remove('_tab-active');
            stagesTabsBody[0].hidden = false;
            stagesTabsBtn[0].classList.add('_tab-active');
        }
    });
});
stagesBtnPrev.forEach((btn, i) => {
    let allLenght = stagesTabsBtn.length - 1;
    btn.addEventListener('click', e => {
        if (i > 0) {
            if (stagesTabsBtn[i].classList.contains('_tab-active')) {
                stagesTabsBtn[i].classList.remove('_tab-active');
                stagesTabsBtn[i - 1].classList.add('_tab-active');
                stagesTabsBody[i].hidden = true;
                stagesTabsBody[i - 1].hidden = false;
            } else {
                stagesTabsBtn[i].classList.add('_tab-active');
                stagesTabsBtn[i - 1].classList.remove('_tab-active');
                stagesTabsBody[i].hidden = false;
                stagesTabsBody[i - 1].hidden = true;
            }
        } else {
            stagesTabsBody[i].hidden = true;
            stagesTabsBtn[i].classList.remove('_tab-active');
            stagesTabsBody[allLenght].hidden = false;
            stagesTabsBtn[allLenght].classList.add('_tab-active');
        }
    });
});

