import * as React from "react";
import clsx from "clsx";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "secondary" | "default";
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, ...props },
  ref
) {
  return (
    <span
      ref={ref}
      className={clsx(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        "bg-white/10 text-white",
        className
      )}
      {...props}
    />
  );
});

export { Badge };      // export nommé
export default Badge;  // export par défaut
