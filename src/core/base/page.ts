declare const browser: any;
declare const $: any;

abstract class Page {
  public async open(path: string): Promise<void> {
    await this.setWindowSize();
    await browser.url(path);
  }

  private async setWindowSize() {
    const windowSize = process.env.WINDOW_SIZE ? process.env.WINDOW_SIZE : "1920x1080";
    const width = Number.parseInt(windowSize.split("x")[0]);
    const height = Number.parseInt(windowSize.split("x")[1]);
    await browser.setWindowSize(width, height);
  }

  protected async waitForElement(selector: string, timeout: number = 10000): Promise<any> {
    return await $(selector).waitForDisplayed({ timeout });
  }

  protected async click(selector: string): Promise<void> {
    await this.waitForElement(selector);
    await $(selector).click();
  }

  protected async setValue(selector: string, value: string): Promise<void> {
    await this.waitForElement(selector);
    await $(selector).setValue(value);
  }

  protected async getText(selector: string): Promise<string> {
    await this.waitForElement(selector);
    return await $(selector).getText();
  }

  protected async isDisplayed(selector: string): Promise<boolean> {
    return await $(selector).isDisplayed();
  }
}

export { Page }; 