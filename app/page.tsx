'use client'

import { useState } from 'react'
import { ArrowRight, CalendarDays, ChevronDown, Menu, Play, Sparkles } from 'lucide-react'

const rooms = [
  { name: 'The Terrace Room', detail: 'King bed · City view', price: '$295', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85' },
  { name: 'The Garden Suite', detail: 'King bed · Private terrace', price: '$420', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85' },
  { name: 'The Canvas House', detail: 'Two bedrooms · Full residence', price: '$680', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85' },
]

const menuItems = [
  { category: 'From the kitchen', name: 'Whipped ricotta toast', detail: 'Sourdough, roasted grapes, thyme honey', price: '$14', image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=900&q=85' },
  { category: 'From the kitchen', name: 'Market grain bowl', detail: 'Charred vegetables, herbs, tahini', price: '$18', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85' },
  { category: 'At the bar', name: 'Garden spritz', detail: 'Elderflower, citrus, sparkling wine', price: '$15', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85' },
  { category: 'At the bar', name: 'Canvas old fashioned', detail: 'Bourbon, orange, smoked maple', price: '$17', image: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=900&q=85' },
  { category: 'Wines', name: 'Willamette pinot noir', detail: 'Bright cherry, silky tannins, Oregon', price: '$16', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85' },
  { category: 'Spirits', name: 'Barrel-aged rye', detail: 'Small-batch rye, served neat or on ice', price: '$18', image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=85' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [message, setMessage] = useState('')

  function handleBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Availability request received — we will be in touch shortly.')
  }

  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#1d2c2a]">
      <section className="relative min-h-[680px] overflow-hidden bg-[#17302c] text-[#f8f5ef]">
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=90" alt="Sunlit courtyard at Canvas Hotel" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d211f]/65 via-transparent to-[#10201d]/80" />
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <a href="#top" className="font-serif text-2xl tracking-[-0.04em]">canvas hotel<span className="text-[#d4a77a]">.</span></a>
          <nav className="hidden items-center gap-9 text-sm md:flex">
            <a href="#top" className="transition-colors hover:text-[#e2b98d]">Home</a>
            <a href="#stay" className="transition-colors hover:text-[#e2b98d]">Rooms</a>
            <a href="#journal" className="transition-colors hover:text-[#e2b98d]">Events & Meetings</a>
            <a href="#dining" className="transition-colors hover:text-[#e2b98d]">Restaurants</a>
            <a href="#contact" className="transition-colors hover:text-[#e2b98d]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#book" className="hidden border border-white/70 px-5 py-3 text-sm transition hover:bg-white hover:text-[#17302c] sm:block">Book a stay</a>
            <button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="border border-white/70 p-3 md:hidden"><Menu size={18} /></button>
          </div>
        </header>
        {menuOpen && <nav className="relative z-20 mx-6 flex flex-col gap-5 border border-white/30 bg-[#17302c]/95 p-6 text-sm md:hidden"><a href="#top" onClick={() => setMenuOpen(false)}>Home</a><a href="#stay" onClick={() => setMenuOpen(false)}>Rooms</a><a href="#journal" onClick={() => setMenuOpen(false)}>Events & Meetings</a><a href="#dining" onClick={() => setMenuOpen(false)}>Restaurants</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
        <div id="top" className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-24 pt-32 lg:px-10">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#e4bb91]"><span className="h-px w-8 bg-[#e4bb91]" /> A stay with room to breathe</p>
          <h1 className="max-w-4xl font-serif text-[clamp(4rem,10vw,9rem)] leading-[.86] tracking-[-0.07em]">Stay curious.<br /><em className="font-light">Stay awhile.</em></h1>
          <div className="mt-10 flex flex-wrap items-center gap-6"><a href="#book" className="group flex items-center gap-3 bg-[#e2b98d] px-6 py-4 text-sm font-medium text-[#17302c] transition hover:bg-[#f1d2af]">Find your room <ArrowRight size={17} className="transition group-hover:translate-x-1" /></a><button className="flex items-center gap-3 text-sm"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70"><Play size={13} fill="currentColor" /></span> Explore the hotel</button></div>
        </div>
      </section>

      <section id="book" className="relative z-20 mx-auto -mt-8 max-w-6xl px-5"><form onSubmit={handleBooking} className="grid gap-px bg-[#c6c1b7] shadow-xl md:grid-cols-[1.2fr_1.2fr_1fr_auto]"><label className="flex flex-col gap-2 bg-[#fffdf8] p-5 text-xs uppercase tracking-[0.14em] text-[#66716b]">Check in<input required type="date" className="bg-transparent text-sm normal-case tracking-normal text-[#1d2c2a] outline-none" /></label><label className="flex flex-col gap-2 bg-[#fffdf8] p-5 text-xs uppercase tracking-[0.14em] text-[#66716b]">Check out<input required type="date" className="bg-transparent text-sm normal-case tracking-normal text-[#1d2c2a] outline-none" /></label><label className="flex flex-col gap-2 bg-[#fffdf8] p-5 text-xs uppercase tracking-[0.14em] text-[#66716b]">Guests<select className="bg-transparent text-sm normal-case tracking-normal text-[#1d2c2a] outline-none"><option>2 guests</option><option>1 guest</option><option>3 guests</option><option>4 guests</option></select></label><button className="bg-[#d89d69] px-8 py-5 text-sm font-medium text-[#17302c] transition hover:bg-[#e8b47f] md:px-7">Check availability</button></form>{message && <p role="status" className="bg-[#17302c] px-5 py-3 text-sm text-white">{message}</p>}</section>

      <section id="story" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-40"><div><p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#af7653]">A different kind of hotel</p><h2 className="max-w-md font-serif text-5xl leading-[.95] tracking-[-0.05em] sm:text-6xl">A little more <em className="font-light">human.</em></h2></div><div className="max-w-xl self-end"><p className="text-xl leading-relaxed text-[#53605a]">Canvas is a small hotel in the heart of the city, made for slow mornings, long lunches, and the kind of nights you wish could last a little longer.</p><a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b border-[#1d2c2a] pb-2 text-sm">Get to know us <ArrowRight size={16} /></a></div></section>

      <section id="stay" className="bg-[#e6e1d8] px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-12 flex items-end justify-between"><div><p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#af7653]">Find your place</p><h2 className="font-serif text-5xl tracking-[-0.05em]">Rooms with a point of view.</h2></div><a href="#book" className="hidden items-center gap-2 text-sm md:flex">See all rooms <ArrowRight size={16} /></a></div><div className="grid gap-7 md:grid-cols-3">{rooms.map((room) => <article key={room.name} className="group"><div className="relative mb-5 aspect-[4/5] overflow-hidden"><img src={room.image} alt={room.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 bg-[#f4f1eb] px-3 py-2 text-xs">From {room.price}</span></div><h3 className="font-serif text-2xl">{room.name}</h3><p className="mt-2 text-sm text-[#6d756f]">{room.detail}</p></article>)}</div></div></section>

      <section id="dining" className="bg-[#17302c] px-6 py-24 text-[#f8f5ef] lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#e2b98d]">Eat, drink, linger</p><h2 className="max-w-xl font-serif text-5xl leading-[.95] tracking-[-0.05em] sm:text-6xl">Good things are<br /><em className="font-light">always on the table.</em></h2></div><p className="max-w-xs text-sm leading-relaxed text-white/60">A relaxed all-day menu of local ingredients, familiar comforts, and drinks worth staying for.</p></div><div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{menuItems.map((item) => <article key={item.name} className="group"><div className="mb-5 aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#e2b98d]">{item.category}</p><div className="flex items-baseline justify-between gap-3"><h3 className="font-serif text-2xl leading-none">{item.name}</h3><span className="text-sm text-[#e2b98d]">{item.price}</span></div><p className="mt-2 text-sm text-white/55">{item.detail}</p></article>)}</div></div></section>

      <section id="journal" className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[1.1fr_.9fr] lg:px-10"><div className="relative min-h-[430px] overflow-hidden"><img src="/images/social-hall-meetings.png" alt="Social hall with rows of seats set up for a meeting" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#10201d]/80 to-transparent p-8 text-white"><div><p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#e2b98d]">Events & meetings</p><h2 className="max-w-lg font-serif text-4xl leading-none">Bring people together in a room with room to think.</h2></div></div></div><div className="flex flex-col justify-center"><Sparkles className="mb-8 text-[#af7653]" size={25} /><p className="max-w-md font-serif text-3xl leading-tight">“A relaxed setting for thoughtful meetings, lively gatherings, and ideas worth sharing.”</p><p className="mt-6 text-sm text-[#6d756f]">— Canvas Hotel Events</p></div></section>

      <footer id="contact" className="bg-[#17302c] px-6 py-16 text-[#f8f5ef] lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><div className="font-serif text-3xl tracking-[-0.04em]">canvas hotel<span className="text-[#d4a77a]">.</span></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">A small, thoughtful hotel for curious people. 16 Willow Street, Portland.</p></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#d4a77a]">Explore</p><div className="flex flex-col gap-3 text-sm text-white/75"><a href="#stay">Rooms & suites</a><a href="#story">Our story</a><a href="#journal">The journal</a></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#d4a77a]">Say hello</p><p className="text-sm text-white/75">stay@canvashotel.com<br />+1 503 555 0142</p></div></div><div className="mx-auto mt-16 max-w-7xl border-t border-white/15 pt-6 text-xs text-white/45">© 2026 Canvas Hotel. Made for staying awhile.</div></footer>
    </main>
  )
}
