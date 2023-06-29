/**
 * App
 */
class App {

    constructor() {
        this.main();
    }
    
    private async main():Promise<void> {
        while (true) {
            this.updateVideoFrames();
            await this.sleep(1000);
        }
    }

    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // get all HTML video elementsfrom the dom and remove disablepictureinpicture="true" and preload="none"
    private updateVideoFrames():void {
        const videos: HTMLVideoElement[] = Array.from(document.getElementsByTagName('video'));
        videos.forEach((video: HTMLVideoElement) => {
            video.removeAttribute('disablepictureinpicture');
            video.removeAttribute('preload');
        });
    }
}

new App();