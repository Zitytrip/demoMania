
async function foo() {
    console.log("foo..");
    await bar();
}

async function bar() {
    console.log("bar..");
    throw new Error('Uh oh!');
}

async function main() {
    console.log("main..");
    try {
        await foo();
    }
    catch(e) {
        console.error(`Something went wrong: ${e.message}`);
    }
}

main();