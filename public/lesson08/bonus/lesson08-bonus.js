/*
 * Insertion Sort:
 *      At first glance, insertion sort might look like a backwards bubble sort. But there are some key differences that
 *      make it much faster than bubble sort in the average case. Insertion sort works on the idea of maintaining a
 *      sorted portion of the array and an unsorted portion of the array. At each step of insertion sort, the first
 *      element in the unsorted part of the array is swapped down into the sorted part until it is in the correct
 *      position. At the start of the algorithm, the sorted part of the array is considered to be the first element.
 *      So in this case, the sorted part of the array is one element long, and the unsorted part is length - 1 elements
 *      long. The goal of the algorithm is to expand the sorted part to be length elements long. This means that since
 *      it starts with one element, then there needs to be length - 1 iterations. At each iteration, the first element
 *      of the unsorted part is swapped with the element before it, which is in the sorted part. Swaps keep happening
 *      until the element before the element we are inserted is less than the element we are inserting. It also stops
 *      if the element we are inserting is at index zero. Here is the code, given an array called barHeights:
 *
 *          for (let currentIteration = 1; currentIteration < barHeights.length; currentIteration++) {
 *              let currentIndex = currentIteration;
 *              while (currentIndex > 0 && barHeights[currentIndex - 1] > barHeights[currentIndex]) {
 *                  swap(barHeights, currentIndex, currentIndex - 1);
 *                  currentIndex--;
 *              }
 *          }
 *
 *      Again assuming the swap() function works perfectly, this algorithm will perfectly sort any array. This algorithm
 *      is better than bubble sort in most cases. Let's consider a bubble sort with some optimization built into it.
 *      The first optimization of bubble sort would be to only swap to the last part of the array that is unsorted,
 *      that way we dont have to go all the way to the end of the array at each iteration. Next optimization is to stop
 *      as soon as the array is already sorted, we can do this by counting the number of swaps done in an iteration
 *      if no swaps were done, then the array is sorted. So let's talk about worst case, best case, and average case.
 *      The best case for both insertion sort and bubble sort is when the array is already sorted to begin with.
 *      With our improved bubble sort in mind, the best case for both is identical. Both algorithms would iterate once
 *      through the array, doing length comparisons. The worst case is also identical, both arrays basically have to
 *      reverse the array by swapping each element one by one to the opposite end. The only difference in the worst case
 *      is that bubble sort will sort from right to left, and insertion sort will sort from left to right. In this case,
 *      the number of comparisons is identical. However, in the average case, insertion sort is way better. The average
 *      case is when the array is completely random. In this case, bubble sort has to go through the entire unsorted
 *      part at each iteration, moving the bigger element one at a time to the end. Insertion sort, on the other hand,
 *      moves through the sorted part and moves the element to the right, which will be usually around the middle,
 *      which reduces the number of comparisons in total by half. Note that when talking about how "good" an algorithm
 *      is, we look at the worst case. For both bubble sort and insertion sort, the worst cases are equally bad.
 *      However, often times insertion sort is supplemented into other sorting algorithms that first create a really
 *      good use case for insertion sort, and then perform insertion sort at that point. Either way it is interesting
 *      to see how different sorting algorithms work and why some may be better than others.
 *
 */

const barHeights = [];

let currentIteration;
let currentIndex;

function setup() {
    createCanvas(800, 400);
    createBars();
    shuffleBars();
    currentIteration = 1;
    currentIndex = currentIteration;

}

function draw() {
    background(0);
    displayBars();
    insertionSortStep();
}

function createBars() {
    const numBars = 100;
    for (let i = 0; i < numBars; i++) {
        barHeights[i] = map(i, 0, numBars - 1, 20, height - 20);
    }
}

function shuffleBars() {
    for (let k = 0; k < 10000; k++) {
        swapRandomElements();
    }
}

function swapRandomElements() {
    const i = floor(random(barHeights.length));
    const j = floor(random(barHeights.length));
    const temp = barHeights[i];
    barHeights[i] = barHeights[j];
    barHeights[j] = temp;
}

function displayBars() {
    const barWidth = width / barHeights.length;
    for (let i = 0; i < barHeights.length; i++) {
        const barHeight = barHeights[i];
        const x = i * barWidth;
        const y = height - barHeight;
        if (i === currentIndex) {
            fill(255, 0, 0);
        } else if (i <= currentIteration) {
            fill(0, 255, 0);
        } else {
            fill(255);
        }
        rect(x, y, barWidth, barHeight);
    }
}

function insertionSortStep() {
    if (currentIteration < barHeights.length) {
        if (currentIndex > 0 && barHeights[currentIndex - 1] > barHeights[currentIndex]) {
            const temp = barHeights[currentIndex];
            barHeights[currentIndex] = barHeights[currentIndex - 1];
            barHeights[currentIndex - 1] = temp;
            currentIndex--;
        } else {
            currentIteration++;
            currentIndex = currentIteration;
        }
    }
}
