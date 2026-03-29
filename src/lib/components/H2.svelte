<script lang="ts">
  import type { Snippet } from 'svelte';

  let { light = false, children } = $props<{ light?: boolean; children?: Snippet }>();
</script>

<h2 class="font-serif font-black text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.1] tracking-[-0.02em] {light ? 'text-white' : 'text-yan-navy'}">
  {@render children?.()}
</h2>