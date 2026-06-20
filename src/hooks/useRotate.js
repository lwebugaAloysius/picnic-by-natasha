import { useRef, useEffect } from "react";

export function useRotate() {
  const rotateContainerRef = useRef(null);

  useEffect(() => {
    const card = rotateContainerRef.current;

    function rotateElement(event, rotateElement) {
      const rotatingRect = rotateElement.getBoundingClientRect();

      const maxRotateAngle = 35;

      const mouseX = event.clientX - rotatingRect.left;
      const mouseY = event.clientY - rotatingRect.top;

      const middleX = rotatingRect.width / 2;
      const middleY = rotatingRect.height / 2;

      const offsetX = ((mouseX - middleX) / middleX) * maxRotateAngle;
      const offsetY = ((mouseY - middleY) / middleY) * maxRotateAngle;

      rotateElement.style.setProperty("--rotateX", `${offsetY * -1}deg`);
      rotateElement.style.setProperty("--rotateY", `${offsetX}deg`);
    }

    function mouseLeavesCard() {
      card.style.setProperty("--rotateX", "0deg");
      card.style.setProperty("--rotateY", "0deg");
    }

    card.addEventListener("mousemove", (e) => {
      rotateElement(e, card);
    });

    card.addEventListener("mouseleave", () => {
      mouseLeavesCard();
    });
  }, []);

  return rotateContainerRef;
}
