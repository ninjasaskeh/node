const samplePromise = () => {
    return Promise.resolve('Arip')
}

const run = async () => {
    const name = await samplePromise();
    console.info(name)
}

run();

// kalo dia .js secara default dia bukan async function jadi harus menambahkan async()