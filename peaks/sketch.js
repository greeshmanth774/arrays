const r = require("raylib");
const g = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

function returnPeaks(data) {
    const peaks = [];

    for (let index = 1; index < data.length - 1; index++) {
        if (isPeak(data[index], data[index - 1], data[index + 1])) peaks.push(index);
    }

    return peaks;
}

function init() {
    const data = [12, 45, 65, 23, 91, 56, 94, 67, 89, 40, 50];
    // const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const point = {
        maxPercentage: 90,
    };

    const window = {
        width: 400,
        height: 400,
    };

    const color = {
        bg: r.RAYWHITE,
        line: r.DARKBLUE,
        point: r.RED,
    };

    const peaks = returnPeaks(data);
    point.width = window.width / (data.length - 1);
    point.unit = g.unitValue(data, window.height, point.maxPercentage);

    return {
        window,
        data,
        point,
        color,
        peaks
    };
}

function setup() {
    const world = init();

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.window.width, world.window.height, "peaks");
    r.SetTargetFPS(60);

    return world;

}


function update(world) {
    // change the state
}

function isPeak(currentData, predecessor, successor) {
    return currentData > predecessor && currentData > successor;
}


function calculatePointProperties(point, data, pointNumber, window) {
    const x = pointNumber * point.width;
    const y = window.height - (point.unit * data[pointNumber]);
    return { x, y };
}


function drawLine(point, data, pointNumber, window, color) {

    const pointProperties1 = calculatePointProperties(point, data, pointNumber, window);
    const pointProperties2 = calculatePointProperties(point, data, pointNumber + 1, window);
    r.DrawLineEx(pointProperties1, pointProperties2, 3, color.line);
}


function drawLineGraph(data, window, point, color) {
    for (let pointNumber = 0; pointNumber < data.length; pointNumber++) {
        drawLine(point, data, pointNumber, window, color);
    }
}


function drawPeaks(point, data, peaks, window, color) {
    for (let i = 0; i < peaks.length; i++) {
        const pointProperties = calculatePointProperties(point, data, peaks[i], window);
        r.DrawCircle(pointProperties.x, pointProperties.y, 5, color.point);
    }
}
function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(world.color.bg);

    drawLineGraph(world.data, world.window, world.point, world.color);
    drawPeaks(world.point, world.data, world.peaks, world.window, world.color);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};