const safeCall = (func, ...args) => {
    if (func && typeof func === 'function') {
        func.call(null, ...args);
    }
};

export default safeCall;