function springAlreadyAttached(springs, joint1, joint2) {
    /* Checks if a spring is already between two joints */
    for (spring of springs) {
        if (
            (
                spring.getJointIDs()[0] == joint1.getID() 
                && spring.getJointIDs()[1] == joint2.getID()
            )
            || 
            (
                spring.getJointIDs()[0] == joint2.getID() 
                && spring.getJointIDs()[1] == joint1.getID()
            )
            ) 
            {
                return true;
            }
    }
    return false;
}