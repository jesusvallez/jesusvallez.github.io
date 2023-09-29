import { forwardRef, type ElementRef, type ComponentPropsWithoutRef, type ReactElement } from 'react'
import { Provider, Viewport, Root, Action, Close, Title, Description } from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const ToastProvider = Provider

const ToastViewport = forwardRef<ElementRef<typeof Viewport>, ComponentPropsWithoutRef<typeof Viewport>>(
  ({ className, ...props }, ref) => (
    <Viewport
      ref={ref}
      className={cn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 md:bottom-0 md:right-0 md:top-auto md:max-w-[420px] md:flex-col',
        className,
      )}
      {...props}
    />
  ),
)
ToastViewport.displayName = Viewport.displayName

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:md:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
})
Toast.displayName = Root.displayName

const ToastAction = forwardRef<ElementRef<typeof Action>, ComponentPropsWithoutRef<typeof Action>>(
  ({ className, ...props }, ref) => (
    <Action
      ref={ref}
      className={cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
        className,
      )}
      {...props}
    />
  ),
)
ToastAction.displayName = Action.displayName

const ToastClose = forwardRef<ElementRef<typeof Close>, ComponentPropsWithoutRef<typeof Close>>(
  ({ className, ...props }, ref) => (
    <Close
      ref={ref}
      className={cn(
        'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
        className,
      )}
      toast-close=""
      {...props}
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    </Close>
  ),
)
ToastClose.displayName = Close.displayName

const ToastTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => <Title ref={ref} className={cn('text-md font-extrabold', className)} {...props} />,
)
ToastTitle.displayName = Title.displayName

const ToastDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
  ({ className, ...props }, ref) => (
    <Description ref={ref} className={cn('text-sm opacity-90', className)} {...props} />
  ),
)
ToastDescription.displayName = Description.displayName

type ToastProps = ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
