"use client"

import { StarsBackground } from "@/app/components/animate-ui/components/backgrounds/stars"
import { cn } from "@/app/lib/utils"

export const StarsBackgroundDemo = () => {
  return (
    <StarsBackground
      starColor="#FFF"
      className={cn(
        "fixed inset-0 z-0",
      )}
    />
  )
}
