import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('team_member')
export class TeamMember extends CommonBaseEntity {
  @Column({
    type: 'int',
    default: 0,
    comment: '成员id',
    name: 'member_id',
  })
  memberId: number;

  @Column({
    type: 'int',
    default: 0,
    comment: 'teamId',
    name: 'team_id',
  })
  teamId: number;
}
