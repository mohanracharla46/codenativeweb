import React from "react";
import iconSrc from "../assets/codenative-icon.png";
import wordmarkSrc from "../assets/codenative-wordmark.png";
import horizontalLogoSrc from "../assets/codenative-logo-horizontal.png";
import fullLogoSrc from "../assets/codenative-logo.webp";

export default function CodeNativeLogo({
  variant = "horizontal",
  className = "",
  iconClassName = "h-7 sm:h-8 w-auto",
  textClassName = "h-4.5 sm:h-5 w-auto",
  gapClassName = "gap-1 sm:gap-1.5"
}) {
  if (variant === "icon") {
    return (
      <img
        src={iconSrc}
        alt="CodeNative"
        className={`${iconClassName} object-contain transition-transform duration-200 group-hover:scale-105`}
      />
    );
  }

  if (variant === "full") {
    return (
      <img
        src={fullLogoSrc}
        alt="CodeNative"
        className={`w-auto h-16 object-contain ${className}`}
      />
    );
  }

  // Pre-composed single-asset horizontal lockup (tight, pixel-locked)
  if (variant === "single") {
    return (
      <img
        src={horizontalLogoSrc}
        alt="CodeNative"
        className={`h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${className}`}
      />
    );
  }

  // Default: Horizontal lockup (Clean trimmed Icon + Wordmark with tight distance)
  return (
    <div className={`flex items-center ${gapClassName} ${className}`}>
      <img
        src={iconSrc}
        alt="CodeNative Icon"
        className={`${iconClassName} object-contain transition-transform duration-200 group-hover:scale-105 shrink-0`}
      />
      <img
        src={wordmarkSrc}
        alt="CodeNative"
        className={`${textClassName} object-contain shrink-0`}
      />
    </div>
  );
}
