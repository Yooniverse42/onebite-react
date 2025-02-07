import Input from "../components/Input";

function Editor({ ref, onCreate }) {
  const onAddButton = () => {
    const inputCurrent = ref.current;
    let inputValue = inputCurrent.value.trim();

    if (inputValue === "") {
      inputCurrent.focus();
      return;
    }

    onCreate(inputValue);

    inputCurrent.focus();
    ref.current.value = "";
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      onAddButton();
    }
  };

  return (
    <div
      style={{
        margin: "30px 0 50px",
        display: "flex",
        gap: "10px",
        height: "50px",
      }}
    >
      <Input
        ref={ref}
        type={"text"}
        placeholder={"새로운 Todo..."}
        style={{ flex: "1", padding: "10px" }}
        onKeyDown={onKeyEnter}
      />

      <button style={{ width: "100px" }} onClick={onAddButton}>
        추가
      </button>
    </div>
  );
}

export default Editor;
