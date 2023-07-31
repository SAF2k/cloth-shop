import { siteConfig } from "@/config/site";
import MainNav from "@/components/layouts/MainNav";
import ThemeToggle from "@/components/layouts/ThemeToggle";
import Combobox from "@/components/Combobox";
import CartSheet from "@/components/cart/CartSheet";
interface SiteHeaderProps {
  user: string;
}

export default function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16">
        <MainNav items={siteConfig.mainNav} />
      </div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-2">
          <Combobox />
          <CartSheet />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
