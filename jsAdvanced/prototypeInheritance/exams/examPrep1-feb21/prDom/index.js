function solve(e) {
    const [lectNameField, dateField] = document.querySelectorAll(`input`);
    const moduleNameField = document.getElementsByTagName('select')[0];
    const modules = document.getElementsByClassName('modules')[0];
    document.querySelector('button').addEventListener('click', addLecture);

    function lectureTemplate(date, lectureName) {
        const li = document.createElement('li');
        li.className = 'flex';
        li.innerHTML = `<h4>${lectureName} - ${date}</h4>
		<button class='red'>Del</button>`;
        li.querySelector('button').addEventListener('click', dellLecture);
        li.date = date;

        return li;
    }

    function moduleTemplate(moduleName, date, lectureName) {
        const moduleDiv = document.createElement('div');
        moduleDiv.className = 'module';
        moduleDiv.innerHTML = `<h3>${moduleName}</h3>`;
        const moduleLectures = document.createElement('ul');
        moduleLectures.appendChild(lectureTemplate(date, lectureName));
        moduleDiv.appendChild(moduleLectures);

        return moduleDiv;
    }

    const helpers = {fDate: (s) => s.replaceAll('-', '/').replace('T', ' - '),
                    fName: (n) => `${n.toLocaleUpperCase()}-MODULE`}

    function addLecture(e) {
        e.preventDefault();
        const [lectureName, date, moduleName] = [lectNameField.value, helpers.fDate(dateField.value), helpers.fName(moduleNameField.value)];

        if (lectureName !== '' && date !== '' && moduleName !== 'Select module') {
            const sameModule = Array.from(modules.children)
                .find(x => x.children[0].innerHTML === moduleName);
            if (sameModule) {
                const trainings = sameModule.children[1];
                const lectures = Array.from(trainings.children);
                lectures.push(lectureTemplate(date, lectureName));
                lectures.sort((a, b) => a.date.localeCompare(b.date));
                lectures.forEach(lecture => trainings.appendChild(lecture));
            } else {
                modules.appendChild(moduleTemplate(moduleName, date, lectureName));
            }
        lectNameField.value = '';
        dateField.value = '';
        moduleNameField.value = 'Select module';
        }
    }

    function dellLecture(e) {
        const moduleSection = e.target.parentElement.parentElement.parentElement;
        e.target.parentElement.remove();
        if (moduleSection.children[1].children.length === 0) {
            moduleSection.remove()
        }
    }
}




// function solve() {
//     const [lectName, date] = Array.from(document.querySelectorAll('input'));
//     const module = document.querySelector('select')
//     document.querySelector('button').addEventListener('click', addLecture)
//     const trainings = document.querySelector('.modules')
//     const objTrainings = {} // Object for active modules.

//     function addLecture(e) {
//         e.preventDefault();
//         let modVal = `${module.value.toLocaleUpperCase()}-MODULE`;
//         if (module.value != 'Select module' && lectName.value != '' && date.value != '') {
//             let elemetLi = createLi();
//             let elemetDiv = createDiv();
//             // If module not in active modules, add it.
//             if (!objTrainings[modVal]){
//                 objTrainings[modVal] = [elemetLi];    
//                 elemetDiv.querySelector('ul').appendChild(elemetLi);
//                 trainings.appendChild(elemetDiv);
//             // If module in active modules, add lecture(sorted) to module.
//             }else {
//                 objTrainings[modVal].push(elemetLi);
//                 objTrainings[modVal].sort((a, b) => {
//                     a = a.querySelector('h4').textContent.split(' - ').slice(1).toString();
//                     b = b.querySelector('h4').textContent.split(' - ').slice(1).toString();
//                     return a.localeCompare(b);
//                 })
//                 let modul = Array.from(document.querySelectorAll('.modules h3')).filter(m => m.textContent == modVal);
//                 for (let el of objTrainings[modVal]) {
//                     modul[0].parentElement.querySelector('ul').appendChild(el);
//                 }
//             }
//         lectName.value = '';
//         date.value = '';
//         module.value = 'Select module'
//         }
//     }

//     function createDiv() {
//         let newDiv = document.createElement('div');
//         let modVal = `${module.value.toLocaleUpperCase()}-MODULE`;
//         newDiv.className = 'module';
//         newDiv.innerHTML = `<h3>${modVal}</h3><ul></ul>`;
//         return newDiv;
//     }
//     function createLi() {
//         let newLi = document.createElement('li');
//         newLi.className = 'flex';
//         let fdate = date.value;
//         fdate = fdate.replaceAll('-', '/');
//         fdate = fdate.replace('T', ' - ');
//         newLi.innerHTML = `<h4>${lectName.value} - ${fdate}</h4>`
//         let dellBtn = document.createElement('button');
//         dellBtn.className = 'red';
//         dellBtn.textContent = 'Del';
//         dellBtn.addEventListener('click', (e) => {
//             let mod = e.target.parentElement.parentElement.parentElement;
//             mod = mod.querySelector('h3').textContent;
//             objTrainings[mod] = objTrainings[mod].filter(el => el != e.target.parentElement);
//             if (objTrainings[mod].length > 0) {
//                 e.target.parentElement.remove();     
//             }else {
//                 delete objTrainings[mod]
//                 e.target.parentElement.parentElement.parentElement.remove();
//             }
//         });
//         newLi.appendChild(dellBtn);
//         return newLi;
//     }
// };