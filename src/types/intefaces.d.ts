type Machine = {
  id: number;
  attributes: {
    model: string;
    year: number;
    hourmeter: string;
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
    category_id: string;
  };
};

type Piece = {
  id: number;
  attributes: {
    name: string;
    brand: string;
    description: string;
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
    machine_model: string;
  };
};

interface CategoryInterface {
  id: string;
  name: string;
}
