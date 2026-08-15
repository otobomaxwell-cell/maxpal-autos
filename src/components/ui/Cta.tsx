import type { ReactNode } from "react";

export type CtaVariant = "primary" | "outline" | "dark";
export type CtaSize = "default" | "sm";

const base =
  "inline-flex items-center gap-2.5 font-display font-bold uppercase tracking-wide rounded-[3px] transition-colors duration-150 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber focus-visible:outline-offset-2";

const variantClasses: Record<CtaVariant, string> = {
  primary: "bg-amber text-amber-ink hover:bg-amber-deep",
  outline: "bg-transparent border-2 border-current hover:bg-amber/10",
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
};

export function CtaLink({ href, variant = "primary", size = "default", className, block, children }: CtaLinkProps) {
  return (
    <a href={href} className={ctaClasses(variant, size, `${block ? "justify-center w-full" : ""} ${className ?? ""}`)}>
      {children}
    </a>
  );
}

export type CtaButtonProps = CtaBaseProps & {
  readonly type: "submit" | "button";
  readonly disabled?: boolean;
};

export function CtaButton({
  type,
  variant = "primary",
  size = "default",
  className,
  block,
  disabled,
  children,
}: CtaButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={ctaClasses(variant, size, `${block ? "justify-center w-full" : ""} ${className ?? ""} disabled:opacity-60 disabled:cursor-not-allowed`)}
    >
      {children}
    </button>
  );
}
