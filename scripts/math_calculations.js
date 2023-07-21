function add_array(array1, array2) {
    // Add two arrays together
    if (array1.length != array2.length) {
        throw new Error("Cannot add array of length " + array1.length + " and " + array2.length);
    }
    let array = []
    for (let i = 0; i < array1.length; i++) {
        array.push(array1[i] + array2[i])
    }
    return array;
}