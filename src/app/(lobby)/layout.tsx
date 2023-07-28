import SiteHeader from "@/components/layouts/SiteHeader";

interface LobbyLayoutProps {
    children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {

    const user = await "user"

    return (
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader user={user}/>
        {children}
      </div>
    );
}