export default function StudentTable() {
	const students = [
		{
			no: 1,
			nim: "12345678",
			nama: "Budi Santoso",
			gender: "Laki-laki",
			prodi: "Informatika",
			kelas: "TI-1A",
			semester: 2,
			alamat: "Jl. Merdeka No.10",
			hobby: "Membaca",
			citaCita: "Programmer",
		},
		{
			no: 2,
			nim: "87654321",
			nama: "Siti Aisyah",
			gender: "Perempuan",
			prodi: "Sistem Informasi",
			kelas: "SI-1B",
			semester: 2,
			alamat: "Jl. Sudirman No.20",
			hobby: "Menulis",
			citaCita: "Data Scientist",
		},
		{
			no: 3,
			nim: "872424321",
			nama: "Abdul Aziz",
			gender: "Laki-laki",
			prodi: "Sistem Informasi",
			kelas: "SI-1B",
			semester: 2,
			alamat: "Jl. Sudirman No.20",
			hobby: "mengkritik kebijakan pemerintah",
			citaCita: "Presiden",
		},
	];

	return (
		<div className="max-w-screen-xl mx-auto p-4">
			<h1 className="text-lg font-bold text-center mb-4">
				Data Mahasiswa
			</h1>
			<div className="hidden lg:block overflow-x-auto rounded-md">
				<table className="w-full border border-black text-sm rounded-md">
					<thead>
						<tr className="bg-gray-200 text-gray-700">
							<th className="border p-2">No</th>
							<th className="border p-2">NIM</th>
							<th className="border p-2">Nama</th>
							<th className="border p-2">Gender</th>
							<th className="border p-2">Prodi</th>
							<th className="border p-2">Kelas</th>
							<th className="border p-2">Semester</th>
							<th className="border p-2">Alamat</th>
							<th className="border p-2">Hobby</th>
							<th className="border p-2">Cita-cita</th>
						</tr>
					</thead>
					<tbody>
						{students.map((student) => (
							<tr
								key={student.no}
								className="text-center text-black"
							>
								<td className="border p-2 bg-gray-100">
									{student.no}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.nim}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.nama}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.gender}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.prodi}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.kelas}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.semester}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.alamat}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.hobby}
								</td>
								<td className="border p-2 bg-gray-100">
									{student.citaCita}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="lg:hidden grid grid-cols-1 gap-4">
				{students.map((student) => (
					<div
						key={student.no}
						className="border p-4 rounded-md shadow-sm bg-gray-50 text-black"
					>
						<p>
							<strong>No:</strong> {student.no}
						</p>
						<p>
							<strong>NIM:</strong> {student.nim}
						</p>
						<p>
							<strong>Nama:</strong> {student.nama}
						</p>
						<p>
							<strong>Gender:</strong> {student.gender}
						</p>
						<p>
							<strong>Prodi:</strong> {student.prodi}
						</p>
						<p>
							<strong>Kelas:</strong> {student.kelas}
						</p>
						<p>
							<strong>Semester:</strong> {student.semester}
						</p>
						<p>
							<strong>Alamat:</strong> {student.alamat}
						</p>
						<p>
							<strong>Hobby:</strong> {student.hobby}
						</p>
						<p>
							<strong>Cita-Cita:</strong>{" "}
							{student.citaCita}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
