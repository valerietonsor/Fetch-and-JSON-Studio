// TODO: add code here

window.addEventListener("load", function(){ 
    let colorChange = ""; 
    let counter = 0; 
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            for (let i = 0; i < json.length; i++){ 
                if (json[i].active){ 
                    colorChange = "active"; 
            }

            
            let orderedArr = json.sort(function(a, b){return b.hoursInSpace-a.hoursInSpace})
            
        let obj = orderedArr[i]; 
           let container = document.getElementById("container"); 
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${obj.firstName} ${obj.lastName}</h3>
                     <ul>
                        <li>Hours in Space: ${obj.hoursInSpace}</li>
                        <li class= ${colorChange}>Active: ${obj.active}</li>
                        <li>Skills: ${obj.skills}</li>
                     </ul>
            </div>
                    <img class="avatar" src="${obj.picture}">
                </div>
            `; 

            counter += 1; 
            let printCount = document.getElementById("crewcounter");
            printCount.innerHTML = `
            <h4>Astronaut Counter: ${counter}</h4>
            `; 
        
        }
 

   


       
          
           
           
            
}); 
}); 
}); 