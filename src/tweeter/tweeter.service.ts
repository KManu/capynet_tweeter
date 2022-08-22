import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TweetV1, TwitterApi, UserV1 } from 'twitter-api-v2';

@Injectable()
export class TweeterService {

    clientReady: boolean = false;
    private readonly logger = new Logger(TweeterService.name);

    constructor(private twitterClient: TwitterApi, private config: ConfigService) {
        this.initTwitterConnection();
    }

    getHello(): string {
        return 'Tweeter says hi back';
    }

    async retrieveScheduledTweet(): Promise<[any?]> {
        this.checkClientReady();
        try {
            return ['No schedules yet bro'];
        } catch (error) {
            throw new Error('Failed to retrieve scheduled tweets: '+ error);
        }
    }

    private checkClientReady(): Boolean|Error {
        if(this.clientReady === false){
            throw new Error('Client not ready');
        } else {
            return true;
        }
    }

    /**
     * Inits twitter client for class
     */
    private initTwitterConnection(): any {
        // init twitter client connection
        this.twitterClient = new TwitterApi({
            appKey: this.config.get<string>('TWITTER_API_KEY'),
            appSecret: this.config.get<string>('TWITTER_API_KEY_SECRET'),
            accessToken: this.config.get<string>('TWITTER_ACCESS_TOKEN'),
            accessSecret: this.config.get<string>('TWITTER_TOKEN_SECRET')
        });

        this.twitterClient.currentUser()
            .then((user: UserV1) => {
                this.clientReady = true;
                this.logger.log(`Twitter client instantiation for ${user.name} successful`)
            }).catch((error: any)=> {
                this.clientReady = false;
                this.logger.error(`Twitter client instantiation failed`)
            });

    }

    retweetOldTweet(tweetId: string): any {
        this.checkClientReady();
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
        this.checkClientReady();
        try {
            return await this.twitterClient.v1.tweet(tweetContent)
        } catch (error) {
            throw new Error('Failed to post tweet.');
        }

        
    }
}
