function addRemove(cmds) {
    const result = [];
    for (let num = 1; num <= cmds.length; num++) {
        if (cmds[num-1] == 'add') {
            result.push(num);
        }else result.pop();
    }
    if (result.length == 0) result.push('Empty');
    console.log(result.join('\n'));
}
addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
)
addRemove(['remove', 
'remove', 
'remove']
)