document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('homeLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
    
    document.getElementById('siswaLink').addEventListener('click', function(event) {
        event.preventDefault();
        fetchDataAndDisplay('http://localhost:3000/api/siswa', 'siswa');
    });

    document.getElementById('guruLink').addEventListener('click', function(event) {
        event.preventDefault();
        fetchDataAndDisplay('http://localhost:3000/api/guru', 'guru');
    });

    document.getElementById('mapelLink').addEventListener('click', function(event) {
        event.preventDefault();
        fetchDataAndDisplay('http://localhost:3000/api/mapel', 'mata pelajaran');
    });

    document.getElementById('kelasLink').addEventListener('click', function(event) {
        event.preventDefault();
        fetchDataAndDisplay('http://localhost:3000/api/kelas', 'kelas');
    });

    document.getElementById('absensiLink').addEventListener('click', function(event) {
        event.preventDefault();
        fetchDataAndDisplay('http://localhost:3000/api/absensi', 'absensi');
    });

    document.getElementById('nilaiLink').addEventListener('click', function(event) {
        event.preventDefault();
        fetchDataAndDisplay('http://localhost:3000/api/nilai', 'nilai');
    });
    
    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault();
                const id = event.target.dataset.id;
                if (id){
                    editSiswa();
                } else {
                    addSiswa();
                }
});

})
// CRUD Siswa
function loadSiswaData() {
    fetch('http://localhost:3000/api/siswa')
        .then(response => response.json())
        .then(data => {
            const siswaTableBody = document.getElementById('siswaTableBody');
            siswaTableBody.innerHTML = '';
            data.forEach(siswa => {
                const row = `<tr>
                <td>${siswa.nama}</td>
                <td>${siswa.kelas}</td>
                <td>
                    <button class="btn btn-warning" onclick="showEditSiswaForm('${siswa._id}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteSiswa('${siswa._id}')">Hapus</button>
                </td>
                </tr>`;
                siswaTableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error loading siswa data:', error));
}


function createSiswa() {
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);
    const siswaData = {
        nama: formData.get('nama'),
        kelasid: formData.get('kelasId')
    };

    fetch('http://localhost:3000/api/siswa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(siswaData)
    })
       .then(response => {
            if (response.ok) {
                loadSiswaData();
                $('#dataForm').form('hide');
            } else {
                console.error('Error creating siswa');
            }
        })
       .catch(error => console.error('Error creating siswa:', error));
}
    
    
function editSiswaForm(id) {
    fetch(`http://localhost:3000/api/siswa/${id}`)
        .then(response => response.json())
        .then(data => {
            const form = document.getElementById('dataForm');
            form.nama.value = data.nama;
            form.kelas.value = data.kelas;
            form.dataset.id = id;
            $('#dataFormModal').form('show');
        })
        .catch(error => console.error('Error loading siswa data:', error));
}
    function deleteSiswa(id) {
        fetch(`http://localhost:3000/api/siswa/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                loadSiswaData();
            } else {
                console.error('Error deleting siswa');
            }
        })
        .catch(error => console.error('Error deleting siswa:', error));
    }

    loadSiswaData();

function fetchDataAndDisplay(url, type) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data, type);
        })
        .catch(error => console.error('Error:', error));
}

function displayData(data, type) {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>Data ${type.charAt(0).toUpperCase() + type.slice(1)}</h1>`;
    if (Array.isArray(data) && data.length > 0) {
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered', 'mt-4');
        
        const thead = document.createElement('thead');
        const headers = Object.keys(data[0]);
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header.charAt(0).toUpperCase() + header.slice(1);
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        const tbody = document.createElement('tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            headers.forEach(header => {
                const td = document.createElement('td');
                td.textContent = item[header];
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        
        container.appendChild(table);
    } else {
        container.innerHTML += `<p>No data available for ${type}.</p>`;
    }
}
