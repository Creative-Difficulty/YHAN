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
      Get <em class="italic text-yan-orange">involved.</em>
    </h1>
    <p class="font-sans text-[1.08rem] leading-[1.78] text-yan-mid font-medium max-w-[560px] mx-auto">
      If you are ready to lead meaningful, student-driven change — we invite you to apply.
    </p>
  </div>
</section>

<!-- BENEFITS -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yan-offwhite">
  <div class="max-w-[800px] mx-auto text-center">
    <H2>What can you get from being a chapter ambassador?</H2>
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[20px] max-w-[700px] mx-auto">
      Starting a chapter helps students develop:
    </p>
    <ul class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[12px] max-w-[500px] mx-auto text-left list-disc list-inside space-y-[6px]">
      <li>Research and data analysis skills</li>
      <li>Communication and leadership skills</li>
      <li>Problem-solving abilities through real community projects</li>
    </ul>
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[24px] max-w-[700px] mx-auto">
      It also shows initiative and community impact, which strengthens college or scholarship applications!
    </p>
  </div>
</section>

<!-- CTA -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yan-white">
  <div class="max-w-[800px] mx-auto text-center">
    <H2>Ready to start your chapter?</H2>
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[20px] max-w-[700px] mx-auto">
      Fill out our application form and we'll be in touch to help you get started.
    </p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdoOTqhgSYTYmk_ldiXBlzkqMX20mMCwuAk2XM-KHYZJvbRqg/viewform?usp=dialog"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center gap-[8px] py-[16px] px-[32px] rounded-full font-sans font-extrabold text-[0.95rem] no-underline bg-yan-orange text-white shadow-[0_6px_20px_rgba(233,113,50,.28)] hover:opacity-90 transition-opacity mt-[32px]"
    >
      Start Your Own Chapter
    </a>
  </div>
</section>
