import Link from "next/link";
import Provider from "./common/provider";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export const metadata = {
  title: "blog",
  description: "blog",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Provider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}