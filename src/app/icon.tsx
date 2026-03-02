import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d1117',
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 900,
            fontSize: 16,
            color: '#00aaff',
            letterSpacing: '-1px',
            lineHeight: 1,
          }}
        >
          G
        </span>
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 900,
            fontSize: 16,
            color: '#ffffff',
            letterSpacing: '-1px',
            lineHeight: 1,
          }}
        >
          I
        </span>
      </div>
    ),
    { ...size },
  );
}
