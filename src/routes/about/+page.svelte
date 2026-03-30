<script lang="ts">
  import H2 from "$components/H2.svelte";

  const founders = [
    {
      name: "Ayra Dhillon",
      role: "Co-Founder",
      bio: "Ayra Dhillon founded YAN to empower young people like her to research and address health challenges affecting communities. Through the surveys, or data analysis, she works to ensure that student voices around the world are informing solutions for youth well-being.",
      email: "ayrasaraidhillon@gmail.com",
      image: "/ayra.png",
      twBg: "bg-yan-orange",
      twShadow: "shadow-[0_6px_20px_rgba(233,113,50,0.3)]",
    },
    {
      name: "Jayvant Rajesh",
      role: "Co-Founder",
      bio: "Jayvant Rajesh co-founded YAN driven by a desire to create meaningful community impact and ensure young people have a seat at the table when it comes to community issues. Through his work with YAN, he strives to bridge the gap in youth representation and empower students worldwide to shape solutions for their own well-being.",
      email: "jayvant.rajesh@gmail.com",
      image: "/jayvant.png",
      twBg: "bg-yan-cyan",
      twShadow: "shadow-[0_6px_20px_rgba(41,169,193,0.3)]",
    },
    {
      name: "Christopher Huang",
      role: "Co-Founder",
      bio: "Christopher Huang cofounded YAN because he saw that students were being left out of the conversations that actually affect their health and community standards. He now focuses on finding the right people to lead change in their own schools, making sure students finally have the authority to speak up for their own well-being.",
      email: "chuang19543@gmail.com",
      image: "/chris.png",
      twBg: "bg-yan-yellow",
      twShadow: "shadow-[0_6px_20px_rgba(242,156,51,0.3)]",
    },
  ];
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
  <div class="relative z-10 text-center mx-auto max-w-[760px]">
    <h1 class="font-serif font-black text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.05] tracking-[-0.02em] text-yan-navy mb-[24px]">
      About <em class="italic text-yan-orange">YAN</em>
    </h1>
    <p class="font-sans text-[1.08rem] leading-[1.78] text-yan-mid font-medium mx-auto">
      A student-led initiative that believes youth perspectives deserve a seat at the table — and built the organization to make it happen.
    </p>
  </div>
</section>

<!-- MISSION -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yan-offwhite">
  <div class="max-w-[800px] mx-auto text-center">
    <H2>Our Mission</H2>
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[20px] max-w-[700px] mx-auto">
      The Youth Accountability Network (YAN) is a global, student-led initiative empowering young leaders to improve health, wellness, and equity within their schools.
    </p>
    
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-semibold mt-[28px] max-w-[700px] mx-auto">
      YAN members:
    </p>
    <ul class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[12px] max-w-[500px] mx-auto text-left list-disc list-inside space-y-[6px]">
      <li>Research school policies and student well-being data</li>
      <li>Identify gaps and inequities in school systems</li>
      <li>Develop evidence-based recommendations</li>
      <li>Present solutions directly to principals and district leaders</li>
    </ul>
    
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yan-mid font-medium mt-[24px] max-w-[700px] mx-auto">
      Through this work, students build leadership, research, public speaking, and policy advocacy skills while creating measurable impact in their communities.
    </p>
  </div>
</section>

<!-- FOUNDERS -->
<section class="px-6 md:px-[60px] bg-yan-white">
  <div class="max-w-[1000px] mx-auto">
    <div class="text-center pt-[60px] md:pt-[80px]">
      <H2>Meet the Founders</H2>
    </div>
    
    {#each founders as founder, i (founder)}
      <div class="flex flex-col {i % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:grid lg:grid-cols-[420px_1fr] gap-[40px] md:gap-[72px] items-center py-[60px] md:py-[80px] text-center lg:text-left {i < founders.length - 1 ? 'border-b-[1.5px] border-yan-border' : ''}">
        
        <!-- Founder Image Block -->
        <div class="w-full max-w-[420px] mx-auto aspect-[4/5] bg-yan-light rounded-[28px] relative overflow-hidden shadow-[0_8px_32px_rgba(35,44,61,0.08)] border-[1.5px] border-yan-border">
          <img 
            src={founder.image}
            alt={founder.name}
            class="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        <!-- Founder Details Block -->
        <div>
          <h2 class="font-serif font-black text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.02em] text-yan-navy mb-[20px]">
            {founder.name}
          </h2>
          <p class="font-sans text-[1.02rem] leading-[1.82] text-yan-mid font-medium mb-[28px] max-w-[500px] mx-auto lg:mx-0">{founder.bio}</p>
          {#if founder.email}
            <a href={`mailto:${founder.email}`} class="inline-flex items-center justify-center gap-[8px] py-[13px] px-[24px] rounded-full font-sans font-extrabold text-[0.9rem] no-underline {founder.twBg} text-white {founder.twShadow}">
              ✉ {founder.email}
            </a>
          {/if}
        </div>
        
      </div>
    {/each}
  </div>
</section>
