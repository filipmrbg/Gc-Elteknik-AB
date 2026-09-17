import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Elinstallationer & Service - Blixt, krets & eluttag
 */
export function ElectricalInstallationIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Eluttag / ram */}
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="8"
        stroke={color}
        strokeWidth="2.4"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Uttagscirkel */}
      <circle cx="24" cy="24" r="9" stroke={color} strokeWidth="2" />
      {/* Kontaktstift */}
      <circle cx="20" cy="24" r="1.8" fill={color} />
      <circle cx="28" cy="24" r="1.8" fill={color} />
      {/* Jordbleck uppe & nere */}
      <line x1="24" y1="15" x2="24" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="30" x2="24" y2="33" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Dynamisk blixtimpuls */}
      <path
        d="M36 10L32 17H37L31 26"
        stroke="#FFB703"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 2. Belysningsdesign & LED - Glödlampa och ljusstrålar
 */
export function LightingDesignIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Glödlampskropp */}
      <path
        d="M16 19C16 14.5817 19.5817 11 24 11C28.4183 11 32 14.5817 32 19C32 22.3 30.2 25.1 27.5 26.6V30H20.5V26.6C17.8 25.1 16 22.3 16 19Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Sockelgänger */}
      <line x1="21" y1="33" x2="27" y2="33" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="36" x2="26" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Ljusstrålar med gult sken */}
      <line x1="24" y1="5" x2="24" y2="8" stroke="#FFB703" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="12" y1="9" x2="14.5" y2="11.5" stroke="#FFB703" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="36" y1="9" x2="33.5" y2="11.5" stroke="#FFB703" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="7" y1="21" x2="10" y2="21" stroke="#FFB703" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="41" y1="21" x2="38" y2="21" stroke="#FFB703" strokeWidth="2.2" strokeLinecap="round" />
      {/* Glödtråd */}
      <path
        d="M21 21L23 17L25 21L27 17"
        stroke="#FFB703"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 3. Elcentraler & Säkringsskåp - Normcentral med brytare
 */
export function ElectricalPanelIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Skåpskapsling */}
      <rect
        x="9"
        y="6"
        width="30"
        height="36"
        rx="4"
        stroke={color}
        strokeWidth="2.4"
        fill={color}
        fillOpacity="0.08"
      />
      {/* DIN-skena övre */}
      <line x1="13" y1="18" x2="35" y2="18" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
      {/* Automatsäkringar övre rad */}
      <rect x="13" y="12" width="4" height="12" rx="1.5" fill={color} />
      <rect x="19" y="12" width="4" height="12" rx="1.5" fill={color} />
      <rect x="25" y="12" width="4" height="12" rx="1.5" fill={color} />
      <rect x="31" y="12" width="4" height="12" rx="1.5" fill="#FFB703" />

      {/* DIN-skena undre */}
      <line x1="13" y1="32" x2="35" y2="32" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
      {/* Jordfelsbrytare undre rad */}
      <rect x="13" y="26" width="8" height="12" rx="1.5" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.3" />
      <circle cx="17" cy="30" r="1.5" fill="#FFB703" />
      <rect x="23" y="26" width="4" height="12" rx="1.5" fill={color} />
      <rect x="29" y="26" width="4" height="12" rx="1.5" fill={color} />
    </svg>
  );
}

/**
 * 4. Laddboxar & Grön Teknik - Elbilsladdare & kabel
 */
export function EVChargerIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Laddbox station */}
      <rect
        x="10"
        y="10"
        width="20"
        height="28"
        rx="5"
        stroke={color}
        strokeWidth="2.4"
        fill={color}
        fillOpacity="0.08"
      />
      {/* LED-indikator cirkel */}
      <circle cx="20" cy="18" r="4" stroke="#FFB703" strokeWidth="2" />
      {/* Blixt / laddstatus */}
      <path
        d="M20 15.5L18.5 18H21.5L20 20.5"
        stroke="#FFB703"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Displaylinje */}
      <line x1="15" y1="26" x2="25" y2="26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Laddkabel och kontakt */}
      <path
        d="M30 28C34 28 37 31 37 34C37 37 35 39 33 39H26"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Pistolkontakt */}
      <rect x="35" y="16" width="6" height="10" rx="2" fill={color} />
      <line x1="38" y1="12" x2="38" y2="16" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M37 26V30" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ServiceIcon({
  type,
  color = 'currentColor',
  size = 42,
  className,
  style,
}: {
  type: string;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  switch (type) {
    case 'elinstallationer':
    case 'elinstallation':
    case 'vagmarkering':
      return <ElectricalInstallationIcon color={color} size={size} className={className} style={style} />;
    case 'belysning':
    case 'belysningsdesign':
    case 'parkeringsmarkering':
    case 'parkeringslinjer':
      return <LightingDesignIcon color={color} size={size} className={className} style={style} />;
    case 'elcentraler':
    case 'elskåp':
    case 'industrimalning':
      return <ElectricalPanelIcon color={color} size={size} className={className} style={style} />;
    case 'laddboxar':
    case 'laddbox':
    case 'symbolmalning':
      return <EVChargerIcon color={color} size={size} className={className} style={style} />;
    default:
      return <ElectricalInstallationIcon color={color} size={size} className={className} style={style} />;
  }
}

export default ServiceIcon;
