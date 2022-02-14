function* getStudents() {
    yield 'Abbi';
    yield 'Dshane';
    yield 'Katy';
    yield 'Lisa';
    yield 'Parish';
}

function main() {
    const students = getStudents();
    for (const name of students) {
        console.log(name);
    }
}

main(); 