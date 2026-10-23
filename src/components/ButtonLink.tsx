import type { ButtonSize, ButtonVariant } from '@rupa-ui/react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

/** Tautan yang tampil seperti Button Rupa. Button Rupa selalu <button>, jadi class-nya dipakai di <a>. */
export function ButtonLink({
  variant = 'secondary',
  size = 'md',
  iconStart,
  iconEnd,
  className = '',
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  iconStart?: ReactNode
  iconEnd?: ReactNode
}) {
  return (
    <a className={`rupa-button rupa-focusable ${className}`} data-variant={variant} data-size={size} {...rest}>
      {iconStart}
      <span className="rupa-button__label">{children}</span>
      {iconEnd}
    </a>
  )
}
