const samplePromise = () => {
    return Promise.resolve('Arip')
}

const name = await samplePromise();
console.info(name)

// kalo dia .mjs secara default dia bakal jadi async function tanpa menambahkan async()