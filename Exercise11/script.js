const people = [
    { name: "adri" },
    { name: "becky" },
    { name: "chris" },
    { name: "dillon" },
    { name: "evan" },
    { name: "frank" },
    { name: "georgette" },
    { name: "hugh" },
    { name: "igor" },
    { name: "jacoby" },
    { name: "kristina" },
    { name: "lemony" },
    { name: "matilda" },
    { name: "nile" },
    { name: "ophelia" },
    { name: "patrick" },
    { name: "quincy" },
    { name: "roslyn" },
    { name: "solene" },
    { name: "timothy" },
    { name: "uff" },
    { name: "violet" },
    { name: "wyatt" },
    { name: "x" },
    { name: "yadri" },
    { name: "zack" }
  ];

  //render names to the webpage
  let ul = document.querySelector('ul')
  let searchBar = document.querySelector('input')

  function renderNamesToPage(people) {
    for(i=0; i < people.length; i++){
        console.log(people[i]);
        //create an element
        let list_item=document.createElement("li");
        list_item.textContent = people[i].name;
        ul.appendChild(list_item);
    }
  }

  renderNamesToPage(people)

  //search names
  function searchNames(event){
      let serachString = event.target.value;
      console.log(serachString);
      
      const serchedName = people.filter(function(person){
          if(serachString){
            return person.name.includes(serachString)
          }
      })
      renderSearchedNames(serchedName)
  }

  function renderSearchedNames(searched){
      console.log('line 60:', searched)
      clearList();
      //clear the list
      for(i = 0; i<searched.length;i++){
          let list_item = document.createElement('li');
          list_item.textContent = searched[i].name;
          ul.appendChild(list_item);
      }
  }

function clearList(){
    ul.innerHTML = ""
}

searchBar.addEventListener('keyup', searchNames)


