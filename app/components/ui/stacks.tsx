
import { cn } from '@/lib/utils'
import React from 'react'

type StackProps = {
  children: React.ReactNode
  className?: string
}

const Hstack = ({children, className}: StackProps) => {
  return <div className={cn('flex items-center', className)}>{children}</div>
}

const Vstack = ({children, className}: StackProps) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

export { Hstack, Vstack }