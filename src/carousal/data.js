let images = [
  {
    id: "1000",
    imageUrl: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5",
  },
  {
    id: "1001",
    imageUrl: "https://images.unsplash.com/photo-1607853827146-78a5bc08d14c",
  },
  {
    id: "1002",
    imageUrl: "https://images.unsplash.com/photo-1605707883358-0d127b2b9a47",
  },
  {
    id: "1003",
    imageUrl: "https://images.unsplash.com/photo-1607677686474-ad91fc94f5ae",
  },
  {
    id: "1004",
    imageUrl: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb",
  },
  {
    id: "1005",
    imageUrl: "https://images.unsplash.com/photo-1605835963874-a7c87f56259e",
  },
  {
    id: "1006",
    imageUrl: "https://images.unsplash.com/photo-1602174528367-7ed9fc0737e4",
  },
  {
    id: "1007",
    imageUrl: "https://images.unsplash.com/photo-1551645120-d70bfe84c826",
  },
];

// images = [...images, ...images, ...images, ...images, ...images];
// images = [...images, ...images, ...images, ...images, ...images];

images = images.map((pr, i) => {
  return { ...pr, id: (1000 + i).toString() };
});

export default images;
