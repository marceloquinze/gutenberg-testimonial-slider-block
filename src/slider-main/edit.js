import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const { showPagination } = attributes;

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