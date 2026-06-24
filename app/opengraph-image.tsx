import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'FurPass — Your pet’s whole world, in one secure link'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'linear-gradient(135deg, #F9FAFB 0%, #D4FAF9 55%, #FFE0E8 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#252A34',
          position: 'relative',
        }}
      >
        {/* Soft paw watermark */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            bottom: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: 'rgba(8, 217, 214, 0.18)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -100,
            top: -100,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: 'rgba(255, 46, 99, 0.12)',
            display: 'flex',
          }}
        />

        {/* Top: logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: '#252A34',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#08D9D6',
              fontSize: 36,
            }}
          >
            🐾
          </div>
          <div style={{ display: 'flex', fontSize: 36, fontWeight: 700, letterSpacing: -0.5 }}>
            FurPass
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 880 }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              padding: '8px 18px',
              borderRadius: 9999,
              background: 'rgba(8, 217, 214, 0.18)',
              color: '#06857F',
              fontSize: 20,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            Now on the App Store
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              display: 'flex',
            }}
          >
            Your pet’s whole world, in one secure link.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: '#4B5563', display: 'flex', maxWidth: 820 }}>
            Build a care guide. Share a private, expiring link with your sitter — no app required.
          </div>
        </div>

        {/* Bottom: pills */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {['Expiring links', 'Email-gated access', 'Revoke anytime'].map((pill) => (
            <div
              key={pill}
              style={{
                display: 'flex',
                padding: '14px 24px',
                borderRadius: 9999,
                background: 'white',
                color: '#252A34',
                fontSize: 24,
                fontWeight: 600,
                boxShadow: '0 6px 18px rgba(15, 23, 42, 0.08)',
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
