import React from "react";

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItemd(key)) || initialState
  );
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useSemiPersistentState;
