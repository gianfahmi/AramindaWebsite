import { useEffect, useState } from "react"
import { PortalMockup } from "@/components/PortalMockup"

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Check = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const challenges = [
  {
    number: "01",
    title: "Laporan angka tanpa aksi nyata",
    text: "Siswa dan orang tua kerap hanya menerima skor IQ atau label kaku tanpa panduan stimulasi praktis di kelas maupun di rumah.",
  },
  {
    number: "02",
    title: "Kesenjangan ekspektasi rumah & sekolah",
    text: "Mulai dari kecemasan soal kesiapan masuk SD dan gaya belajar di tingkat dasar hingga pilihan jurusan di tingkat menengah.",
  },
  {
    number: "03",
    title: "Pendekatan usia yang tergeneralisasi",
    text: "Tes standar kaku mengabaikan dinamika spesifik dari kematangan sensori-motorik usia dini hingga fluktuasi emosi remaja.",
  },
]

const stages = [
  {
    stage: "PAUD & TK",
    age: "Usia 3–6 Tahun",
    focus: "Kesiapan Masuk SD",
    text: "Memetakan kematangan sosio-emosional, koordinasi motorik kasar dan halus, rentang atensi, kontrol impuls, serta kemandirian pra-SD tanpa tes Calistung yang kaku.",
    instruments: ["NST", "Frostig", "Bender-Gestalt", "Observasi Klinis"],
  },
  {
    stage: "SD",
    age: "Kelas Rendah & Tinggi",
    focus: "Gaya Belajar & Fungsi Eksekutif",
    text: "Mengidentifikasi modalitas belajar dominan (Visual, Auditori, Kinestetik), daya konsentrasi, kecepatan persepsi, serta deteksi dini kesulitan belajar agar terhindar dari burnout dini.",
    instruments: ["CPM", "Adaptasi WISC", "Inventori Gaya Belajar", "Skrining Eksekutif"],
  },
  {
    stage: "SMP",
    age: "Remaja Awal",
    focus: "Regulasi Emosi & Minat Awal",
    text: "Memahami dinamika psikososial remaja awal, regulasi emosi, pola penyesuaian sosial bersama teman sebaya, dan eksplorasi awal minat bakat bidang studi.",
    instruments: ["SPM", "Standard Proyektif Gambar", "Kuesioner Minat Pra-Remaja"],
  },
  {
    stage: "SMA & SMK",
    age: "Remaja Akhir",
    focus: "Penjurusan, Vokasi & Karier",
    text: "Mengukur kapasitas intelektual komprehensif, daya tahan stres, orientasi studi perguruan tinggi maupun vokasi, serta kesiapan transisi menuju dewasa muda.",
    instruments: ["IST", "RMIB", "Pauli", "Baterai Proyektif (WZT, BAUM, DAP)"],
  },
]

const comparisonOptions = [
  {
    title: "Psikotes konvensional",
    items: [
      ["Landasan teoritis", "Tes kognitif/IQ semata, Calistung kaku, atau psikometri ala HR"],
      ["Format laporan", "Dokumen teks tebal dengan istilah klinis abstrak dan satu arah"],
      ["Hasil akhir", "Sekadar status Siap/Tidak Siap atau rekomendasi jurusan generik"],
    ],
  },
  {
    title: "Metodologi biometrik",
    items: [
      ["Landasan teoritis", "Analisis sidik jari dengan validitas klinis yang diragukan"],
      ["Format laporan", "Pemindaian instan tanpa observasi & pelabelan statis"],
      ["Hasil akhir", "Saran pengembangan diri yang kaku dan spekulatif"],
    ],
  },
  {
    title: "Pendekatan Araminda",
    featured: true,
    items: [
      ["Landasan teoritis", "Psikologi Tumbuh Kembang Anak & Remaja yang klinis dan valid"],
      ["Format laporan", "Playbook visual interaktif untuk anak, orang tua, wali kelas, & BK"],
      ["Hasil akhir", "Peta kesiapan sekolah, gaya belajar, stimulasi, & arah masa depan"],
    ],
  },
]

