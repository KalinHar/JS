function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      let match = document.getElementById('searchField').value.toLowerCase();
      
      rows.forEach(element => {     
         if (element.textContent.toLocaleLowerCase().includes(match)) {
            element.classList.add("select");
         }else {
            element.classList.remove("select");
         }
      });
      document.getElementById('searchField').value = ''
   }
}