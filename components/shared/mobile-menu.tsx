import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { menuItems } from "@/constants"
import { useMediaQuery } from "@/hooks/use-media-query"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const MobileMenu = () => {
  const pathname = usePathname()

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  if (isDesktop) {
    return null
  }

  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Menu drawer">
            <MoreHorizontal size={28} />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="border-muted">
          <DrawerHeader>
            <DrawerTitle>Navigation Menu</DrawerTitle>
          </DrawerHeader>

          <div className="space-y-6 p-4 text-center">
            {menuItems.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname !== "/" && pathname.startsWith(link.href + "/"))

              return (
                <DrawerClose key={link.label} asChild>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-center gap-x-2 text-lg font-semibold text-muted-foreground ${
                      isActive &&
                      "text-neutral-950 underline decoration-primary decoration-4 underline-offset-4 dark:text-white"
                    }`}
                  >
                    {/* {link.icon} */}
                    {link.label}
                  </Link>
                </DrawerClose>
              )
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
