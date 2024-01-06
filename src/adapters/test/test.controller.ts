import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  testRoute() {
    return 'Hello from the test route!';
  }
}
