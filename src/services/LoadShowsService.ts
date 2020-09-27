import api from './api';

class LoadShowsService {
  public async execute(page: number): Promise<{ data: any }> {
    return api.get(`shows?page=${page}`);
  }
}

export default LoadShowsService;
