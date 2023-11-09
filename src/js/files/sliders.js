/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';
import Swiper from 'swiper';
import { Navigation, Pagination, Parallax, Autoplay, Thumbs, Fraction } from 'swiper/modules';

/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

// Инициализация слайдеров
function initSliders() {
	bildSliders();
	if (document.querySelector('.thumbs-ceilings')) { 
		const thumbsSwiper = new Swiper('.thumbs-ceilings__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 28,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.products-new__dotts',
			// 	clickable: true,
			// 	dynamicBullets: true
			// },
			// breakpoints: {
			// 	992: {
			// 		slidesPerView: 3,
			// 	},
			// 	1330: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 16,
			// 	},
			// },
			on: {
				init: function (swiper) {

				}
			}
		});

		new Swiper('.products-ceilings__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.products-ceilings__prev',
				nextEl: '.products-ceilings__next',
			},
			/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.bottom-comments')) { 
		new Swiper('.bottom-comments__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			//effect: 'fade',
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.top-comments__btn_prev',
				nextEl: '.top-comments__btn_next',
			},
			
			// Брейкпоинты
			breakpoints: {
				640: {
					// slidesPerView: 1,
					// autoHeight: true,
				},
				// 768: {
					// 	slidesPerView: 2,
						spaceBetween: 20,
				// },
				992: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
			
			// События
			on: {
				init: function(swiper) {
					const allSlides = document.querySelector('.fraction-controll__all');
					const allSlidesItems = document.querySelectorAll('.bottom-comments__slide:not(.swiper-slide-duplicate)');
					allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}`: allSlidesItems.length;

					// if (swiper.passedParams.breakpoints['1268'].slidesPerView) {
					// 	allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length - 2}`: allSlidesItems.length - 2;
					// } else if (swiper.passedParams.breakpoints['992'].slidesPerView) {
					// } else {
					// 	allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}`: allSlidesItems.length;
					// }
					// console.log(swiper.passedParams.breakpoints['1268'])
				},
				slideChange: function(swiper) {
					const currentSlide = document.querySelector('.fraction-controll__current');
					currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}`: swiper.realIndex + 1; 
					
				},
			}
		});
	}
	if (document.querySelector('.first-gallery')) { 
		const thumbsSwiper = new Swiper('.thumbs-gallery--1 .thumbs-gallery__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 2.8,
			spaceBetween: 28,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.products-new__dotts',
			// 	clickable: true,
			// 	dynamicBullets: true
			// },
			// breakpoints: {
			// 	992: {
			// 		slidesPerView: 3,
			// 	},
			// 	1330: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 16,
			// 	},
			// },
			on: {
				init: function (swiper) {

				}
			}
		});

		new Swiper('.first-gallery', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			// autoHeight: true,
			speed: 800,
			thumbs: {
				swiper: thumbsSwiper
			},
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.controll-gallery-slider__prev',
				nextEl: '.controll-gallery-slider__next',
			},
			
			// Брейкпоинты
			// breakpoints: {
			// 	640: {
			// 		// slidesPerView: 1,
			// 		// autoHeight: true,
			// 	},
			// 	// 768: {
			// 		// 	slidesPerView: 2,
			// 			spaceBetween: 20,
			// 	// },
			// 	992: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 30,
			// 	},
			// 	1268: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 40,
			// 	},
			// },
			
			// События
			on: {
			}
		});
	}
	if (document.querySelector('.second-gallery')) { 
		const thumbsSwiper = new Swiper('.thumbs-gallery--2 .thumbs-gallery__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 2.8,
			spaceBetween: 28,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.products-new__dotts',
			// 	clickable: true,
			// 	dynamicBullets: true
			// },
			// breakpoints: {
			// 	992: {
			// 		slidesPerView: 3,
			// 	},
			// 	1330: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 16,
			// 	},
			// },
			on: {
				init: function (swiper) {

				}
			}
		});
		new Swiper('.second-gallery', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			// autoHeight: true,
			speed: 800,
			thumbs: {
				swiper: thumbsSwiper
			},
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.second-gallery_prev',
				nextEl: '.second-gallery_next',
			},
			
			// Брейкпоинты
			// breakpoints: {
			// 	640: {
			// 		// slidesPerView: 1,
			// 		// autoHeight: true,
			// 	},
			// 	// 768: {
			// 		// 	slidesPerView: 2,
			// 			spaceBetween: 20,
			// 	// },
			// 	992: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 30,
			// 	},
			// 	1268: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 40,
			// 	},
			// },
			
			// События
			on: {
			}
		});
	}
	if (document.querySelector('.price__slider-one')) { 
		new Swiper('.price__slider-one', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			//effect: 'fade',
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 10,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.second-gallery_prev',
			// 	nextEl: '.second-gallery_next',
			// },
			
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				710: {
						slidesPerView: 2,
						spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
			
			// События
			on: {
			}
		});
	}
	if (document.querySelector('.slider-works')) { 
		new Swiper('.slider-works', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			//effect: 'fade',
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 13,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.slider-works__dotts',
				clickable: true,
				dynamicBullets: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.second-gallery_prev',
			// 	nextEl: '.second-gallery_next',
			// },
			
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 13,
				},
				710: {
						slidesPerView: 2,
						spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
			},
			
			// События
			on: {
			}
		});
	}
	if (document.querySelector('.thumbs-tabs')) { 
		const thumbsSwiper = new Swiper('.twoLevel-thumbs', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 24,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			navigation: {
				prevEl: '.twoLevel-thumbs_prev',
				nextEl: '.twoLevel-thumbs_next',
			},
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.products-new__dotts',
			// 	clickable: true,
			// 	dynamicBullets: true
			// },
			// breakpoints: {
			// 	992: {
			// 		slidesPerView: 3,
			// 	},
			// 	1330: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 16,
			// 	},
			// },
			on: {
				init: function (swiper) {

				}
			}
		});

		new Swiper('.twoLevel-slide', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 13,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.twoLevel-slide_prev',
				nextEl: '.twoLevel-slide_next',
			},
			
			// Брейкпоинты
			breakpoints: {
				// 640: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0,
				// 	autoHeight: true,
				// },
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// },
				992: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.inexpensive-thumbs')) { 
		const thumbsSwiper = new Swiper('.inexpensive-thumbs', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 24,
			parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			navigation: {
				prevEl: '.inexpensive-thumbs_prev',
				nextEl: '.inexpensive-thumbs_next',
			},
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.products-new__dotts',
			// 	clickable: true,
			// 	dynamicBullets: true
			// },
			// breakpoints: {
			// 	992: {
			// 		slidesPerView: 3,
			// 	},
			// 	1330: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 16,
			// 	},
			// },
			on: {
				init: function (swiper) {

				}
			}
		});

		new Swiper('.inexpensive-slide', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Thumbs],
			//effect: 'fade',
			thumbs: {
				swiper: thumbsSwiper
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 10,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.inexpensive-slide_prev',
				nextEl: '.inexpensive-slide_next',
			},
			// Брейкпоинты
			breakpoints: {
				// 640: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0,
				// 	autoHeight: true,
				// },
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// },
				992: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	bildSliders();
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});