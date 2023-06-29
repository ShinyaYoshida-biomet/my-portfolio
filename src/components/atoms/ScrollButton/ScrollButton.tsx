import './ScrollButton.css';

export const ScrollButton = () => {
  const scrollDown = () => {
    // Scroll down by 100vh
    window.scrollBy(0, window.innerHeight);
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