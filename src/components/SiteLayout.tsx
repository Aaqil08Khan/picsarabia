import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

type Props = {
  children: React.ReactNode;
};

const SiteLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1 bg-black text-white">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
