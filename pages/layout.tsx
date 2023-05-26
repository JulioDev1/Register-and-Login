import ButtonNav from "../components/ButtonNav";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <ButtonNav />
      <main>{children}</main>
    </div>
  );
}
