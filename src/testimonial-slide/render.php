<?php
/**
 * Testimonial Slide Render Template
 */

$wrapper_attributes = get_block_wrapper_attributes([
	'class'	=> 'swiper-slide testimonial-item'
]);

$quote 				= $attributes['quote'] ?? '';
$author_name 		= $attributes['authorName'] ?? '';
$author_role 		= $attributes['authorRole'] ?? '';
$author_img_id 		= $attributes['authorImageId'] ?? 0;
?>

<div <?php echo $wrapper_attributes; ?>>
	<div class="testimonial-content">
		<?php if( $author_img_id ) : ?> 
			<div class="testimonial-image">
				<?php echo wp_get_attachment_image( $author_img_id, 'thumb' ); ?>
			</div>
		<?php endif; ?>
		<blockquote class="testimonial-quote">
			<?php echo wp_kses_post( $quote ); ?>
		</blockquote>
		<div class="testimonial-meta">
			<cite class="testimonial-author">
				<strong><?php echo esc_html( $author_name ); ?></strong>
				<span><?php echo esc_html( $author_role ); ?></span>
			</cite>
		</div>
	</div>
</div>
