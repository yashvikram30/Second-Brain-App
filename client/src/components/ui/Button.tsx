import { ReactNode } from "react";

export interface Buttonprops {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  classes?: string;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-500",
};

const sizeStyles = {
  sm: "px-2 py-1 text-sm rounded-md",
  md: "px-4 py-2 text-md rounded-md",
  lg: "px-8 py-4 text-xl rounded-lg",
};

const defaultstyles = "rounded-md flex items-center font-light";

export default function Button(props: Buttonprops) {
  return (
    <button
      onClick={props.onClick}
      className={
        props.classes
          ? props.classes
          : `
          ${variantStyles[props.variant]} 
          ${defaultstyles} 
          ${sizeStyles[props.size]} 
          ${props.fullWidth ? "w-full" : ""} 
          flex justify-center items-center 
          ${props.loading ? "opacity-50" : ""} 
          `
      }
      disabled={props.loading}
    >
      {props.startIcon}
      <div className="px-2">{props.text}</div>
      {props.endIcon}
    </button>
  );
}
