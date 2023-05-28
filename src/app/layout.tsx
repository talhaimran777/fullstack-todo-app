import AuthWrapper from "@/components/AuthWrapper";
import { TodosProvider } from "@/context/todos.provider";
import Providers from "@/lib/providers";
import { Josefin_Slab } from "next/font/google";
import "./globals.css";

const inter = Josefin_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthWrapper>
            <TodosProvider>{children}</TodosProvider>
          </AuthWrapper>
        </Providers>
      </body>
    </html>
  );
}
