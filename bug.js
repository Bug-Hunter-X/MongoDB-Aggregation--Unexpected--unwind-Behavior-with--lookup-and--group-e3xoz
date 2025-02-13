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
    $unwind: "$relatedDocuments",
  },
  {
    $group: {
      _id: "$_id",
      relatedDocs: {
        $push: "$relatedDocuments",
      },
    },
  },
];

const result = await collectionA.aggregate(pipeline);
```