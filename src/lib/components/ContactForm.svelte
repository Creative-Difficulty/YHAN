<script lang="ts">
  let form = $state({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  function handleSubmit() {
    const mailto = `mailto:youthaccnetwork@gmail.com?subject=${encodeURIComponent(
      form.topic || "Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  }

  const inputClass = "w-full py-[12px] px-[15px] border-[1.5px] border-yan-border rounded-[12px] font-sans text-[0.95rem] text-yan-navy bg-yan-offwhite focus:bg-white focus:border-yan-orange focus:ring-4 focus:ring-yan-orange/10 outline-none font-medium box-border transition-all duration-200 placeholder:text-yan-mid/50";
  const labelClass = "block font-sans text-[0.75rem] font-extrabold tracking-[0.08em] uppercase text-yan-navy mb-[8px]";
</script>

<div class="bg-yan-white rounded-[24px] md:rounded-[32px] p-6 md:p-[48px] shadow-[0_8px_32px_rgba(35,44,61,0.06)] border-[1.5px] border-yan-border w-full max-w-[640px] mx-auto">
  <div class="font-serif font-black text-[1.8rem] md:text-[2rem] leading-[1.1] tracking-[-0.02em] text-yan-navy mb-[8px]">
    Send us a message
  </div>
  <div class="font-sans text-[1.05rem] text-yan-mid mb-[32px] font-medium leading-[1.6]">
    Have questions or want to partner with us? Fill out the form below and we'll get back to you as soon as we can.
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-[20px]">
    <div>
      <label class={labelClass} for="firstName">First Name</label>
      <input
        id="firstName"
        class={inputClass}
        placeholder="Jane"
        bind:value={form.firstName}
      />
    </div>
    <div>
      <label class={labelClass} for="lastName">Last Name</label>
      <input
        id="lastName"
        class={inputClass}
        placeholder="Doe"
        bind:value={form.lastName}
      />
    </div>
  </div>

  <div class="mb-[20px]">
    <label class={labelClass} for="email">Email Address</label>
    <input
      id="email"
      class={inputClass}
      type="email"
      placeholder="you@school.edu"
      bind:value={form.email}
    />
  </div>

  <div class="mb-[20px]">
    <label class={labelClass} for="topic">I'm reaching out about</label>
    <div class="relative">
      <select
        id="topic"
        class="{inputClass} appearance-none pr-[40px] cursor-pointer"
        bind:value={form.topic}
      >
        <option value="" disabled selected>Select a topic...</option>
        {#each ["Starting a YAN Chapter", "Ambassador Application", "School / Organization Partnership", "General Inquiry", "Media & Press"] as o (o)}
          <option value={o}>{o}</option>
        {/each}
      </select>
      <div class="absolute inset-y-0 right-[16px] flex items-center pointer-events-none text-yan-mid">
        <svg xmlns="http://www.w3.org/O/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </div>
  </div>

  <div class="mb-[32px]">
    <label class={labelClass} for="message">Message</label>
    <textarea
      id="message"
      class="{inputClass} resize-y min-h-[120px]"
      placeholder="Tell us about yourself and what you're hoping to achieve..."
      bind:value={form.message}
    ></textarea>
  </div>

  <button
    onclick={handleSubmit}
    class="w-full py-[16px] px-[32px] bg-yan-orange text-white border-none rounded-full font-sans font-extrabold text-[1rem] cursor-pointer hover:bg-[#e65d1a] shadow-[0_6px_20px_rgba(233,113,50,.28)] hover:shadow-[0_8px_24px_rgba(233,113,50,.35)] hover:-translate-y-[1px] transition-all duration-200 flex items-center justify-center gap-[8px]"
  >
    Send Message <span aria-hidden="true">→</span>
  </button>
</div>