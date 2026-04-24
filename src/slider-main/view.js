import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll('.testimonial-slider-container');

	containers.forEach( container => {
		new Swiper( container, {
			modules: [Navigation, Pagination],
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
		});
	});
});