import "./Closed.css";

const Closed = () => {
  return (
    <div className="closed">
      <img
        src="./closed.jpg"
        className="closed-image"
        alt="closed illustration"
      />
      <p className="closed-text">
        <u>Closed</u>: this websapp is not accessible outside working hours
      </p>
    </div>
  );
};

export default Closed;
