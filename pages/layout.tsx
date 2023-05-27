import ButtonNav from "../components/ButtonNav";
import { MainContainer, MainContent } from "./_styled";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <MainContainer>
      <MainContent>
        <ButtonNav />
        <main>{children}</main>
      </MainContent>
    </MainContainer>
  );
}
