async function foo(){

  try{
      let res = await fetch("https://foodish-api.herokuapp.com/api/");
      let res1 = await res.json();
      console.log(res1);
      let div = document.createElement("div");
      div.classList.add("container-fluid", "d-flex:", "justify-content:center", "m-5", "p-5")
      div.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 20rem; margin-left:400px;" >
      <div class="card-header" style="text-align:center;">Foodish</div>
      <div class="card-body">
    
      <img src="${res1.image}" class="card-img-top">
      </div>
    </div>
      </div>
    </div>`
      document.body.append(div);

  } 
  catch(error){
      console.log(error);
  }

}
foo();

