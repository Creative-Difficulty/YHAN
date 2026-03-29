<script lang="ts">
  let form = $state({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  function handleSubmit() {
    const mailto = `mailto:ayrasaraidhillon@gmail.com?subject=${encodeURIComponent(
      form.topic || "Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  }

  const inputClass = "w-full py-[12px] px-[15px] border-[1.5px] border-yan-border rounded-[10px] font-sans text-[0.9rem] text-yan-navy bg-yan-offwhite outline-none font-medium box-border";
  const labelClass = "block font-sans text-[0.7rem] font-extrabold tracking-[0.07em] uppercase text-yan-mid mb-[6px]";
</script>

<div class="bg-yan-white rounded-[24px] py-[44px] px-[40px] shadow-[0_4px_36px_rgba(35,44,61,0.09)] border-[1.5px] border-yan-border">
  <div class="font-serif font-bold text-[1.35rem] text-yan-navy mb-[5px]">
    Send us a message
  </div>
  <div class="font-sans text-[0.87rem] text-yan-mid mb-[26px] font-medium">
    We'll get back to you as soon as we can.
  </div>

  <div class="grid grid-cols-2 gap-[12px] mb-[14px]">
    <div>
      <label class={labelClass} for="firstName">First Name</label>
      <input
        id="firstName"
        class={inputClass}
        bind:value={form.firstName}
      />
    </div>
    <div>
      <label class={labelClass} for="lastName">Last Name</label>
      <input
        id="lastName"
        class={inputClass}
        bind:value={form.lastName}
      />
    </div>
  </div>

  <div class="mb-[14px]">
    <label class={labelClass} for="email">Email</label>
    <input
      id="email"
      class={inputClass}
      type="email"
      placeholder="you@school.com"
      bind:value={form.email}
    />
  </div>

  <div class="mb-[14px]">
    <label class={labelClass} for="topic">I'm reaching out about</label>
    <select
      id="topic"
      class="{inputClass} appearance-none"
      bind:value={form.topic}
    >
      <option value="">Select a topic...</option>
      {#each ["Starting a YAN Chapter", "Ambassador Application", "School / Organization Partnership", "General Inquiry", "Media & Press"] as o (o)}
        <option value={o}>{o}</option>
      {/each}
    </select>
  </div>

  <div class="mb-[14px]">
    <label class={labelClass} for="message">Message</label>
    <textarea
      id="message"
      class="{inputClass} resize-y"
      rows="4"
      placeholder="Tell us about yourself and what you're hoping to do..."
      bind:value={form.message}
    ></textarea>
  </div>

  <button
    onclick={handleSubmit}
    class="w-full py-[14px] bg-yan-orange text-white border-none rounded-[10px] font-sans font-extrabold text-[0.93rem] cursor-pointer mt-[6px]"
  >
    Send Message →
  </button>
</div>