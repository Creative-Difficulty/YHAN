<script lang="ts">
  import H2 from "$components/H2.svelte";
</script>

<!-- HERO -->
<section class="py-[100px] md:py-[140px] px-6 md:px-[60px] pb-[60px] md:pb-[80px] bg-yan-white relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="
      background: radial-gradient(ellipse 60% 60% at 50% 0%, rgba(233,113,50,.07) 0%, transparent 70%),
                  radial-gradient(ellipse 40% 40% at 0% 100%, rgba(41,169,193,.06) 0%, transparent 70%),
                  radial-gradient(ellipse 40% 40% at 100% 100%, rgba(242,156,51,.05) 0%, transparent 70%);
    "
  ></div>
  <div class="relative z-10 max-w-[760px] text-center mx-auto">
    <h1 class="font-serif font-black text-[clamp(2.8rem,5vw,5rem)] leading-[1.05] tracking-[-0.02em] text-yan-navy mb-[24px]">
      Impact <em class="italic text-yan-orange">so far.</em>
    </h1>
    <p class="font-sans text-[1.08rem] leading-[1.78] text-yan-mid font-medium max-w-[560px] mx-auto">
      Our student-led chapters are creating measurable change across the globe.
    </p>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-0 mt-[44px] rounded-[16px] overflow-hidden border-[1.5px] border-yan-border bg-yan-white shadow-[0_4px_20px_rgba(35,44,61,0.06)] max-w-[520px] mx-auto">
      {#each [
        { n: "45K+",  l: "Students Reached",  color: "text-yan-orange" },
        { n: "25+",   l: "Engaged Schools",   color: "text-yan-cyan" },
        { n: "6",     l: "Countries",         color: "text-yan-yellow" },
      ] as s, i (i)}
        <div class="py-[20px] px-[8px] text-center {i === 0 ? 'border-r-[1.5px] border-b-[1.5px] sm:border-b-0 border-yan-border' : ''} {i === 1 ? 'sm:border-r-[1.5px] border-b-[1.5px] sm:border-b-0 border-yan-border' : ''} {i === 2 ? 'col-span-2 sm:col-span-1 border-yan-border' : ''}">
          <div class="font-serif font-black text-[2rem] leading-none {s.color}">
            {s.n}
          </div>
          <div class="font-sans text-[0.72rem] font-bold text-yan-mid mt-[4px]">
            {s.l}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- COUNTRIES -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yan-offwhite">
  <div class="max-w-[800px] mx-auto text-center">
    <H2>Where we're making a difference</H2>
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[20px] max-w-[700px] mx-auto">
      YAN chapters are established and actively engaged in schools across:
    </p>
    <div class="flex flex-wrap justify-center gap-[16px] mt-[32px]">
      {#each [
        { country: "United Kingdom", flag: "🇬🇧" },
        { country: "United Arab Emirates", flag: "🇦🇪" },
        { country: "United States", flag: "🇺🇸" },
        { country: "Tunisia", flag: "🇹🇳" },
        { country: "India", flag: "🇮🇳" },
        { country: "Chile", flag: "🇨🇱" },
      ] as { country, flag }}
        <div class="flex items-center gap-[8px] bg-yan-white border-[1.5px] border-yan-border rounded-full py-[10px] px-[20px]">
          <span class="text-[1.4rem]">{flag}</span>
          <span class="font-sans font-bold text-[0.9rem] text-yan-navy">{country}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- IMPACT ACHIEVEMENTS -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yan-white">
  <div class="max-w-[900px] mx-auto">
    <H2>What we've achieved</H2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[40px]">
      {#each [
        { icon: "🌍", title: "Global Peer Support Community", desc: "Built a global peer support WhatsApp community including 60 underserved schoolgirls in Afghanistan" },
        { icon: "📚", title: "Mental Health Resource Hubs", desc: "Developed student-led Mental Health Resource Hubs" },
        { icon: "🤫", title: "Quiet Study Spaces", desc: "Created quiet study spaces in 5 schools" },
        { icon: "⭐", title: "Staff-Star Program", desc: "Launched staff-star program in 3 schools" },
        { icon: "🎎", title: "Asian Cultural Clubs", desc: "Asian Cultural Clubs in 3 schools" },
        { icon: "🌱", title: "Community Gardens", desc: "Community garden in 2 schools" },
        { icon: "🔬", title: "Youth-Led Research", desc: "Supporting youth-led research through peer surveys and policy analysis" },
      ] as item}
        <div class="flex gap-[16px] p-[24px] bg-yan-offwhite rounded-[16px] border-[1.5px] border-yan-border items-center">
          <div class="text-[2rem] flex-shrink-0">{item.icon}</div>
          <div>
            <h3 class="font-serif font-bold text-[1.1rem] text-yan-navy mb-[6px]">{item.title}</h3>
            <p class="font-sans text-[0.95rem] leading-[1.6] text-yan-mid">{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
