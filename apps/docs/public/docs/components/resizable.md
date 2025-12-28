# Resizable

Resizable panel layouts with draggable dividers.

## Import

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@e412/titanium';
```

## Usage

```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>
    <div className="p-4">Left Panel</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="p-4">Right Panel</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

## Vertical layout

```tsx
<ResizablePanelGroup direction="vertical" className="min-h-[400px]">
  <ResizablePanel defaultSize={30}>
    <div className="p-4">Top Panel</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={70}>
    <div className="p-4">Bottom Panel</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

## Three panels

```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25} minSize={20}>
    <div className="p-4">Sidebar</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="p-4">Main Content</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={25} minSize={20}>
    <div className="p-4">Properties</div>
  </ResizablePanel>
</ResizablePanelGroup>
```

## With handle indicator

```tsx
<ResizableHandle withHandle />
```

## Nested groups

```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25}>
    <div className="p-4">Left</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={50}>
        <div className="p-4">Top Right</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="p-4">Bottom Right</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>
```

## Props

### ResizablePanelGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |

### ResizablePanel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultSize | `number` | - | Initial size (percentage) |
| minSize | `number` | - | Minimum size (percentage) |
| maxSize | `number` | - | Maximum size (percentage) |
| collapsible | `boolean` | `false` | Allow collapsing |

### ResizableHandle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| withHandle | `boolean` | `false` | Show visual handle indicator |
