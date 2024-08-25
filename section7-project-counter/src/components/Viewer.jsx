import "./Viewer.css";

const Viewer = ({ count }) => {
  return (
    <section className="section__counter">
      <p>현재 카운트:</p>
      <div className="count">{count}</div>
    </section>
  );
};

export default Viewer;
