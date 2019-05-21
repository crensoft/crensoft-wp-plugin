import Crensoft from "@crensoft/mui-marketing/lib/Crensoft/Crensoft";
import { hydrate } from "react-dom";
import Theme from "@crensoft/mui-core/lib/components/Theme/Theme";

const removeServerStyles = () => {
  const ssStyles = document.getElementById("server-side-styles");
  if (ssStyles && ssStyles.parentNode) {
    ssStyles.parentNode.removeChild(ssStyles);
  }
};

const myComponents = {
  "crensoft-home": Crensoft
};
// ....

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
      hydrate(
        <Theme>
          <Component {...props} />
        </Theme>,
        ele,
        () => {
          removeServerStyles();
        }
      );
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
