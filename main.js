var form=document.getElementById("add Form");
var itemList=document.getElementById('item');
//form submit events
form.addEventListener('submit',addItems);
itemList.addEventListener('click',removeitem);

//add item
function addItems(e){
    e.preventDefault();
    //get input value
    var newItem=document.getElementById(item).value;

    //create new li element
    var li= document.createElement('li');
    //add class
    li.className='List-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // CREATE del button element
    var deleteBtn=document.createElement('button');
    //add classes to del button
    deleteBtn.className='btn btn=danger btn-sm float -right-delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);
}

//remove items
function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sire?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}