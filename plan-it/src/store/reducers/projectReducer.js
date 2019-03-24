const initialState = {
  projects: [
    { id: "1", title: "please yeah", content: "bhah bhabh hbahb" },
    { id: "2", title: "oh yeah", content: "bhah bhabh hbahb" },
    { id: "3", title: "no yeah", content: "bhah bhabh hbahb" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    case "CREATE_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
