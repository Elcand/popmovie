const constainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const constainerStarStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

const starStyle = {
  width: "48px",
  height: "48px",
  cursor: "pointer",
  display: "block",
};

export default function StarRating({ max: max = 5 }) {
  return (
    <div style={constainerStyle}>
      <div style={constainerStarStyle}>
        {Array.from({ length: max }).map((_, index) => (
          <span>{`Star${index + 1}`}</span>
        ))}
      </div>
      <p style={textStyle}>{max} stars</p>
    </div>
  );
}
