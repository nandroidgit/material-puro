# Pure Material - Angular Material 3 Project

This project demonstrates Angular Material 3 (Material Design 3) with Material Symbols support and Chart.js integration.

## What's Included

### Angular Material 3
- **Version**: 21.0.0
- **Theme**: Custom Material 3 theme with Azure primary color
- **CDK**: Angular Component Dev Kit included
- **Theme File**: `src/custom-theme.scss`

### Chart.js
- **Version**: Latest
- **Library**: ng2-charts for Angular integration
- **Examples**: Line, Bar, and Pie charts included
- **Component**: `src/app/components/charts/`

### Icon Systems

#### Material Icons (Legacy)
Use with the `material-icons` class:
```html
<span class="material-icons">home</span>
```

#### Material Symbols Outlined (New)
Use with the `material-symbols-outlined` class:
```html
<span class="material-symbols-outlined">home</span>
```

Material Symbols offer more customization options:
- Variable font weights (100-700)
- Fill states (0-1)
- Optical sizes (20-48)
- Grade adjustments (-50 to 200)

## Getting Started

### Development Server
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`

### Build
```bash
ng build
```

### Running Tests
```bash
ng test
```

## Using Material Components

Import Material components in your component files:

```typescript
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  // ...
})
```

## Using Chart.js

The project includes a charts component with three example charts:

```typescript
import { ChartsComponent } from './components/charts/charts';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ChartsComponent],
  template: '<app-charts></app-charts>'
})
```

### Chart Types Available
- **Line Chart**: Perfect for showing trends over time
- **Bar Chart**: Ideal for comparing categories
- **Pie Chart**: Great for showing proportions

## Material 3 Theme Customization

Edit `src/custom-theme.scss` to customize your Material 3 theme:

```scss
@include mat.theme((
  color: (
    primary: mat.$azure-palette,
    tertiary: mat.$blue-palette,
  ),
  typography: Roboto,
  density: 0,
));
```

## Resources

- [Angular Material Documentation](https://material.angular.io/)
- [Material Design 3](https://m3.material.io/)
- [Material Symbols](https://fonts.google.com/icons)
- [Chart.js Documentation](https://www.chartjs.org/)
- [Angular Documentation](https://angular.dev/)

## Project Structure

```
pure-material/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── charts/         # Chart.js component
│   │   │       ├── charts.ts
│   │   │       ├── charts.html
│   │   │       └── charts.css
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.css
│   ├── custom-theme.scss        # Material 3 theme
│   ├── styles.css               # Global styles
│   └── index.html               # Icon fonts loaded here
├── angular.json
└── package.json
```

## License

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.
