import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { fustat } from '@/app/ui/fonts';
import { dancingScript } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dancingScript.className} antialiased`}>{children}</body>
    </html>
  );
}
