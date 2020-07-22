//get form values 
// create an object of the form values
//create an empty array
//append object of the form values to the empty array
//display array object values

showCollection();

var getButton = document.getElementById('clickIt');
var collectionTitle = document.getElementById("title");
var collectionDescription = document.getElementById('describe')


getButton.addEventListener('click', function(e){
    e.preventDefault()
    var collections = {
        title: collectionTitle.value,
        description: collectionDescription.value
    }

    let webCollections = localStorage.getItem('collectx');
    if(webCollections == null){
        var collectionObj = []
        alert('storage is empty')
    }
    else{
        collectionObj = JSON.parse(webCollections);
    }
    collectionObj.push(collections);
    localStorage.setItem("collectx", JSON.stringify(collectionObj));
    showCollection()
});


function showCollection(){
    let webCollections =  localStorage.getItem('collectx')
    if(webCollections == null){
        var collectionObj = []
        alert('storage is empty')
    }
    else{
        collectionObj = JSON.parse(webCollections);
    }
    let html= ''
    var demos = document.getElementById('demo');
    collectionObj.forEach(function(item, index){
        html += `<div class="collects"> 
        Title: ${item.title} <br>
        Description: ${item.description} </div>`
      })
      demos.innerHTML = html
   
    
}
