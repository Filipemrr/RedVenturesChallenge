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
        if (typeof value.imageInactive !== 'string' || typeof value.imageActive !== 'string' || typeof value.imageInactive !== "string" || value.name !== "string" || value.description !== "string" || value.price !== "string") {
            throw new BadRequestException(
                'Dados de cadastro de caldo invalido',
            );
        }
        return value;
    }
}