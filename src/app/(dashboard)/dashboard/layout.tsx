import { redirect } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = "user";

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="flex">hello</div>
  )
}
