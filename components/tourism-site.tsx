'use client'

import { useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, Clock3, Search, Ticket, X } from 'lucide-react'

type Category = 'All' | 'Historical' | 'Nature' | 'Religious'

type Spot = {
  name: string
  category: Exclude<Category, 'All'>
  image: string
  description: string
  longDescription: string
  time: string
  ticket: string
  location: string
}

const spots: Spot[] = [
  { name: 'Ellora Caves', category: 'Historical', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ellora%20caves-GkiPCmpw1k7Sccgxhnl24Ne3vJHXk7.jpg', description: 'A monumental story carved into living rock.', longDescription: 'A UNESCO World Heritage Site where Buddhist, Hindu and Jain traditions meet in 34 extraordinary caves.', time: '9 AM – 5 PM', ticket: '₹40 onwards', location: 'Verul, 30 km from the city' },
  { name: 'Chhatrapati Sambhajinagar Caves', category: 'Religious', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chh.sambhajinagar%20caves-XerUaF65PkFZ6YqVUc6ekNrs9Htc14.jpg', description: 'Ancient Buddhist sanctuaries above the city.', longDescription: 'A chain of rock-cut Buddhist shrines with quiet chambers, sculpture and sweeping views over the city.', time: '9 AM – 5 PM', ticket: '₹15 onwards', location: 'Sambhajinagar city' },
  { name: 'Bibi Ka Maqbara', category: 'Historical', image: '/heritage-spots.png', description: 'The Deccan’s graceful answer to the Taj Mahal.', longDescription: 'A luminous marble mausoleum commissioned in 1661, framed by gardens and the rugged Deccan horizon.', time: '8 AM – 8 PM', ticket: '₹25 onwards', location: 'Begumpura, Sambhajinagar' },
  { name: 'Daulatabad Fort', category: 'Historical', image: '/heritage-spots.png', description: 'An impregnable medieval citadel on a volcanic hill.', longDescription: 'Climb through gates, moats and secret passages to one of India’s best-preserved hill forts.', time: '6 AM – 6 PM', ticket: '₹20 onwards', location: 'Daulatabad, 16 km away' },
  { name: 'Chhatrapati Shivaji Maharaj Museum', category: 'Historical', image: '/museum.png', description: 'Stories of the region, thoughtfully preserved.', longDescription: 'Discover arms, textiles, art and archaeology that map the layered history of the Marathwada region.', time: '10 AM – 5 PM', ticket: '₹10 onwards', location: 'Station Road, city centre' },
  { name: 'Goga Baba Hill', category: 'Nature', image: '/nature-spots.png', description: 'A sunrise trail with the city at your feet.', longDescription: 'A beloved short hike through rocky terrain, rewarded with panoramic sunrise and sunset views.', time: 'Open all day', ticket: 'Free entry', location: 'Goga Baba Hill, city' },
  { name: 'Siddharth Garden & Zoo', category: 'Nature', image: '/nature-spots.png', description: 'A green pause in the heart of the city.', longDescription: 'Stroll through landscaped gardens, a compact zoo and a peaceful lake-side setting.', time: '9 AM – 5 PM', ticket: '₹20 onwards', location: 'Central Bus Stand area' },
  { name: 'Himayat Bagh', category: 'Nature', image: '/nature-spots.png', description: 'Centuries-old gardens made for slow afternoons.', longDescription: 'A biodiversity heritage site with orchards, old water systems and a rich collection of native flora.', time: '6 AM – 7 PM', ticket: 'Free entry', location: 'Delhi Gate, city' },
]

export function TourismSite() {
  const [category, setCategory] = useState<Category>('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Spot | null>(null)
  const filtered = useMemo(() => spots.filter((spot) => (category === 'All' || spot.category === category) && spot.name.toLowerCase().includes(query.toLowerCase())), [category, query])

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b16] text-white selection:bg-[#f6a623] selection:text-[#070b16]">
      <section id="top" className="relative isolate flex min-h-[760px] items-end overflow-hidden pb-20 md:min-h-screen md:pb-28">
        <img src="/ellora-hero.png" alt="Ellora Kailasa Temple illuminated at sunrise" className="absolute inset-0 -z-20 size-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,7,17,.92)_0%,rgba(4,7,17,.58)_40%,rgba(4,7,17,.12)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#070b16_0%,transparent_36%)]" />
        <div className="pointer-events-none absolute right-0 top-28 z-[-5] hidden h-[min(68vh,620px)] w-[42%] overflow-hidden rounded-l-[3rem] border-y border-l border-white/15 shadow-2xl shadow-black/30 lg:block">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Delhi%20gate-erSC5vAscnVai39G77yGNJuDCtVl6i.jpg" alt="Delhi Gate in Chhatrapati Sambhajinagar" className="size-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b16] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b16]/70 via-transparent to-[#070b16]/10" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="max-w-3xl animate-[fadeUp_.9s_ease-out_both]">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.32em] text-[#f6a623]"><span className="h-px w-10 bg-[#f6a623]" /> Maharashtra · India</p>
            <h1 className="font-serif text-6xl leading-[.93] tracking-[-.04em] md:text-8xl lg:text-[112px]">The<br /><span className="text-white">city of gates.</span></h1>
            <p className="mt-7 max-w-md text-base leading-7 text-white/70 md:text-lg">Follow the stone, light and stories of Chhatrapati Sambhajinagar — a living archive of the Deccan.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#discover" className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#071022] transition hover:bg-[#f6a623]">Explore 8 wonders <ArrowDown size={16} /></a></div>
          </div>
          <div className="mt-20 flex items-end justify-between border-t border-white/20 pt-5 text-xs text-white/50"><span>19°53′ N · 75°20′ E</span><span className="hidden items-center gap-2 md:flex">Scroll to wander <ArrowDown size={14} className="animate-bounce" /></span><span>01 / 08</span></div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-36">
        <div><p className="eyebrow">01 / THE CITY</p><p className="mt-6 text-sm leading-6 text-white/50">Formerly Aurangabad</p></div>
        <div><h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">Where every turn reveals <em className="text-[#f6a623]">another century.</em></h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">A city shaped by empires, faiths and impossible craftsmanship. Known as the City of 52 Gates, Sambhajinagar is where the ancient and alive exist side by side.</p></div>
      </section>

      <section id="discover" className="bg-[#0b1223] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow">02 / THE WONDERS</p><h2 className="mt-5 font-serif text-5xl tracking-tight md:text-7xl">Eight reasons<br /><em className="text-[#f6a623]">to stay curious.</em></h2></div><div className="flex flex-col gap-4"><div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2"><Search size={15} className="text-white/50" /><input aria-label="Search wonders" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search wonders" className="w-40 bg-transparent text-sm outline-none placeholder:text-white/35" /></div><div className="flex flex-wrap gap-2">{(['All', 'Historical', 'Nature', 'Religious'] as Category[]).map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${category === item ? 'bg-[#f6a623] text-[#071022]' : 'border border-white/15 text-white/60 hover:text-white'}`}>{item}</button>)}</div></div></div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filtered.map((spot, index) => <article key={spot.name} onClick={() => setSelected(spot)} className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111a2f] transition duration-500 hover:-translate-y-2 hover:border-[#f6a623]/60 hover:shadow-2xl hover:shadow-[#f6a623]/10" style={{ animationDelay: `${index * 70}ms` }}><div className="relative aspect-[4/3] overflow-hidden"><img src={spot.image} alt={spot.name} className="size-full object-cover object-center transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-[#111a2f] to-transparent opacity-80" /><span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#071022]/50 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur">{spot.category}</span><span className="absolute bottom-4 right-4 grid size-9 place-items-center rounded-full bg-[#f6a623] text-[#071022] transition group-hover:rotate-[-45deg]"><ArrowRight size={16} /></span></div><div className="px-5 pb-5"><h3 className="font-serif text-2xl">{spot.name}</h3><p className="mt-2 min-h-10 text-sm leading-5 text-white/55">{spot.description}</p><div className="mt-5 flex gap-4 border-t border-white/10 pt-4 text-[11px] text-white/45"><span className="flex items-center gap-1.5"><Clock3 size={13} />{spot.time}</span><span className="flex items-center gap-1.5"><Ticket size={13} />{spot.ticket}</span></div></div></article>)}</div>{filtered.length === 0 && <p className="py-20 text-center text-white/50">No wonders found. Try another search.</p>}</div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 md:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-white/40 md:flex-row md:items-center"><span className="font-semibold tracking-[.2em] text-white">SAMBHAJINAGAR<span className="text-[#f6a623]">.</span></span><span>Made by BCA 2nd Year Student · DITMS College, Chhatrapati Sambhajinagar</span><span>© 2026</span></div></footer>

      {selected && <div className="fixed inset-0 z-50 grid place-items-center bg-[#02040a]/80 p-5 backdrop-blur-md" onClick={() => setSelected(null)}><div role="dialog" aria-modal="true" aria-label={selected.name} className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/15 bg-[#111a2f] shadow-2xl" onClick={(event) => event.stopPropagation()}><button aria-label="Close dialog" onClick={() => setSelected(null)} className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full bg-[#071022]/70 text-white transition hover:bg-[#f6a623] hover:text-[#071022]"><X size={18} /></button><img src={selected.image} alt={selected.name} className="max-h-80 w-full object-cover" /><div className="p-7 md:p-10"><p className="eyebrow">{selected.category} · {selected.location}</p><h2 className="mt-4 font-serif text-4xl md:text-5xl">{selected.name}</h2><p className="mt-5 max-w-2xl leading-7 text-white/65">{selected.longDescription}</p><div className="mt-7 flex flex-wrap gap-3 text-sm text-white/70"><span className="rounded-full border border-white/10 px-4 py-2"><Clock3 className="mr-2 inline" size={15} />{selected.time}</span><span className="rounded-full border border-white/10 px-4 py-2"><Ticket className="mr-2 inline" size={15} />{selected.ticket}</span></div></div></div></div>}
    </main>
  )
}
