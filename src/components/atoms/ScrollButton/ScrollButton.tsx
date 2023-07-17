import './ScrollButton.css';

export const ScrollButton = ({ scrollHeightRatio }: { scrollHeightRatio: number}) => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * scrollHeightRatio,
      behavior: 'smooth', // This makes the scrolling animate smoothly
    });
  }

  return (
    <div className="scroll-btn"
      onClick={scrollDown}
      style={{ fontFamily: "CustomFont" }}>
      <span className="mouse">
        <span></span>
      </span>
      Scroll Down
    </div>
  );
  
}
