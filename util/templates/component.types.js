module.exports = (componentName) => ({
  content: `interface ${componentName}Props {
    foo: string;
}
`,
  extension: `.types.ts`
});
