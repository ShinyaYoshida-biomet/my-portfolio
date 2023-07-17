import { useEffect } from "react";

export const CustomCursor = () => {
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

    window.addEventListener("mousemove", moveCircle);

    return () => {
      window.removeEventListener("mousemove", moveCircle);
    };
  }, []);
  
  return (
    <div
      id="circle"
      style={{
        position: "fixed", // Notice this change from "absolute" to "fixed"
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
          height: "5px",
          width: "5px",
          background: "#0f7f9b",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};
