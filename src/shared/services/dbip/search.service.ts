import axios from 'axios';
import { Types } from '../../../shared';
import { BaseService } from '../base.service';

export class Search extends BaseService {
  sessionId: string = '';
  data: Types.DbIpLookupType | null = null;

  async findByIp(sessionId: string) {
    this.sessionId = sessionId;

    try {
      this.response = await axios.get(`${process.env.REACT_APP_DBIP_URL}`, {
        params: {
          ip: this.sessionId,
        },
      });

      this.success = true;
      this.data = this.response.data;
    } catch (error: any) {
      this.errors = error.response?.data?.errors;
    }
  }
}
