import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { quote, authorName, authorRole } = attributes;

	return (
		<div { ...useBlockProps() }>
			<RichText
				tagName="p"
				className="testimonial-text"
				placeholder={ __( 'Write the testimonial...', 'testimonial-slider-block' ) }
				value={ quote }
				onChange={ ( val ) => setAttributes( { quote: val } ) }
			/>
			<RichText
				tagName="strong"
				placeholder={ __( 'Author Name', 'testimonial-slider-block' ) }
				value={ authorName }
				onChange={ ( val ) => setAttributes( { authorName: val } ) }
			/>
			<RichText
				tagName="span"
				placeholder={ __( 'Role / Company', 'testimonial-slider-block' ) }
				value={ authorRole }
				onChange={ ( val ) => setAttributes( { authorRole: val } ) }
			/>
		</div>
	);
}