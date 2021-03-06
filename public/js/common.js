"use strict";
const JSCCommon = {

	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),

	modalCall() {
		const link = ".link-modal-js";

		Fancybox.bind(link, {
			arrows: false,
			infobar: false,
			touch: false,
			infinite: false,
			dragToClose: false,
			type: 'inline',
			autoFocus: false,
			l10n: {
				Escape: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад",
			},
		});
		document.querySelectorAll(".modal-close-js").forEach(el => {
			el.addEventListener("click", () => {
				Fancybox.close();
			})
		})
		Fancybox.bind('[data-fancybox]', {
			placeFocusBack: false,
		});

		const linkModal = document.querySelectorAll(link);
		function addData() {
			linkModal.forEach(element => {
				element.addEventListener('click', () => {
					let modal = document.querySelector(element.getAttribute("href"));
					const data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							const el = modal.querySelector(elem)
							el.tagName == "INPUT"
								? el.value = val
								: el.innerHTML = val;
							// console.log(modal.querySelector(elem).tagName)
						}
					}
					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				})
			})
		}
		if (linkModal) addData();
	},
	// /modalCall
	toggleMenu() {
		const toggle = this.btnToggleMenuMobile;
		const menu = this.menuMobile;
		document.addEventListener("click", function (event) {
			const toggleEv = event.target.closest(".toggle-menu-mobile--js");
			if (!toggleEv) return;
			toggle.forEach(el => el.classList.toggle("on"));
			menu.classList.toggle("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.toggle("fixed"));
		}, { passive: true });
	},
	closeMenu() {
		let menu = this.menuMobile;
		if (!menu) return;
		if (menu.classList.contains("active")) {
			this.btnToggleMenuMobile.forEach(element => element.classList.remove("on"));
			this.menuMobile.classList.remove("active");
			[document.body, document.querySelector('html')].forEach(el => el.classList.remove("fixed"));
		}

	},
	mobileMenu() {
		if (!this.menuMobileLink) return;
		this.toggleMenu();
		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			let link = event.target.closest(".menu-mobile .menu a"); // (1)
			let toggle = event.target.closest('.toggle-menu-mobile--js.on'); // (1)
			if (!container && !toggle) this.closeMenu();
		}, { passive: true });

		window.addEventListener('resize', () => {
			if (window.matchMedia("(min-width: 992px)").matches) this.closeMenu();
		}, { passive: true });
	},
	// /mobileMenu

	// tabs  .
	tabscostume(tab) {
		// const tabs = document.querySelectorAll(tab);
		// const indexOf = element => Array.from(element.parentNode.children).indexOf(element);
		// tabs.forEach(element => {
		// 	let tabs = element;
		// 	const tabsCaption = tabs.querySelector(".tabs__caption");
		// 	const tabsBtn = tabsCaption.querySelectorAll(".tabs__btn");
		// 	const tabsWrap = tabs.querySelector(".tabs__wrap");
		// 	const tabsContent = tabsWrap.querySelectorAll(".tabs__content");
		// 	const random = Math.trunc(Math.random() * 1000);
		// 	tabsBtn.forEach((el, index) => {
		// 		const data = `tab-content-${random}-${index}`;
		// 		el.dataset.tabBtn = data;
		// 		const content = tabsContent[index];
		// 		content.dataset.tabContent = data;
		// 		if (!content.dataset.tabContent == data) return;

		// 		const active = content.classList.contains('active') ? 'active' : '';
		// 		// console.log(el.innerHTML);
		// 		content.insertAdjacentHTML("beforebegin", `<div class="tabs__btn-accordion  btn btn-primary  mb-1 ${active}" data-tab-btn="${data}">${el.innerHTML}</div>`)
		// 	})


		// 	tabs.addEventListener('click', function (element) {
		// 		const btn = element.target.closest(`[data-tab-btn]:not(.active)`);
		// 		if (!btn) return;
		// 		const data = btn.dataset.tabBtn;
		// 		const tabsAllBtn = this.querySelectorAll(`[data-tab-btn`);
		// 		const content = this.querySelectorAll(`[data-tab-content]`);
		// 		tabsAllBtn.forEach(element => {
		// 			element.dataset.tabBtn == data
		// 				? element.classList.add('active')
		// 				: element.classList.remove('active')
		// 		});
		// 		content.forEach(element => {
		// 			element.dataset.tabContent == data
		// 				? (element.classList.add('active'), element.previousSibling.classList.add('active'))
		// 				: element.classList.remove('active')
		// 		});
		// 	})
		// })

		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});

	},
	// /tabs

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	animateScroll() {
		$(document).on('click', " .menu li a, .scroll-link", function () {
			const elementClick = $(this).attr("href");
			if (!document.querySelector(elementClick)) {
				$(this).attr("href", '/' + elementClick)
			}
			else {
				let destination = $(elementClick).offset().top;
				$('html, body').animate({ scrollTop: destination - 80 }, 0);
				return false;
			}
		});
	},
	getCurrentYear(el) {
		let now = new Date();
		let currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	},
	toggleShow(toggle, drop) {

		let catalogDrop = drop;
		let catalogToggle = toggle;

		$(document).on('click', catalogToggle, function () {
			$(this).toggleClass('active').next().fadeToggle('fast', function () {
				$(this).toggleClass("active")
			});
		})

		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(catalogDrop + ".active"); // (1)
			let link = event.target.closest(catalogToggle); // (1)
			if (!container || !catalogToggle) {
				$(catalogDrop).removeClass('active').fadeOut();
				$(catalogToggle).removeClass('active');
			};
		}, { passive: true });
	},
	makeDDGroup() {
		let parents = document.querySelectorAll('.dd-group-js');
		for (let parent of parents) {
			if (parent) {
				// childHeads, kind of funny))
				let ChildHeads = parent.querySelectorAll('.dd-head-js:not(.disabled)');
				$(ChildHeads).click(function () {
					let clickedHead = this;

					$(ChildHeads).each(function () {
						if (this === clickedHead) {
							//parent element gain toggle class, style head change via parent
							$(this.parentElement).toggleClass('active')
								.find('.dd-content-js').slideToggle(function () {
									$(this).toggleClass('active');
								});
						}
						// else {
						// 	$(this.parentElement).removeClass('active');
						// 	$(this.parentElement).find('.dd-content-js').slideUp(function () {
						// 		$(this).removeClass('active');
						// 	});
						// }
					});

				});
			}
		}
	},

	customRange() {

		$(".qwiz-range").ionRangeSlider({
			skin: "round",
			grid: false,
			grid_snap: false,
			hide_min_max: true,
			// hide_from_to: true,
		});
		$(".range-wrap").each(function () {
			var _this = $(this);

			var $range = _this.find(".slider-js");

			var $inputFrom = _this.find(".input_from");

			var $inputTo = _this.find(".input_to");

			var instance,
				from,
				to,
				min = $range.data('min'),
				max = $range.data('max');
			$range.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: updateInputs,
				onChange: updateInputs,
				onFinish: updateInputs
			});
			instance = $range.data("ionRangeSlider");

			function updateInputs(data) {
				from = data.from;
				to = data.to;
				$inputFrom.prop("value", from);
				$inputTo.prop("value", to); // InputFormat();
			}

			$inputFrom.on("change input ", function () {
				var val = +$(this).prop("value").replace(/\s/g, ''); // validate

				if (val < min) {
					val = min;
				} else if (val > to) {
					val = to;
				}

				instance.update({
					from: val
				});
				$(this).prop("value", val);
				console.log(val);
			});
			$inputTo.on("change input ", function () {
				var val = +$(this).prop("value").replace(/\s/g, ''); // validate

				if (val < from) {
					val = from;
				} else if (val > max) {
					val = max;
				}

				instance.update({
					to: val
				});
				$(this).prop("value", currencyFormat(val));
			});
		});
	}
};
const $ = jQuery;

