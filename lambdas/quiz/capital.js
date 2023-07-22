module.exports.question = async (event, context) => {
  let data = {};
  try {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/capital"
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    console.info("status: ", response.status);

    data = await response
      .json()
      .then((res) => res.data.filter((e) => e.capital !== ""));
    // filtering out countries with no capital info
  } catch (error) {
    console.error(error);

    return {
      statusCode: 502,
      body: JSON.stringify({
        msg: "Error fetching from external API",
        error: error.message,
        stackTrace: error.stack,
      }),
    };
  }

  const getRandomNumber = () => {
    return Math.round(Math.random() * (data.length - 1));
  };

  const randomSort = (n) => n.sort((a, b) => 0.5 - Math.random());

  const createRandomQuestion = () => {
    const randomElement = getRandomNumber();
    const randomCountry = data[randomElement];
    // new array to prevent duplicate answer in options
    const newData = [
      ...data.slice(0, randomElement),
      ...data.slice(randomElement + 1),
    ];

    const options = randomSort([
      randomCountry.capital,
      newData[getRandomNumber()].capital,
      newData[getRandomNumber()].capital,
    ]);

    return {
      country: randomCountry.name,
      answer: randomCountry.capital,
      options,
    };
  };

  const question = createRandomQuestion();

  return {
    statusCode: 200,
    body: JSON.stringify({
      ...question,
    }),
  };
};
