const calculateSumOrAverage = async ({ collection, property, sumOrAvg }) => {
  if (collection.data.length == 0) {
    return { as: 0 };
  }
  if (!collection.data[0].hasOwnProperty(property)) {
    throw new Error(
      `The property name (${property}) you are trying to calculate the sum or average of does not exist in the collection.`
    );
  }
  const floats = collection.data.map((c) =>
    c[property] === null ? 0 : parseFloat(c[property])
  );

  const totalSum = floats.reduce((a, c) => a + c, 0);

  console.log(totalSum, floats);

  if (sumOrAvg == "sum") {
    return { as: totalSum };
  } else if (sumOrAvg == "average") {
    return { as: totalSum / collection.data.length };
  }
};
export default calculateSumOrAverage;
