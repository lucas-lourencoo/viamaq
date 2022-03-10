type Machine = {
  id: string;
  model: string;
  year: number;
  hourmeter: string;
  image: string;
  value: string;
  brand: string;
  description: string;
  category_id: string;
};

type Piece = {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  value: string;
  machine_model: string;
};

interface CategoryInterface {
  id: string;
  name: string;
}
