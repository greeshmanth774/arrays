function fibonacci(no_of_elements) {

    const lastIndex = no_of_elements - 1;
    const fibonacci_series = [];

    for (let i = 0; i <= lastIndex; i++) {

        if (i > 1) fibonacci_series[i] = fibonacci_series[i - 1] + fibonacci_series[i - 2];
        if (i === 0) fibonacci_series[i] = 0;
        if (i === 1) fibonacci_series[i] = 1;

    }
    return fibonacci_series;
}

const a = fibonacci(6);
console.log(a);
