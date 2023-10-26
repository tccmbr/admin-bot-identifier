import axios from 'axios';
import { Types } from '../../../shared';
import { BaseService } from '../base.service';

type FilterType = {
  createdAt: string;
};

export class Search extends BaseService {
  sessionId: string = '';
  data: Types.SessionType | null = null;

  async findOne(sessionId: string) {
    this.sessionId = sessionId;

    try {
      this.response = await axios.get(
        `${process.env.REACT_APP_API_URL}/sessions/${this.sessionId}`,
      );

      this.success = true;
      this.data = this.response.data;
    } catch (error: any) {
      this.errors = error.response?.data?.errors;
    }
  }

  async findAll(params: FilterType) {
    const filters = {};

    if (params.createdAt)
      Object.assign(filters, { createdAt: params.createdAt });

    try {
      this.response = await axios.get(
        `${process.env.REACT_APP_API_URL}/sessions`,
        {
          params: filters,
        },
      );

      this.success = true;
    } catch (error: any) {
      this.errors = error.response?.data?.errors;
    }
  }
}
