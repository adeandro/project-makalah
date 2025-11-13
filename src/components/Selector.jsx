import React from "react";

export default function Selector({ nama, setNama, dataSiswa }) {
  const siswa = dataSiswa.kelas11;

  return (
    <div className="flex flex-col gap-3 mb-6">
      <label htmlFor="nama" className="font-medium text-gray-700">
        Pilih Nama Siswa (Kelas 11):
      </label>

      <select
        id="nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">-- Pilih Nama --</option>
        {siswa.map((n) => (
          <option key={n} value={n}>
            {n.charAt(0).toUpperCase() + n.slice(1).toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
