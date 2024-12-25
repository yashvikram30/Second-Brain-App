import { ReactNode } from "react";

export interface Buttonprops{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?:()=>void ;
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600"
}

const sizeStyles = {
  "sm" : "px-2 py-1 text-sm rounded-sm",
  "md" : "px-4 py-2 text-md rounded-md",
  "lg" : "px-8 py-4 text-xl rounded-xl",
}

const defaultstyles = "rounded-md flex items-center w-auto";

export default function Button(props:Buttonprops){

  return (
    <div>
      <button className={`${variantStyles[props.variant]} ${defaultstyles} ${sizeStyles[props.size]}`} >
        {props.startIcon }
        <div className="px-2">
          {props.text} 
        </div>
        {props.endIcon}
        </button>
    </div>
  )
}
