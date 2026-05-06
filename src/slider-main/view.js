import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('.testimonial-slider-container');

	containers.forEach( container => {

		const settings = container.dataset.settings ? JSON.parse(container.dataset.settings) : {};

		const SwiperConfig = {
			modules: [Navigation, Pagination, Autoplay],
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			breakpoints: {
				"@0.00": {
					slidesPerView: 1,
					spaceBetween: 25
				},
				"@1.00": {
					slidesPerView: settings.slidesPerViewTablet,
					spaceBetween: 25
				},
				"@1.75": {
					slidesPerView: settings.slidesPerView,
					spaceBetween: 10
				}
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: settings.paginationType === 'dynamic',

				...( (settings.paginationType !== 'dynamic' && settings.paginationType !== 'custom') && { 
					type: settings.paginationType 
				}),

				...( settings.paginationType === 'custom' && {
					renderBullet: function (index, className) {
						return '<span class=" custom-bullets ' + className + '"><em>' + (index + 1) + '</em></span>';
					}
				}),
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		};

		if( settings.autoplay ){
			SwiperConfig.autoplay = {
				delay: settings.delay,
				disableOnInteractions: false,
			}
		}
		console.log(SwiperConfig);
		
		new Swiper( container, SwiperConfig );
	});
});

