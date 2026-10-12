function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function unitValue(data, windowHeight, percentage) {

    let max = maxValue(data);
    let maxPixel = maxPixelValue(windowHeight, percentage);

    return maxPixel / max;
}

function maxPixelValue(windowHeight, percentage) {
    return (percentage / 100) * windowHeight;
}

function maxValue(data) {
    let max = data[0];
    for (let i = 0; i < data.length; i++) {
        max = data[i] > max ? data[i] : max;
    }
    return max;
}

module.exports = {
    calcOffset,
    unitValue,
};