import { useId } from 'react';
import type { ProductVisualSpec, VisualKind } from '../../types/product';

interface Props {
  spec: ProductVisualSpec;
  /** 0 = full view, 1 = close-up, 2 = alternate tone */
  variant?: 0 | 1 | 2;
  className?: string;
  /** Transparent background, used when composing several products together */
  bare?: boolean;
  fit?: 'slice' | 'meet';
}

const INK = '#2A0C2F';

const mix = (hex: string, to: string, t: number): string => {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const a = p(hex);
  const b = p(to);
  const m = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `#${m.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
};

function Label({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={1.5} fill="#FBF8F3" opacity={0.95} />
      <text
        x={x + w / 2}
        y={y + h * 0.5}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize={Math.min(w, h) * 0.34}
        fill={INK}
        letterSpacing="1.5"
      >
        JS
      </text>
      <rect x={x + w * 0.28} y={y + h * 0.68} width={w * 0.44} height={1} fill="#B39155" />
    </g>
  );
}

function Shape({ kind, b, g }: { kind: VisualKind; b: string; g: string }) {
  const streak = (x: number, y: number, h: number, w = 5) => (
    <rect x={x} y={y} width={w} height={h} rx={w / 2} fill="#fff" opacity={0.3} />
  );
  switch (kind) {
    case 'dropper':
      return (
        <g>
          <ellipse cx={100} cy={74} rx={11} ry={22} fill={INK} />
          <rect x={87} y={92} width={26} height={18} rx={3} fill={g} />
          <rect x={68} y={108} width={64} height={102} rx={9} fill={b} />
          {streak(74, 116, 88)}
          <Label x={78} y={142} w={44} h={40} />
        </g>
      );
    case 'jar':
      return (
        <g>
          <rect x={50} y={116} width={100} height={26} rx={4} fill={g} />
          <rect x={54} y={142} width={92} height={62} rx={9} fill={b} />
          {streak(60, 150, 46)}
          <Label x={78} y={156} w={44} h={34} />
        </g>
      );
    case 'lipstick':
      return (
        <g>
          <path d="M87 134 V98 L100 80 L113 94 V134 Z" fill={b} />
          <rect x={82} y={134} width={36} height={14} fill={g} />
          <rect x={80} y={148} width={40} height={62} rx={3} fill={INK} />
          <rect x={85} y={154} width={4} height={50} rx={2} fill="#fff" opacity={0.2} />
        </g>
      );
    case 'pump':
      return (
        <g>
          <rect x={86} y={68} width={34} height={11} rx={3} fill={INK} />
          <rect x={96} y={78} width={8} height={22} fill={INK} />
          <rect x={108} y={70} width={22} height={7} rx={2} fill={INK} />
          <rect x={66} y={98} width={68} height={112} rx={13} fill={b} />
          {streak(72, 106, 96)}
          <Label x={78} y={136} w={44} h={44} />
        </g>
      );
    case 'mist':
      return (
        <g>
          <rect x={84} y={64} width={32} height={36} rx={4} fill={g} />
          <rect x={92} y={98} width={16} height={14} fill={INK} />
          <rect x={70} y={112} width={60} height={98} rx={17} fill={b} />
          {streak(77, 122, 80)}
          <Label x={80} y={144} w={40} h={38} />
        </g>
      );
    case 'tube':
      return (
        <g>
          <rect x={87} y={64} width={26} height={26} rx={4} fill={g} />
          <path d="M70 90 H130 L125 212 H75 Z" fill={b} />
          <path d="M78 98 H84 L82 204 H79 Z" fill="#fff" opacity={0.25} />
          <Label x={80} y={128} w={40} h={44} />
        </g>
      );
    case 'bottle':
      return (
        <g>
          <rect x={86} y={62} width={28} height={24} rx={3} fill={g} />
          <rect x={92} y={84} width={16} height={26} fill={INK} />
          <rect x={72} y={108} width={56} height={102} rx={11} fill={b} />
          {streak(78, 116, 88)}
          <Label x={80} y={140} w={40} h={44} />
        </g>
      );
    case 'tub':
      return (
        <g>
          <rect x={42} y={130} width={116} height={22} rx={4} fill={INK} />
          <rect x={46} y={152} width={108} height={54} rx={9} fill={b} />
          {streak(52, 158, 42)}
          <Label x={76} y={162} w={48} h={30} />
        </g>
      );
  }
}

export default function ProductVisual({ spec, variant = 0, className = '', bare = false, fit = 'slice' }: Props) {
  const uid = useId().replace(/:/g, '');
  const bg = variant === 2 ? '#F3EDE4' : spec.bg;
  const viewBox = variant === 1 ? '38 52 124 168' : '0 0 200 240';
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio={fit === 'meet' ? 'xMidYMid meet' : 'xMidYMid slice'}
      className={`block h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${uid}b`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={mix(spec.color, '#ffffff', 0.28)} />
          <stop offset="0.4" stopColor={spec.color} />
          <stop offset="1" stopColor={mix(spec.color, '#000000', 0.38)} />
        </linearGradient>
        <linearGradient id={`${uid}g`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#EBDDB4" />
          <stop offset="0.5" stopColor="#B39155" />
          <stop offset="1" stopColor="#7E6130" />
        </linearGradient>
        <radialGradient id={`${uid}bg`} cx="0.5" cy="0.38" r="0.85">
          <stop offset="0" stopColor={mix(bg, '#ffffff', 0.6)} />
          <stop offset="1" stopColor={bg} />
        </radialGradient>
        <radialGradient id={`${uid}s`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={INK} stopOpacity="0.38" />
          <stop offset="1" stopColor={INK} stopOpacity="0" />
        </radialGradient>
      </defs>
      {!bare && (
        <>
          <rect x={-400} y={-400} width={1000} height={1100} fill={`url(#${uid}bg)`} />
          <rect x={44} y={46} width={112} height={190} rx={56} fill="#fff" opacity={0.28} />
        </>
      )}
      <ellipse cx={100} cy={212} rx={62} ry={9} fill={`url(#${uid}s)`} />
      <Shape kind={spec.kind} b={`url(#${uid}b)`} g={`url(#${uid}g)`} />
    </svg>
  );
}
