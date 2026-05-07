<?php
// This file is generated. Do not modify it manually.
return array(
	'slider-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'inbrackets/testimonial-slider',
		'title' => 'Testimonial Slider',
		'category' => 'media',
		'icon' => 'slides',
		'description' => 'A container for your testimonial slides.',
		'textdomain' => 'ib-testimonial-slider-block',
		'editorScript' => 'file:../index.js',
		'viewScript' => 'file:./view.js',
		'style' => 'file:../style-index.css',
		'render' => 'file:./render.php',
		'attributes' => array(
			'showPagination' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoPlay' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoPlayDelay' => array(
				'type' => 'number',
				'default' => 3000
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerViewTablet' => array(
				'type' => 'number',
				'default' => 1
			),
			'paginationType' => array(
				'type' => 'string',
				'default' => 'bullets'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'color' => array(
				
			),
			'className' => true
		),
		'example' => array(
			'attributes' => array(
				'autoPlay' => true,
				'paginationType' => 'dynamic'
			),
			'innerBlocks' => array(
				array(
					'name' => 'inbrackets/testimonial-slide',
					'attributes' => array(
						'authorName' => 'Marcelo Vieira',
						'authorRole' => 'WordPress Developer',
						'quote' => 'This slider is looking amazing with the block preview feature!',
						'authorImageUrl' => 'https://pd.w.org/2026/05/56869fa42ee3a2f19.45917503.jpeg'
					)
				),
				array(
					'name' => 'inbrackets/testimonial-slide',
					'attributes' => array(
						'authorName' => 'Sarah Jones',
						'authorRole' => 'Javascript Developer',
						'quote' => 'The nested block architecture makes it so flexible.',
						'authorImageUrl' => 'https://pd.w.org/2026/04/64069e3a78591dea2.64755819-rotated.jpeg'
					)
				)
			)
		)
	),
	'testimonial-slide' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'inbrackets/testimonial-slide',
		'version' => '0.1.0',
		'title' => 'Testimonial Slider Block',
		'category' => 'media',
		'icon' => 'format-quote',
		'description' => 'An individual slide for your slideshow block',
		'parent' => array(
			'inbrackets/testimonial-slider'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'textdomain' => 'ib-testimonial-slider-block',
		'editorScript' => 'file:../index.js',
		'editorStyle' => 'file:../index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'quote' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorName' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorRole' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorImageId' => array(
				'type' => 'number'
			),
			'authorImageUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	)
);
