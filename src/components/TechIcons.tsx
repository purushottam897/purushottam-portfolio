import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ServiceNowIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10" fill="#293E40" />
    <path
      d="M12 4.5A7.5 7.5 0 0 0 4.5 12a7.48 7.48 0 0 0 3.2 6.16l1.37-1.42A5.5 5.5 0 1 1 12 17.5a5.45 5.45 0 0 1-3.14-.98L7.4 17.9A7.48 7.48 0 0 0 12 19.5a7.5 7.5 0 0 0 0-15z"
      fill="#81B5A1"
    />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <path
      d="M11.91 2c-5.06 0-4.73 2.19-4.73 2.19l.01 2.27h4.81v.68H5.2S2 6.78 2 11.9c0 5.11 2.78 4.93 2.78 4.93h1.66v-2.33s-.09-2.78 2.73-2.78h4.72s2.64.04 2.64-2.58V4.58S16.97 2 11.91 2zm-2.59 1.5c.52 0 .94.42.94.94 0 .52-.42.94-.94.94s-.94-.42-.94-.94c0-.52.42-.94.94-.94z"
      fill="#3776AB"
    />
    <path
      d="M12.09 22c5.06 0 4.73-2.19 4.73-2.19l-.01-2.27H12v-.68h6.8s3.2.36 3.2-4.76c0-5.11-2.78-4.93-2.78-4.93h-1.66v2.33s.09 2.78-2.73 2.78H10.1s-2.64-.04-2.64 2.58v4.56S7.03 22 12.09 22zm2.59-1.5c-.52 0-.94-.42-.94-.94 0-.52.42-.94.94-.94s.94.42.94.94c0 .52-.42.94-.94.94z"
      fill="#FFD43B"
    />
  </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
    <path
      d="M8.5 18.5c3 .3 6.5.3 9.5-1 0 0-1 1-3.5 1.5-2.5.5-6 .2-6-.5zm-1-3c3.5.3 7.5.3 11-1 0 0-1.2 1-4 1.5-3 .5-7 .2-7-.5zm9.5-6.5c1.5 2-1 4-1 4s2.5-1.5 1.5-3.5c-1-1.5-2-2-4-3 0 0 2 1 3.5 2.5zm-5-4C10.5 4 8 2.5 8 2.5s.5 2 1.5 3c1.5 1.5 2 2.5 1 4 0 0 1.5-1.5 1.5-4.5z"
      stroke="#E76F00"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 21.5c4 .5 9 .5 13-1 0 0-1.5 1.2-5 1.8-3.5.5-8 .2-8-.8z"
      stroke="#5382A1"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path
      d="M6 17.5l2-1.2c.4.7.8 1.2 1.5 1.2.7 0 1.2-.3 1.2-1.1v-5.4h2.4v5.4c0 1.9-1.1 2.8-2.9 2.8-1.5 0-2.6-.7-3.2-1.7zm8.3-.3l2-1.2c.5.8 1.2 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.8-.3c-1.6-.7-2.6-1.5-2.6-3.1 0-1.6 1.3-2.8 3.2-2.8 1.4 0 2.4.5 3.1 1.7l-1.9 1.2c-.4-.7-.9-1-1.4-1-.6 0-1 .4-1 .9 0 .6.5.9 1.4 1.3l.8.3c1.9.8 2.9 1.6 2.9 3.3 0 1.9-1.5 3-3.6 3-2 0-3.3-.9-4.2-2.4z"
      fill="#000000"
    />
  </svg>
);

export const AzureIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
    <path
      d="M13.05 3.5L5.4 16.75h4.65L14.7 9l4.8 11.5H5.4L3 16.75h3.6L12.5 3.5h.55z"
      fill="#0089D6"
    />
    <path
      d="M13.05 3.5L18.6 16.8h-4.35L11.5 9.8l1.55-6.3z"
      fill="#0072C6"
    />
  </svg>
);

export const SqlIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#336791" strokeWidth="2" />
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#336791" strokeWidth="2" />
    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#336791" strokeWidth="2" />
  </svg>
);

export const PowerBiIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <rect x="3" y="13" width="4" height="8" rx="1" fill="#F2C811" />
    <rect x="9" y="8" width="4" height="13" rx="1" fill="#E8A900" />
    <rect x="15" y="3" width="4" height="18" rx="1" fill="#C98900" />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
    <ellipse cx="12" cy="12" rx="3" ry="8.5" stroke="#61DAFB" strokeWidth="1.4" />
    <ellipse cx="12" cy="12" rx="3" ry="8.5" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
    <ellipse cx="12" cy="12" rx="3" ry="8.5" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" transform="rotate(45 12 12)" fill="#F05032" />
    <circle cx="9.5" cy="14.5" r="1.8" fill="#FFFFFF" />
    <circle cx="14.5" cy="9.5" r="1.8" fill="#FFFFFF" />
    <circle cx="14.5" cy="14.5" r="1.8" fill="#FFFFFF" />
    <path d="M14.5 11.3v1.4M11.3 14.5h1.4" stroke="#FFFFFF" strokeWidth="1.4" />
  </svg>
);

export const MySqlIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
    <path
      d="M4 16c2-4 6-7 11-7 3 0 5 1 5 3s-3 3-5 3c-4 0-7-2-9-4z"
      stroke="#00758F"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M17 11c1-1 3-1 4 0s.5 3-.5 4-3 1-4 0"
      stroke="#F29111"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

