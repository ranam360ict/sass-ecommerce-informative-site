import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Memart e-commerce SaaS platform by M360ICT';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 72,
          background:
            'linear-gradient(135deg, #fffaf3 0%, #f7fbfa 48%, #e9f7f5 100%)',
          color: '#14213d',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 690 }}>
          <div
            style={{
              marginBottom: 28,
              color: '#1d938b',
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            M360ICT E-Commerce SaaS
          </div>
          <div
            style={{
              fontSize: 94,
              fontWeight: 900,
              lineHeight: 0.94,
              letterSpacing: -2,
            }}
          >
            Memart
          </div>
          <div
            style={{
              marginTop: 28,
              color: '#27374d',
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.22,
            }}
          >
            Run products, orders, payments, and delivery from one smart platform.
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            width: 330,
            height: 330,
            borderRadius: 34,
            background: '#ffffff',
            boxShadow: '0 34px 90px rgba(20, 33, 61, 0.18)',
            border: '1px solid rgba(20, 33, 61, 0.1)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 46,
              left: 42,
              right: 42,
              height: 34,
              borderRadius: 10,
              background: '#14213d',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 112,
              left: 42,
              width: 116,
              height: 92,
              borderRadius: 18,
              background: '#ef5d5d',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 112,
              right: 42,
              width: 116,
              height: 92,
              borderRadius: 18,
              background: '#1d938b',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 42,
              right: 42,
              bottom: 52,
              height: 38,
              borderRadius: 999,
              background: '#ffd166',
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
