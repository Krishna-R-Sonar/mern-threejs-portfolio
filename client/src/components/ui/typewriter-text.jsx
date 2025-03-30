import { useState, useEffect } from "react";

export const TypewriterText = ({ text, highlightWords, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = text.split(" ");
  const charArray = [];

  // Build an array of characters with highlight information
  words.forEach((word, wordIndex) => {
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
    const isHighlighted = highlightWords.includes(cleanWord);
    word.split("").forEach((char) => {
      charArray.push({ char, isHighlighted });
    });
    if (wordIndex < words.length - 1) {
      charArray.push({ char: " ", isHighlighted: false });
    }
  });

  // Typewriter effect logic
  useEffect(() => {
    if (currentIndex < charArray.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 50); // Typing speed: 50ms per character
      return () => clearTimeout(timer);
    }
  }, [currentIndex, charArray.length]);

  // Calculate the full text to reserve space
  const fullText = charArray.map((item) => item.char).join("");

  return (
    <div className="relative">
      {/* Invisible span to reserve space for the full text */}
      <span className="invisible" aria-hidden="true">
        {fullText}
      </span>
      {/* Typewriter text positioned over the invisible span */}
      <span
        className={`${className} absolute top-0 left-0 inline-block whitespace-normal`}
      >
        {charArray.slice(0, currentIndex).map((item, index) => (
          <span
            key={index}
            className={item.isHighlighted ? "highlight" : ""}
          >
            {item.char}
          </span>
        ))}
        {currentIndex < charArray.length && (
          <span className="cursor">|</span>
        )}
      </span>
    </div>
  );
};
