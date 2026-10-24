let records = [{"id": 1, "name": "Shriya Aakrethi P", "detail": "11 F", "active": true},
                {"id": 2, "name": "Shivanikha G", "detail": "11 F", "active": false}];

let nextId = 3;

const studentname = document.querySelector("#student-name");
const studentdetail = document.querySelector("#student-detail");
const addstudent = document.querySelector("#add-student");
const feedback = document.querySelector("#feedback");
const summary = document.querySelector("#summary");
const recordlist = document.querySelector("#record-list");

function renderRecords() {
    recordlist.textContent="";
    let activeCount=0;

    for (const record of records) {
        if (record.active) {
            activeCount = activeCount + 1;
        }
    

    const row = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = record.name + " - " + record.detail;

    const studentStatus = document.createElement("button");
    studentStatus.textContent = record.active ? "Mark Absent" : "Mark Present";
    studentStatus.addEventListener("click", function() {
        toggleRecord(record.id);
    })

    const studentDelete = document.createElement("button");
    studentDelete.textContent = "Delete Student";
    studentDelete.addEventListener("click", function() {
        deleteRecord(record.id);
    })
    
    row.append(text, studentStatus, studentDelete);
    recordlist.appendChild(row);
    }

    summary.textContent = records.length + " students / " + activeCount + " present";
    if (records.length ===0) {
        list.textContent = "No Records Yet.";
    }

}

function addStudent(event) {
    event.preventDefault()
    const name = studentname.value.trim();
    const detail = studentdetail.value.trim();
    records.push({id: nextId, name: name, detail: detail, active: false});
    nextId = nextId + 1;
    studentname.value="";
    studentdetail.value="";
    renderRecords();
}

function toggleRecord(id) {
    for (const record of records) {
        if (record.id === id) record.active = !record.active;
    }
    renderRecords();
}

function deleteRecord(id) {
    records = records.filter(function (record) {
        return record.id !== id;
    });
    renderRecords()
}

addstudent.addEventListener("click", addStudent)
renderRecords()