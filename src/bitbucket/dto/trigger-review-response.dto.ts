import { ApiProperty } from '@nestjs/swagger';

export class TriggerReviewResponseDto {
  @ApiProperty({
    description: 'Response message',
    type: String,
    required: true,
  })
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
