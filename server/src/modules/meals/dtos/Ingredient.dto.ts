import { ApiProperty } from '@nestjs/swagger';
export class IngredientDTO {
    @ApiProperty()
    type: string;
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