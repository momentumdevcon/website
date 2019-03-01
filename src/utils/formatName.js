const formatName = (name) => {
  const nameSplit = name.split(' ');
  return nameSplit.map((name) => {
    const firstLetter = name[0].toUpperCase();
    const rest = name.substring(1).toLowerCase();
    return firstLetter + rest;
  }).join(' ');
};

export default formatName;