const outputs = [
  {
    label: "Untuk siswa & anak",
    title: "Personal Growth & Future Playbook",
    text: "Peta visual perkembangan berisi indeks kesiapan sekolah (TK/SD), profil gaya belajar dominan (Visual, Auditori, Kinestetik), pemicu stres, hingga arah minat studi dan karier.",
  },
  {
    label: "Untuk orang tua",
    title: "Parent Synergy & 2 Sesi Parenting",
    text: "Panduan praktis pola asuh dan stimulasi tanpa konflik di rumah, dilengkapi Sesi Seminar Parenting Gratis saat Hari-H tes serta Dialog Interaktif Pasca-Asesmen bersama Psikolog.",
  },
  {
    label: "Untuk sekolah, wali kelas & BK",
    title: "Classroom & BK Executive Dashboard",
    text: "Mendukung seleksi PPDB yang objektif, pembagian kelas seimbang sejak hari pertama, deteksi dini anak yang butuh perhatian khusus, hingga analisis angkatan SMP/SMA.",
  },
]

const outcomesByTrack = {
  early: [
    {
      period: "1–3 bln",
      label: "Jangka pendek",
      text: "Adaptasi kelas jauh lebih mulus di awal tahun ajaran; wali kelas dan orang tua memiliki kesepahaman positif dalam mendampingi anak.",
    },
    {
      period: "3–6 bln",
      label: "Jangka menengah",
      text: "Fokus dan partisipasi belajar meningkat karena metode pengajaran di kelas selaras dengan gaya belajar anak serta stimulasi tepat sasaran.",
    },
    {
      period: "6+ bln",
      label: "Jangka panjang",
      text: "Transisi TK ke SD maupun SD kelas bawah ke atas berjalan sukses, fondasi fungsi eksekutif kuat, dan anak terhindar dari trauma akademik dini.",
    },
  ],
  teen: [
    {
      period: "1–3 bln",
      label: "Jangka pendek",
      text: "Kecemasan terkait pilihan jurusan mulai menurun dan dialog positif antara orang tua dan anak mulai terbuka.",
    },
    {
      period: "3–6 bln",
      label: "Jangka menengah",
      text: "Belajar menjadi lebih efektif sesuai cognitive style siswa, disertai kesiapan mental menghadapi seleksi perguruan tinggi maupun vokasi.",
    },
    {
      period: "6+ bln",
      label: "Jangka panjang",
      text: "Transisi ke perguruan tinggi lebih mulus, risiko salah jurusan menurun, dan ketahanan emosional semakin kuat.",
    },
  ],
}

const steps = [
  ["Konsultasi awal & pemetaan kebutuhan", "Diskusi bersama Kepala Sekolah, Tim Kurikulum, Wali Kelas, atau Tim BK untuk menyesuaikan tujuan asesmen."],
  ["Asesmen ramah anak & parenting hari-H", "Pelaksanaan yang menyenangkan dan kondusif bagi siswa, berjalan paralel dengan Sesi Seminar Parenting Gratis untuk orang tua."],
  ["Laporan tiga arah", "Playbook anak & siswa, panduan stimulasi orang tua, serta dashboard analisis kelas dan angkatan untuk sekolah."],
  ["Penyerahan dashboard & sesi sinergi", "Pemaparan profil angkatan kepada dewan guru/BK dan sesi dialog interaktif pasca-asesmen bersama orang tua."],
]

const team = [
  {
    name: "Dra. Psi. Yulia Indarsih",
    role: "Child Development Expert",
    image: "/assets/0d929.png",
    imageRotation: -3.88,
    nameRotation: 1.4,
    roleRotation: -2.17,
    description: "Psikolog anak dan klinis yang menjadi fondasi keilmuan serta pendekatan tumbuh kembang Araminda.",
  },
  {
    name: "Ksatriya Ananta",
    role: "Chief Executive",
    image: "/assets/05356.png",
    imageRotation: 2.16,
    nameRotation: -2.76,
    roleRotation: -0.06,
    description: "Product & commercial leader yang memimpin pengembangan produk, go-to-market, dan pertumbuhan.",
  },
  {
    name: "Gian Fahmi",
    role: "Chief of Product",
    image: "/assets/1d10c.png",
    imageRotation: -1.87,
    nameRotation: 1.16,
    roleRotation: -1.61,
    description: "Product designer dengan pengalaman lebih dari 10 tahun di industri kreatif, digital, dan teknologi.",
  },
  {
    name: "Ayang Suhendar",
    role: "Project Manager",
    image: "/assets/ayang-suhendar.jpg",
    imageRotation: 1.59,
    nameRotation: -1.75,
    roleRotation: 0.47,
    description: "Mengawal koordinasi lapangan, ketepatan jadwal asesmen, serta kelancaran kolaborasi dengan pihak sekolah.",
  },
]

