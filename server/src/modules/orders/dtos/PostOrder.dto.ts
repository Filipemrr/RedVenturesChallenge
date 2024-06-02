import { ApiProperty } from '@nestjs/swagger';
export class PostOrderDTO {

    @ApiProperty()
    brothId: string;
    @ApiProperty()
    proteinId: string;
}