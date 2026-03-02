import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
          }}
        >
          <span
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 900,
              fontSize: 96,
              color: '#00aaff',
              lineHeight: 1,
            }}
          >
            G
          </span>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 900,
              fontSize: 96,
              color: '#ffffff',
              lineHeight: 1,
            }}
          >
            I
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
