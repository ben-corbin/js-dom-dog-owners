console.log(data);

function createDogListItem(dog){
    const li = document.createElement("li");
    const dogContainer = document.querySelector(".main");
  
    li.className = "dogs-list__button";
    li.innerText = dog.name;

    li.addEventListener("click", function () {
        const newDog = createDogCard(dog)
        dogContainer.append(newDog)
        const noDog = document.querySelector(".main__dog-section")
        noDog.remove()  
    })
    
    return li;
  };
  
  function createSection() {
    const section = document.createElement("section");
    section.className = "main__dog-section";
    return section;
  };
  
  const createDogCardDesc = (bio) => {
    const div = document.createElement("div");
    const header = document.createElement("h3");
    const text = document.createElement("p")

    div.className = "main__dog-section__desc";
    header.innerText = "Bio"
    text.innerText = bio

    div.append(header, text);
  
    return div;
  };
  
  function createDogCardBottomSection(dog) {
    const button = document.createElement("button");
    const text = document.createElement("p");
    const div = document.createElement("div");
  
    div.className = "main__dog-section__btn";

    const result = doggyDoggyWhat(dog)

    text.innerText = 'Is doggo naughty? ' + result

    if (dog.isGoodDog === true) {
      button.innerText = 'Bad Bad Dog'
    }
    else {button.innerText = 'Good Good Dog'}

    function doggyDoggyWhat(dog) {
        if (dog.isGoodDog === true) {
          return 'Yes'
        }
        else return 'No'
      }

    button.addEventListener('click', function() {
      if (button.innerText === 'Bad Bad Dog'){
        button.innerText = 'Good Good Dog'
        text.innerText = 'Is doggo naughty? No!'
      }
      else if (button.innerText === 'Good Good Dog'){
        button.innerText = 'Bad Bad Dog'
        text.innerText = 'Is doggo naughty? Yes!'
      }
    })

    div.append(text, button);
    
    return div;
  };
  
  const createDogCard = (dog) => {
    const section = createSection();
    const header = document.createElement("h2");
    const img = document.createElement("img")
    img.setAttribute("src", dog.image);
    header.innerText = dog.name;
    
    const desc = createDogCardDesc(dog.bio);
    const bottomSection = createDogCardBottomSection(dog);
  
    section.append(header, img, desc, bottomSection);
  
    return section;
  };
  
  function createForm() {
    const form = document.createElement("form");
  
    const nameInput = createInput("name");
    const imgInput = createInput("image", "url");
    const bioInput = createInput("bio", "textarea");
    const submitInput = createInput("submit", "submit", "Let's add a dog!");
  
    const nameLabel = createLabel("name", "Dog's name");
    const imgLabel = createLabel("image", "Dog's picture");
    const bioLabel = createLabel("bio", "Dog's bio");
  
    form.className = "form";
    submitInput.className = "form__button";

    form.addEventListener("submit", function(event){

        event.preventDefault();
        const nameInputForm = nameInput.value
        const imgInputForm = imgInput.value
        const bioInputForm = bioInput.value

        const dog = {
            id: data.length,
            name: nameInputForm,
            bio: bioInputForm,
            isGoodDog: true,
            image: imgInputForm
        }

        data.push(dog);
        const result = createDogListItem(dog)

        const dogButton = document.querySelector(".dogs-list__button--add")

        dogButton.after(result)
        
    })
  
    //(5)
    //TODO: Add an event listener on to the form to capture the
    //submit event. In the submit event, add a item  to the
    //list of dogs at the top of the page, and add a new object
    //in to the dogs array with the data captured from the form.
  
    form.append(
      nameLabel,
      nameInput,
      imgLabel,
      imgInput,
      bioLabel,
      bioInput,
      submitInput
    );
    return form;
  };
  
  function createInput(idName, type = "text", value) {
    let input = null;
  
    if (type === "textarea") {
      input = document.createElement("textarea");
      input.setAttribute("rows", "5");
    } else {
      input = document.createElement("input");
      input.setAttribute("type", type);
    }
  
    input.setAttribute("id", idName);
    input.setAttribute("name", idName);
  
    if (value) input.setAttribute("value", value);
  
    return input;
  }
  
  function createLabel(forAttr, text) {
    const label = document.createElement("label");
    label.attributes.for = forAttr;
    label.innerText = text;
  
    return label;
  };
  
  function renderMainForm() {
    const section = createSection();
    const form = createForm();
    const h2 = document.createElement("h2");
  
    h2.innerText = "Add a new Dog";
  
    section.append(h2, form);
  
    return section;
  };
  
  function renderDogList(dogsArr) {
    const listContainer = document.querySelector(".dogs-list");
    for (const dog of dogsArr) {
      const item = createDogListItem(dog);
      listContainer.append(item);
    }
  };
  
  renderDogList(data);
  
  const formButton = document.querySelector(".dogs-list__button--add");
  const dogContainer = document.querySelector(".main");
  
  formButton.addEventListener("click", function(){
    const form = renderMainForm()
    dogContainer.append(form)
    const noDog = document.querySelector(".main__dog-section")
    noDog.remove()     
  }
  )