const heroPhotos = [
  {
    src: "/students-study.jpg",
    alt: "Siswa remaja berdiskusi dan belajar bersama",
  },
  {
    src: "/students-early.jpg",
    alt: "Siswa usia dini dan sekolah dasar membaca bersama di kelas",
  },
]

export default function App() {
  const [heroPhotoIndex, setHeroPhotoIndex] = useState(0)
  const [outcomeTrack, setOutcomeTrack] = useState<"early" | "teen">("early")
  const outcomes = outcomesByTrack[outcomeTrack]

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return

    const timer = window.setInterval(() => {
      setHeroPhotoIndex((current) => (current + 1) % heroPhotos.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"))
    const timelineProgressElements = Array.from(document.querySelectorAll<HTMLElement>("[data-timeline-progress]"))
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    let animationFrame = 0
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    revealElements.forEach((element) => revealObserver.observe(element))

    const updateParallax = () => {
      animationFrame = 0
      const viewportCenter = window.innerHeight / 2

      elements.forEach((element) => {
        const bounds = element.getBoundingClientRect()
        const elementCenter = bounds.top + bounds.height / 2
        const speed = Number(element.dataset.parallax ?? 0.03)
        const offset = Math.max(-32, Math.min(32, (viewportCenter - elementCenter) * speed))
        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`)
      })

      timelineProgressElements.forEach((element) => {
        const bounds = element.getBoundingClientRect()
        const start = window.innerHeight * 0.85
        const end = window.innerHeight * 0.3
        const progress = Math.max(0, Math.min(1, (start - bounds.top) / (start - end)))
        element.style.setProperty("--timeline-progress", progress.toFixed(3))
        const segments = Array.from(element.querySelectorAll<HTMLElement>("[data-timeline-segment]"))
        segments.forEach((segment, index) => {
          const segmentProgress = Math.max(0, Math.min(1, progress * segments.length - index))
          segment.style.setProperty("--segment-progress", segmentProgress.toFixed(3))
        })
      })
    }

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      revealObserver.disconnect()
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <main className="overflow-hidden bg-[#fbf8ff] text-[#211b28]">
      <section data-reveal className="relative isolate min-h-[760px] bg-[#533484] text-white">
        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a href="#" aria-label="Araminda, kembali ke beranda" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd252]">
            <img src="/araminda-logo.png" alt="Araminda — Kenali Diri, Temukan Arah" className="h-auto w-48 sm:w-56" />
          </a>
          <nav aria-label="Navigasi utama" className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#pendekatan" className="nav-link">Pendekatan</a>
            <a href="#jenjang" className="nav-link">Jenjang</a>
            <a href="#hasil" className="nav-link">Hasil &amp; dampak</a>
            <a href="#proses" className="nav-link">Proses</a>
          </nav>
          <a href="https://wa.me/6285110500252" className="button button-light hidden! md:inline-flex!">
            Konsultasi sekolah <ArrowUpRight />
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-12 sm:px-8 lg:grid-cols-[1.03fr_.97fr] lg:px-12 lg:pb-28 lg:pt-20">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="mb-6 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#ffd252] lg:justify-start">
              <span className="h-px w-9 bg-current" /> Psikologi tumbuh kembang anak &amp; remaja
            </p>
            <h1 className="text-balance text-center text-[clamp(2.5rem,4.8vw,4.25rem)] font-medium leading-[1.04] tracking-[-.04em] lg:text-left">
              Pemetaan Potensi &amp; Tumbuh Kembang Siswa Terpadu
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-7 text-white/78 sm:text-lg sm:leading-8 lg:mx-0">
              Menyelaraskan kesiapan belajar, gaya stimulasi, dan arah minat bakat dari usia dini hingga remaja—untuk kolaborasi yang utuh, hangat, dan bebas konflik antara siswa, orang tua, dan sekolah.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="https://wa.me/6285110500252" className="button button-yellow">
                Jadwalkan konsultasi <ArrowUpRight />
              </a>
              <a href="#jenjang" className="button button-ghost">Lihat layanan jenjang</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[550px] lg:ml-auto">
            <svg
              aria-hidden="true"
              viewBox="0 0 120 120"
              data-parallax="0.075"
              className="absolute -right-1 top-5 z-20 size-20 text-[#ffd252] sm:-right-3 sm:top-7 sm:size-24 lg:-right-4 lg:top-8 lg:size-28"
              fill="none"
            >
              <g
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="round"
                transform="translate(60 60)"
              >
                {Array.from({ length: 12 }, (_, index) => (
                  <path
                    key={index}
                    d="M0 -17V-51"
                    transform={`rotate(${index * 30})`}
                  />
                ))}
              </g>
              <circle cx="60" cy="60" r="20" fill="currentColor" />
            </svg>
            <div data-parallax="0.025" className="relative ml-7 aspect-[4/5] overflow-hidden rounded-[10rem_10rem_1.75rem_1.75rem] bg-[#c8b2e8] p-0 shadow-2xl shadow-black/20 sm:ml-10">
              {heroPhotos.map((photo, index) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  aria-hidden={index !== heroPhotoIndex}
                  className={`absolute inset-0 size-full rounded-[9.5rem_9.5rem_1.25rem_1.25rem] object-cover transition-[opacity,transform] duration-1000 ease-in-out hover:rotate-2 hover:scale-[1.06] motion-reduce:transform-none motion-reduce:transition-none ${
                    index === heroPhotoIndex ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                />
              ))}
            </div>
            <div data-parallax="0.065" className="absolute -bottom-8 -left-2 z-20 max-w-[240px] rounded-[1.5rem] bg-white p-5 text-[#3c2863] shadow-xl sm:-left-8">
              <p className="text-3xl font-medium">3 arah</p>
              <p className="mt-1 text-sm leading-5 text-[#635771]">Siswa, orang tua, dan sekolah bergerak dalam satu bahasa.</p>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="bg-[#ffd252] px-5 py-7 text-[#3d2865] sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl justify-center">
          <p className="typing-reveal w-full text-center text-lg font-medium leading-7 sm:text-xl">
            Bukan sekadar psikotes. Peta kesiapan sekolah, gaya belajar, dan arah masa depan dari PAUD hingga SMA.
          </p>
        </div>
      </section>

      <section data-reveal className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Mengapa ini penting</p>
            <h2 className="section-title">Setiap anak butuh lebih dari sekadar angka.</h2>
            <p className="section-copy">
              Dari kematangan sensori-motorik usia dini hingga pencarian jati diri remaja, arahan yang tepat membantu kebingungan menjadi pertumbuhan.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {challenges.map((item) => (
              <article key={item.number} className="group rounded-[1.75rem] bg-white p-6 shadow-[0_14px_50px_rgba(57,38,92,.08)] transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <span className="text-xs font-medium tracking-widest text-[#7652a6]">{item.number}</span>
                <h3 className="mt-12 text-xl font-medium leading-6 text-[#3d2865]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#6b6372]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal id="pendekatan" className="scroll-mt-8 bg-[#efe8f8] py-24 sm:py-32">
        <div className="section-shell">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div data-parallax="0.025" className="relative">
              <img src="/student-assessment.jpg" alt="Siswa mengikuti asesmen di ruang kelas" className="ml-0 mr-auto aspect-[4/4.5] w-2/3 rounded-[1.25rem_4rem_1.25rem_1.25rem] object-cover object-center shadow-xl sm:w-1/2 sm:rounded-[1.5rem_5rem_1.5rem_1.5rem] lg:mx-auto lg:w-full lg:rounded-[2rem_10rem_2rem_2rem]" />
            </div>
            <div>
              <p className="eyebrow">Pendekatan Araminda</p>
              <h2 className="section-title">Utuh, ramah anak, dan dipimpin ahli perkembangan.</h2>
              <p className="section-copy">
                Seluruh instrumen observasi dan metode analisis dirancang langsung oleh Psikolog Klinis Spesialis Tumbuh Kembang Anak &amp; Remaja—bukan sekadar tes kaku yang menyamaratakan semua usia.
              </p>
              <ul className="mt-9 space-y-6">
                {[
                  ["Penyelarasan triad ekosistem", "Membangun bahasa bersama antara anak, orang tua, wali kelas, dan tim BK tanpa penghakiman."],
                  ["Playful & non-patologis", "Asesmen ramah anak tanpa suasana ujian kaku dan tanpa stigma—memetakan potensi optimal serta area stimulasi."],
                  ["Pemetaan tumbuh kembang mendalam", "Mengukur kematangan kognitif, sensorimotorik, fungsi eksekutif, regulasi emosi, dan gaya belajar (Visual, Auditori, Kinestetik)."],
                ].map(([title, text]) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#533484] text-[#ffd252]"><Check /></span>
                    <div>
                      <h3 className="font-medium text-[#332442]">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#6b6372]">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal id="jenjang" className="scroll-mt-8 bg-[#fbf8ff] py-24 sm:py-32">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Metodologi lintas jenjang</p>
            <h2 className="section-title max-w-none!">Asesmen presisi sesuai tahap tumbuh kembang.</h2>
            <p className="section-copy max-w-2xl!">
              Araminda memadukan observasi tumbuh kembang klinis, baterai psikometri baku, dan tes proyektif adaptif yang disesuaikan untuk setiap fase usia.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((item) => (
              <article
                key={item.stage}
                className="flex flex-col justify-between rounded-[1.75rem] border border-[#e8e0ef] bg-white p-6 shadow-[0_14px_45px_rgba(57,38,92,.07)] transition-transform duration-300 hover:-translate-y-1 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#efe8f8] px-3 py-1 text-xs font-medium text-[#533484]">
                      {item.age}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-medium leading-tight text-[#3d2865]">{item.stage}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-normal text-[#7652a6]">{item.focus}</p>
                  <p className="mt-4 text-sm leading-6 text-[#6b6372]">{item.text}</p>
                </div>
                <ul aria-label={`Instrumen ${item.stage}`} className="mt-6 flex flex-wrap gap-1.5 border-t border-[#f0eaf6] pt-4">
                  {item.instruments.map((instrument) => (
                    <li
                      key={instrument}
                      className="rounded-full bg-[#fbf8ff] px-2.5 py-1 text-[11px] font-medium text-[#533484] ring-1 ring-[#e4daf0]"
                    >
                      {instrument}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal aria-labelledby="comparison-title" className="bg-[#f5f0fa] py-24 sm:py-32">
        <div className="section-shell">
          <div className="max-w-5xl">
            <div>
              <p className="eyebrow">Mengapa Araminda</p>
              <h2 id="comparison-title" className="section-title max-w-none!">Pendekatan yang tepat memberi arah yang lebih utuh.</h2>
            </div>
            <p className="section-copy max-w-3xl!">
              Bukan sekadar skor kognitif atau pelabelan statis. Araminda menerjemahkan psikologi tumbuh kembang anak dan remaja menjadi panduan nyata bagi sekolah dan keluarga.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-6 pb-14 lg:grid-cols-3">
            {comparisonOptions.map((option) => (
              <div key={option.title} className={`relative top-14 bottom-0 ${option.featured ? "mt-14 lg:mt-0" : ""}`}>
                {option.featured && (
                  <div className="absolute inset-x-0 -top-14 flex h-20 items-center justify-start rounded-t-[2rem] bg-[#ffd252] px-7 pt-7 pb-12 text-[#3d2865]">
                    <span className="w-full text-xs font-medium uppercase tracking-normal">Solusi unggul</span>
                    <span className="flex size-7 items-center justify-center rounded-full bg-[#533484] text-[#ffd252]">
                      <Check />
                    </span>
                  </div>
                )}
                <article
                  className={
                    option.featured
                      ? "relative flex h-full flex-col items-start justify-end overflow-hidden rounded-[2rem] bg-[#533484] p-7 text-white shadow-[0_22px_70px_rgba(57,38,92,.24)] [&>*]:w-full sm:p-8"
                      : "relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#e8e0ef] bg-white p-7 shadow-[0_14px_45px_rgba(57,38,92,.07)] sm:p-8"
                  }
                >
                  <div className={option.featured ? "border-b border-white/15 pb-7" : "border-b border-[#ebe4f1] pb-7"}>
                    <p className={option.featured ? "text-xs font-medium uppercase tracking-[.12em] text-[#ffd252]" : "text-xs font-medium uppercase tracking-[.12em] text-[#8a7e93]"}>
                      Pendekatan
                    </p>
                    <h3 className={option.featured ? "mt-3 text-2xl font-medium leading-tight" : "mt-3 text-2xl font-medium leading-tight text-[#3d2865]"}>
                      {option.title}
                    </h3>
                  </div>
                  <dl className="flex flex-1 flex-col">
                    {option.items.map(([label, text], index) => (
                      <div
                        key={label}
                        className={`${index < option.items.length - 1 ? (option.featured ? "border-b border-white/15" : "border-b border-[#ebe4f1]") : ""} flex flex-1 gap-4 py-5`}
                      >
                        {option.featured && (
                          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ffd252] text-[#533484]">
                            <Check />
                          </span>
                        )}
                        <div>
                          <dt className={option.featured ? "text-xs font-medium uppercase tracking-normal text-[#d9cbea]" : "text-xs font-medium uppercase tracking-normal text-[#8a7e93]"}>
                            {label}
                          </dt>
                          <dd className={option.featured ? "mt-2 text-sm font-medium leading-6 text-white" : "mt-2 text-sm leading-6 text-[#6b6372]"}>
                            {text}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-reveal
        aria-labelledby="whole-development-title"
        className="relative isolate flex min-h-[570px] items-center overflow-hidden bg-cover bg-center px-5 py-24 text-white sm:px-8"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(25, 19, 31, .82), rgba(25, 19, 31, .66)), url('/classroom-assessment.jpg')",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[#281d38]/15" />
        <div data-parallax="0.02" className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <h2
            id="whole-development-title"
            className="relative mx-auto max-w-4xl text-balance text-4xl font-medium leading-tight tracking-[-.035em] text-white sm:text-5xl lg:text-6xl"
          >
            Bukan sekadar tes,
            <span className="block text-white">tapi pendekatan tumbuh kembang utuh.</span>
          </h2>

          <blockquote className="mx-auto mt-12 max-w-3xl text-white sm:mt-14">
            <p className="text-pretty text-base leading-8 text-white/85 sm:text-lg">
              “Seluruh instrumen observasi dan metode analisis Araminda dirancang serta disupervisi langsung oleh{" "}
              <strong className="font-medium text-white">Psikolog Klinis Spesialis Tumbuh Kembang Anak &amp; Remaja</strong> yang aktif menangani ribuan kasus di klinik spesialis anak, pusat rehabilitasi provinsi, taman kanak-kanak, hingga sekolah menengah.”
            </p>
          </blockquote>
        </div>
      </section>

      <section data-reveal id="hasil" className="scroll-mt-8 bg-[#533484] py-24 text-white sm:py-32">
        <div className="section-shell">
          <div className="max-w-5xl">
            <p className="eyebrow text-white! before:bg-[#ffd252]!">Satu asesmen, tiga hasil</p>
            <h2 className="section-title w-full max-w-none! text-[clamp(2.25rem,4vw,3.5rem)]! text-[#ffce45]!">
              Setiap pihak mendapat
              <span className="sm:block"> panduan yang bisa digunakan.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {outputs.map((item, index) => (
              <article key={item.label} className="rounded-[2rem] bg-white p-7 text-[#18181b] shadow-[0_16px_50px_rgba(26,17,40,.16)] sm:p-9">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#ffd252] text-[#533484]">
                  {index === 0 && (
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="3.25" />
                      <path d="M5.5 19c.7-3.3 3-5 6.5-5s5.8 1.7 6.5 5" />
                      <path d="m18.5 4 .45 1.05L20 5.5l-1.05.45L18.5 7l-.45-1.05L17 5.5l1.05-.45L18.5 4Z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="8" r="2.75" />
                      <circle cx="16" cy="8" r="2.75" />
                      <path d="M3.5 18c.4-3 1.9-4.6 4.5-4.6 1.8 0 3.1.8 4 2.3.9-1.5 2.2-2.3 4-2.3 2.6 0 4.1 1.6 4.5 4.6" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V9l8-5 8 5v11" />
                      <path d="M2.5 20h19M8 20v-5h8v5M8 10h.01M12 10h.01M16 10h.01" />
                    </svg>
                  )}
                </div>
                <p className="mt-8 text-xs font-medium uppercase tracking-normal text-[#684497]">{item.label}</p>
                <h3 className="mt-3 text-2xl font-medium leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#71717a]">{item.text}</p>
              </article>
            ))}
          </div>

          <PortalMockup />

          <div className="mx-0 mt-[120px] mb-0 border-t border-white/12 px-0 pt-[120px] pb-0">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-medium uppercase tracking-[.14em] text-[#d9cbea]">Dampak berkelanjutan</p>
              <h3 className="mt-4 text-balance text-3xl font-medium leading-tight text-white sm:text-4xl">
                Perubahan nyata yang terukur
              </h3>
              <div
                role="tablist"
                aria-label="Pilih jenjang dampak"
                className="mt-7 inline-flex rounded-full bg-white/10 p-1.5 backdrop-blur-xs"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={outcomeTrack === "early"}
                  onClick={() => setOutcomeTrack("early")}
                  className={`cursor-pointer rounded-full px-5 py-2 text-xs font-medium transition-colors sm:text-sm ${
                    outcomeTrack === "early"
                      ? "bg-[#ffd252] text-[#3d2865]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Usia Dini (PAUD–SD)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={outcomeTrack === "teen"}
                  onClick={() => setOutcomeTrack("teen")}
                  className={`cursor-pointer rounded-full px-5 py-2 text-xs font-medium transition-colors sm:text-sm ${
                    outcomeTrack === "teen"
                      ? "bg-[#ffd252] text-[#3d2865]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Remaja (SMP–SMA)
                </button>
              </div>
            </div>

            <div data-timeline-progress className="relative mt-12">
              <div
                aria-hidden="true"
                className="absolute left-[16.666%] right-[16.666%] top-[11px] hidden h-px bg-white/25 md:block"
              />
              <div
                aria-hidden="true"
                className="timeline-progress absolute left-[16.666%] right-[16.666%] top-[11px] hidden h-px bg-[#ffd252] md:block"
              />
              <div className="grid gap-10 md:grid-cols-3 md:gap-8">
                {outcomes.map((outcome, index) => (
                  <article key={`${outcomeTrack}-${outcome.period}`} className="relative grid grid-cols-[24px_1fr] gap-7 md:block md:text-center">
                    {index < outcomes.length - 1 && (
                      <div aria-hidden="true" className="absolute -bottom-[52px] left-[11px] top-3 w-px bg-white/25 md:hidden">
                        <span data-timeline-segment className="timeline-segment-progress absolute inset-0 bg-[#ffd252]" />
                      </div>
                    )}
                    <span className="relative z-10 flex size-6 items-center justify-center rounded-full border-4 border-[#533484] bg-[#ffd252] shadow-[0_0_0_1px_rgba(255,255,255,.25)] md:mx-auto" />
                    <div className="md:mt-6">
                      <p className="text-xl font-medium text-[#ffd252]">{outcome.period}</p>
                      <p className="mt-2 text-xs font-medium uppercase tracking-[.12em] text-white">{outcome.label}</p>
                      <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/65">{outcome.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="bg-[#f5f0fa] py-20 sm:py-24">
        <div className="section-shell">
          <div data-parallax="0.012" className="flex flex-col items-center text-center">
            <p className="eyebrow w-full justify-center text-center before:hidden">Tim kami</p>
            <h2 className="section-title max-w-4xl! text-[clamp(1.25rem,4vw,3.5rem)]!">
              <span className="block">Keahlian yang menjaga</span>
              <span className="block">setiap langkah tetap manusiawi.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-6 text-[#6b6372]">
              Perpaduan psikologi perkembangan, strategi produk, desain, dan pengelolaan program untuk pendampingan yang utuh.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <article
                data-reveal
                key={member.name}
                className="group/profile px-3 pb-8 pt-4"
              >
                <div
                  data-parallax={`${0.014 + index * 0.004}`}
                  className="relative flex min-h-[280px] flex-col items-center justify-center"
                >
                  <img
                    src={member.image}
                    alt={`Potret ${member.name}`}
                    className="relative z-10 aspect-square w-[72%] max-w-[13rem] rounded-2xl object-cover object-top grayscale shadow-[0_14px_35px_rgba(57,38,92,.16)] transition-transform duration-300 ease-out [transform:rotate(var(--base-tilt))] group-hover/profile:[transform:rotate(var(--counter-tilt))] motion-reduce:transform-none motion-reduce:transition-none"
                    style={{
                      "--base-tilt": `${member.imageRotation}deg`,
                      "--counter-tilt": `${-member.imageRotation}deg`,
                    } as React.CSSProperties}
                  />
                  <h3
                    className="relative z-20 -mt-2 rounded-[.7rem] bg-[#ffd050] px-4 py-2 text-center text-lg font-normal leading-6 text-[#323232] shadow-sm transition-transform duration-300 ease-out [transform:rotate(var(--base-tilt))] group-hover/profile:[transform:rotate(var(--counter-tilt))] motion-reduce:transform-none motion-reduce:transition-none"
                    style={{
                      fontFamily: '"Lexend", sans-serif',
                      "--base-tilt": `${member.nameRotation}deg`,
                      "--counter-tilt": `${-member.nameRotation}deg`,
                    } as React.CSSProperties}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="relative z-20 -mt-0.5 rounded-[.65rem] bg-[#6a5e73] px-3 py-2 text-center text-xs text-white transition-transform duration-300 ease-out [transform:rotate(var(--base-tilt))] group-hover/profile:[transform:rotate(var(--counter-tilt))] motion-reduce:transform-none motion-reduce:transition-none"
                    style={{
                      fontFamily: '"Lexend", sans-serif',
                      "--base-tilt": `${member.roleRotation}deg`,
                      "--counter-tilt": `${-member.roleRotation}deg`,
                    } as React.CSSProperties}
                  >
                    {member.role}
                  </p>
                </div>
                <p className="mx-auto mt-4 max-w-[18rem] text-center text-sm leading-6 text-[#71717a]">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal id="proses" className="scroll-mt-8 py-24 sm:py-32">
        <div className="section-shell">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow">Mudah diintegrasikan</p>
              <h2 className="section-title">Dari kebutuhan sekolah menuju aksi nyata.</h2>
              <p className="section-copy">Proses terstruktur yang tetap terasa personal bagi anak, remaja, wali kelas, dan orang tua.</p>
            </div>
            <ol data-parallax="0.018" className="space-y-3">
              {steps.map(([title, text], index) => (
                <li key={title} className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-[1.5rem] bg-white p-5 shadow-[0_10px_40px_rgba(57,38,92,.06)] sm:grid-cols-[2.5rem_1fr] sm:p-6">
                  <span className="pt-0.5 text-base font-medium text-[#7652a6]">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-medium text-[#352744]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#6b6372]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section data-reveal className="px-8 pb-[100px] pt-0">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#ffd252] p-10 text-[#3d2865]">
          <div aria-hidden="true" className="absolute inset-0">
            <img
              src="/araminda-team-office.jpg"
              alt=""
              className="absolute inset-x-0 bottom-0 h-[52%] w-full object-cover object-center opacity-55 md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[54%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#ffd252] via-[#ffd252]/95 to-[#ffd252]/40 md:bg-gradient-to-r md:from-[#ffd252] md:via-[#ffd252]/95 md:to-[#ffd252]/25" />
          </div>
          <div data-parallax="0.018" className="relative z-10 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0] text-zinc-900">Tumbuh bersama Araminda</p>
            <h2 className="mt-5 text-balance text-4xl font-medium leading-[1.15] tracking-[-.04em] sm:text-6xl sm:leading-[1.12] lg:leading-[64px]">
              Mari siapkan masa depan siswa dengan lebih tenang.
            </h2>
            <p className="mt-6 w-full max-w-none text-base leading-7 text-zinc-500 lg:whitespace-nowrap">Mulai dari percakapan singkat tentang kebutuhan anak, siswa, dan sekolah Anda.</p>
            <a href="https://wa.me/6285110500252" className="button mt-8 bg-white text-[#3d2865]">
              Hubungi Araminda <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#291b3d] px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <img src="/araminda-logo.png" alt="Araminda" className="w-52" />
            <address className="mt-5 space-y-2 text-sm not-italic leading-6 text-white/70">
              <p>
                Email:{" "}
                <a href="mailto:halo@araminda.id" className="transition-colors hover:text-white">
                  halo@araminda.id
                </a>
              </p>
              <p>
                WhatsApp/Telepon:{" "}
                <a href="https://wa.me/6285110500252" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                  +62-8511-0500-252
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/araminda.id/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                  @araminda.id
                </a>
              </p>
              <p>Alamat Kantor: Jl. Bengawan No. 64, Bandung</p>
            </address>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:halo@araminda.id"
                aria-label="Kirim email ke Araminda"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#ffd252] hover:text-[#3d2865] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ffd252] lg:size-11"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 lg:size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/araminda.id/"
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi Instagram Araminda"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#ffd252] hover:text-[#3d2865] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ffd252] lg:size-11"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 lg:size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/araminda"
                target="_blank"
                rel="noreferrer"
                aria-label="Kunjungi LinkedIn Araminda"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#ffd252] hover:text-[#3d2865] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ffd252] lg:size-11"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 lg:size-5" fill="currentColor">
                  <path d="M6.5 8.25A1.75 1.75 0 1 0 6.5 4.75a1.75 1.75 0 0 0 0 3.5ZM5 9.75h3V19H5V9.75ZM10 9.75h2.88v1.27h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.38c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V19H10V9.75Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#pendekatan" className="hover:text-white">Pendekatan</a>
            <a href="#jenjang" className="hover:text-white">Jenjang</a>
            <a href="#hasil" className="hover:text-white">Hasil</a>
            <a href="mailto:halo@araminda.id" className="hover:text-white">Kontak</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
