import {
    ArgumentMetadata,
    BadRequestException,
    PipeTransform,
} from '@nestjs/common';

export class ProteinDtoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any {
        if (
            !value.imageInactive ||
            !value.imageActive ||
            !value.name ||
            !value.description ||
            !value.price
        ) {
            throw new BadRequestException('Itens obrigatórios não encontrados');

        }

        if (typeof value.imageActive !== 'string' || typeof value.imageActive !== 'string' || typeof value.name !=='string' || typeof value.description !== 'string' || typeof value.price !== 'number' ) {
            throw new BadRequestException(
                'Dados de cadastro de proteina invalido',
            );
        }
        return value;
    }
}