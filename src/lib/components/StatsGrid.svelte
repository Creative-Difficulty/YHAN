<script lang="ts">
  type Stat = { n: string; l: string };
  
  let {
    stats = [
      { n: "45K+", l: "Students Reached" },
      { n: "25+", l: "Engaged Schools" },
      { n: "6", l: "Countries" },
      { n: "100%", l: "Youth-Led" },
    ],
    statColors = ["text-yan-orange", "text-yan-cyan", "text-yan-red", "text-yan-yellow"]
  } = $props<{ stats?: Stat[], statColors?: string[] }>();
</script>

<div class="relative z-10 w-full flex justify-center mt-[10px] md:mt-[20px]">
  <div class="grid grid-cols-2 md:grid-cols-4 rounded-[16px] md:rounded-[24px] overflow-hidden border-[1.5px] border-yan-border bg-yan-white shadow-[0_8px_30px_rgba(35,44,61,.06)] w-full max-w-[900px]">
    {#each stats as s, i (i)}
      <div class="py-[20px] md:py-[32px] px-[8px] sm:px-[12px] md:px-[16px] text-center border-yan-border {i < 2 ? 'border-b-[1.5px] md:border-b-0' : ''} {i % 2 === 0 ? 'border-r-[1.5px]' : 'border-r-0'} {i < 3 ? 'md:border-r-[1.5px]' : 'md:border-r-0'}">
        <div class="font-serif font-black text-[2rem] sm:text-[2.2rem] md:text-[2.8rem] leading-none mb-[4px] md:mb-[8px] {statColors[i]}">
          {s.n}
        </div>
        <div class="font-sans text-[0.75rem] sm:text-[0.8rem] md:text-[0.9rem] font-bold text-yan-mid mt-1 leading-[1.3] md:leading-[1.4] whitespace-pre-line">
          {s.l}
        </div>
      </div>
    {/each}
  </div>
</div>
