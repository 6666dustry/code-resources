// LocalizedLink.tsx
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<typeof Link>;

function ClientLink({ href, locale: l, ...rest }: Props, ref: Props['ref']) {
  const locale = useLocale();

  function getLocalizedHref(originalHref: string) {
    return originalHref.replace(/^\//, '/' + (l ?? locale) + '/');
  }

  const localizedHref =
    typeof href === 'string'
      ? getLocalizedHref(href)
      : href.pathname != null
        ? { ...href, pathname: getLocalizedHref(href.pathname) }
        : href;

  return <Link ref={ref} href={localizedHref} {...rest} />;
}
export default forwardRef(ClientLink);