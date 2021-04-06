export interface Img {
  front: string;
  back: string;
}

export interface Cloth {
  id: number;
  name: string;
  img: string;
  price: number;

  bothImg : Img;
  color: string;
  type: string;
  amount:number;

  artist: string;
  trackName: string;
  released: number;
  link: string;

  clothes: Cloth[];
  vinyl: Vinyl[];
  gadget: Gadget[]
}

export interface Vinyl {
  id: number;
  name:string;
  img: string;
  price: number;

  artist: string;
  trackName: string;
  released: number;
  link: string;
  
}

export interface Gadget {
  id: number;
  name: string;
  img: string;
  price: number;
}
export interface Products {
 clothes: Cloth[];
  vinyl: Vinyl[];
  gadget: Gadget[]

  id:number;
  name:string;
  img:string;
  price:number;

  bothImg:Img;
  artist: string;
  trackName: string;
  released: number;
  link: string;
  color: string;
  type: string;
  amount:number;
  
}
