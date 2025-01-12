export interface IconProps{
    size: "sm" | "md" | "lg";
    onClick?: () => void;
}

export const iconSizeVariant = {
    "sm": "size-4",
    "md": "size-5",
    "lg": "size-6"
}