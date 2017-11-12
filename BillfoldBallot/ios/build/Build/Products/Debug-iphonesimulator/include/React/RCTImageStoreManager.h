// Copyright 2004-present Facebook. All Rights Reserved.

#import <UIKit/UIKit.h>

#import <React/RCTBridge.h>
#import <React/RCTURLRequestHandler.h>

@interface RCTImageStoreManager : NSObject <RCTURLRequestHandler>

/**
 * Set and get cached image data asynchronously. It is safe to call these from any
 * thread. The callbacks will be called on an unspecified thread.
 */
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wstrict-prototypes"

- (void)removeImageForTag:(NSString *)imageTag withBlock:(void (^)())block;
- (void)storeImageData:(NSData *)imageData withBlock:(void (^)(NSString *imageTag))block;
- (void)getImageDataForTag:(NSString *)imageTag withBlock:(void (^)(NSData *imageData))block;

#pragma clang diagnostic pop
/**
 * Convenience method to store an image directly (image is converted to data
 * internally, so any metadata such as scale or orientation will be lost).
 */
- (void)storeImage:(UIImage *)image withBlock:(void (^)(NSString *imageTag))block;

@end

@interface RCTImageStoreManager (Deprecated)

/**
 * These methods are deprecated - use the data-based alternatives instead.
 */
- (NSString *)storeImage:(UIImage *)image __deprecated;
- (UIImage *)imageForTag:(NSString *)imageTag __deprecated;
- (void)getImageForTag:(NSString *)imageTag withBlock:(void (^)(UIImage *image))block __deprecated;

@end

@interface RCTBridge (RCTImageStoreManager)

@property (nonatomic, readonly) RCTImageStoreManager *imageStoreManager;

@end
