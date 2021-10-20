function solve() {
   const [author, title, category] = document.querySelectorAll('input');
   const content = document.querySelector('#content');
   let archive = document.querySelector('aside section ol');
   document.querySelector('button').addEventListener('click', createPost);

   function createPost(e) {
      e.preventDefault();
      let article = document.createElement('article');
      article.innerHTML = `<h1>${title.value}</h1><p>Category:<strong>${category.value}</strong></p>
<p>Creator:<strong>${author.value}</strong></p><p>${content.value}</p>`;
      let div = document.createElement('div');
      div.classList.add('buttons');
      let delBtn = document.createElement('button');
      delBtn.className = 'btn delete';
      delBtn.textContent = 'Delete';
      let archBtn = document.createElement('button');
      archBtn.className = 'btn archive';
      archBtn.textContent = 'Archive';
      div.appendChild(delBtn);
      div.appendChild(archBtn);
      article.appendChild(div);
      document.querySelector('main section').appendChild(article);
      delBtn.addEventListener('click', (e) => e.target.parentElement.parentElement.remove());
      archBtn.addEventListener('click', toArchive);

      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   }
   function toArchive(e) {
      let liText = e.target.parentElement.parentElement.querySelector('h1').textContent;
      e.target.parentElement.parentElement.remove();
      let li = document.createElement('li');
      li.textContent = liText;
      archive.appendChild(li);
      Array.from(archive.children)
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(el => archive.appendChild(el));
   }
}
