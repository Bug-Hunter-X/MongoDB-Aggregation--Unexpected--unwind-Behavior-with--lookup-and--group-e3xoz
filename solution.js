```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments",
    },
  },
  {
    $unwind: {
      path: "$relatedDocuments",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $group: {
      _id: "$_id",
      relatedDocs: {
        $push: "$relatedDocuments",
      },
    },
  },
  {
    $project: {
      _id: 1,
      relatedDocs: 1,
      _id: "$_id",
    }
  }
];

const result = await collectionA.aggregate(pipeline);
```