exports.filterProps = (obj = {}, props = [], flag = false) => {
  const objProps = props.reduce(
    (previous, current) => ({ ...previous, [current]: "" }),
    {}
  );
  if (flag) {
    return Object.keys(obj).reduce((previous, current) => {
      return current in objProps
        ? { ...previous, [current]: obj[current] }
        : { ...previous };
    }, {});
  } else {
    return Object.keys(obj).reduce((previous, current) => {
      return !(current in objProps)
        ? { ...previous, [current]: obj[current] }
        : { ...previous };
    }, {});
  }
};
