const TextAreaInput = ({ props }) => {
  return (
      <textarea
        id={props.name}
        name={props.name}
        required
        defaultValue={props.value ? props.value : ''}
      >
      </textarea>
  );
};

export default TextAreaInput;