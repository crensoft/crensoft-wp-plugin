/**
 * BLOCK: crensoft
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import ReactDOM from "react-dom/server";
import { ServerStyleSheets } from "@material-ui/styles";
import TermsPage from "../../components/Crensoft/TermsPage";

declare var wp: any;

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { BlockControls } = wp.editor;
// const { IconButton } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("crensoft/terms", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Terms Page"), // Block title.
  icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("crensoft — CGB Block")],

  attributes: {
    styles: {
      type: "string",
      source: "meta",
      meta: "styles"
    }
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: function(props: any) {
    // Creates a <p class='wp-block-cgb-block-crensoft'></p>
    wp.element.useEffect(() => {
      props.setAttributes({ styles: "component" });
    }, []);
    return [<BlockControls key="ctrl" />, <TermsPage key="content" />];
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save: function(props: any) {
    const sheets = new ServerStyleSheets();
    const html = ReactDOM.renderToString(sheets.collect(<TermsPage />));
    const css = sheets.toString();
    return (
      <div
        className="wp-block-crensoft-terms"
        data-css={css}
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    );
  }
});
