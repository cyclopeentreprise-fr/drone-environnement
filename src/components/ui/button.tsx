"use client";
import * as React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };

function ButtonBase({ className, asChild, ...props }: Props) {
  const Cmp: any = asChild ? "span" : "button";
  return (
    <Cmp
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium",
        "bg-black text-white hover:bg-black/90",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

// ✅ Exports compatibles avec les deux syntaxes d'import
export { ButtonBase as Button };
export default ButtonBase;
