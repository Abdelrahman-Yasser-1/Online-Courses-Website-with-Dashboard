import React, { useState } from "react";
import CoursesContext from "./courses-context";

const CoursesProvider = (props) => {
  const [isChanged, setIsChanged] = useState(false);

  const change = () => {
    setIsChanged((prevState) => !prevState);
  };

  return (
    <CoursesContext.Provider value={{ isChanged: isChanged, change: change }}>
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
