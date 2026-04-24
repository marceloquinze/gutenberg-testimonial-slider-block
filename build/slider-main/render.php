<?php
/**
 * Testimonial Slider Render Template
 */

$wrapper_attributes = get_block_wrapper_attributes([
	'class'	=> 'swiper testimonial-slider-container'
]);
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="swipper-wrapper">
		<?php echo $content; ?>
	</div>

	<?php if( isset( $attributes['showPagination']) && $attributes['showPagination']): ?>
		<div class="swiper-pagination"></div>
	<?php endif; ?>

	<div class="swipper-button-prev"></div>
	<div class="swipper-button-next"></div>
</div>	