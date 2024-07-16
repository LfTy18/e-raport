document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('siswa-link').addEventListener('click', loadSiswa);
    document.getElementById('guru-link').addEventListener('click', loadGuru);
    document.getElementById('mata-pelajaran-link').addEventListener('click', loadMataPelajaran);
    document.getElementById('kelas-link').addEventListener('click', loadKelas);
    document.getElementById('absensi-link').addEventListener('click', loadAbsensi);
    document.getElementById('nilai-link').addEventListener('click', loadNilai);
});

function loadSiswa() {
    fetch('/api/siswa')
        .then(response => response.json())
        .then(data => {
            let content = `
                <h2>Data Siswa</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>NIS</th>
                            <th>Kelas</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            data.forEach(siswa => {
                content += `
                    <tr>
                        <td>${siswa.nama}</td>
                        <td>${siswa.nis}</td>
                        <td>${siswa.kelas}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="deleteSiswa('${siswa._id}')">Hapus</button>
                        </td>
                    </tr>
                `;
            });
            content += `</tbody></table>`;
            content += `
                <h2>Tambah Siswa</h2>
                <form id="add-siswa-form">
                    <div class="form-group">
                        <label for="nama">Nama:</label>
                        <input type="text" class="form-control" id="nama" required>
                    </div>
                    <div class="form-group">
                        <label for="nis">NIS:</label>
                        <input type="text" class="form-control" id="nis" required>
                    </div>
                    <div class="form-group">
                        <label for="kelas">Kelas:</label>
                        <input type="text" class="form-control" id="kelas" required>
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">Tambah</button>
                </form>
            `;
            document.getElementById('content').innerHTML = content;
            document.getElementById('add-siswa-form').addEventListener('submit', addSiswa);
        });
}

function addSiswa(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const nis = document.getElementById('nis').value;
    const kelas = document.getElementById('kelas').value;

    fetch('/api/siswa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nama, nis, kelas })
    })
    .then(response => response.json())
    .then(data => {
        alert('Siswa berhasil ditambahkan');
        loadSiswa();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Gagal menambahkan siswa');
    });
}

function deleteSiswa(id) {
    fetch(`/api/siswa/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('Siswa berhasil dihapus');
        loadSiswa();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Gagal menghapus siswa');
    });
}

