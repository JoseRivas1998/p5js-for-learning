/*
 * In our final stop in the grand tour of arrays, we will look at 2-Dimensional arrays. So, we had already established
 * that an array can contain data of any type. This means that an array can also contain arrays! If an array contains
 * only other arrays, then we can call that array a 2-Dimensional array, or a 2D array. We can create a 2D array like
 * this:
 *
 * const arr = [
 *  [1, 43, 645, 123],
 *  [54, 23, 76, 154],
 *  [16, 52, 30, 477]
 * ];
 *
 * So, each element of arr is an array. If we count the number of elements of arr, then we will get three. This is also
 * what we would get if we say arr.length. Each array within the array has the same number of elements, making arr
 * called a rectangular 2D array, or a matrix, or a grid. In this configuration, arr is said to have 3 rows. Each
 * row is an array, and each one of those arrays has 4 elements, meaning that arr has 4 columns. Splitting a 2D array
 * into rows and columns only really makes sense if we are dealing with a rectangular array.
 *
 * Consider this array:
 *
 * const arr = [
 *  [1, 65, 432, 65, 231],
 *  [],
 *  [43, 54, 65],
 *  [4342, 54353, 76, 4252, 3]
 *  ];
 *
 * Here, arr is still an array of arrays, making it a 2D array, but those arrays don't all have the same number of
 * elements so this is not a rectangular array, and splitting it into rows and columns doesn't make much sense. If a
 * 2D array does not have all the rows with the same number of elements, it is called a jagged array.
 *
 * Regardless, if I wanted to access any given element of a 2D array, I need to know two indices. First, I need the
 * index of the array that the element is in. For now, lets call this index i. The 2D array has its own length, so the
 * values of i must be between 0 and arr.length - 1. We can access the ith array of arr by using arr[i]. With this, we
 * can push to arr[i], we can get its length with arr[i].length, and we can access elements within arr[i]. To do this,
 * we need another index that we will call j. Since we know the length of arr[i], we know that j must be between 0 and
 * arr[i].length - 1. This is because arr[i] is an array just like any other. So, if I wanted to access the jth element
 * of the ith array, I would use arr[i][j]. Here is an example:
 *
 * const arr = [
 *  [1, 43, 645, 123],
 *  [54, 23, 76, 154],
 *  [16, 52, 30, 477]
 * ];
 * console.log(arr[0][2]);
 * >> 645
 * arr[1][3] = 14;
 * >> [
 * >>   [1, 43, 645, 123],
 * >>   [54, 23, 76, 14],
 * >>   [16, 52, 30, 477]
 * >> ]
 *
 * So what if I wanted to loop through each element of a 2D array? Well, it's quite simple. First, we need to loop
 * through the array itself, to get each subarray. Then, inside that loop, we need to loop through the subarray to get
 * each element. Given any 2D array, regardless of whether it is rectangluar or jagged, here is how we iterate:
 *
 * for (let i = 0; i < arr.length; i++) {
 *      for (let j = 0; j < arr[i].length; j++) {
 *          console.log(arr[i][j]);
 *      }
 * }
 *
 * We can extend this concept of an array of arrays to create a 2D array to create 3D arrays. Just make an array of
 * 2D arrays. We can also create 4D arrays, 5D arrays, and so on forever. There is a nuanced reason for why JavaScript
 * allows this that involves explaining references, but we do not need to go into that. You will very rarely see 3D
 * arrays, and almost never see 4D arrays and beyond. The most common arrays you will see are either 1D or 2D arrays.
 *
 */

const rows = 20;
const columns = 20;

let cellWidth;
let cellHeight;

// Using new Array is a way to create a blank array with a starting number of elements. This is really helpful when
// we already know how big the array is going to be ahead of time, so we don't have to use the push() function.
const grid = new Array(rows);

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < rows; i++) {
        // Since grid is an array of rows, each element of the grid will be an array with columns elements.
        // This means that each row will have the same number of columns.
        grid[i] = new Array(columns);
        for (let j = 0; j < columns; j++) {
            // Since grid[i] gives us the ith row, which is an array, we can then access the jth element of that array,
            // which gives us the jth element of the ith row, or in other words, the ith row and the jth column of the
            // 2d array.
            grid[i][j] = map(random(), 0, 1, 0, 255);
        }
    }
    cellWidth = width / columns;
    cellHeight = height / rows;
}

function draw() {
    background(210);

    // The outer loop is going through each element of grid, which is grid[i], or a row in our 2d array.
    for (let i = 0; i < grid.length; i++) {
        // Since grid[i] is an array, we will go through each element in that row
        for (let j = 0; j < grid[i].length; j++) {
            fill(grid[i][j]);
            const x = j * cellWidth;
            const y = i * cellHeight;
            rect(x, y, cellWidth, cellHeight);
        }
    }

}
