import { Dialog, Tabs } from '@rupa-ui/react'
import { useState } from 'react'
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
  const title = tr(p.title)
  const image = images[index]

  const content = (key: Media) =>
    key === 'gallery' ? (
      image && (
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
      )
    ) : (
      <div className="modal-media">
        <video
          className="modal-video"
          src={key === 'tutorial' ? p.tutorial : p.video}
          poster={p.image}
          controls
          playsInline
          preload="metadata"
        />
      </div>
    )

  return (
    <Dialog
      open
      onOpenChange={(open) => !open && onClose()}
      title={title}
      description={p.category === 'personal' ? t.personal : t.professional}
      size="lg"
      closeLabel={t.close}
      className="project-dialog"
    >
      {media.length > 1 ? (
        <Tabs
          className="project-tabs"
          label={title}
          value={tab}
          onChange={(value) => setTab(value as Media)}
          items={media.map(([key, label]) => ({
            value: key,
            label: (
              <>
                {key !== 'gallery' && <Icon name="play" size={13} />}
                {label}
              </>
            ),
            content: content(key),
          }))}
        />
      ) : media.length ? (
        content(media[0][0])
      ) : (
        <div className="confidential">
          <Icon name="lock" size={22} />
          <span>{t.confidential}</span>
        </div>
      )}

      <p className="modal-desc">{tr(p.description)}</p>
      <Tags items={p.tech} />
      <ProjectLinks project={p} />
      {viewer !== null && <Lightbox title={title} images={images} start={viewer} onClose={() => setViewer(null)} />}
    </Dialog>
  )
}
