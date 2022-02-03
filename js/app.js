let addBtn = document.getElementById("addBtn");
showNotes();

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});

// Function To display all notes

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
                    <!-- notes start -->

                    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="eraserHead(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                    </div>
                    <!-- notes end -->
        
                `;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show here no notes added use 'Add Note' section above to add some notes.`;
  }
}

// Function to delete nodes

function eraserHead(index) {
  console.log("I am EraserHead, Erased", index);

  let notes = localStorage.getItem("notes");
  if (notes == 0) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


// Implementing Search

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){


    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
        // console.log(cardTxt);
    })
})