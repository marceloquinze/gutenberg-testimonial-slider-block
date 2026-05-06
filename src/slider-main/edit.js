import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';

import '../style.scss';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
    const { showPagination, autoPlay, autoPlayDelay } = attributes;

    // Restringimos para que APENAS o bloco de slide possa ser inserido aqui
    const ALLOWED_BLOCKS = [ 'create-block/testimonial-slide' ];

    // Criamos um template para que o usuário não comece com um slider vazio
    const SLIDER_TEMPLATE = [
        [ 'create-block/testimonial-slide', {} ],
        [ 'create-block/testimonial-slide', {} ]
    ];

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Slider Settings', 'testimonial-slider-block' ) }>
                    <ToggleControl
                        label={ __( 'Show Pagination', 'testimonial-slider-block' ) }
                        checked={ showPagination }
                        onChange={ ( val ) => setAttributes( { showPagination: val } ) }
                    />
                    <ToggleControl
                        label={ __( 'Auto Play', 'testimonial-slider-block' ) }
                        checked={ autoPlay }
                        onChange={ ( val ) => setAttributes( { autoPlay: val } ) }
                    />
                    { autoPlay && (
                        <RangeControl 
                            label={ __( 'Autoplay delay (ms)', 'testimonial-slider-block' ) }
                            value={ autoPlayDelay }
                            onChange={ ( val ) => setAttributes( { autoPlayDelay: val } ) }
                            min={ 1000 }
                            max={ 10000 }
                            step={ 500 }
                        />
                    )}
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