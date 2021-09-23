import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsString, ValidateNested } from 'class-validator';
export class CreateBookDto {
  @IsString()
  @IsDefined()
  public readonly title: string;
  @IsString()
  public readonly description: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => String)
  public readonly authors: string[];
  @IsString()
  public readonly favorite: string;
  @IsString()
  public readonly fileCover: string;
  @IsString()
  public readonly fileName: string;
  @IsString()
  public readonly id?: string;
}
