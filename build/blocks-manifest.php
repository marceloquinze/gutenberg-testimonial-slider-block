<?php
// This file is generated. Do not modify it manually.
return array(
	'slider-main' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/testimonial-slider',
		'title' => 'Testimonial Slider',
		'category' => 'text',
		'icon' => 'columns',
		'description' => 'A container for your testimonial slides.',
		'textdomain' => 'testimonial-slider-block',
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
		)
	),
	'testimonial-slide' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/testimonial-slide',
		'version' => '0.1.0',
		'title' => 'Testimonial Slider Block',
		'category' => 'text',
		'icon' => 'format-quote',
		'description' => 'Example block scaffolded with Create Block tool.',
		'parent' => array(
			'create-block/testimonial-slider'
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
		'textdomain' => 'testimonial-slider-block',
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
