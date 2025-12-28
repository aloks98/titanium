# Typography

Text styling components for headings, paragraphs, and more.

## Import

```tsx
import {
  H1, H2, H3, H4,
  P,
  Lead,
  Large,
  Small,
  Muted,
  InlineCode,
  List,
  Quote,
  Kbd
} from '@e412/titanium';
```

## Headings

```tsx
<H1>This is an H1</H1>
<H2>This is an H2</H2>
<H3>This is an H3</H3>
<H4>This is an H4</H4>
```

## Paragraph

```tsx
<P>
  This is a paragraph with regular body text styling.
  It has proper line height and spacing.
</P>
```

## Lead paragraph

```tsx
<Lead>
  This is a lead paragraph that stands out from the rest of the text.
  Use it for introductions or key points.
</Lead>
```

## Text sizes

```tsx
<Large>Large text for emphasis</Large>
<Small>Small text for captions</Small>
<Muted>Muted text for secondary content</Muted>
```

## Inline code

```tsx
<P>
  Use the <InlineCode>useState</InlineCode> hook for state management.
</P>
```

## Lists

```tsx
<List>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</List>
```

## Blockquote

```tsx
<Quote>
  "The only way to do great work is to love what you do."
</Quote>
```

## Keyboard shortcuts

```tsx
<P>
  Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.
</P>
```

## Combining components

```tsx
<article className="prose">
  <H1>Getting Started</H1>
  <Lead>
    Welcome to Titanium UI, a modern component library.
  </Lead>

  <H2>Installation</H2>
  <P>
    Install the package using <InlineCode>npm install @e412/titanium</InlineCode>.
  </P>

  <H3>Features</H3>
  <List>
    <li>50+ accessible components</li>
    <li>6 built-in themes</li>
    <li>Dark mode support</li>
  </List>

  <Quote>
    Built for modern React applications.
  </Quote>
</article>
```

## Props

All typography components accept standard HTML element props including `className` for customization.

| Component | HTML Element | Purpose |
|-----------|-------------|---------|
| H1-H4 | `<h1>`-`<h4>` | Headings |
| P | `<p>` | Paragraphs |
| Lead | `<p>` | Lead paragraph |
| Large | `<span>` | Large text |
| Small | `<small>` | Small text |
| Muted | `<span>` | Muted text |
| InlineCode | `<code>` | Inline code |
| List | `<ul>` | Unordered list |
| Quote | `<blockquote>` | Blockquotes |
| Kbd | `<kbd>` | Keyboard keys |
