# UI kit — Sitio web EBENEZER Automotora

Click-through recreation of the planned public website, composed only from the design-system components (`window.EBENEZERDesignSystem_9e2a3a`).

Screens (switch via the header menu; state persists in localStorage `ebz-kit-page`):
- **Inicio** (`HomeScreen.jsx`) — Hero + QuickSearch, TrustBlock, destacados (light), banda "Vende tu auto" (diagonal orange), testimonios, ServiceStrip.
- **Comprar** (`CatalogScreen.jsx`) — light catalog: breadcrumbs, sort, FilterPanel sidebar (drawer under 1024px), active-filter tags, VehicleCard grid, Pagination.
- **Ficha** (`FichaScreen.jsx`) — open any card: gallery, specs, equipamiento, price box with contextual WhatsApp CTAs (consulta / visita / test drive), CreditSimulator, TrustBlock, FAB with the car's message.
- **Vender mi auto** (`VenderScreen.jsx`) — dark page with 4-step SellCarForm.

Note: there was no existing website to copy (03_Sitio_Web was empty) — layouts follow the brief. Only the Audi TT has real photos; other listings show the studio placeholder. Prices, km and figures are sample data.
