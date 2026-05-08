import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Callout } from 'fumadocs-ui/components/callout';
import { Cards, Card } from 'fumadocs-ui/components/card';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { Accordions, Accordion } from 'fumadocs-ui/components/accordion';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Steps,
    Step,
    Callout,
    Cards,
    Card,
    Tabs,
    Tab,
    Accordions,
    Accordion,
    TypeTable,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
