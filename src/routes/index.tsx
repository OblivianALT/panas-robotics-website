import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, ChevronDown, Cpu, Menu, MoveRight, Radio, X } from 'lucide-react'

const heroViews = [
  { label: 'THE MACHINE', title: 'Built to move\nideas forward.', detail: 'Precision, persistence, and a little bit of orange.', image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?auto=format&fit=crop&w=1600&q=85', stat: '01 / 03' },
  { label: 'THE TEAM', title: 'Curious minds.\nOne alliance.', detail: 'Students learning to lead, listen, and build together.', image: 'https://images.unsplash.com/photo-1581092333322-31d2fd38a35e?auto=format&fit=crop&w=1600&q=85', stat: '02 / 03' },
  { label: 'THE MISSION', title: 'Engineering\nfor everyone.', detail: 'Taking the joy of STEM beyond the competition field.', image: 'https://images.unsplash.com/photo-1527612820672-5b56351f7346?auto=format&fit=crop&w=1600&q=85', stat: '03 / 03' },
]
const updates = [
  { date: '09.14.24', tag: 'FIELD NOTES', title: 'A new season, a new question: how far can we take it?' },
  { date: '08.29.24', tag: 'OUTREACH', title: 'Panas Robotics opens the workshop for a Saturday of STEM.' },
  { date: '07.06.24', tag: 'THE BUILD', title: 'From sketches to strategy: the first chassis takes shape.' },
]

export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title: 'Panas Robotics · FTC #25122' }, { name: 'description', content: 'Panas Robotics is an FTC team building bold robots and brighter futures.' }] }),
  component: Home,
})

