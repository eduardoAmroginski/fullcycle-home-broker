import { PartialType } from '@nestjs/mapped-types';
import { CreateAssetDto } from './create-asset.dto';

export class UpdateAssetDto extends PartialType(CreateAssetDto) {
  _id: string;

  name?: string;

  symbol?: string;

  image?: string;

  price?: string;
}
