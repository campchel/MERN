function partition(arr, small, big) {
    let pivot = arr[big];
    let i = small - 1;

    for (let j = small; j < big; j++) {
        if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[big]] = [arr[big], arr[i + 1]];
    return i + 1;
    }
// The partition method splits the array in half finding the middle index number (8) and rearranges them to being smaller or bigger than it


function quicksort(arr, small, big) {
    if (small < big) {
        let pivot = partition(arr, small, big);

    quicksort(arr, small, pivot - 1);
    quicksort(arr, pivot + 1, big);
    }
}
// Then the quicksort method moves them in numerical order.


let array = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30];
quicksort(array, 0, array.length - 1);
console.log(array);


