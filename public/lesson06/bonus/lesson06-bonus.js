/*
 * Bubble sort:
 *  This algorithm starts with an array that is in any order, it then sorts the array such that each element is greater
 *  than or equal to the element one index before it. The way it does that is going through the array for each element,
 *  and if that element is greater than the one after it, then it swaps it. So, at each step of the algorithm, the
 *  highest element in the portion of the array that is not sorted is moved to its correct position. Because of this,
 *  we only have to do n - 1 steps if the array is length n. Here is the code if we wrote it using a double for loop
 *  (which we can) if we had an array called arr:
 *
 * for (let currentStep = 0; currentStep < arr.length - 1; currentStep++) {
 *      for (let currentIndex = 0; currentIndex < arr.length - 1; currentIndex++) {
 *          if (arr[currentIndex] > arr[currentIndex + 1]) {
 *              swap(arr, currentIndex, currentIndex + 1);
 *          }
 *      }
 * }
 *
 * Assuming the swap function exists and perfectly swaps the elements in arr at indices currentStep and currentStep + 1,
 *  this algorithm works. This algorithm is super slow for sorting and should never be used in any real capacity,
 * but it is a super simple algorithm that can be written by a programming beginner.
 *
 * In this bonus example, we wont be writing the code like this, since I want to actually visualize the algorithm. So
 * we will take advantage of the draw loop to go through the algorithm one step at a time so we can see how the
 * algorithm works.
 *
 * As you will see after the visualization, there is a lot of wasted time in this algorithm the way it is written here.
 * Can you think of ways to skip redundant steps?
 */

const barHeights = [];

let currentStep = 0;
let currentIndex = 0;

function setup() {
    createCanvas(400, 400);

    // first we will create all the bars as sorted
    const numBars = 50;
    for (let i = 0; i < numBars; i++) {
        barHeights[i] = map(i, 0, numBars - 1, 20, height - 20);
    }

    // Next we will shuffle the array
    for (let k = 0; k < 10000; k++) {
        // to do this, we will choose a two random elements in the array and swap them
        // the random function always gives us a decimal number, so floor will make it give us an integer
        // this is a great way to get random elements from an array
        const i = floor(random(barHeights.length));
        const j = floor(random(barHeights.length));
        // We need to keep this value in a temporary variable
        const temp = barHeights[i];
        // If we had not copied barHeights[i] to a temp variable, we would have lost it because we overwrite the value
        // with barHeights[j]
        barHeights[i] = barHeights[j];
        // Because we stored the original value of barHeights[i], we can store it in barHeights[j] to complete our swap
        // this is the most common method of swapping two elements in an array, other languages (including JavaScript,
        // actually, have some built in features that allow for easier swapping but we wont get into that now).
        barHeights[j] = temp;
    }

}

function draw() {
    background(0);

    // we will only do a step if the step is less than the length - 1, as described in the algorithm
    if (currentStep < barHeights.length - 1) {
        // if the current index is less than the length - 1, do the next step
        if (currentIndex < barHeights.length - 1) {
            // If the current element is greater than the next element
            if (barHeights[currentIndex] > barHeights[currentIndex + 1]) {
                // Swap the elements
                const temp = barHeights[currentIndex];
                barHeights[currentIndex] = barHeights[currentIndex + 1];
                barHeights[currentIndex + 1] = temp;
            }
            // Increment the current index to move on to the next step
            currentIndex++;
        } else {
            // This happens when the currentIndex is equal to the length, at this point we want to say we are in the
            // next step, or the next iteration of the outerloop, and reset the current index back to the start of the
            // array
            currentIndex = 0;
            currentStep++;
        }
    }
    // draw the bars
    const barWidth = width / barHeights.length;
    for (let i = 0; i < barHeights.length; i++) {
        const barHeight = barHeights[i];

        const x = i * barWidth;
        const y = height - barHeight;

        // if we are done with the algorithm, lets color the bars as blue to show we are done
        if (currentStep >= barHeights.length - 1) {
            fill(0, 0, 255);
        } else {
            // if we are still going with the algorithm:
            if (i === currentIndex) {
                // if the algorithm is currently looking at the current bar, color it red
                fill(255, 0, 0);
            } else if (i > barHeights.length - 1 - currentStep) {
                // if we are in the sorted part of the array, color the bar green
                fill(0, 255, 0);
            } else {
                // If we are not in the sorted port of the array and we are not looking at the bar, color it white
                fill(255);
            }
        }

        rect(x, y, barWidth, barHeight);
    }
}
