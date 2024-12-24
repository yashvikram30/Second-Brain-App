import { ReactNode } from "react";

export interface Buttonprops{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick:()=>void ;
}

export default function Button() {
  return (
    <div>
      
    </div>
  )
}
