import { useState, useEffect } from "react";
import ClassSelector from "./components/ClassSelector";
import StudentSelector from "./components/StudentSelector";
import Preview from "./components/Preview";

export default function App() {
  const [kelas, setKelas] = useState("");
  const [nama, setNama] = useState("");
  const [students, setStudents] = useState([]);

  // ambil daftar siswa dari folder public/projects/<kelas>
  useEffect(() => {
    if (kelas) {
      fetch("/projects/students.json")
        .then((res) => res.json())
        .then((data) => {
          setStudents(data[kelas] || []);
        })
        .catch(() => setStudents([]));
    } else {
      setStudents([]);
    }
  }, [kelas]);

  return (
    <div className="min-h-screen bg-slate-600 text-gray-800">
      {/* HEADER */}
      <header className="p-6 text-center bg-slate-900 shadow">
        <h1 className="text-6xl uppercase font-bold text-white">
          Galeri Proyek Siswa
        </h1>
        {/* <p className="text-gray-500 mt-1">Kelas 11A · 11B · 11C</p> */}
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto mt-8 p-6 bg-white shadow-2xl rounded-2xl">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <ClassSelector
            value={kelas}
            onChange={(v) => {
              setKelas(v);
              setNama("");
            }}
          />
          {kelas && (
            <StudentSelector
              value={nama}
              onChange={setNama}
              students={students}
            />
          )}
        </div>

        <Preview kelas={kelas} nama={nama} />
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-400 py-8">
        &copy; {new Date().getFullYear()} Ade Ariawan
      </footer>
    </div>
  );
}
