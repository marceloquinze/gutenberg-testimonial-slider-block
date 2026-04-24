<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="testimonial-image">
		<?php 
			echo wp_get_attachment_image( $attributes['authorImageId'], 'large' );
		?>
	</div>
	<p class="testimonial-text">
		<?php echo wp_kses_post( $attributes['quote'] ?? 'No quote provided' ); ?>
	</p>
	<div class="testimonial-meta">
		<strong><?php echo esc_html( $attributes['authorName'] ?? '' ); ?></strong>
		<span><?php echo esc_html( $attributes['authorRole'] ?? '' ); ?></span>
	</div>
</div>
