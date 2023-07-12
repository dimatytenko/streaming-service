import React from 'react';
import {palette} from '@/theme/palette';

export const MovieIcon: React.FC = () => (
  <>
    <path
      d="M0 4v24h32v-24h-32zM6 26h-4v-4h4v4zM6 18h-4v-4h4v4zM6 10h-4v-4h4v4zM24 26h-16v-20h16v20zM30 26h-4v-4h4v4zM30 18h-4v-4h4v4zM30 10h-4v-4h4v4zM12 10v12l8-6z"
      stroke={palette.dark.secondary}
      strokeWidth="0"
      fill={palette.dark.secondary}
    />
  </>
);

export const TvIcon: React.FC = () => (
  <>
    <path
      d="M30.662 9.003c-2.775-0.399-5.731-0.688-8.815-0.851l5.153-5.153-2-2-7.017 7.017c-0.656-0.011-1.317-0.017-1.983-0.017v0l-8-8-2 2 6.069 6.069c-3.779 0.133-7.386 0.454-10.731 0.935-0.86 3.366-1.338 7.086-1.338 10.997s0.477 7.63 1.338 10.997c4.489 0.645 9.448 1.003 14.662 1.003s10.173-0.358 14.662-1.003c0.86-3.366 1.338-7.086 1.338-10.997s-0.477-7.63-1.338-10.997zM26.997 27.331c-3.367 0.43-7.086 0.669-10.997 0.669s-7.63-0.239-10.997-0.669c-0.645-2.244-1.003-4.724-1.003-7.331s0.358-5.087 1.003-7.331c3.366-0.43 7.086-0.669 10.997-0.669s7.63 0.239 10.996 0.669c0.645 2.244 1.004 4.724 1.004 7.331s-0.358 5.087-1.003 7.331z"
      stroke={palette.dark.secondary}
      strokeWidth="0"
      fill={palette.dark.secondary}
    />
  </>
);

export const PersonIcon: React.FC = () => (
  <>
    <path
      d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"
      stroke={palette.dark.secondary}
      strokeWidth="0"
      fill={palette.dark.secondary}
    />
  </>
);
