function search() {
   let towns = document.getElementsByTagName('li');
   let match = document.getElementById('searchText').value;
   let matches = 0;

   // Reset changed Towns and Matches
   for (let town of towns) {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none"
   }
   document.getElementById('result').textContent = '';

   // Find match of towns(bold&underline it) and increase matches
   for (let town of towns) {
      if (town.textContent.includes(match)) {
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         matches++;
      }
   }

   document.getElementById('searchText').value = '';
   document.getElementById('result').textContent = matches + ' matches found';
}
