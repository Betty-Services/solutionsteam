const getRecordFromCollection = async ({
  array,
  byIndex,
  index,
  property,
  value,
}) => {
  if (byIndex && (index === null || index === undefined)) {
    throw new Error(
      "getRecordFromCollection: index is required when fetching by index"
    );
  } else if (!byIndex && (!property || !value)) {
    throw new Error(
      "getRecordFromCollection: property and value are required when fetching by property"
    );
  }
  let object = {};
  if (byIndex) {
    object = array[index];
    return { as: object };
  }

  object = array.find((item) => item[property] == value);
  return { as: object };
};

export default getRecordFromCollection;
