
const plural = (string = '', count=0) => {
  return (count > 1) ? string + 's' : string;
};

export default plural;
