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
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
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

		new Swiper( container, SwiperConfig );
	});
});