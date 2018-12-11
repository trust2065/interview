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
    console.log(getFirstUser().then((val) => {
        console.log(val);
    }));
    const firstUser = await getFirstUser();
    console.log(`firstUser: ${firstUser}`);

    const firstUser2 = getFirstUser();
    console.log(`firstUser2: ${firstUser2}`);
}

main();