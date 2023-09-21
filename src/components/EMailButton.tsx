import { type ReactNode } from 'react'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'

type Props = {
  children: ReactNode
  email: string
}

function EMailButton({ children, email }: Props) {
  const { toast } = useToast()

  return (
    <Button
      variant="link"
      size="none"
      onClick={() => {
        navigator.clipboard.writeText(email)
        toast({
          title: '¡Email en tu portapapeles!',
          description: 'Tienes el email en tu portapapeles listo para pegar.',
        })
      }}
    >
      {children}
    </Button>
  )
}

export { EMailButton }
