import axios from 'axios';
import { Types } from '../../../shared';
import { BaseService } from '../base.service';

type FilterType = {
  createdAt: string;
  playerId: string;
  isBot: string;
  isSpammer: string;
  limit: string;
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
    try {
      this.response = await axios.get(
        `${process.env.REACT_APP_API_URL}/sessions`,
        {
          params: this.buildFilters(params),
        },
      );

      this.success = true;
    } catch (error: any) {
      this.errors = error.response?.data?.errors;
    }
  }

  private buildFilters(params: FilterType) {
    const filters = {
      limit: params.limit,
    };

    if (params.createdAt.trim())
      Object.assign(filters, { createdAt: params.createdAt });

    if (params.playerId.trim())
      Object.assign(filters, { playerId: params.playerId });

    if (params.isBot)
      Object.assign(filters, {
        isBot: params.isBot === 'Sim' ? 'true' : 'false',
      });

    if (params.isSpammer)
      Object.assign(filters, {
        isSpammer: params.isSpammer === 'Sim' ? 'true' : 'false',
      });

    return filters;
  }
}
