<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import { page } from '$app/state';
  import ColorBar from "$components/ColorBar.svelte";
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
    import WaveTransition from '$components/WaveTransition.svelte';

  let { children } = $props<{ children: Snippet }>();

  // Derive active page from current path
  const getActivePage = (pathname: string) => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/chapters')) return 'chapters';
    if (pathname.startsWith('/impact')) return 'impact';
    if (pathname.startsWith('/get-involved')) return 'get-involved';
    return 'home';
  };
</script>

<ColorBar />
<Nav activePage={getActivePage(page.url.pathname)} />

{@render children?.()}


{#if page.url.pathname != '/' && page.url.pathname != '/get-involved'}
    <WaveTransition topColor="fill-white" bottomColor="bg-yan-navy" />
     <section class="py-[60px] md:py-[80px] px-6 md:px-[60px] bg-yan-navy text-center relative overflow-hidden">
       <div
         class="absolute inset-0 pointer-events-none"
         style="background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(233,113,50,.15) 0%, transparent 70%);"
       ></div>
       <div class="relative z-10 max-w-[620px] mx-auto">
         <h2 class="font-serif font-black text-[clamp(1.9rem,3vw,2.8rem)] text-white leading-[1.1] tracking-[-0.02em] mb-[20px]">
           Become a Chapter Ambassador
         </h2>
         <p class="font-sans text-[1rem] text-white/60 leading-[1.75] font-medium mb-[32px]">
           Lead surveys at your school, present findings to your local government, and join a global network of young advocates who are actually changing things.
         </p>
         <a
           href="mailto:ayrasaraidhillon@gmail.com?subject=Ambassador Application"
           class="inline-flex items-center justify-center gap-[8px] py-[15px] px-[32px] rounded-full font-sans font-extrabold text-[0.95rem] no-underline bg-yan-yellow text-yan-navy"
         >
           Apply Now →
         </a>
       </div>
     </section>
     {/if}
     
<Footer />
