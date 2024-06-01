import {
    ArgumentMetadata,
    BadRequestException,
    PipeTransform,
} from '@nestjs/common';

export class GetIngredientsDtoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any {
        if (
            !value.id
        ) {
            throw new BadRequestException('Itens obrigatórios não encontrados');
        }
        if (typeof value.id !== 'number' ) {
            throw new BadRequestException(
                'Este ID de ingrediente nao existe',
            );
        }
        return value;
    }
}