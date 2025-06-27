import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!---';
  }
  create(body: any): string {
    // Assuming the body contains a 'message' property
    return `Received message: ${JSON.stringify(body)}`;
  }
}
