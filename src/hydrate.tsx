import { hydrate } from "react-dom";
import Crensoft from "./components/Crensoft/Crensoft";
import ContactPage from "./components/Crensoft/ContactPage";
import TermsPage from "./components/Crensoft/TermsPage";
import PrivacyPage from "./components/Crensoft/PrivacyPage";

const removeServerStyles = () => {
  const ssStyles = document.getElementById("server-side-styles");
  if (ssStyles && ssStyles.parentNode) {
    ssStyles.parentNode.removeChild(ssStyles);
  }
};

const myComponents = {
  "crensoft-home": Crensoft,
  "crensoft-contact": ContactPage,
  "crensoft-terms": TermsPage,
  "crensoft-privacy": PrivacyPage
};

(function block($, components: any) {
  if (document.getElementsByClassName("wp-admin").length) {
    return;
  }
  function renderWithProps(selector: any, Component: any) {
    // @ts-ignore
    $(`.wp-block-${selector}`).each((i, ele) => {
      // @ts-ignore
      const props = $(ele).data("props") || {};
      // clean props
      $(ele).data("props", "");
      hydrate(<Component {...props} />, ele, () => {
        removeServerStyles();
      });
    });
  }
  // @ts-ignore
  // window.__apolloClient__ = client("/");

  $(document).on("ready", () => {
    Object.keys(components).map((selector: any) => {
      renderWithProps(selector, components[selector]);
    });
  });
  // @ts-ignore
})(jQuery, myComponents);
