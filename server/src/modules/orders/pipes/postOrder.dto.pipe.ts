import {
    ArgumentMetadata,
    BadRequestException,
    PipeTransform,
} from '@nestjs/common';

export class PostOrderDtoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any {
        if (
            !value.brothId ||
            !value.proteinId
        ) {
            throw new BadRequestException('both brothId and proteinId are required');
        }
        if (typeof value.proteinId !== 'string' || typeof value.brothId !== 'string') {
            throw new BadRequestException(
                'IDs should be strings'
            );
        }
        return value;
    }
}