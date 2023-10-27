import axios from 'axios';
import { Types } from '../../../shared';
import { BaseService } from '../base.service';

export class Search extends BaseService {
  data: Types.PlayerType | null = null;

  async findAll() {
    try {
      this.response = await axios.get(
        `${process.env.REACT_APP_API_URL}/players`,
      );

      this.success = true;
    } catch (error: any) {
      this.errors = error.response?.data?.errors;
    }
  }
}
