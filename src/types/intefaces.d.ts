type Product = {
  id: number;
  attributes: {
    name: string;
    year: number;
    hourmeter?: string;
    images: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
    value: string;
    brand: string;
    description: string;
    category: string;
  };
};

interface CategoryInterface {
  id: string;
  name: string;
}
