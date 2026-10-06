import { l as vue_exports } from "./head-adzeRItZ.js";
import { i as server_renderer_exports, r as _sfc_main } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
//#region \0virtual:public?%2Fimages%2Fsocial-hall-meetings.png
var _virtual_public__2Fimages_2Fsocial_hall_meetings_default = publicAssetsURL("/images/social-hall-meetings.png");
//#endregion
//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue_exports.defineComponent)({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const menuOpen = (0, vue_exports.ref)(false);
		const message = (0, vue_exports.ref)("");
		const rooms = [
			{
				name: "The Terrace Room",
				detail: "King bed · City view",
				price: "$295",
				image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85"
			},
			{
				name: "The Garden Suite",
				detail: "King bed · Private terrace",
				price: "$420",
				image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85"
			},
			{
				name: "The Canvas House",
				detail: "Two bedrooms · Full residence",
				price: "$680",
				image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
			}
		];
		const menuItems = [
			{
				category: "From the kitchen",
				name: "Whipped ricotta toast",
				detail: "Sourdough, roasted grapes, thyme honey",
				price: "$14",
				image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=900&q=85"
			},
			{
				category: "From the kitchen",
				name: "Market grain bowl",
				detail: "Charred vegetables, herbs, tahini",
				price: "$18",
				image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
			},
			{
				category: "At the bar",
				name: "Garden spritz",
				detail: "Elderflower, citrus, sparkling wine",
				price: "$15",
				image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85"
			},
			{
				category: "At the bar",
				name: "Canvas old fashioned",
				detail: "Bourbon, orange, smoked maple",
				price: "$17",
				image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=900&q=85"
			},
			{
				category: "Wines",
				name: "Willamette pinot noir",
				detail: "Bright cherry, silky tannins, Oregon",
				price: "$16",
				image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85"
			},
			{
				category: "Spirits",
				name: "Barrel-aged rye",
				detail: "Small-batch rye, served neat or on ice",
				price: "$18",
				image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=85"
			}
		];
		const navItems = [
			{
				label: "Home",
				href: "#top"
			},
			{
				label: "Rooms",
				href: "#stay"
			},
			{
				label: "Events & Meetings",
				href: "#journal"
			},
			{
				label: "Restaurants",
				href: "#dining"
			},
			{
				label: "Contact",
				href: "#contact"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main;
			_push(`<main${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "min-h-screen bg-[#f4f1eb] text-[#1d2c2a]" }, _attrs))}><section id="top" class="relative min-h-[680px] overflow-hidden bg-[#17302c] text-[#f8f5ef]"><img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&amp;fit=crop&amp;w=2200&amp;q=90" alt="Sunlit courtyard at Canvas Hotel" class="absolute inset-0 h-full w-full object-cover opacity-70"><div class="absolute inset-0 bg-gradient-to-b from-[#0d211f]/65 via-transparent to-[#10201d]/80"></div><header class="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10"><a href="#top" class="font-serif text-2xl tracking-[-0.04em]">canvas hotel<span class="text-[#d4a77a]">.</span></a><nav class="hidden items-center gap-9 text-sm md:flex" aria-label="Main navigation"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(navItems, (item) => {
				_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", item.href)} class="transition-colors hover:text-[#e2b98d]">${(0, server_renderer_exports.ssrInterpolate)(item.label)}</a>`);
			});
			_push(`<!--]--></nav><div class="flex items-center gap-3"><a href="#book" class="hidden border border-white/70 px-5 py-3 text-sm transition hover:bg-white hover:text-[#17302c] sm:block">Book a stay</a><button aria-label="Open menu" class="border border-white/70 p-3 md:hidden">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_UIcon, {
				name: "i-lucide-menu",
				class: "size-5"
			}, null, _parent));
			_push(`</button></div></header>`);
			if ((0, vue_exports.unref)(menuOpen)) {
				_push(`<nav class="relative z-20 mx-6 flex flex-col gap-5 border border-white/30 bg-[#17302c]/95 p-6 text-sm md:hidden" aria-label="Mobile navigation"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(navItems, (item) => {
					_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", item.href)}>${(0, server_renderer_exports.ssrInterpolate)(item.label)}</a>`);
				});
				_push(`<!--]--></nav>`);
			} else _push(`<!---->`);
			_push(`<div class="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-24 pt-32 lg:px-10"><p class="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#e4bb91]"><span class="h-px w-8 bg-[#e4bb91]"></span> A stay with room to breathe</p><h1 class="max-w-4xl font-serif text-[clamp(4rem,10vw,9rem)] leading-[.86] tracking-[-0.07em]">Stay curious.<br><em class="font-light">Stay awhile.</em></h1><div class="mt-10 flex flex-wrap items-center gap-6"><a href="#book" class="group flex items-center gap-3 bg-[#e2b98d] px-6 py-4 text-sm font-medium text-[#17302c] transition hover:bg-[#f1d2af]">Find your room `);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_UIcon, {
				name: "i-lucide-arrow-right",
				class: "size-4 transition group-hover:translate-x-1"
			}, null, _parent));
			_push(`</a><a href="#story" class="flex items-center gap-3 text-sm"><span class="flex size-11 items-center justify-center rounded-full border border-white/70">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_UIcon, {
				name: "i-lucide-play",
				class: "size-3 fill-current"
			}, null, _parent));
			_push(`</span> Explore the hotel</a></div></div></section><section id="book" class="relative z-20 mx-auto -mt-8 max-w-6xl px-5"><form class="grid gap-px bg-[#c6c1b7] shadow-xl md:grid-cols-[1.2fr_1.2fr_1fr_auto]"><label class="flex flex-col gap-2 bg-[#fffdf8] p-5 text-xs uppercase tracking-[0.14em] text-[#66716b]">Check in<input required type="date" class="bg-transparent text-sm normal-case tracking-normal text-[#1d2c2a] outline-none"></label><label class="flex flex-col gap-2 bg-[#fffdf8] p-5 text-xs uppercase tracking-[0.14em] text-[#66716b]">Check out<input required type="date" class="bg-transparent text-sm normal-case tracking-normal text-[#1d2c2a] outline-none"></label><label class="flex flex-col gap-2 bg-[#fffdf8] p-5 text-xs uppercase tracking-[0.14em] text-[#66716b]">Guests<select class="bg-transparent text-sm normal-case tracking-normal text-[#1d2c2a] outline-none"><option>2 guests</option><option>1 guest</option><option>3 guests</option><option>4 guests</option></select></label><button class="bg-[#d89d69] px-8 py-5 text-sm font-medium text-[#17302c] transition hover:bg-[#e8b47f] md:px-7">Check availability</button></form>`);
			if ((0, vue_exports.unref)(message)) _push(`<p role="status" class="bg-[#17302c] px-5 py-3 text-sm text-white">${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(message))}</p>`);
			else _push(`<!---->`);
			_push(`</section><section id="story" class="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-40"><div><p class="mb-5 text-xs uppercase tracking-[0.25em] text-[#af7653]">A different kind of hotel</p><h2 class="max-w-md font-serif text-5xl leading-[.95] tracking-[-0.05em] sm:text-6xl">A little more <em class="font-light">human.</em></h2></div><div class="max-w-xl self-end"><p class="text-xl leading-relaxed text-[#53605a]">Canvas is a small hotel in the heart of the city, made for slow mornings, long lunches, and the kind of nights you wish could last a little longer.</p><a href="#contact" class="mt-8 inline-flex items-center gap-3 border-b border-[#1d2c2a] pb-2 text-sm">Get to know us `);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_UIcon, {
				name: "i-lucide-arrow-right",
				class: "size-4"
			}, null, _parent));
			_push(`</a></div></section><section id="stay" class="bg-[#e6e1d8] px-6 py-24 lg:px-10"><div class="mx-auto max-w-7xl"><div class="mb-12 flex items-end justify-between"><div><p class="mb-4 text-xs uppercase tracking-[0.25em] text-[#af7653]">Find your place</p><h2 class="font-serif text-5xl tracking-[-0.05em]">Rooms with a point of view.</h2></div><a href="#book" class="hidden items-center gap-2 text-sm md:flex">See all rooms `);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_UIcon, {
				name: "i-lucide-arrow-right",
				class: "size-4"
			}, null, _parent));
			_push(`</a></div><div class="grid gap-7 md:grid-cols-3"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(rooms, (room) => {
				_push(`<article class="group"><div class="relative mb-5 aspect-[4/5] overflow-hidden"><img${(0, server_renderer_exports.ssrRenderAttr)("src", room.image)}${(0, server_renderer_exports.ssrRenderAttr)("alt", room.name)} class="h-full w-full object-cover transition duration-700 group-hover:scale-105"><span class="absolute left-4 top-4 bg-[#f4f1eb] px-3 py-2 text-xs">From ${(0, server_renderer_exports.ssrInterpolate)(room.price)}</span></div><h3 class="font-serif text-2xl">${(0, server_renderer_exports.ssrInterpolate)(room.name)}</h3><p class="mt-2 text-sm text-[#6d756f]">${(0, server_renderer_exports.ssrInterpolate)(room.detail)}</p></article>`);
			});
			_push(`<!--]--></div></div></section><section id="dining" class="bg-[#17302c] px-6 py-24 text-[#f8f5ef] lg:px-10"><div class="mx-auto max-w-7xl"><div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p class="mb-4 text-xs uppercase tracking-[0.25em] text-[#e2b98d]">Eat, drink, linger</p><h2 class="max-w-xl font-serif text-5xl leading-[.95] tracking-[-0.05em] sm:text-6xl">Good things are<br><em class="font-light">always on the table.</em></h2></div><p class="max-w-xs text-sm leading-relaxed text-white/60">A relaxed all-day menu of local ingredients, familiar comforts, and drinks worth staying for.</p></div><div class="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(menuItems, (item) => {
				_push(`<article class="group"><div class="mb-5 aspect-[4/3] overflow-hidden"><img${(0, server_renderer_exports.ssrRenderAttr)("src", item.image)}${(0, server_renderer_exports.ssrRenderAttr)("alt", item.name)} class="h-full w-full object-cover transition duration-700 group-hover:scale-105"></div><p class="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#e2b98d]">${(0, server_renderer_exports.ssrInterpolate)(item.category)}</p><div class="flex items-baseline justify-between gap-3"><h3 class="font-serif text-2xl leading-none">${(0, server_renderer_exports.ssrInterpolate)(item.name)}</h3><span class="text-sm text-[#e2b98d]">${(0, server_renderer_exports.ssrInterpolate)(item.price)}</span></div><p class="mt-2 text-sm text-white/55">${(0, server_renderer_exports.ssrInterpolate)(item.detail)}</p></article>`);
			});
			_push(`<!--]--></div></div></section><section id="journal" class="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[1.1fr_.9fr] lg:px-10"><div class="relative min-h-[430px] overflow-hidden"><img${(0, server_renderer_exports.ssrRenderAttr)("src", _virtual_public__2Fimages_2Fsocial_hall_meetings_default)} alt="Social hall with rows of seats set up for a meeting" class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 flex items-end bg-gradient-to-t from-[#10201d]/80 to-transparent p-8 text-white"><div><p class="mb-3 text-xs uppercase tracking-[0.2em] text-[#e2b98d]">Events &amp; meetings</p><h2 class="max-w-lg font-serif text-4xl leading-none">Bring people together in a room with room to think.</h2></div></div></div><div class="flex flex-col justify-center">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(_component_UIcon, {
				name: "i-lucide-sparkles",
				class: "mb-8 size-6 text-[#af7653]"
			}, null, _parent));
			_push(`<p class="max-w-md font-serif text-3xl leading-tight">“A relaxed setting for thoughtful meetings, lively gatherings, and ideas worth sharing.”</p><p class="mt-6 text-sm text-[#6d756f]">— Canvas Hotel Events</p></div></section><footer id="contact" class="bg-[#17302c] px-6 py-16 text-[#f8f5ef] lg:px-10"><div class="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><div class="font-serif text-3xl tracking-[-0.04em]">canvas hotel<span class="text-[#d4a77a]">.</span></div><p class="mt-5 max-w-xs text-sm leading-relaxed text-white/60">A small, thoughtful hotel for curious people. 16 Willow Street, Portland.</p></div><div><p class="mb-5 text-xs uppercase tracking-[0.2em] text-[#d4a77a]">Explore</p><div class="flex flex-col gap-3 text-sm text-white/75"><a href="#stay">Rooms &amp; suites</a><a href="#story">Our story</a><a href="#journal">The journal</a></div></div><div><p class="mb-5 text-xs uppercase tracking-[0.2em] text-[#d4a77a]">Say hello</p><p class="text-sm text-white/75">stay@canvashotel.com<br>+1 503 555 0142</p></div></div><div class="mx-auto mt-16 max-w-7xl border-t border-white/15 pt-6 text-xs text-white/45">© 2026 Canvas Hotel. Made for staying awhile.</div></footer></main>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { pages_default as default };

//# sourceMappingURL=pages-ehHSsLfM.js.map