<script lang="ts">
  import H2 from "$components/H2.svelte";
  import StatsGrid from "$components/StatsGrid.svelte";
</script>

<!-- HERO -->
<section id="hero" class="min-h-screen flex flex-col justify-center items-center gap-[50px] md:gap-[70px] px-6 md:px-[60px] pt-[120px] md:pt-[150px] pb-[80px] md:pb-[100px] bg-yan-white relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="
      background: radial-gradient(ellipse 55% 55% at 50% 0%, rgba(233,113,50,.06) 0%, transparent 70%),
                  radial-gradient(ellipse 50% 50% at 0% 100%, rgba(41,169,193,.05) 0%, transparent 70%),
                  radial-gradient(ellipse 50% 50% at 100% 100%, rgba(242,156,51,.05) 0%, transparent 70%);
    "
  ></div>

  <div class="relative z-10 text-center flex flex-col items-center w-full max-w-[800px]">
    <h1 class="font-serif font-black text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-yan-navy mb-[24px]">
      Your voice can<br />
      <em class="italic text-yan-orange">change</em> the rules.
    </h1>

    <p class="font-sans text-[1.12rem] md:text-[1.2rem] leading-[1.78] text-yan-mid font-medium mb-[40px] max-w-[600px] mx-auto">
      The Youth Accountability Network is a student-led initiative that empowers young people to research challenges in their community and makes decisions based on their needs.
    </p>

    <div class="flex flex-col sm:flex-row gap-[16px] justify-center flex-wrap">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdoOTqhgSYTYmk_ldiXBlzkqMX20mMCwuAk2XM-KHYZJvbRqg/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-[8px] py-[16px] px-[32px] rounded-full font-sans font-extrabold text-[0.95rem] no-underline bg-yan-orange text-white shadow-[0_6px_20px_rgba(233,113,50,.28)] hover:opacity-90 transition-opacity"
      >
        Become an Ambassador
      </a>
      <a
        href="/about"
        class="inline-flex items-center justify-center gap-[8px] py-[15px] px-[30px] rounded-full font-sans font-bold text-[0.95rem] no-underline text-yan-navy border-2 border-yan-border bg-transparent hover:bg-yan-light transition-colors"
      >
        Our Mission →
      </a>
    </div>
  </div>

  <StatsGrid />
</section>

<!-- BENEFITS -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yan-white">
  <div class="max-w-[800px] mx-auto text-center">
    <H2>What can you get from being a chapter ambassador?</H2>
    
    <div class="inline-block text-left mt-[24px] max-w-[600px]">
      <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium">
        Starting a chapter helps students develop:
      </p>
      <ul class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[12px] ml-[24px] list-disc space-y-[6px]">
        <li>Research and data analysis skills</li>
        <li>Communication and leadership skills</li>
        <li>Problem-solving abilities through real community projects</li>
      </ul>
      <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[24px]">
        It also shows initiative and community impact, which strengthens college or scholarship applications!
      </p>
    </div>
    
    <div class="mt-[36px]">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdoOTqhgSYTYmk_ldiXBlzkqMX20mMCwuAk2XM-KHYZJvbRqg/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-[8px] py-[16px] px-[32px] rounded-full font-sans font-extrabold text-[0.95rem] no-underline bg-yan-orange text-white shadow-[0_6px_20px_rgba(233,113,50,.28)] hover:opacity-90 transition-opacity"
      >
        Start Your Own Chapter
      </a>
      <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[24px]">
        Have any questions? Contact us at <a href="mailto:youthaccnetwork@gmail.com" class="text-yan-orange hover:underline font-semibold">youthaccnetwork@gmail.com</a>
      </p>
    </div>
  </div>
</section>
