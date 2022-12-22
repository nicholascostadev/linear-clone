import classNames from 'classnames'
import { ReactNode } from 'react'

export const Container = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={classNames('mx-auto max-w-[120rem] px-8', className)}>
      {children}
    </div>
  )
}
