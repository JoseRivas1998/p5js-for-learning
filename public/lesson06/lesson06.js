/*
 * Manually going through individual elements of an array is annoying at best, impossible at worst. Thinking back to
 * our example of Facebook's birthday email system, imagine having all the birthdays and emails are in an array, going
 * through each one manually is impossible. How will we account for when a new profile is created? Do we have to update
 * the code to also check that account in the array? Of course not. To do this, we will combine what we learned about
 * arrays with what we learned about loops. Remember, each element of the array has an index from 0 to the length minus
 * one. Another important part of an array is that there are no "holes". This means that if a given index is between
 * zero and the length minus one, then there must be something there to look at. Because of this, we can simply count
 * from zero to the length - 1 with some variable. We can even do this in a loop! Since we know how many times we want
 * the loop to run before the loop starts, which is the same amount as the length of the array, this is a perfect use
 * case of for-loops. Suppose I have the following array:
 *
 * const arr = [1, 2, 3, "hello!", true, 43];
 *
 * If I wanted to go through each element and log them to the console, I can just do this:
 *
 * for (let i = 0; i < arr.length; i++) {
 *      console.log(arr[i]);
 * }
 *
 * >> 1
 * >> 2
 * >> 3
 * >> hello!
 * >> true
 * >> 43
 *
 * Why does this work? Well this works because in the first iteration, i is zero. This means it will be the first
 * element in the array, so it will be logged first. Then, the incrementer adds one to i, making it 1, which is the
 * second element. This keeps happening until i is 6, which is the index of the last element. That element is logged
 * then the incrementer adds one to i once again. At this point, i is 7, which is not less then the length of 6, making
 * the loop exit out. Because i always had one added to it, it just goes through the array in order.
 */

const drops = [];

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 100; i++) {
        drops.push(random(height));
    }
}

function draw() {
    background(232, 166, 255);
    stroke(190, 0, 255);
    for (let i = 0; i < drops.length; i++) {
        const x = map(i, 0, drops.length - 1, 10, width - 10);
        line(x, drops[i], x, drops[i] + 10);
        drops[i] += 2.5;
        if (drops[i] > height) {
            drops[i] = -10;
        }
    }

}
