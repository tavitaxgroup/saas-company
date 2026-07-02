"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/stock/arise-lab-hero.jpg",
    alt: "Modern biotechnology laboratory with organized instruments"
  },
  {
    src: "/assets/stock/pexels-biotech-scientists.jpg",
    alt: "Scientists working in a modern biotechnology laboratory"
  },
  {
    src: "/assets/stock/pexels-lab-instruments-hero.jpg",
    alt: "Laboratory equipment and instruments for molecular biology research"
  },
  {
    src: "/assets/stock/pexels-lab-vials.jpg",
    alt: "Laboratory vials and sample preparation workflow"
  }
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className="hero-carousel" aria-label="Biotechnology laboratory hero images">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`hero-bg hero-slide ${index === activeIndex ? "is-active" : ""}`}
          priority={index === 0}
          sizes="100vw"
        />
      ))}
      <button
        className="hero-arrow hero-arrow-prev"
        type="button"
        aria-label="Show previous hero image"
        onClick={goToPrevious}
      />
      <button
        className="hero-arrow hero-arrow-next"
        type="button"
        aria-label="Show next hero image"
        onClick={goToNext}
      />
    </div>
  );
}
