import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: 0,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        group
        fixed bottom-8 right-8 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        border border-white/10
        bg-black/90
        text-white
        backdrop-blur-md
        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:scale-110
        hover:bg-white
        hover:text-black
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
        active:scale-95
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }
      `}
    >
      <FaArrowUp className="text-lg transition-transform duration-500 group-hover:-translate-y-1" />
    </button>
  );
}