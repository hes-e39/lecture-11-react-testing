const _isNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

const add = (a: number, b: number) => {
    if (!_isNumber(a) || !_isNumber(b)) {
        throw new Error('parameters must be numbers');
    }
    return a + b;
};

const average = (array: number[]) => {
    if (!Array.isArray(array)) {
        throw new Error('parameter must be an array');
    }

    return (
        array.reduce((prev, curr) => {
            prev += curr;
            return prev;
        }, 0) / array.length
    );
};

const boundingBox2D = (points: { x: number; y: number }[]) => {
    if (!Array.isArray(points)) {
        throw new Error('parameter must be an array');
    }
    const min = { x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY };
    const max = { x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY };

    points.forEach(point => {
        if (point.x < min.x) {
            min.x = point.x;
        }
        if (point.x > max.x) {
            max.x = point.x;
        }
        if (point.y < min.y) {
            min.y = point.y;
        }
        if (point.y > max.y) {
            max.y = point.y;
        }
    });

    return { min, max };
};

const clamp = (points: { x: number; y: number }[], min: number, max: number) => {
    if (!Array.isArray(points)) {
        throw new Error('parameter must be an array');
    }
    if (!_isNumber(min) || !_isNumber(max)) {
        throw new Error('parameters must be numbers');
    }

    return points.map(point => {
        return {
            x: Math.max(min, Math.min(max, point.x)),
            y: Math.max(min, Math.min(max, point.y)),
        };
    });
};

const math = {
    add,
    average,
    boundingBox2D,
    clamp,
};

export default math;
