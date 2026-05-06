=== Testimonial Slider Block ===
Contributors: inbrackets
Tags: gutenberg, block, testimonial, slider, swiperjs, block-styles, nested-blocks
Requires at least: 6.2
Tested up to: 6.9
Stable tag: 1.0.0
Requires PHP: 7.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A high-performance Testimonial Slider block built natively for the WordPress Block Editor (Gutenberg) using the Parent/Child block architecture and powered by Swiper.js.

== Description ==

The **Testimonial Slider Block** is a lightweight, customizable, and modern carousel block designed specifically for the block editor. Instead of packing everything into a single rigid block, this plugin utilizes a robust nested block structure (`InnerBlocks`) split into a main container block (Parent) and individual slide blocks (Child).

Engineered with performance and user experience in mind, it loads frontend scripts only when the block is active on the page. This project serves as a showcase of deep integration with core WordPress APIs, advanced build asset management, and frontend interactive libraries.

### Key Technical Features:
* **Parent/Child Architecture:** Complete structural separation. The parent block handles global slider behavior (autoplay, loop, breakpoints), while child blocks manage content data (text, author metadata, avatar images).
* **Dynamic PHP Rendering:** Employs `render.php` on the frontend for optimized server-side rendering, seamless support for theme-level style inheritance, and modern block wrapper attribute generation.
* **Deep Gutenberg Integration:** Fully supports native WordPress block tools like theme color palettes, background/text style presets, typography components, and Block Styles API.
* **Fluid Responsive Layouts:** Implements advanced *Ratio Breakpoints* matching modern visual viewports (Mobile, Tablet, Desktop) configured intuitively through the block sidebar panel.
* **Optimized Editor UX:** Features a tailored grid/stacked layout architecture for the block editor UI, avoiding frontend carousel initialization glitches inside the editor canvas and allowing effortless content editing.

== Installation ==

= Manual Installation =
1. Upload the entire `testimonial-slider-block` directory to your `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.

= Developer & Build Setup =
This block is compiled using `@wordpress/scripts`. To set up the development environment:
1. Navigate to the plugin root directory in your terminal.
2. Run `npm install` to load all production and development dependencies (including Swiper.js).
3. Run `npm start` to start the local Webpack watcher for active code development.
4. Run `npm run build` to compile minimized, production-ready assets before deployment.

== Frequently Asked Questions ==

= Does this plugin inject heavy assets on every page load? =
No. Following strict WordPress performance guidelines, the Swiper.js core library and initialization modules are enqueued via the modern `viewScriptModule` attribute, loading assets strictly on pages containing the block instance.

= Why are navigation arrows and pagination bullets locked or hidden? =
The slider contains built-in optimization logic (*watchOverflow*). If the number of testimonial slides created inside the editor is equal to or less than the configured number of slides per view for that specific screen size, navigation controls are automatically disabled as no scrolling behavior is required.

= Can I use core theme colors with this slider? =
Yes. The block inherits native theme Design Tokens. The Swiper theme color properties are mapped directly to `currentColor` and `--wp--preset--color` custom properties.

== Block Styles ==

This plugin registers two predefined typographic layouts using the native Block Styles API:

1.  **Modern Card (Default):** Wraps individual testimonials inside isolated cards featuring subtle background fills, generous interior padding, and premium container drop-shadows.
2.  **Minimal Quote:** A sleek, minimal layout stripping away card containers, utilizing a thick left border accent and tailored indentations reminiscent of editorial pull-quotes.

== Changelog ==

= 1.0.0 =
* Initial release.
* Implemented core Parent (`slider-main`) and Child (`testimonial-slide`) block architecture.
* Integrated Swiper.js with custom Navigation, Pagination, and Autoplay controller modules.
* Added full support for responsive slide distribution via ratio viewports.