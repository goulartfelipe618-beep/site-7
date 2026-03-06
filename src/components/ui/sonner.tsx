import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "group toast !bg-card !border-2 !border-accent/20 !text-foreground !text-sm !shadow-lg",
          description: "!text-muted-foreground !text-sm !italic",
          actionButton:
            "!bg-primary !text-primary-foreground",
          cancelButton:
            "!bg-muted !text-muted-foreground",
        },
        style: {
          fontFamily: "'Cormorant Garamond', serif",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
