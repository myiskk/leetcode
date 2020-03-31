/**
 * 根据以下blackIds中的id值，对data中的数据进行过滤，去除在blackIds中的数据
 */

const blackIds = [5822, 5783]
const data = [
  {
    "id": 5820,
    "subList": [
      {
        "id": 5821,
        "subList": [
          {
            "id": 5822
          }
        ]
      }
    ]
  },
  {
    "id": 5351,
    "subList": [
      {
        "id": 5408,
        "subList": [
          {
            "id": 5391
          },
          {
            "id": 5478,
            "subList": [
              {
                "id": 5783
              },
              {
                "id": 5571
              }
            ]
          }
        ]
      }
    ]
  }
]