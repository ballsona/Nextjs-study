import React from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
// export const Button = ({
//   primary = false,
//   size = "medium",
//   backgroundColor,
//   label,
//   ...props
// }: ButtonProps) => {
//   const mode = primary
//     ? styles.storybookButtonPrimary
//     : styles.storybookButtonSec;
//   return (
//     <button
//       type="button"
//       className={[
//         styles.storybookButton,
//         styles.storybookButtonPrimary,
//         mode,
//       ].join(" ")}
//       style={{ backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

const storybookButton = css`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;
const storybookButtonPrimary = css`
  color: white;
  background-color: #1ea7fd;
`;
const storybookButtonSecondary = css`
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

const storybookButtonsmall = css`
  font-size: 12px;
  padding: 10px 16px;
`;
const storybookButtonmedium = css`
  font-size: 14px;
  padding: 11px 20px;
`;
const storybookButtonlarge = css`
  font-size: 16px;
  padding: 12px 24px;
`;

const selectButtonSize = (size: string) => {
  switch (size) {
    case "small":
      return storybookButtonsmall;
    case "medium":
      return storybookButtonmedium;
    case "large":
      return storybookButtonlarge;
  }
};

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? storybookButtonPrimary : storybookButtonSecondary;
  return (
    <button type="button" css={[mode, storybookButton, selectButtonSize(size)]}>
      {label}
    </button>
  );
};