function eventHandler() {
	// JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); 
	JSCCommon.heightwindow();
	JSCCommon.customRange();
	JSCCommon.makeDDGroup();
	// JSCCommon.toggleShow(".catalog-block__toggle--desctop", '.catalog-block__dropdown');
	// JSCCommon.animateScroll();

	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = document.body.dataset.bg;
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	}


	function setFixedNav() {
		let topNav = document.querySelector('.top-nav  ');
		if (!topNav) return;
		window.scrollY > 0
			? topNav.classList.add('fixed')
			: topNav.classList.remove('fixed');
	}

	function whenResize() {
		setFixedNav();
	}

	window.addEventListener('scroll', () => {
		setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();

	// $('.topLine__choose-city-btn').click(function(){
	// 	$(this).toggleClass('active');
	// 	$(this).next().toggleClass('show');
	// });
	// $('.catalog-toggle').click(function(){
	// 	$(this).toggleClass('active');
	// });
	// $('.topLine__top-nav-btn').click(function(){
	// 	$('body').toggleClass('fixed');
	// 	$('.top-nav').toggleClass('mob-menu');
	// }); //до утра
	// $('.top-nav__catalog-close').click(function(){
	// 	$('body').toggleClass('fixed');
	// 	$('.top-nav').toggleClass('mob-menu');
	// }); //до утра

	$('.sCatalog__show-more').click(function () {
		$('.sCatalog__caption').toggleClass('sCatalog__caption--active');
	});
	$('.topLine__input').focus(function(){
		$('.topLine__input-btn').toggleClass('topLine__input-btn--active');
	});
	$('.topLine__input').blur(function(){
		$('.topLine__input-btn').toggleClass('topLine__input-btn--active');
	});
	$('.list-title--js').click(function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	});
	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}
	var SliderThumbs = new Swiper(".sOneProduct__slider-thumbs--js", {
		spaceBetween: 10,
		direction: "vertical",
		slidesPerView: 5,
		watchOverflow: true,
		// freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		lazy: {
			loadPrevNext: true,
		},
	});
	var sOneProductSlider = new Swiper(".sOneProduct__slider--js", {
		spaceBetween: 10,
		slidesPerView: 1,
		direction: "vertical",
		watchOverflow: true,
		lazy: {
			loadPrevNext: true,
		},
		thumbs: {
			swiper: SliderThumbs,
			watchOverflow: true,
		}
	});
	var deposits = new Swiper(".sDeposits__slider--js ", {
		slidesPerView: 'auto',
		spaceBetween: 42,
		breakpoints: {
			992: {
				slidesPerView: 5
			},
		},
	});
	var projectsSlider = new Swiper(".sProject__slider--js  ", {
		slidesPerView: 1,
		loop: false,
		allowTouchMove: false,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".sProject__page-link--next",
			prevEl: ".sProject__page-link--prev",
		},
		on: {
			init(swiper) {

				let next = $(".sProject__slider--js .swiper-slide-next").data("title");
				let prev = $(".sProject__slider--js .swiper-slide-prev").data("title");

				$(".sProject__page-link--next .page-link-caption").html(next)
				$(".sProject__page-link--prev .page-link-caption").html(prev)
				this.el.addEventListener('mouseenter', () => {
					this.autoplay.stop();
				});
	
				this.el.addEventListener('mouseleave', () => {
					this.autoplay.start();
				});
			},
			slideChangeTransitionEnd() {
				let next = $(".sProject__slider--js .swiper-slide-next").data("title");
				let prev = $(".sProject__slider--js .swiper-slide-prev").data("title"); 
				
					$(".sProject__page-link--next .page-link-caption").html(next)
					$(".sProject__page-link--prev .page-link-caption").html(prev) 
			},
		},
	});
	var projectPicSlider = new Swiper(".sProject__slider-pic--js  ", {
		slidesPerView: '1',
		loop: true,
		spaceBetween: 0,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	var oneDepositSlider = new Swiper(".sOneDeposit__slider--js", {
		slidesPerView: '1',
		loop: true,
		spaceBetween: 0,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		on: {
			init() {
				this.el.addEventListener('mouseenter', () => {
					this.autoplay.stop();
				});
	
				this.el.addEventListener('mouseleave', () => {
					this.autoplay.start();
				});
			}
		},
	});
	var sDeliverySlider = new Swiper(".sDeliveryMethods__slider--js  ", {
		slidesPerView: 'auto',
		// loop: true,
		spaceBetween: 24,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".sDeliveryMethods .swiper-button-next",
			prevEl: ".sDeliveryMethods .swiper-button-prev",
		},
	});
	var sCertificatesSlider = new Swiper(".sCertificates__slider--js  ", {
		slidesPerView: 'auto',
		// loop: true,
		spaceBetween: 24,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".sCertificates .swiper-button-next",
			prevEl: ".sCertificates .swiper-button-prev",
		},
	});
	var reviews = new Swiper(".sReviews__slider--js", {
		slidesPerView: 'auto',
		loop: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 1
			},
		},
		on: {
			init() {
				this.el.addEventListener('mouseenter', () => {
					this.autoplay.stop();
				});
	
				this.el.addEventListener('mouseleave', () => {
					this.autoplay.start();
				});
			}
		},
	});
	var reviewsSlider = new Swiper(".sReviewsSlider__slider--js", {
		slidesPerView: 'auto',
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 1
			},
		},
	});
	var sAboutCompanySlider = new Swiper(".sAboutCompany__slider--js", {
		slidesPerView: 'auto',
		spaceBetween: 24,
		navigation: {
			nextEl: ".sAboutCompany .swiper-button-next",
			prevEl: ".sAboutCompany .swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		// breakpoints: {
		// 	576: {
		// 		slidesPerView: 1
		// 	},
		// },
	});
	var reviewsNoteSlider = new Swiper(".sReviewsNoteSlider__slider--js", {
		slidesPerView: 'auto',
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1
			},
		},
	});
	var offers = new Swiper(".sOffers__slider--js", {
		slidesPerView: 'auto',
		spaceBetween: 15,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			reverseDirection: true,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4
			},
			992: {
				slidesPerView: 3
			}
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	var sSignificantObjects = new Swiper(".sSignificantObjects__slider--js", {
		slidesPerView: 'auto',
		spaceBetween: 24,
		pagination: {
			el: ".sSignificantObjects .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				spaceBetween: 35,
				slidesPerView: 2
			},
			1200: {
				spaceBetween: 50,
				slidesPerView: 2
			}
		},
		navigation: {
			nextEl: ".sSignificantObjects .swiper-button-next",
			prevEl: ".sSignificantObjects .swiper-button-prev",
		},
	});

	var productionSlider = new Swiper(".sProduction__slider--js", {
		slidesPerView: 'auto',
		spaceBetween: 10,
		// loop: true,
		navigation: {
			nextEl: ".sProduction__slider-block .swiper-button-next",
			prevEl: ".sProduction__slider-block .swiper-button-prev",
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			576: {
				spaceBetween: 20,
			}
		}

	});
	const swiper4 = new Swiper('.sBanners__slider--js', {
		// slidesPerView: 5,
		// ...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		slideToClickedSlide: true,

	});
	// modal window
	const swiper5 = new Swiper('.place-slider--js', {
		// slidesPerView: 5,
		// ...defaultSl,
		slidesPerView: 'auto',
		freeMode: true,
		loop: false,
		navigation: {
			nextEl: ".place-slider-wrap .swiper-button-next",
			prevEl: ".place-slider-wrap .swiper-button-prev",
		},
	});
	const swiperbreadcrumb = new Swiper('.breadcrumb-wrap .swiper', {
		// slidesPerView: 5,
		// ...defaultSl,
		watchOverflow: true,
		slidesPerView: 'auto',
		freeMode: true,
		loop: false,
	});



	$(".sQwiz__body .radio-block ").click(function () {
		if ($(this).find('input').is(':checked')) {
			$(this).parents(".sQwiz__step").find(".sCalc__btn--next.d-none").removeClass("d-none")
		}

	})

	$(".sCalc__btn--next, .sQwiz__body .radio-block").click(function () {
		$(this).parents(".sQwiz__step").hide().removeClass('active').next().fadeIn(function () {
			$(this).addClass('active');
		})
	})
	$(".sCalc__btn--prev").click(function () {
		$(this).parents(".sQwiz__step").hide().removeClass('active').prev().fadeIn(function () {
			$(this).addClass('active');
		})
	})


	$(".toggle-search-js").click(function () {
		$(this).toggleClass("active");
		$(".topLine__input-wrap").slideToggle().find("input").focus();
	})

	$(".toggle-filter--js").click(function () {
		$(".sidebar__filter").toggleClass("active")
		$("body").toggleClass("fixed")
	})
	$(".sidebar__head span").click(function () {
		$(".sidebar__filter").removeClass("active")
		$("body").removeClass("fixed")
	})

	if (document.querySelector(".prod-right-block")) {

		var Sticky = new hcSticky('.prod-right-block', {
			stickTo: '.sOneProduct__wrap'
		});
	}



};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }