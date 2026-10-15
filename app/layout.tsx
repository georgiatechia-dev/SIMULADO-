import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'escsimulados - Simulados Gratuitos das Principais Provas do Brasil',
  description: 'Plataforma pública e 100% gratuita de simulados para ENEM, FUVEST, Saresp, Provão Paulista, OBMEP, OBA e Concursos Públicos sem cadastro.',
  openGraph: {
    title: 'escsimulados - Simulados Gratuitos das Principais Provas do Brasil',
    description: 'Plataforma pública e 100% gratuita de simulados para ENEM, FUVEST, Saresp, Provão Paulista, OBMEP, OBA e Concursos Públicos sem cadastro.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'escsimulados - Simulados Gratuitos das Principais Provas do Brasil',
    description: 'Plataforma pública e 100% gratuita de simulados para ENEM, FUVEST, Saresp, Provão Paulista, OBMEP, OBA e Concursos Públicos sem cadastro.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f8f9ff] text-[#0b1c30] antialiased min-h-screen selection:bg-[#ff6b00]/20 selection:text-[#ff6b00]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
