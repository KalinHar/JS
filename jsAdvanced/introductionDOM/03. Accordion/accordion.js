function toggle() {
    let manipulation = document.getElementsByClassName('button')[0].textContent;
    let manResult = manipulation == 'More' ? 'Less' : 'More';
    document.getElementsByClassName('button')[0].textContent = manResult;
    if (manipulation == 'More') {
        document.getElementById('extra').style.display = 'block'
    }else {
        document.getElementById('extra').style.display = 'none'
    }
}