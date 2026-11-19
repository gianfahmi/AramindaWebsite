export function PortalMockup() {
  return (
    <div className="mt-5 grid gap-5 lg:grid-cols-12">
      {/* Bento 1: Desktop Dashboard Sekolah (7 kolom) */}
      <article className="flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#efe8f8] text-[#211b28] shadow-[0_16px_50px_rgba(26,17,40,.16)] lg:col-span-7">
        <div className="p-7 pb-6 sm:p-9 sm:pb-7">
          <h4 className="text-2xl font-medium leading-tight text-[#3d2865]">
            Pemetaan satu angkatan dalam satu layar
          </h4>
          <p className="mt-2.5 max-w-lg text-sm leading-6 text-[#6b6372]">
            Kepala sekolah, wali kelas, dan guru BK dapat memfilter per kelas, melihat gaya belajar murid, dan mengunduh rekap angkatan.
          </p>
        </div>

        <div className="px-6 sm:px-9">
          <div className="overflow-hidden sm:h-[340px]">
            <img
              src="/assets/portal-desktop.png"
              alt="Tampilan desktop Portal Pihak Sekolah Araminda"
              className="h-auto w-full sm:size-full sm:object-cover sm:object-top"
            />
          </div>
        </div>
      </article>

      {/* Bento 2: Mobile Playbook Siswa & Orang Tua (5 kolom) */}
      <article className="flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#efe8f8] text-[#211b28] shadow-[0_16px_50px_rgba(26,17,40,.16)] lg:col-span-5">
        <div className="p-7 pb-6 sm:p-9 sm:pb-7">
          <h4 className="text-2xl font-medium leading-tight text-[#3d2865]">
            Psikogram &amp; Playbook di ponsel
          </h4>
          <p className="mt-2.5 text-sm leading-6 text-[#6b6372]">
            Laporan visual yang mudah dibaca keluarga, lengkap dengan panduan stimulasi rumah dan unduhan PDF resmi.
          </p>
        </div>

        <div className="px-7 sm:px-10">
          <div className="mx-auto h-[290px] max-w-[270px] overflow-hidden sm:h-[340px]">
            <img
              src="/assets/portal-mobile.png"
              alt="Tampilan mobile Portal Orang Tua dan Siswa Araminda"
              className="size-full object-cover object-top"
            />
          </div>
        </div>
      </article>

      {/* Bento 3 & 4: Kartu Pendukung Minimalis */}
      <article className="rounded-[1.75rem] border border-white/15 bg-white/8 p-7 sm:p-8 lg:col-span-6">
        <p className="text-xs font-medium uppercase tracking-normal text-[#ffd252]">
          Privasi berjenjang
        </p>
        <h4 className="mt-2.5 text-xl font-medium text-white">
          Skor klinis &amp; PDF asli tetap eksklusif untuk keluarga
        </h4>
        <p className="mt-2.5 text-sm leading-6 text-white/75">
          Pihak sekolah hanya mengakses profil kelas, gaya belajar, dan rekomendasi pendampingan—sementara skor IQ spesifik serta catatan klinis psikolog terjaga khusus untuk akun siswa dan orang tua.
        </p>
      </article>

      <article className="rounded-[1.75rem] border border-white/15 bg-white/8 p-7 sm:p-8 lg:col-span-6">
        <p className="text-xs font-medium uppercase tracking-normal text-[#ffd252]">
          Format siap guna
        </p>
        <h4 className="mt-2.5 text-xl font-medium text-white">
          Digital interaktif sekaligus siap cetak A4 &amp; ekspor CSV
        </h4>
        <p className="mt-2.5 text-sm leading-6 text-white/75">
          Setiap laporan tersedia dalam format Playbook web yang nyaman dibuka di ponsel maupun dokumen cetak A4 resmi, disertai rekap CSV untuk arsip bimbingan sekolah.
        </p>
      </article>
    </div>
  )
}
