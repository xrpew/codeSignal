function solution(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width)+'\n',
       ...picture.map(line => `*${line}*\n`),
        '*'.repeat(width)
    ].join('');
}

console.log(solution(["abxc", "dxed", "axsd"]));

