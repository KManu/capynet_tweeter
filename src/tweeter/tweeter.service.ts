import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TweetV1, TwitterApi } from 'twitter-api-v2';

@Injectable()
export class TweeterService {

    clientReady: boolean = false;
    private readonly logger = new Logger(TweeterService.name);

    constructor(@Inject('TWITTER_V1_USER_CLIENT') private twitterClient: TwitterApi, private config: ConfigService) {}

    getHello(): string {
        return 'Tweeter says hi back';
    }

    async retrieveScheduledTweet(): Promise<[any?]> {
        try {
            return ['No schedules yet bro'];
        } catch (error) {
            throw new Error('Failed to retrieve scheduled tweets: '+ error);
        }
    }
    
    retweetOldTweet(tweetId: string): any {
        
        try {
            return [];
        } catch (error) {
            throw new Error('Failed to retweet tweet: '+ tweetId);
        }
    }

    /**
     * Posts a tweet with the message passed and returns the posted tweet. Or a promise rejection if it fails. 
     */
    async postTweet(tweetContent: string): Promise<TweetV1> {
        try {
            return await this.twitterClient.v1.tweet(tweetContent)
        } catch (error) {
            throw new Error('Failed to post tweet.');
        }  
    }
}
