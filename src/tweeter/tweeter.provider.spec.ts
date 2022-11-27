import { Test, TestingModule } from '@nestjs/testing';
import { TweeterProviders } from './tweeter.provider';

describe('TweeterProvider', () => {
  let provider: TweeterProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweeterProviders],
    }).compile();

    provider = module.get<TweeterProvider>(TweeterProviders);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
