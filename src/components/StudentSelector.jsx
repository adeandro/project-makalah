export default function StudentSelector({ value, onChange, students }) {
  return (
    <select
      className="p-3 border rounded-lg w-full md:w-1/2 focus:ring-2 focus:ring-blue-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={students.length === 0}
    >
      <option value="">
        {students.length === 0 ? "Memuat siswa..." : "Pilih Nama Siswa"}
      </option>
      {students.map((s) => (
        <option style={{ textTransform: "capitalize" }} key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
