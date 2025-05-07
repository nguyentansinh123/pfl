"use client";

import { cn } from "@/app/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-primary hover:bg-secondary text-white shadow-md hover:shadow-lg",
    secondary: "bg-secondary/10 hover:bg-secondary/20 text-white border border-secondary/30",
    outline: "bg-transparent border border-foreground/20 hover:bg-foreground/10 text-foreground"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}