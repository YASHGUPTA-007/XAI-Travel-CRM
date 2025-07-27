# Internationalization (i18n) Setup

This project has been configured with `i18next` and `react-i18next` for internationalization support.

## 🚀 Features

- ✅ **Multiple Languages**: Support for English (en) and Hindi (hi)
- ✅ **Language Persistence**: Selected language is saved in localStorage
- ✅ **Automatic Detection**: Browser language detection with fallback to English
- ✅ **Reusable Components**: LanguageSwitcher component for easy language toggling
- ✅ **TypeScript Support**: Full TypeScript support for type safety

## 📁 File Structure

```
src/
├── locales/
│   ├── en.json          # English translations
│   └── hi.json          # Hindi translations
├── i18n.ts              # i18next configuration
├── Component/
│   └── LanguageSwitcher.tsx  # Reusable language switcher
└── Pages/landing page/components/
    ├── Header.tsx       # Updated with i18next
    ├── Hero.tsx         # Updated with i18next
    ├── Features.tsx     # Updated with i18next
    └── Footer.tsx       # Updated with i18next
```

## 🛠️ Usage

### 1. Using the LanguageSwitcher Component

```tsx
import LanguageSwitcher from './Component/LanguageSwitcher';

// Basic usage
<LanguageSwitcher />

// With custom styling
<LanguageSwitcher className="w-full" />

// Dropdown variant
<LanguageSwitcher variant="dropdown" />
```

### 2. Using Translations in Components

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
};
```

### 3. Adding New Translations

1. **Add to English file** (`src/locales/en.json`):
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New description"
  }
}
```

2. **Add to Hindi file** (`src/locales/hi.json`):
```json
{
  "newSection": {
    "title": "नया शीर्षक",
    "description": "नया विवरण"
  }
}
```

3. **Use in component**:
```tsx
const { t } = useTranslation();
return <h1>{t('newSection.title')}</h1>;
```

## 🔧 Configuration

The i18next configuration is in `src/i18n.ts`:

- **Fallback Language**: English (en)
- **Language Detection**: localStorage → browser language
- **Persistence**: Language choice saved in localStorage
- **Debug Mode**: Disabled for production

## 🌍 Supported Languages

- **English (en)**: Default language
- **Hindi (hi)**: Full translation support

## 📝 Translation Keys Structure

```
nav.features              # Navigation items
nav.solutions
nav.pricing
nav.testimonials
nav.signIn
nav.startFreeTrial

hero.title               # Hero section
hero.subtitle
hero.startFreeTrial
hero.watchDemo

features.title           # Features section
features.subtitle
features.leadManagement.title
features.leadManagement.description
# ... more feature items

footer.copyright         # Footer section
footer.trustedBy
footer.tagline
footer.description
footer.quickLinks.title
footer.quickLinks.aboutUs
# ... more footer items

common.loading          # Common UI elements
common.error
common.success
```

## 🎯 Key Features

1. **Immediate Language Switching**: Click the language switcher to instantly change the language across the entire application
2. **Persistent Language Choice**: Your language preference is saved and restored on page reload
3. **Responsive Design**: Language switcher works on both desktop and mobile
4. **Visual Indicators**: Flag emojis (🇺🇸/🇮🇳) to clearly indicate current language
5. **Smooth Animations**: Framer Motion animations for smooth transitions

## 🚀 Getting Started

1. The i18next configuration is automatically imported in `main.tsx`
2. All components are already updated to use translations
3. The LanguageSwitcher component is integrated into the Header
4. Simply run the development server and test the language switching!

```bash
npm run dev
```

Visit the application and click the language switcher button in the header to see the internationalization in action! 