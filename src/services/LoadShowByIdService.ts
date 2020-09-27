import api from './api';

class LoadShowByIdService {
  public async execute(id: number): Promise<{ data: any }> {
    return api.get(`shows/${id}`);
  }
}

export default LoadShowByIdService;
