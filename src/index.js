// src/index.js
import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

import sliderData from './slider-main/block.json';
import SliderEdit from './slider-main/edit';

import slideData from './testimonial-slide/block.json';
import SlideEdit from './testimonial-slide/edit';

// Registro do Pai
registerBlockType( sliderData.name, {
    edit: SliderEdit,
    save: () => <InnerBlocks.Content />
} );

// Registro do Filho
registerBlockType( slideData.name, {
    edit: SlideEdit,
    save: () => null
} );