import * as React from "react";
import clsx from "clsx";

function BadgeBase({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "secondary" | "default" }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        "bg-white/10 text-white",
        className
      )}
      {...props}
    />
  );
}

// Exports (named + default) pour éviter tout souci d'import
export { BadgeBase as Badge };
export default BadgeBase;
