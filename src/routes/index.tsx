import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, MapPin, UtensilsCrossed, Phone, Instagram, Clock } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/Reveal";
import { WhatsAppFab, WHATSAPP_URL } from "@/components/WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import hero from "@/assets/hero.jpg";
import massas from "@/assets/massas.jpg";
import vinhos from "@/assets/vinhos.jpg";
import spaghettiAlMare from "@/assets/spaghetti-al-mare.jpg.asset.json";
import casquinhaSiriCamarao from "@/assets/casquinha-siri-camarao.jpg.asset.json";
import carpaccio from "@/assets/carpaccio.jpg.asset.json";
import bacalhauChefe from "@/assets/bacalhau-chefe.jpg.asset.json";
import apfelstrudel from "@/assets/apfelstrudel.jpg.asset.json";
import saladaCamarao from "@/assets/salada-camarao.jpg.asset.json";
import filetMignonPoivre from "@/assets/filet-mignon-poivre.jpg.asset.json";
import penneAmatriciana from "@/assets/penne-amatriciana.jpg.asset.json";
import polvoLavareiro from "@/assets/polvo-lavareiro.jpg.asset.json";
import filetMadeira from "@/assets/filet-madeira.jpg.asset.json";

const TITLE = "Vô Basílio Trattoria e Forneria | Restaurante Italiano em São João da Boa Vista";
const DESCRIPTION =
  "Restaurante italiano em São João da Boa Vista - SP. Massas artesanais, frutos do mar, vinhos selecionados e ambiente acolhedor. Reserve sua mesa: (19) 3633-4200.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "restaurante italiano São João da Boa Vista, melhor restaurante São João da Boa Vista, trattoria italiana SP, forneria, massas artesanais",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Vô Basílio Trattoria e Forneria",
          servesCuisine: "Italiana",
          priceRange: "$$$",
          telephone: "+55 19 3633-4200",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Benedito Araújo, 556 - Centro",
            addressLocality: "São João da Boa Vista",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            bestRating: "5",
            ratingCount: "600",
          },
          sameAs: ["https://instagram.com/vobasilio_oficial"],
        }),
      },
    ],
  }),
  component: Home,
});

const pratos = [
  {
    nome: "Spaghetti Al Mare",
    desc: "Massa artesanal negra com frutos do mar frescos e toque de azeite trufado.",
    img: spaghettiAlMare.url,
  },
  {
    nome: "Casquinha de Siri com Camarões",
    desc: "Casquinha recheada com siri desfiado e camarões, gratinada ao forno.",
    img: casquinhaSiriCamarao.url,
  },
  {
    nome: "Carpaccio",
    desc: "Finas fatias de filé, rúcula fresca, lascas de parmesão e molho especial.",
    img: carpaccio.url,
  },
  {
    nome: "Bacalhau do Chefe",
    desc: "Bacalhau preparado com a receita exclusiva do chef e acompanhamentos selecionados.",
    img: bacalhauChefe.url,
  },
  {
    nome: "Apfelstrudel",
    desc: "Clássico austríaco de massa folhada com maçã, servido com sorvete de creme.",
    img: apfelstrudel.url,
  },
  {
    nome: "Salada de Camarões",
    desc: "Camarões e lulas grelhados com folhas frescas e vinagrete cítrico.",
    img: saladaCamarao.url,
  },
  {
    nome: "Filet Mignon Au Poivre",
    desc: "Filé mignon ao molho de pimenta verde, acompanhado de risoto cremoso.",
    img: filetMignonPoivre.url,
  },
  {
    nome: "Penne ao Milho Amatriciana",
    desc: "Penne al dente com milho, pancetta e molho amatriciana da casa.",
    img: penneAmatriciana.url,
  },
  {
    nome: "Polvo à Lavareiro",
    desc: "Polvo grelhado com batatas, legumes e azeite de oliva aromatizado.",
    img: polvoLavareiro.url,
  },
  {
    nome: "Filet ao Molho Madeira",
    desc: "Filé mignon ao molho madeira com cogumelos e risoto de parmesão.",
    img: filetMadeira.url,
  },
];

