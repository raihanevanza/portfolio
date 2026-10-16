import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useBodyLock } from '../hooks.ts'
import { useLang } from '../i18n.ts'
import type { GalleryImage, Project } from '../types.ts'
import { Icon } from './Icon.tsx'
import { Lightbox } from './Lightbox.tsx'
import { ProjectLinks } from './Projects.tsx'
import { Tags } from './Section.tsx'

type Media = 'gallery' | 'tutorial' | 'video'

export function galleryOf(p: Project): GalleryImage[] {
  return p.gallery?.length ? p.gallery : p.image ? [{ src: p.image }] : []
}

/** Detail proyek: galeri / video tutorial / video demo, deskripsi lengkap, teknologi, dan tautan. */
export function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  const { t, tr } = useLang()
  const images = galleryOf(p)
  const media = (
    [
      ['gallery', images.length ? `${t.gallery} · ${images.length}` : ''],
      ['tutorial', p.tutorial ? t.tutorial : ''],
      ['video', p.video ? t.video : ''],
    ] as [Media, string][]
  ).filter(([, label]) => label)
  const [tab, setTab] = useState<Media | undefined>(media[0]?.[0])
  const [index, setIndex] = useState(0)
  const [viewer, setViewer] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const title = tr(p.title)
  useBodyLock()

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    return () => previousFocus?.focus?.()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const image = images[index]

  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card">
        <div className="modal-top">
          <p className="eyebrow">{p.category === 'personal' ? t.personal : t.professional}</p>
          <button ref={closeRef} className="icon-btn" onClick={onClose} aria-label={t.close}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <h3 id="modal-title" className="modal-title">
          {title}
        </h3>

        {media.length > 1 && (
          <div className="seg" role="tablist">
            {media.map(([key, label]) => (
              <button key={key} role="tab" aria-selected={tab === key} className={tab === key ? 'on' : ''} onClick={() => setTab(key)}>
                {key !== 'gallery' && <Icon name="play" size={13} />}
                {label}
              </button>
            ))}
          </div>
        )}

        {tab === 'gallery' && image && (
          <div className="modal-media">
            <button className="modal-shot" onClick={() => setViewer(index)} aria-label={`${t.viewDetail}: ${title}`}>
              <img src={image.src} alt={(image.caption && tr(image.caption)) || `${t.screenshotOf} ${title}`} />
              <span className="modal-shot-hint">
                <Icon name="expand" size={15} /> {t.viewDetail}
              </span>
            </button>
            {image.caption && <p className="modal-caption">{tr(image.caption)}</p>}
            {images.length > 1 && (
              <div className="modal-thumbs">
                {images.map((img, i) => (
                  <button key={img.src} className={i === index ? 'on' : ''} onClick={() => setIndex(i)} aria-label={`${i + 1} / ${images.length}`}>
                    <img src={img.thumb || img.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {(tab === 'tutorial' || tab === 'video') && (
          <div className="modal-media">
            <video
              key={tab}
              className="modal-video"
              src={tab === 'tutorial' ? p.tutorial : p.video}
              poster={p.image}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        )}
        {!media.length && (
          <div className="confidential">
            <Icon name="lock" size={22} />
            <span>{t.confidential}</span>
          </div>
        )}

        <p className="modal-desc">{tr(p.description)}</p>
        <Tags items={p.tech} />
        <ProjectLinks project={p} />
      </div>
      {viewer !== null && <Lightbox title={title} images={images} start={viewer} onClose={() => setViewer(null)} />}
    </div>,
    document.body,
  )
}
