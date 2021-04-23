const dateConverter = str => {
  let parts = str.split("-");
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
};

export default dateConverter;
