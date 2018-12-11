// Promise is an javascript Object
// use 'async' before function declaration, the function will return a promise object
// user 'await' before calling function, the function will get process, just like then()
// we can you try catch to handle all exceptions
// use Promise all, not garuntee order, but garuntee all processed.
// give error when 'any' of the promise get rejected

async function getUsers() {
    return ([{
            name: "Choco",
            pet: "pelicen"
        },
        {
            name: "NoName",
            pet: "NoPet"
        }
    ]);
}


function getFirstUser() {
    return getUsers().then(function (users) {
        return users[0].name;
    });
}

async function main() {
    console.log('\n--------Promise--------\n');

    console.log(getFirstUser().then((val) => {
        console.log(val);
    }));
    const firstUser = await getFirstUser();
    console.log(`firstUser: ${firstUser}`);

    const firstUser2 = getFirstUser();
    console.log(`firstUser2: ${firstUser2}`);

    
    console.log('\n--------Promise all--------\n');
    const arr = [{
        key: 1
    }, {
        key: 2
    }, {
        key: 3
    }]

    const results = arr.map(async (obj) => {
        return obj.key;
    });

    Promise.all(results).then((completed) => console.log(`Result: ${completed}`));
    console.log(`\nResult without Promise all: ${results}`)
}

main();