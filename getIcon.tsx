import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function getLucideIcon(name: string | undefined): LucideIcon {
  if (!name) {
    return LucideIcons.HelpCircle;
  }
  const icon = (LucideIcons as any)[name];

  return icon || LucideIcons.HelpCircle;
}