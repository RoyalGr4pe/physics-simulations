function multMatrix(m1, m2) {
    /*
    Columns of m1 must equal rows of m2 
    */
  
    no_m1_rows = m1.length
    no_m1_cols = m1[0].length
    no_m2_rows = m2.length
    no_m2_cols = m2[0].length
  
    if (no_m1_cols != no_m2_rows) {
        error_message = "Cannot multiple matrices " + no_m1_rows + "x" + no_m1_cols + " and " + no_m2_rows + "x" + no_m2_cols
        throw new Error(error_message)
    }
  
    matrix = []
    for (let i = 0; i < m1.length; i++) {
        matrix_row = []

        for (let l = 0; l < m2[0].length; l++) {
            pos_value = 0
        
            m1_row = m1[i]
            m2_col = []
            
            for (j = 0; j < m2.length; j++) {
                m2_col.push(m2[j][l])
            } 
            
            for (k = 0; k < m1_row.length; k++) {
                pos_value += m1_row[k] * m2_col[k]
            }
            matrix_row.push(pos_value)
        }
        matrix.push(matrix_row)
    }
    return matrix
}


function rotate2x2Matrix(matrix, theta, pointOfRotation) {
    rotationMatrix = [
        [Math.cos(theta), -Math.sin(theta)],
        [Math.sin(theta), Math.cos(theta)]
    ]

    matrix = [
        [matrix[0][0] - pointOfRotation[0]], 
        [matrix[1][0] - pointOfRotation[1]]
    ]

    rotatedMatrix = multMatrix(rotationMatrix, matrix)

    return [
        [rotatedMatrix[0][0] + pointOfRotation[0]], 
        [rotatedMatrix[1][0] + pointOfRotation[1]]
    ]
}