import NextIntlConfig from 'next-intl/dist/server/NextIntlConfig.js';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const Index = (await import(`./messages/${ locale }.json`)).default;
  const Other = (await import(`./messages/other/${ locale }.json`)).default;
  const CSS = (await import(`./messages/css/${ locale }.json`)).default;
  const JavaScript = (await import(`./messages/javascript/${ locale }.json`)).default;
  const result: NextIntlConfig = ({
    messages: {
      ...Index,
      Other,
      CSS,
      JavaScript
    },
    defaultTranslationValues: {
      br: (c) => <> <br /></ >
    }
  });
  return result;
});