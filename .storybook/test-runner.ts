import path from 'path';

module.exports = {
  async postRender(page, context) {
    // the #root element wraps the story. From Storybook 7.0 onwards, the selector should be #storybook-root
    const elementHandler = await page.$('#root');
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
  resolveSnapshotPath: (testPath: string, snapshotExtension: string) =>
    path.join(process.cwd(), '__snapshots__', path.basename(testPath) + snapshotExtension),
  resolveTestPath: (snapshotFilePath: string, snapshotExtension: string) =>
    path.join(process.env.TEST_ROOT as string, path.basename(snapshotFilePath, snapshotExtension)),
};
