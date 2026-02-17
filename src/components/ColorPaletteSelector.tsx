"use client";

import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

const palettes = [
  { name: "blue", color: "hsl(210, 100%, 50%)", label: "Modrá" },
  { name: "green", color: "hsl(142, 71%, 45%)", label: "Zelená" },
  { name: "purple", color: "hsl(262, 83%, 58%)", label: "Fialová" },
  { name: "orange", color: "hsl(25, 95%, 53%)", label: "Oranžová" },
  { name: "pink", color: "hsl(330, 81%, 60%)", label: "Růžová" },
  { name: "cyan", color: "hsl(187, 85%, 43%)", label: "Tyrkysová" },
];

export const ColorPaletteSelector = () => {
  const { textColor, changeTextColor, isLoaded } = useTheme();

  if (!isLoaded) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {palettes.map((palette) => (
        <button
          key={palette.name}
          onClick={() => changeTextColor(palette.name)}
          className={`w-5 h-5 rounded-full transition-transform hover:scale-110 ${
            textColor === palette.name ? "ring-2 ring-offset-2 ring-offset-background ring-foreground" : ""
          }`}
          style={{ backgroundColor: palette.color }}
          aria-label={palette.label}
          title={palette.label}
        />
      ))}
    </div>
  );
};