const depoimentos = [
  {
    texto: "Simplesmente o melhor restaurante de São João da Boa Vista e região.",
    autor: "Avaliação Google",
  },
  {
    texto: "Comida impecável, ambiente aconchegante e atendimento elegante.",
    autor: "Avaliação Google",
  },
  { texto: "Uma experiência gastronômica excepcional.", autor: "Avaliação Google" },
];

const galeria = [
  { src: hero, alt: "Salão interno do Vô Basílio com iluminação acolhedora", span: "sm:col-span-2 sm:row-span-2" },
  { src: massas, alt: "Massas artesanais preparadas à mão", span: "" },
  { src: vinhos, alt: "Adega e taças de vinho tinto", span: "" },
  { src: spaghetti, alt: "Spaghetti al mare com frutos do mar", span: "" },
  { src: cordeiro, alt: "Carré de cordeiro com molho especial", span: "" },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-1 text-gold ${className}`} aria-label="4,8 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">{title}</h2>
      <div className="gold-rule mx-auto mt-6 max-w-[180px]" />
      {children ? <p className="mt-6 text-muted-foreground">{children}</p> : null}
    </Reveal>
  );
}

function Home() {
  const [enviando, setEnviando] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = [
      "Olá! Gostaria de fazer uma reserva no Vô Basílio.",
      `Nome: ${data.get("nome")}`,
      `Telefone: ${data.get("telefone")}`,
      `Pessoas: ${data.get("pessoas")}`,
      `Data: ${data.get("data")}`,
      `Horário: ${data.get("horario")}`,
      data.get("obs") ? `Observações: ${data.get("obs")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setEnviando(true);
    toast.success("Abrindo o WhatsApp para confirmar sua reserva...");
    window.open(`https://wa.me/551936334200?text=${encodeURIComponent(msg)}`, "_blank");
    setTimeout(() => setEnviando(false), 1200);
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <WhatsAppFab />

      {/* HERO */}
      <header className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Salão do Vô Basílio Trattoria e Forneria à luz de velas"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />

        <div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center">
          <Reveal>
            <p className="eyebrow">Trattoria e Forneria • Desde sempre em família</p>
            <h1 className="mt-6 text-4xl leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
              Uma experiência italiana que <em className="text-gold not-italic">desperta todos os sentidos</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Sabores autênticos, ingredientes selecionados e uma atmosfera acolhedora no coração de
              São João da Boa Vista.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-none px-8 tracking-[0.2em] uppercase sm:w-auto">
              <a href="#reservas">Reservar uma mesa</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-none border-gold/50 bg-transparent px-8 uppercase tracking-[0.2em] text-cream hover:bg-gold/10 sm:w-auto"
            >
              <a href="#cardapio">Conhecer o cardápio</a>
            </Button>
          </Reveal>

          <Reveal delay={300} className="mt-14">
            <div className="gold-rule mx-auto max-w-md" />
            <ul className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-10">
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 shrink-0 fill-gold text-gold" aria-hidden="true" />
                Nota Google 4,8/5
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                São João da Boa Vista - SP
              </li>
              <li className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                Trattoria e Forneria italiana
              </li>
            </ul>
          </Reveal>
        </div>
      </header>

      <main>
        {/* SOBRE */}
        <section id="sobre" className="px-5 py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <Reveal className="relative">
              <img
                src={massas}
                alt="Massas artesanais sendo preparadas à mão"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover shadow-elegant"
              />
              <div className="pointer-events-none absolute inset-3 border border-gold/25" />
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow">A nossa casa</p>
              <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">
                Mais do que um restaurante, uma memória à mesa
              </h2>
              <div className="gold-rule mt-6 max-w-[160px]" />
              <p className="mt-6 text-muted-foreground">
                Mais do que um restaurante, o Vô Basílio é uma experiência gastronômica inspirada na
                tradição italiana. Um ambiente acolhedor, onde cada prato é preparado com cuidado,
                técnica e ingredientes selecionados.
              </p>

              <ul className="mt-10 grid gap-px overflow-hidden border border-border sm:grid-cols-2">
                {[
                  ["Ambiente elegante", "Aconchegante, à luz de velas e madeira nobre."],
                  ["Atendimento personalizado", "Cada mesa recebida como se fosse em casa."],
                  ["Cozinha contemporânea", "Tradição italiana com técnica atual."],
                  ["Momentos especiais", "Jantares, comemorações e encontros marcantes."],
                ].map(([t, d]) => (
                  <li key={t} className="bg-card p-6 outline outline-border">
                    <h3 className="text-xl text-gold">{t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* CARDÁPIO */}
        <section id="cardapio" className="bg-olive-deep/25 px-5 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Destaques" title="Do forno e da nossa cozinha">
              Uma seleção dos pratos mais pedidos da casa, preparados diariamente com ingredientes
              frescos.
            </SectionTitle>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {pratos.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.nome}
                  delay={i * 90}
                  className="group border border-border bg-card shadow-elegant"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.nome}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl text-cream">{p.nome}</h3>
                    <div className="gold-rule mt-3 max-w-[70px]" />
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              ))}

              <Reveal
                delay={450}
                className="flex flex-col items-center justify-center border border-gold/30 bg-transparent p-10 text-center"
              >
                <p className="eyebrow">Cardápio completo</p>
                <p className="mt-4 font-display text-2xl text-cream">
                  Antipasti, massas frescas, forneria e carta de vinhos
                </p>
                <Button asChild className="mt-8 rounded-none uppercase tracking-[0.2em]">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Falar com a casa
                  </a>
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="px-5 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Experiência do cliente" title="O que dizem à nossa mesa" />

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {depoimentos.map((d, i) => (
                <Reveal key={d.texto} delay={i * 120} className="border border-border bg-card p-8">
                  <Stars />
                  <p className="mt-6 font-display text-2xl italic leading-relaxed text-cream">
                    “{d.texto}”
                  </p>
                  <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {d.autor}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-14 flex flex-col items-center gap-3">
              <Stars className="scale-125" />
              <p className="font-display text-4xl text-gold">4,8 de 5</p>
              <p className="text-sm text-muted-foreground">Avaliação média no Google</p>
            </Reveal>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="bg-olive-deep/25 px-5 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Galeria" title="O ambiente, os pratos, os brindes" />
            <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-4">
              {galeria.map((g, i) => (
                <Reveal
                  key={g.alt}
                  delay={i * 80}
                  className={`group overflow-hidden ${g.span}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESERVAS */}
        <section id="reservas" className="px-5 py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="eyebrow">Reservas</p>
              <h2 className="mt-4 text-4xl leading-tight text-cream sm:text-5xl">
                Reserve sua experiência
              </h2>
              <div className="gold-rule mt-6 max-w-[160px]" />
              <p className="mt-6 text-muted-foreground">
                Garanta sua mesa e deixe o resto conosco. Para grupos e ocasiões especiais, fale
                diretamente com a nossa equipe.
              </p>

              <a
                href="tel:+551936334200"
                className="mt-10 flex items-center gap-3 border border-border bg-card p-6 transition-colors hover:border-gold/50"
              >
                <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-display text-2xl text-cream">(19) 3633-4200</span>
              </a>

              <div className="mt-4 flex items-center gap-3 border border-border bg-card p-6 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                Jantar de terça a domingo — recomendamos reserva antecipada.
              </div>

              <Button
                asChild
                size="lg"
                className="mt-4 w-full rounded-none bg-accent uppercase tracking-[0.2em] text-accent-foreground hover:bg-accent/90"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Reservar agora
                </a>
              </Button>
            </Reveal>

            <Reveal delay={120} className="border border-border bg-card p-7 shadow-elegant sm:p-10">
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" name="nome" required placeholder="Seu nome completo" className="mt-2 rounded-none" />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    required
                    type="tel"
                    placeholder="(19) 99999-9999"
                    className="mt-2 rounded-none"
                  />
                </div>
                <div>
                  <Label htmlFor="pessoas">Número de pessoas</Label>
                  <Input
                    id="pessoas"
                    name="pessoas"
                    required
                    type="number"
                    min={1}
                    max={30}
                    defaultValue={2}
                    className="mt-2 rounded-none"
                  />
                </div>
                <div>
                  <Label htmlFor="data">Data</Label>
                  <Input id="data" name="data" required type="date" className="mt-2 rounded-none" />
                </div>
                <div>
                  <Label htmlFor="horario">Horário</Label>
                  <Input id="horario" name="horario" required type="time" className="mt-2 rounded-none" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="obs">Observações</Label>
                  <Textarea
                    id="obs"
                    name="obs"
                    rows={4}
                    placeholder="Aniversário, restrições alimentares, preferência de mesa..."
                    className="mt-2 rounded-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={enviando}
                  className="mt-2 w-full rounded-none uppercase tracking-[0.2em] sm:col-span-2"
                >
                  {enviando ? "Enviando..." : "Enviar pedido de reserva"}
                </Button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="bg-olive-deep/25 px-5 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Localização" title="No centro de São João da Boa Vista" />
            <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal className="border border-border bg-card p-8">
                <h3 className="font-display text-3xl text-cream">Vô Basílio Trattoria e Forneria</h3>
                <div className="gold-rule mt-5 max-w-[90px]" />
                <address className="mt-6 not-italic leading-relaxed text-muted-foreground">
                  Rua Benedito Araújo, 556
                  <br />
                  Centro
                  <br />
                  São João da Boa Vista - SP
                </address>
                <Button
                  asChild
                  variant="outline"
                  className="mt-8 rounded-none border-gold/50 bg-transparent uppercase tracking-[0.2em] text-cream hover:bg-gold/10"
                >
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Benedito+Ara%C3%BAjo,+556,+Centro,+S%C3%A3o+Jo%C3%A3o+da+Boa+Vista+-+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Como chegar
                  </a>
                </Button>
              </Reveal>

              <Reveal delay={120} className="min-h-[340px] border border-border">
                <iframe
                  title="Mapa — Vô Basílio Trattoria e Forneria"
                  src="https://www.google.com/maps?q=Rua%20Benedito%20Ara%C3%BAjo%2C%20556%2C%20Centro%2C%20S%C3%A3o%20Jo%C3%A3o%20da%20Boa%20Vista%20-%20SP&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[340px] w-full"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-border px-5 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="eyebrow">Vô Basílio</p>
          <p className="mx-auto mt-5 max-w-xl font-display text-3xl italic text-cream">
            “Tradição, sabor e momentos que permanecem na memória.”
          </p>
          <div className="gold-rule mx-auto mt-8 max-w-xs" />
          <div className="mt-8 flex flex-col items-center justify-center gap-5 text-sm text-muted-foreground sm:flex-row sm:gap-10">
            <a
              href="https://instagram.com/vobasilio_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              @vobasilio_oficial
            </a>
            <a href="tel:+551936334200" className="flex items-center gap-2 transition-colors hover:text-gold">
              <Phone className="h-4 w-4" aria-hidden="true" />
              (19) 3633-4200
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Rua Benedito Araújo, 556 — Centro
            </span>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
            © {new Date().getFullYear()} Vô Basílio Trattoria e Forneria
          </p>
        </div>
      </footer>
    </div>
  );
}
