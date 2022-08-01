import {
  Body,
  Controller, Delete,
  Get, Param,
  Post, Query,
  Request,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { RequestService } from "./request.service";
import { CreateFileService } from "./service/create-file.service";
import { RetrieveFileService } from "./service/retrieve-file.service";
import {RetrieveRequestService} from "./service/retrieve-request.service";
import {UpdateRequestService} from "./service/update-request.service";
import {DeleteFileService} from "./service/delete-file.service";
import {ListWorkspaceService} from "./service/list-workspace.service";

@Controller()
export class RequestController {
  constructor(
    private readonly requestService: RequestService,
    private readonly createFileService: CreateFileService,
    private readonly retrieveFileService: RetrieveFileService,
    private readonly retrieveRequestService: RetrieveRequestService,
    private readonly updateRequestService: UpdateRequestService,
    private readonly deleteFileService: DeleteFileService,
    private readonly listWorkspaceService: ListWorkspaceService,
  ) {}

  @Get('test')
  an() {
    return this.createFileService.invoke({ type: 2 });
  }

  @Get('directorytree')
  directorytree() {
    return this.retrieveFileService.getDirectoryTree({ type: 2 });
  }

  // 创建文件
  @Post('directorytree')
  createDirectorytree(@Body() body) {
    return this.createFileService.invoke(body);
  }

  // 删除文件
  @Delete('directorytree')
  deleteDirectorytree(@Query() query) {
    return this.deleteFileService.invoke(query);
  }

  @Get('request')
  retrieveARequest(@Param() param,@Query() query) {
    // console.log(query)
    return this.retrieveRequestService.invoke(query);
  }

  @Post('request')
  updateARequest(@Body() body) {
    return this.updateRequestService.invoke(body);
  }

  @Get('workspace')
  listworkspace(@Query() body) {
    return this.listWorkspaceService.listworkspace(body);
  }
}
