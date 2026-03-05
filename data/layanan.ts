import blenderImg from "@/public/layanan/blender.png"
import kipasAnginImg from "@/public/layanan/kipasangin.png"
import powerAmpliImg from "@/public/layanan/powerampli.png"

export const dataLayanan = [
  {
    title: "Servis Blender",
    description:
      "Perbaikan blender mati total, pisau tumpul, atau mesin berisik. Kembalikan fungsi blender Anda untuk keperluan dapur.",
    hargaMin: 20000,
    hargaMax: 50000,
    image: blenderImg,
  },
  {
    title: "Servis Kipas Angin",
    description:
      "Servis kipas angin putaran lambat, mati total, atau berisik. Kami pastikan udara di ruangan Anda kembali sejuk.",
    hargaMin: 20000,
    hargaMax: 50000,
    image: kipasAnginImg,
  },
  {
    title: "Servis dan Perakitan Audio",
    description:
      "Terima servis berbagai perangkat audio dan perakitan power ampli custom sesuai kebutuhan audio Anda.",
    hargaMin: 100000,
    hargaMax: 200000,
    image: powerAmpliImg,
  },
];
