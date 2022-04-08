module.exports = (componentName) => ({
  content: `import React from "react";
import ${componentName} from "./";

export default {
    title: "${componentName}"
};

export const Basic = () => <${componentName} />;
`,
  extension: `.stories.tsx`
});
