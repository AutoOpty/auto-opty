export default function filterByProp(arr, prop) {
    const seen = {};
    const result = arr.filter(item => {
        if (seen[item[prop]]) {
            return false;
        } else {
            seen[item[prop]] = true;
            return true;
        }
    });
    return result;
}