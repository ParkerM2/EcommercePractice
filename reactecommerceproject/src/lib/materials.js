const materials = [
    {
        value: 'Metal',
        label: 'Metal'
    },
    {
        value: 'Corrugated Plastic',
        label: 'Corrugated Plastic'
    },
    {
        value: 'PVC',
        label: 'PVC'
    },
];


function getMats() {
    let materialArray = [];
    for (let i = 0; i < materials.length; i++) {
        materialArray.push(materials[i])
    }
    return materialArray;
}

export default getMats;