const Input = ({ props, value} ) => {
  console.log(value)
  return (
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        required
        defaultValue={value ? value : ''}
      />
  );
};

export default Input;