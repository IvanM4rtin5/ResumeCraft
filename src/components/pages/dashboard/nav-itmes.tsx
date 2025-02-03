"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Newspaper, SquareUser } from "lucide-react"

export const NavItems = () => {
  const pathname = usePathname()
  const NavItems = [
    {
      label: "Curriculo",
      icon: Newspaper,
      path: "/dashboard/resumes",
    },
    {
      label: "Configurações de conta",
      icon: SquareUser,
      path: "/dashboard/account",
    },
  ]
  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {NavItems.map((item) => {
        const isActive = pathname.startsWith(item.path)
        return (
          <Link key={item.path} href="{item.path}">
            <Button
              variant="ghost"
              className={cn("w-full gap-2 justify-start",
                isActive && "bg-accent"
              )}
            >
              <item.icon size={16} />
              {item.label}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}
