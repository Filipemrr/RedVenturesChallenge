import { ApiProperty } from '@nestjs/swagger';
export class ProteinDto {
    @ApiProperty()
    imageInactive: string;
    @ApiProperty()
    imageActive: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    price: number;
}