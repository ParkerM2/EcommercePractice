function getNum() {
        let numArray = []
    for (let i = 24; i < 2000; i++) {
        numArray.push(
            { value: i, label: i, }
        )
    };
    return numArray;
}

export default getNum;