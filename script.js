var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
    tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
    
}


var sidemenu=document.getElementById("sidemenu");

        function openmenu(){
        sidemenu.style.right="0";
        }
        function closemenu(){
        sidemenu.style.right="-200px";
        }


  const scriptURL = 'https://script.google.com/macros/s/AKfycbw6zSQKorpX07B6MNWRRMiN7_iXiehzdd5MNJ43BxN7kcw2rRVDxRR-0O2pJVK5etnO/exec'
  const form = document.forms['submit-to-google-sheet']
  const message= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Message sent successfully!"
        setTimeout(function(){
          message.innerHTML=""
        },1500)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
