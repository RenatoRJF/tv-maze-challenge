export interface Show {
  id: number;
  name: string;
  summary: string;
  image: string;
  type: string;
  genres: string[];
  language: string;
  runtime: number;
  officialSite: string;
  year: string;
  status: string;
  rating: {
    average: number;
  };
  network: {
    name: string;
    country: {
      name: string;
      code: string;
    };
  };
  schedule: {
    time: string;
    days: string[];
  };
}
