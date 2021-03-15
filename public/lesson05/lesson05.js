/*
 * Up to this point, whenever we had multiple variables, we made them as separate variables. This in most cases is fine
 * but sometimes those variables are going to have similar purposes. For example, imagine we had multiple points for a
 * shape, we would have to store each point as its own variable, and since we have not learned about vectors yet, we
 * would have to use separate x and y variables for each point. This is will make us have a ton of separate variables
 * with their own names, which can get inflexible and annoying to code.
 *
 * To solve this issue, we use arrays. An array is a list of data in order. In JavaScript, the data in the array can be
 * any type, and the array can grow and shrink. Each individual data in the array is called an element, and each element
 * is accessed using an index. An index is a number that corresponds to that element's position in the array. This may
 * be confusing, but the first element in the array has index 0, the second element has index 1, the third has index 2
 * and so on. This is a common joke in programming, that we start counting from 0 instead of 1. So suppose that an array
 * has length L, then the first element in the array is index 0, and the last element in the array is index (L - 1). So
 * for example, if we had an array of length 10, the last element would be index 9. If we try to use a negative index
 * to access an element, or an index that is greater than or equal to the length, we will get an error. So how do we use
 * an array in JavaScript?
 *
 * An array in JavaScript is noted with square brackets []. If we want to create an empty array and store it in a
 * variable, we can use the following line of code:
 *
 * const arr = [];
 *
 * We declare an array as constant because the variable itself refers to the specific array, so even if the array
 * grows, shrinks, or the elements get changed, it is still the same array. Very rarely in JavaScript will we change
 * which array a variable is referencing. This goes into a bigger topic of reference variables vs primitive variables
 * which we will get into later.
 *
 * We can create an array with values already in it like this:
 *
 * const arr = [1, 2, 3, "hello", true, 40];
 *
 * As you can see, we can mix the types of values that we put in an array in JavaScript, this isn't the case in every
 * language. The array above has 6 elements in it, so the indices for the elements are 0, 1, 2, 3, 4 and 5. To access
 * elements in the array, we use [] as well. The way it works is we put the name of the array followed by the index
 * inside the square brackets. Here is an example using the array above.
 *
 * arr[2]
 * >> 3
 *
 * Notice how when we used index 2 for the array and got the value "3" that is because the 3 in the array is at index
 * 2, always remember we count from zero.
 *
 * We can also update values in the array the same way we would update the value of any variable, using the assignment
 * operator. Here is an example followed by what the array looks like after the assignment:
 *
 * arr[2] = 100;
 * >> [1, 2, 100, "hello", true, 40];
 *
 * We can even use a variable as an index, as long as the thing in the square brackets results in an integer that is
 * positive and less than the length of the array, it will work. In the next lesson we will use that to be able to
 * access all elements using a for loop.
 *
 * If we need to know the length of the array, which is something we need to know all the time, we put the name of the
 * array followed by a dot then the word "length". We will get more into dot notation later, but here is an example of
 * how to get the length of the array above:
 *
 * arr.length
 * >> 6
 *
 * Lastly, we can add elements to the of the array with the push function. To use it, we put the name of the array,
 * again followed by a dot, then the word push, then inside parenthesis, the value we want to add to the array. This
 * will always add a new value to the end of the array, so the length of the array will increase by one, and the index
 * of the new value will be the original length. Here is an example:
 *
 * arr.length
 * >> 6
 * arr.push("new value!");
 * >> [1, 2, 100, "hello", true, 40, "new value!"]
 * arr.length
 * >> 7
 * arr[6]
 * >> "new value!"
 *
 * In this example, we will use two arrays with the same number of values, one array for the x values, and another for
 * the y values. It is important they are the same length. This is because the values at the same index refer to the
 * x and y of the same point. There are multiple ways we could have done this, but the best way to do it would be to
 * use objects, which we will get into later.
 */

const xPositions = [86, 188, 295, 57, 338, 86];
const yPositions = [317, 50, 317, 128, 128, 317];

function setup() {
    createCanvas(400, 400);
    console.log(xPositions.length);
    console.log(yPositions.length);
}

function draw() {
    background(210);

    noFill();
    stroke(0);

    /*
     * I used the beginShape() function in the bonus of the last lesson, but let me explain it here. If we wanted to
     * draw a more complex shape, we could manually draw lines to each individual point but that isn't the best way.
     * p5.js allows us to create shapes using the beginShape() and endShape() functions. After beginShape() is called,
     * we add points that will be where the lines of the shape are connected using the vertex() function. Note, we must
     * call beginShape() before we call the vertex() function. Then, after adding all of our points, we call the
     * endShape() function, and p5.js will connect the dots, and fill them with the stroke and fill we have defined.
     * In this example we have no fill so it will just draw the lines between the points. Also note, that beginShape()
     * must be called before endShape() is called, and beginShape() cannot be called again until after endShape() is
     * called.
     */
    beginShape();
    vertex(xPositions[0], yPositions[0]);
    vertex(xPositions[1], yPositions[1]);
    vertex(xPositions[2], yPositions[2]);
    vertex(xPositions[3], yPositions[3]);
    vertex(xPositions[4], yPositions[4]);
    vertex(xPositions[5], yPositions[5]);
    endShape();

    // can we make this into a for loop?

}
