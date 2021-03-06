import i18n from "./i18n/index.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionNodeApp} app The ReactionNodeApp instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Product Variant",
    name: "reaction-product-variant",
    i18n
  });
}
