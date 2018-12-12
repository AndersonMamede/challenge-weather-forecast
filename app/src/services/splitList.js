function splitList(list) {
    list = Array.isArray(list) ? list : [];
    return {
        firstChunk: list.slice(0, list.length/2),
        secondChunk: list.slice(list.length/2),
    };
}

export default splitList;
