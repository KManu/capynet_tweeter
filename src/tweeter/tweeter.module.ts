import { Module } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';
import { TweeterController } from './tweeter.controller';
import { TweeterProviders } from './tweeter.provider';

@Module({
  imports: [TwitterApi],
  providers: [...TweeterProviders],
  controllers: [TweeterController]
})
export class TweeterModule { }
