import "./ScrollButton.css";

export const ScrollButton = ({
  scrollHeightRatio,
  className,
}: {
  scrollHeightRatio: number;
  className?: string;
}) => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * scrollHeightRatio,
      behavior: "smooth", // This makes the scrolling animate smoothly
    });
  };

  return (
    <div style={{display: 'flex', 'justifyContent': "center", width: '20%'}}>
      <div
        className={"scroll-button"}
        onClick={scrollDown}
        style={{ fontFamily: "CustomFont" }}
      >
        <span className="mouse">
          <span></span>
        </span>
        Scroll Down
      </div>
    </div>
  );
};
