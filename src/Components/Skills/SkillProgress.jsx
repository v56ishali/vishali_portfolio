import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const purple = "#a259ff";
gsap.registerPlugin(ScrollTrigger);

const SkillProgress = ({ skill }) => {
  const barRef = useRef(null);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const bubble = bubbleRef.current;

    if (bar && bubble) {
      ScrollTrigger.create({
        trigger: bar.parentElement,
        start: "top 85%",
        onEnter: () => {
          gsap.to(bar, {
            width: `${skill.percent}%`,
            duration: 1.2,
            ease: "power3.out",
          });

          gsap.to(bubble, {
            left: `calc(${skill.percent}% - 15px)`,
            duration: 1.2,
            ease: "power3.out",
            onUpdate: function () {
              const progress = gsap.getProperty(bar, "width");
              let containerW = bar.parentElement.offsetWidth || 1;
              let percent = (parseFloat(bar.style.width || 0) / containerW) * skill.percent;
              percent = isNaN(percent) ? 0 : Math.round(percent);
              bubble.textContent = `${percent}%`;
            },
            onComplete: function () {
              bubble.textContent = `${skill.percent}%`;
            },
          });
        },
        once: true,
      });
    }
  }, [skill.percent]);

  return (
    <div className="w-full mb-6">
      <p className="font-medium text-sm text-purple-200 mb-2">{skill.name}</p>
      <div className="relative w-full h-3 bg-gray-900 rounded-full border border-gray-700">
        <div
          ref={barRef}
          className="h-full rounded-full absolute left-0 top-0"
          style={{ width: 0, background: purple, transition: "background 0.3s" }}
        />
        <div
          ref={bubbleRef}
          className="absolute top-1/2 left-0 flex items-center justify-center rounded-full font-bold text-xs select-none"
          style={{
            width: "30px", height: "30px", background: "#15161f", color: "white",
            border: `2px solid white`, boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            transform: "translateY(-50%) scale(0.85)", left: 0, zIndex: 2, pointerEvents: "none"
          }}
        >
          0%
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
