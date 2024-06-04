import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ProteinDtoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
