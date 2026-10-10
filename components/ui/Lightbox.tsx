import { useEffect, useRef } from "react";
import { GalleryPhoto } from "@/config/site-config";

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const isOpen = currentIndex !== null && photos[currentIndex] !== undefined;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Capture currently focused element to restore upon close
    prevActiveElement.current = document.activeElement as HTMLElement;

    // Focus close button on mount
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        onNext();
        return;
      }
      if (e.key === "ArrowLeft") {
        onPrev();
        return;
      }

      // Keyboard Focus Trap (Tab / Shift+Tab)
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      // Restore focus to original trigger element
      if (prevActiveElement.current && typeof prevActiveElement.current.focus === "function") {
        prevActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || currentIndex === null) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      ref={dialogRef}
      className="lightbox open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-category"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeBtnRef}
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        ✕
      </button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={onPrev}
        aria-label="Previous image"
      >
        ←
      </button>

      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={onNext}
        aria-label="Next image"
      >
        →
      </button>

      <div className="flex flex-col items-center max-w-[90vw] max-h-[85vh] select-none">
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="lightbox__image max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
          decoding="async"
        />
        <div className="text-center mt-3">
          <p id="lightbox-title" className="lightbox__caption text-sm md:text-base text-[#F5F0EB] font-medium">
            {currentPhoto.title}
          </p>
          <p id="lightbox-category" className="text-xs text-[#A69374] uppercase tracking-wider mt-0.5">
            {currentPhoto.category}
          </p>
        </div>
      </div>

      <span className="lightbox__counter" aria-live="polite">
        {currentIndex + 1} / {photos.length}
      </span>
    </div>
  );
}
