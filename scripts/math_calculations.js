function add_array(array1, array2) {
    // Add two arrays together
    if (array1.length != array2.length) {
        throw new Error("Cannot add array of length " + array1.length + " and " + array2.length);
    }
    let array = [0, 0]
    for (let i = 0; i < array1.length; i++) {
        array[i] = array1[i] + array2[i]
    }
    if (array[0] == NaN || array[1] == NaN) {
        array = [0, 0]
    }
    return array;
}