function loadGuru() {
    fetch('/api/guru')
        .then(response => response.json())
        .then(data => {
            let guruList = document.getElementById('guruList');
            guruList.innerHTML = '';
            data.forEach(guru => {
                guruList.innerHTML += `
                    <tr>
                        <td>${guru.nama}</td>
                        <td>${guru.matapelajaran}</td>
                        <td>
                            <button onclick="editGuru('${guru._id}')">Edit</button>
                            <button onclick="deleteGuru('${guru._id}')">Delete</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => console.error('Error:', error));
}

function addGuru(event) {
    event.preventDefault();
    const nama = document.getElementById('namaGuru').value;
    const matapelajaran = document.getElementById('matapelajaranGuru').value;

    fetch('/api/guru', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, matapelajaran }),
    })
        .then(response => response.json())
        .then(data => {
            alert('Guru berhasil ditambahkan');
            loadGuru();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menambahkan guru');
        });
}

function deleteGuru(id) {
    fetch(`/api/guru/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            alert('Guru berhasil dihapus');
            loadGuru();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menghapus guru');
        });
}

// Functions for Mata Pelajaran
function loadMataPelajaran() {
    fetch('/api/matapelajaran')
        .then(response => response.json())
        .then(data => {
            let matapelajaranList = document.getElementById('matapelajaranList');
            matapelajaranList.innerHTML = '';
            data.forEach(matapelajaran => {
                matapelajaranList.innerHTML += `
                    <tr>
                        <td>${matapelajaran.nama}</td>
                        <td>
                            <button onclick="editMataPelajaran('${matapelajaran._id}')">Edit</button>
                            <button onclick="deleteMataPelajaran('${matapelajaran._id}')">Delete</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => console.error('Error:', error));
}

function addMataPelajaran(event) {
    event.preventDefault();
    const nama = document.getElementById('namaMataPelajaran').value;

    fetch('/api/matapelajaran', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama }),
    })
        .then(response => response.json())
        .then(data => {
            alert('Mata Pelajaran berhasil ditambahkan');
            loadMataPelajaran();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menambahkan mata pelajaran');
        });
}

function deleteMataPelajaran(id) {
    fetch(`/api/matapelajaran/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            alert('Mata Pelajaran berhasil dihapus');
            loadMataPelajaran();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menghapus mata pelajaran');
        });
}

// Functions for Kelas
function loadKelas() {
    fetch('/api/kelas')
        .then(response => response.json())
        .then(data => {
            let kelasList = document.getElementById('kelasList');
            kelasList.innerHTML = '';
            data.forEach(kelas => {
                kelasList.innerHTML += `
                    <tr>
                        <td>${kelas.nama}</td>
                        <td>
                            <button onclick="editKelas('${kelas._id}')">Edit</button>
                            <button onclick="deleteKelas('${kelas._id}')">Delete</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => console.error('Error:', error));
}

function addKelas(event) {
    event.preventDefault();
    const nama = document.getElementById('namaKelas').value;

    fetch('/api/kelas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama }),
    })
        .then(response => response.json())
        .then(data => {
            alert('Kelas berhasil ditambahkan');
            loadKelas();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menambahkan kelas');
        });
}

function deleteKelas(id) {
    fetch(`/api/kelas/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            alert('Kelas berhasil dihapus');
            loadKelas();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menghapus kelas');
        });
}

// Functions for Absensi
function loadAbsensi() {
    fetch('/api/absensi')
        .then(response => response.json())
        .then(data => {
            let absensiList = document.getElementById('absensiList');
            absensiList.innerHTML = '';
            data.forEach(absensi => {
                absensiList.innerHTML += `
                    <tr>
                        <td>${absensi.siswaId}</td>
                        <td>${absensi.mapelId}</td>
                        <td>${absensi.status_kehadiran}</td>
                        <td>
                            <button onclick="editAbsensi('${absensi._id}')">Edit</button>
                            <button onclick="deleteAbsensi('${absensi._id}')">Delete</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => console.error('Error:', error));
}

function addAbsensi(event) {
    event.preventDefault();
    const siswaId = document.getElementById('siswaIdAbsensi').value;
    const mapelId = document.getElementById('mapelIdAbsensi').value;
    const status_kehadiran = document.getElementById('statusKehadiran').value;

    fetch('/api/absensi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ siswaId, mapelId, status_kehadiran }),
    })
        .then(response => response.json())
        .then(data => {
            alert('Absensi berhasil ditambahkan');
            loadAbsensi();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menambahkan absensi');
        });
}

function deleteAbsensi(id) {
    fetch(`/api/absensi/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            alert('Absensi berhasil dihapus');
            loadAbsensi();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menghapus absensi');
        });
}

// Functions for Nilai
function loadNilai() {
    fetch('/api/nilai')
        .then(response => response.json())
        .then(data => {
            let nilaiList = document.getElementById('nilaiList');
            nilaiList.innerHTML = '';
            data.forEach(nilai => {
                nilaiList.innerHTML += `
                    <tr>
                        <td>${nilai.siswaId}</td>
                        <td>${nilai.mapelId}</td>
                        <td>${nilai.kehadiran}</td>
                        <td>${nilai.tugas}</td>
                        <td>${nilai.ulangan}</td>
                        <td>${nilai.uts}</td>
                        <td>${nilai.uas}</td>
                        <td>
                            <button onclick="editNilai('${nilai._id}')">Edit</button>
                            <button onclick="deleteNilai('${nilai._id}')">Delete</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => console.error('Error:', error));
}

function addNilai(event) {
    event.preventDefault();
    const siswaId = document.getElementById('siswaIdNilai').value;
    const mapelId = document.getElementById('mapelIdNilai').value;
    const kehadiran = document.getElementById('kehadiranNilai').value;
    const tugas = document.getElementById('tugasNilai').value;
    const ulangan = document.getElementById('ulanganNilai').value;
    const uts = document.getElementById('utsNilai').value;
    const uas = document.getElementById('uasNilai').value;

    fetch('/api/nilai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ siswaId, mapelId, kehadiran, tugas, ulangan, uts, uas }),
    })
        .then(response => response.json())
        .then(data => {
            alert('Nilai berhasil ditambahkan');
            loadNilai();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menambahkan nilai');
        });
}

function deleteNilai(id) {
    fetch(`/api/nilai/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            alert('Nilai berhasil dihapus');
            loadNilai();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menghapus nilai');
        });
}