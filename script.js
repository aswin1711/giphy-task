const getWord = async () => {
    const resp = await fetch("https://random-word-api.herokuapp.com/word?number=1");

const data = await resp.json();
return data[0];
};

const getGiphy = async () => {
    try {
        const word = await getWord();
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=xAACJetXov1Iml22BBINWsHw7ZckN3HC&q=${word}&limit=25&offset=0&rating=g&lang=en`);
        const values = await resp.json();
        const obj = document.createElement("object");
        obj.data = values.data[0].images.original.url;
        document.body.appendChild(obj);
    }
    catch (error) {
        console.log(error);
    }
};
console.log(getGiphy());