import type { ReactNode, SVGProps } from "react";

export type IconProps = {
  readonly className?: string;
};

type StrokeIconProps = IconProps & {
  readonly children: ReactNode;
};

function StrokeIcon({ className, children }: StrokeIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" />
    </StrokeIcon>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </StrokeIcon>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </StrokeIcon>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5V20h3.5l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2.1-2.1 2.7-2.5Z" />
    </StrokeIcon>
  );
}

export function TriangleIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 4 21.5 20H2.5L12 4Z" />
      <line x1="12" y1="10" x2="12" y2="14.5" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </StrokeIcon>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M4 12.5 9.5 18 20 6.5" />
    </StrokeIcon>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.6 6.1 20.6l1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
    </svg>
  );
}

export function BrakeIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16.9" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.1" cy="15.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="8.9" cy="15.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7.1" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
    </StrokeIcon>
  );
}

export function SpringIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M6 4l6-2 6 2-6 2-6-2M6 8l6-2 6 2-6 2-6-2M6 12l6-2 6 2-6 2-6-2M6 16l6-2 6 2-6 2-6-2M6 20l6-2 6 2" />
    </StrokeIcon>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" />
    </StrokeIcon>
  );
}

export function DropIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 3s6 7.2 6 11.2A6 6 0 0 1 6 14.2C6 10.2 12 3 12 3Z" />
    </StrokeIcon>
  );
}

export function TyreIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="3" x2="12" y2="7.5" />
      <line x1="12" y1="16.5" x2="12" y2="21" />
      <line x1="3" y1="12" x2="7.5" y2="12" />
      <line x1="16.5" y1="12" x2="21" y2="12" />
    </StrokeIcon>
  );
}

export function SnowIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="4" y1="7" x2="20" y2="17" />
      <line x1="20" y1="7" x2="4" y2="17" />
    </StrokeIcon>
  );
}

export function WaveIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M2 12h3l2-7 3 14 3-11 2 4h7" />
    </StrokeIcon>
  );
}

export function ScanIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M7.5 10.5h2l1-2.5 1.5 5 1-2.5h2" />
      <line x1="15.3" y1="15.3" x2="20.5" y2="20.5" />
    </StrokeIcon>
  );
}

export function VanIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M3 16V8a1 1 0 0 1 1-1h9l4 4h3a1 1 0 0 1 1 1v4" />
      <path d="M3 16h18M14 16V7" />
      <circle cx="7.5" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </StrokeIcon>
  );
}

export type MpSymbolProps = {
  height?: number;
  disabled?: boolean;
} & SVGProps<SVGSVGElement>;

export function MpSymbol({ height = 36, ...props }: MpSymbolProps) {
  return (
    <svg viewBox="0 273 950 404" preserveAspectRatio="xMidYMid meet" height={height} {...props}>
      <g className="fill-ink">
        <polygon points="-0,676.95 126.48,676.93 299.66,379.87 407.44,378.79 472.63,273.07 242.21,273.24" />
        <polygon points="482.34,676.95 608.81,676.93 721.81,483.12 800.21,347.29 809.23,273.29 724.54,273.24" />
        <path d="M892.92 273.67l-105.13 -0.48 -40.44 73.9 71.09 0.33c33.61,0.15 44.55,14.1 20.29,58.43l-9.35 17.09c-24.77,45.26 -50.63,58.57 -83.8,58.42l-4.2 -0.02 -37.6 69.28 37.06 0.17c53,0.24 118.33,-40.2 153.96,-105.33l33.36 -60.96c35.64,-65.12 30.25,-110.52 -35.24,-110.83zm-170.27 207.58l-44.29 -0.2 -37.91 69.28 41.96 0.19 40.23 -69.27z" />
      </g>
      <g className="fill-brand-deep">
        <polygon points="239.92,676.95 366.4,676.93 539.58,379.87 647.36,378.79 712.55,273.07 482.13,273.24" />
      </g>
    </svg>
  );
}