function Home() {
  const [view, setView] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = heroViews[view]
  return (
    <main className="overflow-hidden bg-background">
      <nav className="absolute z-20 flex w-full items-center justify-between px-6 py-6 text-sm text-primary-foreground mix-blend-difference md:px-12">
        <a href="#top" className="font-mono text-xs font-bold tracking-[0.18em]">PANAS / ROBOTICS</a>
        <div className="hidden items-center gap-9 font-mono text-[10px] tracking-[0.2em] md:flex"><a href="#story" className="transition-opacity hover:opacity-60">OUR STORY</a><a href="#updates" className="transition-opacity hover:opacity-60">UPDATES</a><a href="#connect" className="transition-opacity hover:opacity-60">CONNECT</a></div>
        <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {menuOpen && <div className="absolute right-5 top-16 z-30 flex w-48 flex-col gap-4 bg-accent p-5 font-mono text-xs text-accent-foreground shadow-lg md:hidden"><a href="#story" onClick={() => setMenuOpen(false)}>OUR STORY</a><a href="#updates" onClick={() => setMenuOpen(false)}>UPDATES</a><a href="#connect" onClick={() => setMenuOpen(false)}>CONNECT</a></div>}

      <section id="top" className="relative min-h-[720px] bg-accent text-accent-foreground lg:h-[min(900px,100vh)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.14_0.02_264_/_0.84)_0%,oklch(0.14_0.02_264_/_0.5)_43%,oklch(0.14_0.02_264_/_0.08)_100%)]" />
        <img key={active.image} src={active.image} alt="Robotics team building and testing a robot" className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,transparent_0%,oklch(0.14_0.02_264_/_0.18)_55%,oklch(0.14_0.02_264_/_0.55)_100%)]" />
        <div className="relative mx-auto flex min-h-[720px] max-w-[1500px] flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-20 lg:h-full lg:pb-24">
          <div className="mb-auto pt-24 font-mono text-[10px] tracking-[0.18em] text-primary"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary" />FTC TEAM 25122 / EST. 2024</div>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_280px]"><div className="max-w-4xl"><p className="mb-5 font-mono text-xs tracking-[0.28em] text-primary">{active.label}</p><h1 className="whitespace-pre-line font-serif text-[clamp(3.7rem,9vw,8.7rem)] leading-[0.87] tracking-[-0.055em]">{active.title}</h1></div><div className="border-l border-primary/60 pl-5 text-sm leading-relaxed text-primary-foreground/80"><p>{active.detail}</p><div className="mt-7 font-mono text-[10px] tracking-[0.18em] text-primary">{active.stat}</div></div></div>
          <div className="mt-12 flex items-center justify-between border-t border-primary-foreground/25 pt-5"><div className="flex gap-2">{heroViews.map((item, index) => <button key={item.label} onClick={() => setView(index)} aria-label={`Show ${item.label.toLowerCase()}`} aria-pressed={view === index} className={`h-1 transition-all duration-300 ${view === index ? 'w-12 bg-primary' : 'w-5 bg-primary-foreground/50 hover:bg-primary-foreground'}`} />)}</div><a href="#story" className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] transition-colors hover:text-primary">EXPLORE <ChevronDown size={14} /></a></div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-[1500px] gap-14 px-6 py-24 md:px-12 md:py-36 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="font-mono text-[10px] tracking-[0.22em] text-primary">01 / WHY WE BUILD</p><h2 className="mt-5 max-w-md font-serif text-5xl leading-[0.94] tracking-[-0.045em] md:text-7xl">The future is a team sport.</h2></div><div className="max-w-xl lg:pt-16"><p className="text-xl leading-relaxed md:text-2xl">Panas Robotics is a student-led FTC team built around one simple belief: the best way to learn engineering is to make something that has to work.</p><p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">We prototype fast, debug together, and show up for the people around us. Every season is a new chance to make the robot smarter—and make the room around it bigger.</p><div className="mt-12 flex items-center gap-5 border-t border-border pt-5 font-mono text-[10px] tracking-[0.16em] text-muted-foreground"><Cpu size={20} className="text-primary" /> DESIGN / BUILD / REPEAT <MoveRight size={18} className="ml-auto text-primary" /></div></div></section>

      <section className="bg-accent px-6 py-20 text-accent-foreground md:px-12 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 md:grid-cols-3"><div><p className="font-mono text-[10px] tracking-[0.22em] text-primary">02 / BY THE NUMBERS</p><p className="mt-8 font-serif text-7xl tracking-[-0.06em]">25122</p><p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-primary-foreground/60">OUR FTC NUMBER</p></div><div className="border-t border-primary-foreground/20 pt-5"><p className="font-serif text-3xl leading-tight">More than a robot.</p><p className="mt-4 text-sm leading-relaxed text-primary-foreground/65">A space for young people to find their voice through science, design, and competition.</p></div><div className="border-t border-primary-foreground/20 pt-5"><p className="font-serif text-3xl leading-tight">Built in public.</p><p className="mt-4 text-sm leading-relaxed text-primary-foreground/65">We share the messy middle—the failures, fixes, and small wins that make the final match possible.</p></div></div></section>

      <section id="updates" className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-36"><div className="mb-12 flex items-end justify-between border-b border-border pb-5"><div><p className="font-mono text-[10px] tracking-[0.22em] text-primary">03 / LATEST FROM THE WORKSHOP</p><h2 className="mt-4 font-serif text-5xl tracking-[-0.045em] md:text-6xl">Field notes</h2></div><Radio className="hidden text-primary md:block" size={28} /></div><div>{updates.map((update) => <article key={update.date} className="group grid gap-4 border-b border-border py-7 transition-colors hover:bg-secondary md:grid-cols-[140px_150px_1fr_24px] md:items-center md:px-4"><span className="font-mono text-[10px] text-muted-foreground">{update.date}</span><span className="font-mono text-[10px] tracking-[0.15em] text-primary">{update.tag}</span><h3 className="max-w-2xl font-serif text-2xl leading-tight md:text-3xl">{update.title}</h3><ArrowUpRight className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} /></article>)}</div></section>

      <section id="connect" className="relative overflow-hidden bg-primary px-6 py-24 text-primary-foreground md:px-12 md:py-32"><div className="absolute -right-20 -top-40 h-96 w-96 rounded-full border-[1px] border-primary-foreground/20" /><div className="absolute -right-4 -top-24 h-64 w-64 rounded-full border-[1px] border-primary-foreground/20" /><div className="relative mx-auto flex max-w-[1500px] flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="font-mono text-[10px] tracking-[0.22em] text-primary-foreground/70">04 / COME SAY HELLO</p><h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] md:text-8xl">Bring a question.<br />Leave inspired.</h2></div><div className="max-w-xs"><p className="text-sm leading-relaxed text-primary-foreground/75">Want to collaborate, mentor, or see what we’re building? We’d love to hear from you.</p><a href="mailto:panasrobotics@example.com" className="mt-7 inline-flex items-center gap-3 border-b border-primary-foreground pb-2 font-mono text-xs tracking-[0.12em] transition-opacity hover:opacity-65">GET IN TOUCH <ArrowUpRight size={16} /></a></div></div></section>

      <footer className="flex flex-col justify-between gap-5 bg-accent px-6 py-7 text-primary-foreground md:flex-row md:items-center md:px-12"><span className="font-mono text-[10px] tracking-[0.17em]">PANAS ROBOTICS / FTC #25122</span><span className="font-mono text-[10px] tracking-[0.17em] text-primary-foreground/50">MADE BY THE TEAM, FOR THE TEAM</span><a href="#top" className="flex items-center gap-2 font-mono text-[10px] tracking-[0.17em] hover:text-primary">BACK TO TOP <ArrowUpRight size={15} /></a></footer>
    </main>
  )
}
