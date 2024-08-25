import Button from "./Button";
import "./Controller.css";

const Controller = ({ onClickButton }) => {
  return (
    <section className="section__controller">
      <Button
        text={`-1`}
        onClickButton={() => {
          onClickButton(-1);
        }}
      />
      <Button
        text={`-10`}
        onClickButton={() => {
          onClickButton(-10);
        }}
      />
      <Button
        text={`-100`}
        onClickButton={() => {
          onClickButton(-100);
        }}
      />
      <Button
        text={`+100`}
        onClickButton={() => {
          onClickButton(+100);
        }}
      />
      <Button
        text={`+10`}
        onClickButton={() => {
          onClickButton(+10);
        }}
      />
      <Button
        text={`+1`}
        onClickButton={() => {
          onClickButton(+1);
        }}
      />
    </section>
  );
};

export default Controller;
