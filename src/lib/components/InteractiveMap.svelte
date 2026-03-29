<script lang="ts">
  type Chapter = {
    id: number;
    color: string;
    flag: string;
    lat: number;
    lng: number;
    city: string;
    country: string;
    schools: number;
    students: number;
    status: string;
    founded: string;
    highlight: string;
    twBorderClass: string;
    twBorderLClass: string;
    twShadowClass: string;
    twTextClass: string;
  };

  let { chapters = [] } = $props<{ chapters?: Chapter[] }>();
  let selectedId = $state<number | null>(null);
  
  function leafletMap(node: HTMLElement, chaptersData: Chapter[]) {
    let unmounted = false;
    let leafletRef: any = null;

    const initMap = async () => {
      if (!(window as any).L) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      if (unmounted) return;

      const L = (window as any).L;
      if (leafletRef) return;

      const map = L.map(node, { center: [20, 10], zoom: 2, scrollWheelZoom: false });
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap © CARTO",
        subdomains: "abcd",
        maxZoom: 19
      }).addTo(map);
      
      leafletRef = map;

      chaptersData.forEach((ch) => {
        const icon = L.divIcon({
          html: `<div style="width:36px;height:36px;background:${ch.color};border:3px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 4px 14px ${ch.color}60;cursor:pointer;">${ch.flag}</div>`,
          className: "",
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });
        L.marker([ch.lat, ch.lng], { icon })
          .addTo(map)
          .bindPopup(`<div style="font-family:'DM Sans',sans-serif;min-width:160px;"><div style="font-weight:900;font-size:1rem;color:#232C3D;margin-bottom:4px;">${ch.flag} ${ch.city}</div><div style="font-size:0.78rem;color:#5a6478;margin-bottom:8px;">${ch.country}</div><div style="font-size:0.78rem;color:#232C3D;font-weight:700;">${ch.schools} schools · ${ch.students.toLocaleString()} students</div></div>`, { closeButton: false })
          .on("click", () => {
            selectedId = ch.id;
          });
      });
    };

    initMap();

    return {
      destroy() {
        unmounted = true;
        if (leafletRef) {
          leafletRef.remove();
          leafletRef = null;
        }
      }
    };
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
</svelte:head>

<div class="interactive-map-section z-0">
  <!-- Map -->
  <div
    use:leafletMap={chapters}
    class="w-full h-[480px] rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(35,44,61,0.12)] border-[1.5px] border-yan-border"
  ></div>
</div>

<style>
  :global(.leaflet-popup-content-wrapper) {
    border-radius: 14px !important;
    box-shadow: 0 8px 32px rgba(35,44,61,.15) !important;
    border: 1.5px solid #e0e7ef !important;
  }
  :global(.leaflet-popup-tip) {
    display: none !important;
  }
</style>
