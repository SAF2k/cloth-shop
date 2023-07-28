import MainNav from "@/components/layouts/MainNav";
import { siteConfig } from "@/config/site";

interface SiteHeaderProps {
  user: string;
}

export default function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16">
        <MainNav items={siteConfig.mainNav} />
      </div>
      
    </header>
  );
}
