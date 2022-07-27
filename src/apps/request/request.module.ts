import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { requestProviders } from './providers/request.providers';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { CreateFileService } from './service/create-file.service';
import { RetrieveFileService } from './service/retrieve-file.service';
import { RetrieveRequestService } from './service/retrieve-request.service';
import { UpdateRequestService } from './service/update-request.service';
import { DeleteFileService } from './service/delete-file.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RequestController],
  providers: [
    CreateFileService,
    RequestService,
    RetrieveFileService,
    RetrieveRequestService,
    UpdateRequestService,
    DeleteFileService,
    ...requestProviders,
  ],
})
export class RequestModule {}
