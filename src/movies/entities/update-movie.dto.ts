import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsOptional()
  @IsDateString()
  release_date?: Date;
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  rating?: number;
  @IsNumber()
  @IsNotEmpty()
  genre_id?: number;
}
