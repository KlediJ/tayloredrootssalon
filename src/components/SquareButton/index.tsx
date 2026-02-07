"use client";

import type { CSSProperties } from "react";

const squareStyle: CSSProperties = {
  backgroundColor: "#5f725c",
  border: "none",
  color: "white",
  height: "40px",
  textTransform: "uppercase",
  fontFamily: "'Square Market', sans-serif",
  letterSpacing: "1px",
  lineHeight: "38px",
  padding: "0 28px",
  borderRadius: "32px",
  fontWeight: 500,
  fontSize: "14px",
  cursor: "pointer",
  display: "inline-block",
};

type SquareButtonProps = {
  className?: string;
  label?: string;
};

export default function SquareButton({
  className,
  label = "Book now",
}: SquareButtonProps) {
  return (
    <a
      target="_top"
      style={squareStyle}
      className={className}
      href="https://app.squareup.com/appointments/book/al3bc6i7mdt1vr/LVSHR2FKD1WZF/start"
      rel="nofollow"
    >
      {label}
    </a>
  );
}
