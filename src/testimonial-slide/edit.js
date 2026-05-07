/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { Button } from '@wordpress/components'

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { quote, authorName, authorRole, authorImageUrl, authorImageId } = attributes;

	const onSelectImage = ( media ) => {
		setAttributes( {
			authorImageId: media.id,
			authorImageUrl: media.url
		} );
	};

	return (
		<div { ...useBlockProps() }>
			<div className="author-image-wrapper">
				{ ! authorImageUrl ? (
					<MediaPlaceholder 
						onSelect={ onSelectImage }
						allowedTypes={ [ 'image' ] }
						multiple={ false }
						labels={ { title: __( 'Author Image', 'ib-testimonial-slider-block' ) } }
					/>
				) : (
					<div className="image-preview">
						<img src={ authorImageUrl } alt={ authorName } />
						<Button
							onClick={ () => setAttributes( { authorImageId: 0, authorImageUrl: '' } ) }
							isDestructive
							variant="link"
						>
							{ __( 'Remove Image', 'ib-testimonial-slider-block' ) }
						</Button>
					</div>
				) }
			</div>
			<div className="testimonials-text">
				<RichText
					tagName="p"
					className="testimonial-text"
					placeholder={ __( 'Write the testimonial...', 'ib-testimonial-slider-block' ) }
					value={ quote }
					onChange={ ( val ) => setAttributes( { quote: val } ) }
				/>
				<RichText
					tagName="strong"
					placeholder={ __( 'Author Name', 'ib-testimonial-slider-block' ) }
					value={ authorName }
					onChange={ ( val ) => setAttributes( { authorName: val } ) }
				/>
				<RichText
					tagName="span"
					placeholder={ __( 'Role / Company', 'ib-testimonial-slider-block' ) }
					value={ authorRole }
					onChange={ ( val ) => setAttributes( { authorRole: val } ) }
				/>
			</div>
		</div>
	);
}