import { Dialog } from '@rupa-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.ts'
import type { GalleryImage } from '../types.ts'
import { Icon } from './Icon.tsx'

export interface LightboxProps {
  title: string
  images: GalleryImage[]
  start?: number
  onClose: () => void
}

// Galeri layar penuh: ←/→ atau geser untuk pindah, klik gambar untuk ukuran asli, Esc untuk tutup.
// Dialog Rupa juga saat dibuka dari detail proyek, supaya Esc dan klik hanya menutup yang paling atas.
export function Lightbox({ title, images, start = 0, onClose }: LightboxProps) {
  const { t, tr } = useLang()
  const [index, setIndex] = useState(start)
  // Lebar gambar saat diperbesar (px); null = muat di layar
  const [zoomed, setZoomed] = useState<number | null>(null)
  const touchX = useRef<number | null>(null)
  const count = images.length
  const go = (step: number) => {
    setZoomed(null)
    setIndex((i) => (i + step + count) % count)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && count > 1) go(1)
      else if (e.key === 'ArrowLeft' && count > 1) go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const image = images[index]
  return (
    <Dialog
      open
      onOpenChange={(open) => !open && onClose()}
      className="lightbox"
      closeLabel={t.close}
      title={
        <>
          {title}
          {count > 1 && (
            <span className="lightbox-count">
              {index + 1} / {count}
            </span>
          )}
        </>
      }
    >
      <div
        className={`lightbox-stage ${zoomed ? 'lightbox-zoomed' : ''}`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - (touchX.current ?? e.changedTouches[0].clientX)
          if (!zoomed && count > 1 && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        <img
          key={image.src}
          src={image.src}
          alt={(image.caption && tr(image.caption)) || `${t.screenshotOf} ${title}`}
          style={zoomed ? { width: zoomed } : undefined}
          onClick={(e) => {
            // Gambar 2× ditampilkan seukuran aslinya di layar retina, minimal 1,75× ukuran muat
            const img = e.currentTarget
            setZoomed(zoomed ? null : Math.max(img.naturalWidth / 2, img.clientWidth * 1.75))
          }}
          title={zoomed ? t.zoomOut : t.zoomIn}
        />
      </div>
      {count > 1 && (
        <>
          <button className="lightbox-btn lightbox-nav lightbox-prev" onClick={() => go(-1)} aria-label={t.previous}>
            <Icon name="chevronLeft" size={22} stroke={2.2} />
          </button>
          <button className="lightbox-btn lightbox-nav lightbox-next" onClick={() => go(1)} aria-label={t.next}>
            <Icon name="chevronRight" size={22} stroke={2.2} />
          </button>
        </>
      )}
      <div className="lightbox-footer">
        {image.caption && <p className="lightbox-caption">{tr(image.caption)}</p>}
        {count > 1 && (
          <div className="lightbox-thumbs">
            {images.map((img, i) => (
              <button
                key={img.src}
                className={i === index ? 'on' : ''}
                onClick={() => {
                  setZoomed(null)
                  setIndex(i)
                }}
                aria-label={`${i + 1} / ${count}`}
              >
                <img src={img.thumb || img.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </Dialog>
  )
}
