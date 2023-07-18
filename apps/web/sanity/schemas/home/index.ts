// Schema for Home page
const homePage = {
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Sub title",
          type: "string",
        },
      ],
    },
    {
      name: "desc",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default homePage;
