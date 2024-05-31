import {
    ArgumentMetadata,
    BadRequestException,
    PipeTransform,
} from '@nestjs/common';

export class BrothDtoPipe implements PipeTransform {
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
        if (typeof value.imageActive !== 'string' || typeof value.imageActive !== 'string' || typeof value.name !=='string' || typeof value.description !== 'string' || typeof value.price !== 'number' || (value.type.toLowerCase() !== 'broth' && value.type.toLowerCase() !== 'caldo')) {
            throw new BadRequestException(
                'Dados de cadastro de caldo invalido',
            );
        }
        return value;
    }
}