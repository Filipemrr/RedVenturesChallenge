import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ReturnOrderDtoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
