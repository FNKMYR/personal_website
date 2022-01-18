import "../styles/base.css";
import "../styles/utility.css";
import "../styles/icons.css";
import "../fontawesome/css/all.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
