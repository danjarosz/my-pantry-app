export type ClassSelector = (classes?: (string | boolean)[]) => string;

const classSelector: ClassSelector = (classes = []) => {
  const filteredClasses = classes.filter(
    (className) => typeof className === "string" && className.length > 0
  );

  if (filteredClasses.length === 0) {
    return "";
  }

  return filteredClasses.join(" ");
};

export default classSelector;
