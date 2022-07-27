import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Request } from "./entities/request.entity";

@Injectable()
export class RequestService {
  constructor(
    @Inject('request_REPOSITORY')
    private userRepository: Repository<Request>,
  ) {}

  find() {
    return this.userRepository.find();
  }
}
