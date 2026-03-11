import type { MDXComponents } from 'mdx/types';
import { Leaf } from 'lucide-react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Override default elements to remove margins
        h1: (props) => <h1 {...props} className={`${props.className || ''} !m-0`} />,
        h2: (props) => <h2 {...props} className={`${props.className || ''} !m-0`} />,
        h3: (props) => <h3 {...props} className={`${props.className || ''} !m-0`} />,
        h4: (props) => <h4 {...props} className={`${props.className || ''} !m-0`} />,
        h5: (props) => <h5 {...props} className={`${props.className || ''} !m-0`} />,
        h6: (props) => <h6 {...props} className={`${props.className || ''} !m-0`} />,
        p: (props) => <p {...props} className={`${props.className || ''} !m-0`} />,
        ul: (props) => <ul {...props} className={`${props.className || ''} !m-0`} />,
        ol: (props) => <ol {...props} className={`${props.className || ''} !m-0`} />,
        li: (props) => <li {...props} className={`${props.className || ''} !m-0`} />,

        // Add any custom components you want to use in MDX files here
        Leaf,
        ...components,
    };
}
