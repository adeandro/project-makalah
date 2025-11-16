export default function ClassSelector({ value, onChange }) {
  return (
    <select
      className="p-3 border rounded-lg w-full md:w-1/2 focus:ring-2 focus:ring-blue-400"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Pilih Kelas</option>
      <option value="master">master</option>
      <option value="kelas11a">Kelas 11A</option>
      <option value="kelas11b">Kelas 11B</option>
      <option value="kelas11c">Kelas 11C</option>
    </select>
  );
}
