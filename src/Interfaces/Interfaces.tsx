export interface Img {
  front: string;
  back: string;
}

export interface Cloth {
  [index: number]: number;
  id: number;
  name: string;
  color: string;
  type: string;
  img: Img;
  price: number;
}

export interface Vinyl {
  id: number;
  artist: string;
  trackName: string;
  img: string;
  released: number;
  price: number;
  link: string;
}

export interface Gadget {
  id: number;
  name: string;
  img: string;
  price: number;
}
export interface Products {
  [index: number]: number;
  clothes: Cloth[];
  vinyl: Vinyl[];
  gadget: Gadget[];
  initialData: number;
}