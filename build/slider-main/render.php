<?php
/**
 * Testimonial Slider Render Template (parent block)
 */

// Additional Slider Settings
$settings = [
	'autoplay'					=> $attributes['autoPlay'] ?? false,
	'delay'						=> $attributes['autoPlayDelay'] ?? 3000,
	'slidesPerView'				=> $attributes['slidesPerView'] ?? 1,
	'slidesPerViewTablet'		=> $attributes['slidesPerViewTablet'] ?? 1,
	'paginationType'			=> $attributes['paginationType'] ?? 'bullets',
];

$wrapper_attributes = get_block_wrapper_attributes([
	'class'			=> 'swiper testimonial-slider-container',
	'data-settings'	=> wp_json_encode( $settings ),
]);

?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="swiper-wrapper">
		<?php echo $content; ?>
	</div>

	<?php if( isset( $attributes['showPagination']) && $attributes['showPagination']): ?>
		<div class="swiper-pagination"></div>
	<?php endif; ?>

	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
</div>	