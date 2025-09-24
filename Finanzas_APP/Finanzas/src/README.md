# Estructura del proyecto Finanzas_APP

Este proyecto está organizado para máxima claridad, modularidad y escalabilidad. Todos los componentes y estilos son locales y fácilmente editables.

## Estructura de carpetas

```
src/
  App.jsx                # Componente principal (FinancialTracker)
  App.css                # Estilos globales mínimos
  assets/
    icons/               # SVGs locales de FontAwesome para los íconos
      calendar.svg
      credit-card.svg
      dollar-sign.svg
      trending-up.svg
      trending-down.svg
      plus.svg
      edit.svg
      trash.svg
  components/            # Componentes reutilizables y sus estilos
    Button.jsx
    Button.css
    Card.jsx
    Card.css
    CardHeader.jsx
    CardHeader.css
    CardTitle.jsx
    CardTitle.css
    CardContent.jsx
    CardContent.css
    CardDescription.jsx
    CardDescription.css
    Input.jsx
    Input.css
    Label.jsx
    Label.css
    Textarea.jsx
    Textarea.css
    Select.jsx
    Select.css
```

- Cada componente tiene su propio archivo `.jsx` y su hoja de estilos `.css`.
- Los íconos SVG se importan como componentes desde `assets/icons`.
- Solo se mantienen los archivos originales `original.txt` y `original_v2.txt` como referencia.

## Notas
- Para agregar nuevos componentes, sigue la misma convención de nombre y ubicación.
- Los estilos globales deben ir en `App.css`. Los específicos, en el CSS del componente.
- El código está documentado con comentarios descriptivos en cada archivo clave.
