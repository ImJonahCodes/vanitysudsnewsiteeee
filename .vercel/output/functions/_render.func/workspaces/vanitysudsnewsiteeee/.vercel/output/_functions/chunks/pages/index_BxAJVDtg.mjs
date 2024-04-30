import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_ca3TNr0t.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from './404_U7HbMAlc.mjs';
import 'clsx';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`<!-- Hero with Video Background -->${maybeRenderHead()}<div class="relative h-screen"> <!-- Video Background --> <video autoplay muted loop class="absolute inset-0 object-cover w-full h-full" id="bgVideo"> <source src="https://framerusercontent.com/assets/XTskzKwGEEMru7H35ZOzeZZJTCU.mp4" type="video/mp4"> </video> <!-- Dark Blue Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent" style="background-size: 200% 100%; background-position: 1000% 0%;"></div> <!-- Content --> <div class="absolute inset-0 flex flex-col items-center justify-center text-white"> <div class="max-w-5xl mx-auto px-4 xl:px-0"> <h1 class="font-semibold text-5xl md:text-6xl"> <span class="text-yellow-400">Preline Agency:</span> Transforming ideas into reality
</h1> <div class="max-w-4xl mt-5"> <p class="text-lg">It is a creative hub where imagination meets craftsmanship to transform ideas into tangible realities. At Preline Agency, we specialize in turning conceptual visions into concrete forms, whether it be through design, artistry, or technological innovation.</p> </div> </div> </div> </div>`;
}, "/workspaces/vanitysudsnewsiteeee/src/components/home/hero.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Astro Shadcn UI Template", "description": "This template helps you build apps with Astro, Tailwind CSS, and Shadcn UI." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "/workspaces/vanitysudsnewsiteeee/src/pages/index.astro", void 0);

const $$file = "/workspaces/vanitysudsnewsiteeee/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
