import { memo, SVGProps } from 'react';

const Rectangle2Icon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.8787 2.12136C12.0502 0.949782 13.9497 0.949784 15.1213 2.12136L23.8786 10.8787C25.0502 12.0503 25.0502 13.9498 23.8786 15.1213L15.1213 23.8787C13.9497 25.0503 12.0502 25.0503 10.8787 23.8787L2.12132 15.1213C0.949749 13.9498 0.949751 12.0503 2.12132 10.8787L10.8787 2.12136Z'
      fill='url(#paint0_linear_104_8)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_104_8'
        x1={29.5}
        y1={-14.5}
        x2={-9.00002}
        y2={46.5}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0000' />
        <stop offset={1} stopColor='#9D02FC' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle2Icon7);
export { Memo as Rectangle2Icon7 };
