interface MachineInterface {
  id: string;
  model: string;
  year: number;
  hourmeter: string;
  image: string;
  value: string;
  brand: string;
  description: string;
  category_id: string;
}

interface PieceInterface {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  value: string;
  machine_model: string;
}
