import type { ReactNode } from "react";

export type CtaVariant = "primary" | "outline" | "dark";
export type CtaSize = "default" | "sm";

const base =
  "inline-flex items-center gap-2.5 font-display font-bold uppercase tracking-wide rounded-[3px] transition-colors duration-150 focus-halo";

const variantClasses: Record<CtaVariant, string> = {
  primary: "bg-brand text-brand-ink hover:bg-brand-deep",
  outline: "bg-transparent border-2 border-current hover:bg-brand/10",
  dark: "bg-dark text-dark-ink hover:bg-black",
};

const sizeClasses: Record<CtaSize, string> = {
  default: "text-[0.9375rem] px-7 py-4",
  sm: "text-[0.8125rem] px-4.5 py-2.5",
};

function ctaClasses(variant: CtaVariant, size: CtaSize, className?: string): string {
  return [base, variantClasses[variant], sizeClasses[size], className].filter(Boolean).join(" ");
}

type CtaBaseProps = {
  readonly variant?: CtaVariant;
  readonly size?: CtaSize;
  readonly className?: string;
  readonly block?: boolean;
  readonly children: ReactNode;
};

export type CtaLinkProps = CtaBaseProps & {
  readonly href: string;
  readonly external?: boolean;
};

export function CtaLink({
  href,
  variant = "primary",
  size = "default",
  className,
  block,
  external,
  children,
}: CtaLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={ctaClasses(
        variant,
        size,
        `${block ? "justify-center w-full" : ""} ${className ?? ""}`,
      )}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export type CtaButtonProps = CtaBaseProps & {
  readonly type: "submit" | "button";
  readonly disabled?: boolean;
  // Visual-disabled without removing the button from the tab order — native
  // `disabled` on a focused element drops focus to <body> when applied,
  // which loses keyboard/AT context mid-submit. Callers doing async work
  // (e.g. a submit handler) should guard re-entrancy themselves and use this
  // instead of `disabled`.
  readonly ariaDisabled?: boolean;
};

export function CtaButton({
  type,
  variant = "primary",
  size = "default",
  className,
  block,
  disabled,
  ariaDisabled,
  children,
}: CtaButtonProps) {
  const visuallyDisabled = disabled || ariaDisabled;
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={ariaDisabled || undefined}
      aria-busy={ariaDisabled || undefined}
      className={ctaClasses(
        variant,
        size,
        `${block ? "justify-center w-full" : ""} ${className ?? ""} ${
          visuallyDisabled ? "opacity-60 cursor-not-allowed" : ""
        }`,
      )}
    >
      {children}
    </button>
  );
}
