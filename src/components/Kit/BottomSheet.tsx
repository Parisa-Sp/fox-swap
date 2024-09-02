import { type ElementRef, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function BottomSheet(props: Props) {
  const { children, isOpen, onClose } = props;

  const containerRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.bottom = "0";
      }, 100);
    }
  }, [isOpen]);

  const child = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={() => {
        if (containerRef.current) containerRef.current.style.bottom = "-100%";
        setTimeout(onClose, 300);
      }}
    >
      <div
        ref={containerRef}
        style={{
          overflowY: "auto",
          maxHeight: "95vh",
          width: "100vw",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          background: "white",
          position: "fixed",
          bottom: "-100%",
          left: 0,
          padding: "12px 24px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return isOpen ? createPortal(child, document.body) : null;
}
