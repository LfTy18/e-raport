document.addEventListener('DOMContentLoaded', () => {
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
});

function loadSiswaData() {
    fetch('http://localhost:3000/api/siswa')
        .then(response => response.json())
        .then(data => {
            const siswaTable = document.getElementById('siswaTable').getElementsByTagName('tbody')[0];
            siswaTable.innerHTML = '';
            data.forEach(siswa => {
                let row = siswaTable.insertRow();
                row.insertCell(0).innerHTML = siswa.id;
                row.insertCell(1).innerHTML = siswa.nama;
                row.insertCell(2).innerHTML = siswa.kelas;
                let actionCell = row.insertCell(3);
                actionCell.innerHTML = `
                    <button class="btn btn-warning" onclick="showEditSiswaForm(${siswa.id})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteSiswa(${siswa.id})">Hapus</button>
                `;
            });
        })
        .catch(error => console.error('Error loading siswa data:', error));
    }

    function showAddSiswaForm() {
        const form = document.getElementById('dataForm');
        if (form) {
            form.reset();
            $('#dataForm').form('show');
        } else {
            console.error('Form element not found');
        }
    }
    
    
    function showEditSiswaForm(id) {
        fetch(`http://localhost:3000/api/siswa/${id}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('nama').value = data.nama;
                document.getElementById('kelas').value = data.kelas;
                $('#dataForm').modal('show');
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
