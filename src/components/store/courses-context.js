import React from "react";

const CoursesContext = React.createContext({
  isChanged: false,
  change: () => {},
});

export default CoursesContext;
