import { ApiProperty } from '@nestjs/swagger';
export class ReturnOrderDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    image: string;
}