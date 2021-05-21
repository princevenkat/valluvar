const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\valluvar-react\src\index.js</pre>
    </>
  );
};

export default {
  name: "valluvar-react",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
