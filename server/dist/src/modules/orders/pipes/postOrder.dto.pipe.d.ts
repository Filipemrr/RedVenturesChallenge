import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class PostOrderDtoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
