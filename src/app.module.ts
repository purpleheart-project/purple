import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockController } from './apps/mock/mock.controller';

@Module({
  imports: [],
  controllers: [AppController, MockController],
  providers: [AppService],
})
export class AppModule {}
