'use client'

import Link from 'next/link'

import { Button, type ButtonProps } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'

import { Icons } from '@/components/ui/icons'
import { useSidebar } from './sidebar-provider'

export interface SidebarSheetProps extends ButtonProps {}

export function DashboardSidebarSheet({ children, className, ...props }: SidebarSheetProps) {
  const { open, setOpen } = useSidebar()
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
            className,
          )}
          {...props}
        >
          <Icons.menu aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="inset-y-0 flex h-auto w-[18.75rem] flex-col items-center gap-4 px-0 py-4">
        <SheetClose asChild>
          <Link
            href="/"
            className="mx-6 flex items-center self-start font-heading tracking-wider text-foreground/90 transition-colors hover:text-foreground"
          >
            {/* <Icons.logo className="size-6" aria-hidden="true" /> */}
            spendr
          </Link>
        </SheetClose>
        {children}
      </SheetContent>
    </Sheet>
  )
}
