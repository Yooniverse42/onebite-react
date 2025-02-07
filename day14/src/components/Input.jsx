function Input({
  value,
  type,
  onChange,
  placeholder,
  style,
  ref,
  onKeyDown,
  isDone,
  onUpdate,
}) {
  switch (type) {
    case "text":
      return (
        <input
          value={value}
          ref={ref}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          onKeyDown={onKeyDown}
        />
      );

    case "checkbox":
      return <input type="checkbox" onChange={onUpdate} checked={isDone} />;
  }
}

export default Input;
