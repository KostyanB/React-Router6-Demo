const makeSubPage = (Content, { title, displayName }) => {
  const Page = () => (
    <>
      <h2>{title}</h2>
      <Content />
    </>
  );

  Page.displayName = displayName;

  return Page;
};
export default makeSubPage;
