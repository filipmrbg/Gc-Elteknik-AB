import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import SocialBanner from '../components/SocialBanner';
import ProjectsGallery from '../components/ProjectsGallery';
import FAQAccordion from '../components/FAQAccordion';
import CallModal from '../components/CallModal';
import ReviewCard from '../components/ReviewCard';
import { ServiceIcon } from '../components/ServiceIcons';
import { usePageTitle } from '../hooks/usePageTitle';
import services, { ServiceItem } from '../data/services';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const homeFaqItems = [
  {
    question: 'Kostar det något att få en offert?',
    answer: 'Nej, vi erbjuder alltid kostnadsfria offerter och rådgivning helt utan förbindelser för alla typer av elinstallationer och projekt.',
  },
  {
    question: 'Är Gc Elteknik auktoriserade hos Elsäkerhetsverket?',
    answer: 'Ja, Gc Elteknik AB är ett auktoriserat elinstallationsföretag registrerat hos Elsäkerhetsverket. Alla våra arbeten utförs enligt gällande föreskrifter och branschstandarder.',
  },
  {
    question: 'Hur fungerar ROT-avdraget för elinstallationer?',
    answer: 'Som privatperson kan du nyttja ROT-avdraget och få 30 % avdrag på arbetskostnaden direkt på fakturan. Vi administrerar allt mot Skatteverket.',
  },
  {
    question: 'Installerar ni laddboxar med Grön Teknik-avdrag?',
    answer: 'Ja, vi levererar och installerar moderna laddboxar med dynamisk lastbalansering. Vid installation i privatbostad dras 50 % skattereduktion av direkt på fakturan för både arbete och material.',
  },
  {
    question: 'Vilka områden i Stockholm är ni verksamma i?',
    answer: 'Vi åtar oss elinstallationer i hela Stockholmsregionen – inklusive innerstaden, Nacka, Täby, Sollentuna, Danderyd, Lidingö och omkringliggande kommuner.',
  },
];

const customerReviews = [
  {
    name: 'Johan E.',
    location: 'Stockholm',
    text: 'Vi anlitade Gc Elteknik för en total översyn och installation av ny belysning och eluttag i vår restaurang. Gabriel och hans team var otroligt professionella, punktliga och hittade kreativa belysningslösningar som verkligen lyfte hela lokalen. Rekommenderas varmt!',
    stars: 5,
    date: 'För 2 veckor sedan',
    authorSub: 'Restaurangägare, Stockholm',
  },
  {
    name: 'Karin M.',
    location: 'Nacka',
    text: 'Bytte ut vår gamla elcentral mot en modern normcentral med personskyddsbrytare samt installerade laddbox till elbilen i garaget. Smidig kontakt från första offert till färdigt arbete, och rent och snyggt lämnat efteråt. Mycket tryggt.',
    stars: 5,
    date: 'För 1 månad sedan',
    authorSub: 'Villaägare, Nacka',
  },
  {
    name: 'Markus L.',
    location: 'Täby',
    text: 'Supernöjd med installationen av Plejd och infällda spotlights i kök och vardagsrum. Riktigt snyggt hantverk, dolda kabeldragningar och bra genomgång av app-styrningen. Tryggt och pålitligt rakt igenom.',
    stars: 5,
    date: 'För 2 månader sedan',
    authorSub: 'Lägenhetsinnehavare, Täby',
  },
];

