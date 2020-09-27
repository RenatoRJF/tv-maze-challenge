export interface Show {
  id: number;
  name: string;
  summary: string;
  image: string;
  type: string;
  genres: string;
  language: string;
  runtime: string;
  officialSite: string;
  year: string;
  rating: {
    avarage: number;
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
