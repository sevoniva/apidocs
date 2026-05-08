import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="logo"
            className="rounded-full"
            style={{ width: 56, height: 56, objectFit: 'cover' }}
          />
          <span className="font-semibold text-base">{appName}</span>
        </span>
      ),
    },
  };
}
