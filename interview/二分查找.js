function search(arr, low, high, key) {
    if (low >= high) {
        return -1
    }
    let mid = parseInt((high + low)/2)
    if (arr[mid] == key) {
        return mid
    } else if (arr[mid] > key) {
        high = mid - 1
        return search(arr, low, high, key)
    } else {
        low = mid + 1
        return search(arr, low, high, key)
    }
}


console.log(search([1,2,3,4,5,6], 0, 5, 1))