export default function Home() {
  usePageTitle(
    'Gc Elteknik AB | Elinstallationer och Elektriker i Stockholm',
    'Gc Elteknik AB erbjuder certifierade elinstallationer, belysningslösningar, laddboxar och byte av elcentraler för privatpersoner och företag i Stockholm med omnejd.'
  );

  const heroBgRef = useRef<HTMLDivElement>(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroBgRef.current) {
            heroBgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.5}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 'clamp(85px, 10vh, 110px)',
        paddingBottom: 'clamp(40px, 6vh, 60px)',
        boxSizing: 'border-box',
      }}>
        {/* Hero Background Image / Video */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            backgroundColor: '#0a1128',
          }}
        >
          {images.hero.videoUrl ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setIsVideoReady(true)}
              onPlaying={() => setIsVideoReady(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: isVideoReady ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
            >
              <source src={images.hero.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <img
              src={images.hero.background.url}
              alt={images.hero.background.alt}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 38%',
                imageRendering: '-webkit-optimize-contrast' as any,
                transform: 'translateZ(0)',
                willChange: 'transform',
              }}
            />
          )}
        </div>

        {/* Balanced subtle gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 17, 40, 0.70) 0%, rgba(10, 17, 40, 0.50) 45%, rgba(10, 17, 40, 0.82) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        <div style={{ ...container, position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto',
            paddingTop: '0',
            paddingBottom: '10px',
          }}>
            {/* ── HERO LOGO: Electric ignition & golden glimmer effect ── */}
            <ScrollReveal animation="fade-down" delay={0} duration={0.9}>
              <div
                className="hero-logo-container"
                style={{
                  marginBottom: '18px',
                  ['--logo-mask' as any]: `url("${images.logo.url}")`,
                }}
              >
                {/* Ambient warm breathing filament aura */}
                <div className="hero-logo-aura" />

                {/* Base logo with electric ignition power-on animation */}
                <img
                  src={images.logo.url}
                  alt={images.logo.alt}
                  className="hero-logo-img"
                />

                {/* Masked electric light gleam that sweeps across the logo */}
                <div className="hero-logo-sheen" aria-hidden="true" />
              </div>
            </ScrollReveal>

            {/* ── Thin accent divider ── */}
            <ScrollReveal animation="fade-up" delay={120} duration={0.6}>
              <div style={{
                width: 'clamp(50px, 6vw, 80px)',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(255,183,3,0.8), transparent)',
                marginBottom: '16px',
                borderRadius: '1px',
              }} />
            </ScrollReveal>

            {/* ── Headline ── */}
            <ScrollReveal animation="fade-up" delay={200} duration={0.8}>
              <h1 style={{
                fontFamily: "var(--font-heading)",
                color: '#ffffff',
                fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                fontWeight: 700,
                lineHeight: 1.22,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: '0 0 12px 0',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.85)',
              }}>
                Auktoriserad elektriker och elinstallationer
              </h1>
            </ScrollReveal>

            {/* ── Subtitle ── */}
            <ScrollReveal animation="fade-up" delay={280} duration={0.8}>
              <p style={{
                fontFamily: "var(--font-body)",
                color: 'rgba(255, 255, 255, 0.90)',
                fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                lineHeight: 1.6,
                maxWidth: '620px',
                margin: '0 auto 24px auto',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}>
                Gc Elteknik AB levererar säkra elinstallationer, modern belysningsdesign, elcentraler och laddboxar för privatpersoner och företag i Stockholm med omnejd.
              </p>
            </ScrollReveal>

            {/* ── Action Buttons ── */}
            <ScrollReveal animation="fade-up" delay={450} duration={0.8}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                width: '100%',
              }}>
                <Button variant="white" size="lg" href="/offert">
                  Begär offert
                </Button>

                <Button variant="outline" size="lg" href="/#tjanster">
                  Våra tjänster
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="tel:0841023040"
                  onClick={(e) => {
                    if (window.innerWidth > 768) {
                      e.preventDefault();
                      setIsCallModalOpen(true);
                    }
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} />
                    08-410 230 40
                  </span>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CALL MODAL POPUP ────────────────────────────────────── */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      {/* ── SECTION 2: VÅRA TJÄNSTER (CLEAN 4 CARDS ON A ROW) ───── */}
      <section
        id="tjanster"
        style={{
          background: '#f8fafc',
          padding: 'clamp(80px, 10vw, 120px) 0',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div style={container}>
          {/* Split-Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}>
            <div style={{ maxWidth: '580px' }}>
              <ScrollReveal animation="fade-right">
                <span style={{
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '10px',
                  background: '#e2e8f0',
                  padding: '4px 14px',
                  borderRadius: '999px',
                }}>
                  Våra Tjänster
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
                  margin: 0,
                  lineHeight: 1.18,
                }}>
                  Elinstallationer med fokus på säkerhet och kvalitet
                </h2>
              </ScrollReveal>
            </div>

            <div style={{ maxWidth: '420px' }}>
              <ScrollReveal animation="fade-left" delay={150}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  margin: '0 0 12px 0',
                }}>
                  Från kompletta elinstallationer och exklusiv belysning till moderna elcentraler och laddboxar i hela Stockholm.
                </p>
                <Link
                  to="/tjanster"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    borderBottom: '2px solid #0f172a',
                    paddingBottom: '2px',
                  }}
                >
                  Utforska alla tjänster <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Clean Architectural Icon-Centric Grid (4 cards on a row) */}
          <div className="services-showcase-grid">
            {services.map((svc: ServiceItem, index: number) => (
              <ScrollReveal key={svc.slug} animation="fade-up" delay={index * 80}>
                <Link
                  to={svc.href}
                  className="service-feature-card"
                  aria-label={`Läs mer om ${svc.title}`}
                >
                  {/* Bespoke Craft Line Icon */}
                  <div className="service-feature-icon">
                    <ServiceIcon
                      type={svc.slug}
                      color="currentColor"
                      size={34}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="service-feature-title">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="service-feature-desc">
                    {svc.shortDescription}
                  </p>

                  {/* Clean Link Indicator */}
                  <div className="service-feature-link">
                    <span>Läs mer om tjänsten</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DIN PARTNER INOM ELTEKNIK / OM OSS ─────── */}
      <section style={{ background: '#ffffff', padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div className="two-col" style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(280px, 38%, 420px) 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            {/* Left: Company Logo Card */}
            <ScrollReveal animation="fade-left" duration={0.8}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                margin: '0 auto',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(15, 23, 42, 0.06)',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(28px, 4vw, 44px)',
                boxSizing: 'border-box',
              }}>
                <img
                  src="/logo-dark.png"
                  alt="Gc Elteknik AB logotyp"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: text */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ScrollReveal animation="fade-right" duration={0.8}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 14px 0',
                }}>
                  Trygg elpartner för hem och företag i Stockholm
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="scale-x-left" delay={200} duration={0.6}>
                <span style={{ display: 'block', width: '60px', height: '3px', background: '#0F172A', borderRadius: '2px', margin: '0 0 24px' }} />
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={100}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 24px 0',
                }}>
                  Gc Elteknik AB är din auktoriserade elektriker i Stockholm. Vi är specialiserade på behöriga elinstallationer, belysningsdesign och energieffektivisering för privatpersoner, bostadsrättsföreningar och kommersiella fastigheter.
                </p>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 32px 0',
                }}>
                  Med personligt engagemang och gedigen hantverkskunskap ser vi till att alla elarbeten utförs med högsta precision, enligt branschens strängaste säkerhetskrav och med hållbara lösningar som fungerar problemfritt i decennier.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={200}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Auktoriserad elinstallatör registrerad hos Elsäkerhetsverket',
                    'Skräddarsydd belysning och modern smart hem-styrning',
                    'Snabba centralbyten med maximal personsäkerhet',
                    'Skatteavdrag med ROT (30 %) och Grön Teknik (50 %)',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={22} color="#0F172A" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={250}>
                <div style={{ marginTop: '32px' }}>
                  <Button variant="dark" href="/om-oss">
                    Läs mer om oss
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REFERENSER / PROJEKT ──────────────────────── */}
      <ProjectsGallery />

      {/* ── SECTION 5: KUNDOMDÖMEN (REVIEWS) ─────────────────────── */}
      <section style={{
        background: '#ffffff',
        padding: 'clamp(70px, 9vw, 100px) 0',
        borderTop: '1px solid #e2e8f0',
      }}>
        <div style={container}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <ScrollReveal animation="fade-up">
              <span style={{
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '10px',
                background: '#e2e8f0',
                padding: '4px 14px',
                borderRadius: '999px',
              }}>
                Kundomdömen
              </span>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                margin: '0 0 12px 0',
                lineHeight: 1.2,
              }}>
                Vad våra kunder säger
              </h2>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1rem',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}>
                Läs omdömen från privatpersoner och företag vi har hjälpt med elinstallationer och belysning i Stockholm.
              </p>
            </ScrollReveal>
          </div>

          <div
            className="reviews-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              maxWidth: '1160px',
              margin: '0 auto',
            }}
          >
            {customerReviews.map((rev, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <ReviewCard review={rev} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MID CTA ──────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(60px, 8vw, 90px) 0',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${images.cta.midSection.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 17, 40, 0.80) 0%, rgba(10, 17, 40, 0.65) 50%, rgba(10, 17, 40, 0.85) 100%)',
        }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="scale-in">
            <h2 style={{
              color: 'var(--color-white)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              margin: '0 0 12px 0',
            }}>
              Behöver du en auktoriserad elektriker i Stockholm?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1rem',
              margin: '0 0 32px 0',
              lineHeight: 1.7,
              maxWidth: '600px',
              marginInline: 'auto',
            }}>
              Vi återkopplar med en kostnadsfri offert och professionell rådgivning inom 24 timmar.
            </p>
            <Button variant="white" size="lg" href="/offert">
              Begär offert
            </Button>
          </ScrollReveal>
        </div>
      </section>



      {/* ── SECTION 8: VANLIGA FRÅGOR (FAQ) ── */}
      <section style={{
        background: '#f8fafc',
        padding: 'clamp(75px, 9vw, 110px) 0',
        position: 'relative',
        borderTop: '1px solid #e2e8f0',
      }}>
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <FAQAccordion
            items={homeFaqItems}
            title="Vanliga frågor"
            subtitle="Här hittar du svar på vanliga frågor om elinstallationer, ROT-avdrag, laddboxar och hur vi arbetar i Stockholm."
            buttonText="Kontakta oss direkt"
            buttonLink="/kontakt"
            dark={false}
          />
        </div>
      </section>

      {/* ── SOCIAL MEDIA BANNER ─────────────────────────────────── */}
      <SocialBanner />

      {/* ── SECTION 10: CTA BANNER ───────────────────────────────── */}
      <CTABanner />

      {/* ── STYLES ───────────────────────────────── */}
      <style>{`
        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </main>
  );
}
