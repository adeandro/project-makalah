export default function Preview({ kelas, nama }) {
  if (!kelas || !nama) {
    return (
      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-400">
        Pilih kelas dan nama siswa untuk menampilkan proyek.
      </div>
    );
  }

  const src = `/projects/${kelas}/${nama}/index.html`;

  return (
    <div className="mt-4">
      <iframe
        src={src}
        title={`${kelas}-${nama}`}
        className="w-full h-[600px] border border-gray-200 rounded-lg shadow-sm"
      />
    </div>
  );
}
