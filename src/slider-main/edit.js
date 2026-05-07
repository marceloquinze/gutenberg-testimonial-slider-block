/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl, SelectControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import '../style.scss';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
    const { 
        showPagination, 
        autoPlay, 
        autoPlayDelay,
        slidesPerView,
        slidesPerViewTablet,
        paginationType
     } = attributes;

    const ALLOWED_BLOCKS = [ 'inbrackets/testimonial-slide' ];

    const SLIDER_TEMPLATE = [
        [ 'inbrackets/testimonial-slide', { placeholder: 'Testimonial 1...' } ],
        [ 'inbrackets/testimonial-slide', { placeholder: 'Testimonial 2...' } ]
    ];

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Slider Settings', 'ib-testimonial-slider-block' ) }>
                    <ToggleControl
                        label={ __( 'Show Pagination', 'ib-testimonial-slider-block' ) }
                        checked={ showPagination }
                        onChange={ ( val ) => setAttributes( { showPagination: val } ) }
                    />
                    { showPagination && (
                        <SelectControl 
                            label={ __( 'Pagination Type', 'ib-testimonial-slider-block' ) }
                            value={ paginationType }
                            options={ [
                                { value: 'bullets', label: __( 'Bullets', 'ib-testimonial-slider-block' ) },
                                { value: 'fraction', label: __( 'Fraction', 'ib-testimonial-slider-block' ) },
                                { value: 'progressbar', label: __( 'Progress Bar', 'ib-testimonial-slider-block' ) },
                                { value: 'dynamic', label: __( 'Dynamic', 'ib-testimonial-slider-block' ) },
                                { value: 'custom', label: __( 'Custom', 'ib-testimonial-slider-block' ) }
                            ] }
                            onChange={ ( val ) => setAttributes( { paginationType: val } ) }
                        />
                    )}
                    <ToggleControl
                        label={ __( 'Auto Play', 'ib-testimonial-slider-block' ) }
                        checked={ autoPlay }
                        onChange={ ( val ) => setAttributes( { autoPlay: val } ) }
                    />
                    { autoPlay && (
                        <RangeControl 
                            label={ __( 'Autoplay delay (ms)', 'ib-testimonial-slider-block' ) }
                            value={ autoPlayDelay }
                            onChange={ ( val ) => setAttributes( { autoPlayDelay: val } ) }
                            min={ 1000 }
                            max={ 10000 }
                            step={ 500 }
                        />
                    )}
                    <RangeControl 
                        label={ __( 'Slides per view (Desktop)', 'ib-testimonial-slider-block' ) }
                        value={ slidesPerView }
                        onChange={ ( val ) => setAttributes( { slidesPerView: val } ) }
                        min={ 1 }
                        max={ 4 }
                      />                    
                    <RangeControl 
                        label={ __( 'Slides per view (Tablet)', 'ib-testimonial-slider-block' ) }
                        value={ slidesPerViewTablet }
                        onChange={ ( val ) => setAttributes( { slidesPerViewTablet: val } ) }
                        min={ 1 }
                        max={ 4 }
                      />                    
                </PanelBody>
            </InspectorControls>

            <div { ...useBlockProps() }>
                <div className="slider-admin-container">
                    <InnerBlocks 
                        allowedBlocks={ ALLOWED_BLOCKS }
                        template={ SLIDER_TEMPLATE }
                        orientation="horizontal"
                    />
                </div>
            </div>
        </>
    );
}