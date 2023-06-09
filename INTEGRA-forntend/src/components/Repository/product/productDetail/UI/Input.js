const Input = ({ props }) => {
  return (
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        required
        defaultValue={props.value ? props.value : ''}
      />
  );
};

export default Input;