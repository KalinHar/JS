function create(words) {
   const sections = document.querySelector('#content');
   sections.addEventListener('click', onDisplay);

   for (let i = 0; i < words.length; i++) {
      const pTag = document.createElement('p');
      pTag.textContent = words[i];
      pTag.style.display = "none";
      
      const divTag = document.createElement('div');
      divTag.appendChild(pTag);
      // divTag.addEventListener('onClick', onDisplay);

      sections.appendChild(divTag);
      
   }

   function onDisplay(ev) {
      if (ev.target.tagName == 'DIV' && ev.target != sections) {
         ev.target.children[0].style.display = '';
         // console.log(ev.target);
      }
   }
}