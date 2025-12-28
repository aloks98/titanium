# Switch

Toggle switch for boolean settings.

## Import

```tsx
import { Switch } from '@e412/titanium';
```

## Usage

```tsx
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

## Controlled

```tsx
const [enabled, setEnabled] = useState(false);

<Switch checked={enabled} onCheckedChange={setEnabled} />
```

## With form

```tsx
<form>
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="notifications">Email Notifications</Label>
      <p className="text-sm text-muted-foreground">
        Receive emails about account activity.
      </p>
    </div>
    <Switch id="notifications" />
  </div>
</form>
```

## Disabled

```tsx
<Switch disabled />
<Switch disabled checked />
```

## In settings list

```tsx
<div className="space-y-4">
  {settings.map((setting) => (
    <div key={setting.id} className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor={setting.id}>{setting.label}</Label>
        <p className="text-sm text-muted-foreground">{setting.description}</p>
      </div>
      <Switch
        id={setting.id}
        checked={setting.enabled}
        onCheckedChange={(checked) => updateSetting(setting.id, checked)}
      />
    </div>
  ))}
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | `boolean` | `false` | Switch state |
| onCheckedChange | `(checked: boolean) => void` | - | State change callback |
| disabled | `boolean` | `false` | Disable the switch |
| required | `boolean` | `false` | Mark as required |
| name | `string` | - | Form field name |
| value | `string` | - | Form field value |

## Accessibility

- Keyboard accessible (Space to toggle)
- Proper ARIA role (switch)
- Works with form labels
