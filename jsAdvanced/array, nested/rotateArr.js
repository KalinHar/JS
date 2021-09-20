function rotateArray(arr, n) {
    for (_=0; _<n; _++) arr.unshift(arr.pop());
    console.log(arr.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)