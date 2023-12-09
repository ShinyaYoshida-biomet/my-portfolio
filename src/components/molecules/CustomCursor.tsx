import { useEffect, useState } from "react";

export const CustomCursor = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  const [dotSize, setDotSize] = useState("5px"); // Initialize dot size
  const changeCursorColor = (color: string) => {
    const circle = document.getElementById("circle");
    if (circle) {
      circle.style.borderColor = color; // カーソルの枠線の色を変更
    }
  };

  useEffect(() => {
    const circle = document.getElementById("circle");

    const moveCircle = (e: MouseEvent) => {
      let x = e.clientX;
      let y = e.clientY;

      if (circle) {
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
      }
    };
    const hoverElements = document.querySelectorAll(".mouse-enlarge");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => changeCursorColor("#F4E511")); // 黄色に変更
      element.addEventListener("mouseleave", () => changeCursorColor("#0f7f9b")); // 元の色に戻す
    });    

    const enlargeDot = () => setDotSize("10px"); // Enlarge the dot
    const shrinkDot = () => setDotSize("5px"); // Shrink the dot back down

    window.addEventListener("mousemove", moveCircle);

    const intervalId = setInterval(() => {
      // const hoverElements = document.getElementsByClassName("mouse-enlarge");
      const hoverElements = document.querySelectorAll(
        ".mouse-enlarge, .scroll-button"
      );
      if (hoverElements.length > 0) {
        Array.from(hoverElements).forEach((element) => {
          element.addEventListener("mouseenter", enlargeDot);
          element.addEventListener("mouseleave", shrinkDot);
        });
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      window.removeEventListener("mousemove", moveCircle);
      clearInterval(intervalId);
    };
  }, []);

  return !isSmallScreen ? (
    <div
      id="circle"
      style={{
        position: "fixed",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        border: "2px solid #0f7f9b",
        pointerEvents: "none",
        transition: "all 0.2s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
        transform: "translate(-50%, -50%)",
        background: "transparent",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: dotSize, // Use state to set the dot size
          width: dotSize, // Use state to set the dot size
          background: "#0f7f9b",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  ) : null;
};
