import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Shell } from "@/components/layout/shell";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
}
