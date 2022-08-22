import { Module } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';
import { TweeterController } from './tweeter.controller';
import { TweeterService } from './tweeter.service';

@Module({
  imports: [TwitterApi],
  providers: [TweeterService, TwitterApi],
  controllers: [TweeterController]
})
export class TweeterModule { }
