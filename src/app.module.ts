import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockController } from './apps/mock/mock.controller';
import { RequestModule } from './apps/request/request.module';

@Module({
  imports: [RequestModule],
  controllers: [AppController, MockController],
  providers: [AppService],
})
export class AppModule {}
