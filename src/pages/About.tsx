import { ShieldCheck, Award, Zap, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function About() {
  usePageTitle(
    'Om Gc Elteknik AB | Behörig elektriker i Stockholm',
    'Läs om Gc Elteknik AB. Vi erbjuder professionella elinstallationer, belysningslösningar, elcentraler och laddboxar för privatpersoner och företag i Stockholm med omnejd.'
  );

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/about-hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.80) 0%, rgba(15, 23, 42, 0.66) 50%, rgba(15, 23, 42, 0.86) 100%)',
        }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Om Gc Elteknik AB
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="scale-x-center" delay={150} duration={0.6}>
              <span style={{ display: 'block', width: '60px', height: '2px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '2px', margin: '14px auto 0' }} />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: '1.05rem',
                maxWidth: '640px',
                margin: '20px auto 0',
                lineHeight: 1.6,
              }}>
                Certifierade elinstallationer och belysningsdesign i Stockholm. Vi sätter elsäkerhet, kvalitet och nöjda kunder i främsta rummet.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div style={container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>

            {/* Left: Brand Badge / Logo Presentation */}
            <ScrollReveal animation="fade-right">
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
                border: '1px solid #e2e8f0',
                aspectRatio: '1/1',
                maxWidth: '420px',
                margin: '0 auto',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '36px',
                boxSizing: 'border-box',
              }}>
                <img
                  src="/about.jpg"
                  alt="Gc Elteknik AB logotyp och varumärke"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Story */}
            <div>
              <ScrollReveal animation="fade-left">
                <span style={{
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'inline-block',
                  marginBottom: '10px',
                  background: '#e2e8f0',
                  padding: '4px 14px',
                  borderRadius: '999px',
                }}>
                  Vår Bakgrund och Expertis
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 20px 0',
                }}>
                  Certifierad elteknik och personligt engagemang i Stockholm
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    Gc Elteknik AB drivs av en stark passion för säkra, moderna och estetiskt tilltalande elinstallationer för både hem och företag.
                  </p>
                  
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                  }}>
                    Vi hjälper fastighetsägare, bostadsrättsföreningar, restauranger och privatpersoner i hela Stockholmsregionen. Vår verksamhet omfattar allt från kompletta elinstallationer vid renovering och nybyggnad till exklusiv belysningsdesign, byte av omoderna säkringsskåp och framtidssäkra laddboxar för elbilar.
                  </p>

                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    Vi är auktoriserade hos Elsäkerhetsverket och lägger stor vikt vid noggrannhet, punktlighet och transparent kommunikation. Varje installation lämnas komplett dokumenterad och provad enligt branschens högsta standard.
                  </p>

                  {/* Vision Card */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderLeft: '4px solid #0f172a',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '28px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      lineHeight: 1.5,
                      margin: '0 0 10px 0',
                    }}>
                      Vår målsättning: Säkra, energieffektiva och inspirerande elmiljöer där varje detalj håller högsta klass.
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      margin: '0 0 12px 0',
                    }}>
                      Vi finns tillgängliga för personlig rådgivning och hjälper er att hitta de smartaste lösningarna för er fastighet eller verksamhet.
                    </p>
                    <span style={{
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Gabriel Gezer, VD och Grundare Gc Elteknik AB
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för offert och rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION C: AUKTORISERAD ELINSTALLATÖR ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <ScrollReveal animation="fade-down">
              <span style={{
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'inline-block',
                marginBottom: '10px',
                background: '#e2e8f0',
                padding: '4px 14px',
                borderRadius: '999px',
              }}>
                Auktoriserad Elinstallatör
              </span>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                lineHeight: 1.2,
                margin: '0 0 12px 0',
              }}>
                Din personliga elektriker i Stockholm
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                Hos Gc Elteknik har du alltid direktkontakt med den auktoriserade elektrikern som planerar och utför dina installationer.
              </p>
            </ScrollReveal>
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <ScrollReveal animation="fade-up">
              <div style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: 'clamp(32px, 4vw, 44px)',
                boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0a1128 0%, #1e293b 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  marginBottom: '20px',
                  border: '2px solid rgba(255, 183, 3, 0.4)',
                  boxShadow: '0 4px 16px rgba(10, 17, 40, 0.15)',
                }}>
                  GG
                </div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-dark)' }}>
                  Gabriel Gezer
                </h3>
                <div style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.95rem', marginBottom: '16px' }}>
                  Grundare och Auktoriserad Elinstallatör
                </div>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.7, margin: '0 0 28px 0', maxWidth: '580px' }}>
                  Med över 12 års gedigen erfarenhet inom elinstallationer, belysningsdesign och anläggningsansvar driver Gabriel Gc Elteknik AB med fokus på kompromisslös elsäkerhet, punktlighet och personlig service. Du slipper opersonliga kundtjänster och fördyrande mellanhänder – från första offerten till färdig anläggning.
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '12px',
                }}>
                  {[
                    'Auktoriserad hos Elsäkerhetsverket',
                    'Full ansvarsförsäkring och garanti',
                    'Direktkontakt utan mellanhänder',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        padding: '6px 14px',
                        borderRadius: '999px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#0a1128',
                      }}
                    >
                      <CheckCircle2 size={15} color="#ffb703" strokeWidth={2.5} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION D: KÄRNVÄRDEN / TRYGGHET ─────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }} className="values-grid">
            {[
              {
                icon: ShieldCheck,
                title: 'Auktorisation och Elsäkerhet',
                desc: 'Registrerat elinstallationsföretag hos Elsäkerhetsverket. Vi följer alla säkerhetsstandarder för trygga installationer.',
              },
              {
                icon: Award,
                title: 'Kvalitetsarbete och Trygghetsgaranti',
                desc: 'Vi använder endast typgodkända kvalitetskomponenter från ledande tillverkare för långvarig och säker drift.',
              },
              {
                icon: Zap,
                title: 'Lokal närvaro i Stockholm',
                desc: 'Snabba inställelsetider och personlig kontakt över hela Storstockholm för både akuta ärenden och planerade entreprenader.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)',
                  }}>
                    <Icon size={24} color="#ffffff" />
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-text-dark)',
                    margin: '0 0 10px 0',
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'var(--color-gray-600)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                  }}>
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA ────────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid img {
            max-width: 260px !important;
            margin: 0 auto;
          }
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
