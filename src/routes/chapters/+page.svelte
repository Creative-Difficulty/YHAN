<script lang="ts">
  import H2 from "$components/H2.svelte";
  import InteractiveMap from "$components/InteractiveMap.svelte";

  const chapters = [
    { id: 1, city: "London", country: "United Kingdom", flag: "🇬🇧", schools: 5, students: 8500, status: "Active", color: "#29A9C1", lat: 51.5, lng: -0.12, founded: "2024", highlight: "Partnered with local schools on student wellness initiatives", twBorderClass: "border-yan-cyan", twBorderLClass: "border-l-yan-cyan", twShadowClass: "shadow-[0_4px_24px_rgba(41,169,193,0.13)]", twTextClass: "text-yan-cyan" },
    { id: 2, city: "New Delhi", country: "India", flag: "🇮🇳", schools: 4, students: 7800, status: "Active", color: "#E97132", lat: 28.61, lng: 77.21, founded: "2024", highlight: "Survey reached thousands of students across multiple schools", twBorderClass: "border-yan-orange", twBorderLClass: "border-l-yan-orange", twShadowClass: "shadow-[0_4px_24px_rgba(233,113,50,0.13)]", twTextClass: "text-yan-orange" },
    { id: 3, city: "Brentwood", country: "United States", flag: "🇺🇸", schools: 1, students: 1200, status: "Active", color: "#E63337", lat: 37.9318, lng: -121.6957, founded: "2024", highlight: "Building partnerships with schools in Brentwood", twBorderClass: "border-yan-red", twBorderLClass: "border-l-yan-red", twShadowClass: "shadow-[0_4px_24px_rgba(230,51,55,0.13)]", twTextClass: "text-yan-red" },
    { id: 4, city: "Santiago", country: "Chile", flag: "🇨🇱", schools: 3, students: 6200, status: "Active", color: "#F29C33", lat: -33.45, lng: -70.67, founded: "2024", highlight: "Building partnerships with schools across the region", twBorderClass: "border-yan-yellow", twBorderLClass: "border-l-yan-yellow", twShadowClass: "shadow-[0_4px_24px_rgba(242,156,51,0.13)]", twTextClass: "text-yan-yellow" },
    { id: 5, city: "Glenview", country: "United States", flag: "🇺🇸", schools: 1, students: 950, status: "Active", color: "#29A9C1", lat: 42.0697, lng: -87.7878, founded: "2024", highlight: "Building partnerships with schools in Glenview", twBorderClass: "border-yan-cyan", twBorderLClass: "border-l-yan-cyan", twShadowClass: "shadow-[0_4px_24px_rgba(41,169,193,0.13)]", twTextClass: "text-yan-cyan" },
    { id: 6, city: "Dubai", country: "United Arab Emirates", flag: "🇦🇪", schools: 4, students: 7200, status: "Active", color: "#E97132", lat: 25.2, lng: 55.27, founded: "2024", highlight: "Conducting research on student well-being across multiple schools", twBorderClass: "border-yan-orange", twBorderLClass: "border-l-yan-orange", twShadowClass: "shadow-[0_4px_24px_rgba(233,113,50,0.13)]", twTextClass: "text-yan-orange" },
    { id: 7, city: "Calgary", country: "Canada", flag: "🇨🇦", schools: 1, students: 800, status: "Active", color: "#E63337", lat: 51.0447, lng: -114.0719, founded: "2024", highlight: "Building partnerships with schools in Calgary", twBorderClass: "border-yan-red", twBorderLClass: "border-l-yan-red", twShadowClass: "shadow-[0_4px_24px_rgba(230,51,55,0.13)]", twTextClass: "text-yan-red" },
    { id: 8, city: "Badakhshan", country: "Afghanistan", flag: "🇦🇫", schools: 1, students: 500, status: "Active", color: "#F29C33", lat: 36.7347, lng: 70.8119, founded: "2024", highlight: "Building partnerships with schools in Badakhshan", twBorderClass: "border-yan-yellow", twBorderLClass: "border-l-yan-yellow", twShadowClass: "shadow-[0_4px_24px_rgba(242,156,51,0.13)]", twTextClass: "text-yan-yellow" },
    { id: 9, city: "Tunis", country: "Tunisia", flag: "🇹🇳", schools: 3, students: 5500, status: "Active", color: "#29A9C1", lat: 36.81, lng: 10.17, founded: "2024", highlight: "First chapter in North Africa focused on student advocacy", twBorderClass: "border-yan-cyan", twBorderLClass: "border-l-yan-cyan", twShadowClass: "shadow-[0_4px_24px_rgba(41,169,193,0.13)]", twTextClass: "text-yan-cyan" },
    { id: 10, city: "Islamabad", country: "Pakistan", flag: "🇵🇰", schools: 1, students: 1100, status: "Active", color: "#E97132", lat: 33.6844, lng: 73.0479, founded: "2024", highlight: "Building partnerships with schools in Islamabad", twBorderClass: "border-yan-orange", twBorderLClass: "border-l-yan-orange", twShadowClass: "shadow-[0_4px_24px_rgba(233,113,50,0.13)]", twTextClass: "text-yan-orange" },
    { id: 11, city: "Manchester", country: "United Kingdom", flag: "🇬🇧", schools: 1, students: 900, status: "Active", color: "#E63337", lat: 53.4807, lng: -2.2426, founded: "2024", highlight: "Building partnerships with schools in Manchester", twBorderClass: "border-yan-red", twBorderLClass: "border-l-yan-red", twShadowClass: "shadow-[0_4px_24px_rgba(230,51,55,0.13)]", twTextClass: "text-yan-red" },
    { id: 12, city: "Abbotsford", country: "Canada", flag: "🇨🇦", schools: 8, students: 4500, status: "Active", color: "#F29C33", lat: 49.0504, lng: -122.3044, founded: "2024", highlight: "Building partnerships with schools in Abbotsford", twBorderClass: "border-yan-yellow", twBorderLClass: "border-l-yan-yellow", twShadowClass: "shadow-[0_4px_24px_rgba(242,156,51,0.13)]", twTextClass: "text-yan-yellow" },
    { id: 13, city: "Chilliwack", country: "Canada", flag: "🇨🇦", schools: 1, students: 700, status: "Active", color: "#29A9C1", lat: 49.1747, lng: -121.9442, founded: "2024", highlight: "Building partnerships with schools in Chilliwack", twBorderClass: "border-yan-cyan", twBorderLClass: "border-l-yan-cyan", twShadowClass: "shadow-[0_4px_24px_rgba(41,169,193,0.13)]", twTextClass: "text-yan-cyan" },
    { id: 14, city: "Mission", country: "Canada", flag: "🇨🇦", schools: 1, students: 650, status: "Active", color: "#E97132", lat: 49.1337, lng: -122.3111, founded: "2024", highlight: "Building partnerships with schools in Mission", twBorderClass: "border-yan-orange", twBorderLClass: "border-l-yan-orange", twShadowClass: "shadow-[0_4px_24px_rgba(233,113,50,0.13)]", twTextClass: "text-yan-orange" },
    { id: 15, city: "Vancouver", country: "Canada", flag: "🇨🇦", schools: 1, students: 1100, status: "Active", color: "#E63337", lat: 49.2827, lng: -123.1207, founded: "2024", highlight: "Building partnerships with schools in Vancouver", twBorderClass: "border-yan-red", twBorderLClass: "border-l-yan-red", twShadowClass: "shadow-[0_4px_24px_rgba(230,51,55,0.13)]", twTextClass: "text-yan-red" },
    { id: 16, city: "Langley", country: "Canada", flag: "🇨🇦", schools: 1, students: 850, status: "Active", color: "#F29C33", lat: 49.1041, lng: -122.6603, founded: "2024", highlight: "Building partnerships with schools in Langley", twBorderClass: "border-yan-yellow", twBorderLClass: "border-l-yan-yellow", twShadowClass: "shadow-[0_4px_24px_rgba(242,156,51,0.13)]", twTextClass: "text-yan-yellow" },
    { id: 17, city: "Surrey", country: "Canada", flag: "🇨🇦", schools: 3, students: 2100, status: "Active", color: "#29A9C1", lat: 49.1913, lng: -122.849, founded: "2024", highlight: "Building partnerships with schools in Surrey", twBorderClass: "border-yan-cyan", twBorderLClass: "border-l-yan-cyan", twShadowClass: "shadow-[0_4px_24px_rgba(41,169,193,0.13)]", twTextClass: "text-yan-cyan" },
    { id: 18, city: "Burlington", country: "Canada", flag: "🇨🇦", schools: 1, students: 800, status: "Active", color: "#E97132", lat: 43.3255, lng: -79.799, founded: "2024", highlight: "Building partnerships with schools in Burlington", twBorderClass: "border-yan-orange", twBorderLClass: "border-l-yan-orange", twShadowClass: "shadow-[0_4px_24px_rgba(233,113,50,0.13)]", twTextClass: "text-yan-orange" },
    { id: 19, city: "New York", country: "United States", flag: "🇺🇸", schools: 6, students: 9800, status: "Active", color: "#E63337", lat: 40.71, lng: -74.01, founded: "2024", highlight: "Presenting findings to district leaders on health equity", twBorderClass: "border-yan-red", twBorderLClass: "border-l-yan-red", twShadowClass: "shadow-[0_4px_24px_rgba(230,51,55,0.13)]", twTextClass: "text-yan-red" },
    { id: 20, city: "Hod Hasharon", country: "Israel", flag: "🇮🇱", schools: 1, students: 600, status: "Active", color: "#F29C33", lat: 32.1524, lng: 34.8906, founded: "2024", highlight: "Building partnerships with schools in Hod Hasharon", twBorderClass: "border-yan-yellow", twBorderLClass: "border-l-yan-yellow", twShadowClass: "shadow-[0_4px_24px_rgba(242,156,51,0.13)]", twTextClass: "text-yan-yellow" },
    { id: 21, city: "Chhatrapati Sambhaji Nagar", country: "India", flag: "🇮🇳", schools: 1, students: 1050, status: "Active", color: "#29A9C1", lat: 19.8761, lng: 75.3433, founded: "2024", highlight: "Building partnerships with schools in Chhatrapati Sambhaji Nagar", twBorderClass: "border-yan-cyan", twBorderLClass: "border-l-yan-cyan", twShadowClass: "shadow-[0_4px_24px_rgba(41,169,193,0.13)]", twTextClass: "text-yan-cyan" },
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
  <div class="relative z-10 max-w-[760px] text-center mx-auto">
    <h1 class="font-serif font-black text-[clamp(2.8rem,5vw,5rem)] leading-[1.05] tracking-[-0.02em] text-yan-navy mb-[24px]">
      Student voices,<br />
      <em class="italic text-yan-orange">everywhere.</em>
    </h1>
    <p class="font-sans text-[1.08rem] leading-[1.78] text-yan-mid font-medium max-w-[560px] mx-auto">
      YAN chapters are active in 12 countries, reaching 60,000+ students across 48+ engaged schools. Each chapter is led by a local student ambassador who drives surveys, data collection, and policy advocacy in their community.
    </p>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-0 mt-[44px] rounded-[16px] overflow-hidden border-[1.5px] border-yan-border bg-yan-white shadow-[0_4px_20px_rgba(35,44,61,0.06)] max-w-[520px] mx-auto">
      {#each [
        { n: "21",    l: "Active Chapters",   color: "text-yan-orange" },
        { n: "48+",  l: "Engaged Schools",   color: "text-yan-cyan" },
        { n: "60K+", l: "Students Reached",  color: "text-yan-yellow" },
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

<!-- MAP + LIST SECTION -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yan-white">
  <div class="mb-[40px] md:mb-[48px] text-center">
    <H2>21 chapters. One mission.</H2>
    <p class="font-sans text-[1rem] leading-[1.8] text-yan-mid font-medium mt-[14px] max-w-[560px] mx-auto">
      Click a pin on the map or a chapter below to learn more about what each team is working on.
    </p>
  </div>
  
  <InteractiveMap {chapters} />
</section>

