<?php
/**
 * Testimonial Slider Render Template
 */

$wrapper_attributes = get_block_wrapper_attributes([
	'class'	=> 'swiper testimonial-slider-container'
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