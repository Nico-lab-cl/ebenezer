/* @ds-bundle: {"format":4,"namespace":"EBENEZERDesignSystem_9e2a3a","components":[{"name":"Badge","sourcePath":"components/brand/Badge.jsx"},{"name":"Checkered","sourcePath":"components/brand/Checkered.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"EBZ_DEFAULT_PHONE","sourcePath":"components/buttons/WhatsAppButton.jsx"},{"name":"WhatsAppButton","sourcePath":"components/buttons/WhatsAppButton.jsx"},{"name":"WhatsAppFab","sourcePath":"components/buttons/WhatsAppFab.jsx"},{"name":"FilterPanel","sourcePath":"components/catalog/FilterPanel.jsx"},{"name":"QuickSearch","sourcePath":"components/catalog/QuickSearch.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RangeSlider","sourcePath":"components/forms/RangeSlider.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tag","sourcePath":"components/forms/Tag.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"SellCarForm","sourcePath":"components/marketing/SellCarForm.jsx"},{"name":"ServiceStrip","sourcePath":"components/marketing/ServiceStrip.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"},{"name":"TrustBlock","sourcePath":"components/marketing/TrustBlock.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"CreditSimulator","sourcePath":"components/vehicle/CreditSimulator.jsx"},{"name":"SpecList","sourcePath":"components/vehicle/SpecList.jsx"},{"name":"VehicleCard","sourcePath":"components/vehicle/VehicleCard.jsx"},{"name":"VehicleGallery","sourcePath":"components/vehicle/VehicleGallery.jsx"}],"sourceHashes":{"components/brand/Badge.jsx":"ac713b8876a6","components/brand/Checkered.jsx":"b513610f45a2","components/brand/Icon.jsx":"2225812ab0c6","components/brand/Logo.jsx":"94a18958e1b9","components/buttons/Button.jsx":"dce22c6d9401","components/buttons/IconButton.jsx":"f73fb3111165","components/buttons/WhatsAppButton.jsx":"a4d39c527f8a","components/buttons/WhatsAppFab.jsx":"7fd929ca8323","components/catalog/FilterPanel.jsx":"bd05cffeb78e","components/catalog/QuickSearch.jsx":"fe5dab2152cb","components/feedback/Toast.jsx":"169a2080dcd2","components/forms/Checkbox.jsx":"d2473b0e8ca0","components/forms/Input.jsx":"13b55c6c1089","components/forms/RangeSlider.jsx":"7e8ea3310724","components/forms/Select.jsx":"002a2aa6d45f","components/forms/Tag.jsx":"d60e49f2a839","components/marketing/Hero.jsx":"6f4fea57bc80","components/marketing/SellCarForm.jsx":"e8f7ad547f71","components/marketing/ServiceStrip.jsx":"005f0ea6e173","components/marketing/Testimonial.jsx":"091512062399","components/marketing/TrustBlock.jsx":"fdb681eaeba9","components/navigation/Breadcrumbs.jsx":"04f06051176e","components/navigation/Footer.jsx":"b815c3a25289","components/navigation/Header.jsx":"988df8fa3b98","components/navigation/Pagination.jsx":"a29d0ee51b77","components/vehicle/CreditSimulator.jsx":"f799cda847d8","components/vehicle/SpecList.jsx":"4a71a4c89681","components/vehicle/VehicleCard.jsx":"c405c48fc04e","components/vehicle/VehicleGallery.jsx":"696a1186a112","ui_kits/sitio-web/CatalogScreen.jsx":"722623e389a2","ui_kits/sitio-web/FichaScreen.jsx":"66dbda20063f","ui_kits/sitio-web/HomeScreen.jsx":"a18beaf8a76e","ui_kits/sitio-web/VenderScreen.jsx":"9bbc53b09885","ui_kits/sitio-web/data.jsx":"751de9765594"},"inlinedExternals":[],"unexposedExports":[{"name":"assetBase","sourcePath":"components/brand/Icon.jsx"},{"name":"cuota","sourcePath":"components/vehicle/CreditSimulator.jsx"},{"name":"formatCLP","sourcePath":"components/vehicle/VehicleCard.jsx"},{"name":"formatKm","sourcePath":"components/vehicle/VehicleCard.jsx"},{"name":"iconUrl","sourcePath":"components/brand/Icon.jsx"},{"name":"whatsappMessage","sourcePath":"components/buttons/WhatsAppButton.jsx"},{"name":"whatsappUrl","sourcePath":"components/buttons/WhatsAppButton.jsx"}]} */

(() => {

const __ds_ns = (window.EBENEZERDesignSystem_9e2a3a = window.EBENEZERDesignSystem_9e2a3a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Badge.jsx
try { (() => {
const LABELS = {
  seminuevo: 'Seminuevo',
  nuevo: 'Nuevo ingreso',
  rebajado: 'Rebajado',
  brand: 'Seminuevo',
  vendido: 'Vendido'
};
function Badge({
  tone = 'seminuevo',
  size = 'md',
  children,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'ebz-badge ebz-badge--' + tone + (size === 'lg' ? ' ebz-badge--lg' : '') + ' ' + className,
    style: style
  }, /*#__PURE__*/React.createElement("span", null, children || LABELS[tone]));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Badge.jsx", error: String((e && e.message) || e) }); }

// components/brand/Checkered.jsx
try { (() => {
function Checkered({
  size = 10,
  width = 120,
  color,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: 'ebz-checkered ' + className,
    style: {
      '--s': size + 'px',
      '--c': color,
      width,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Checkered });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Checkered.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
const LUCIDE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/';
const SIMPLE = 'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/';
function assetBase() {
  return typeof window !== 'undefined' && window.EBZ_ASSETS || 'assets/';
}
function iconUrl(name) {
  if (name === 'whatsapp') return SIMPLE + 'whatsapp.svg';
  if (name.indexOf('service-') === 0) return assetBase() + 'icons/' + name + '.png';
  return LUCIDE + name + '.svg';
}
function Icon({
  name,
  size = 20,
  color,
  label,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'ebz-icon ' + className,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      '--icon-size': size + 'px',
      '--icon-url': 'url("' + iconUrl(name) + '")',
      color,
      ...style
    }
  });
}
Object.assign(__ds_scope, { assetBase, iconUrl, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const FILES = {
  logo: {
    white: 'logo-blanco',
    color: 'logo-grafito',
    mono: 'logo-mono-grafito',
    'mono-white': 'logo-mono-blanco'
  },
  imagotipo: {
    white: 'imagotipo-blanco',
    color: 'imagotipo-grafito',
    mono: 'imagotipo-grafito',
    'mono-white': 'imagotipo-blanco'
  },
  isotipo: {
    white: 'isotipo-blanco',
    color: 'isotipo-solo-grafito',
    mono: 'isotipo-solo-grafito',
    'mono-white': 'isotipo-blanco',
    'tile-grafito': 'isotipo-grafito',
    'tile-naranja': 'isotipo-naranja'
  }
};
function Logo({
  type = 'logo',
  variant = 'white',
  height = 48,
  className = '',
  style
}) {
  const set = FILES[type] || FILES.logo;
  const file = set[variant] || set.white;
  return /*#__PURE__*/React.createElement("img", {
    className: className,
    src: __ds_scope.assetBase() + 'logo/svg/ebenezer-' + file + '.svg',
    alt: type === 'isotipo' ? 'EBENEZER' : 'EBENEZER Automotora — Compra y venta de autos',
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  block,
  icon,
  iconRight,
  loading,
  disabled,
  href,
  target,
  type = 'button',
  onClick,
  children,
  className = '',
  style,
  ...rest
}) {
  const cls = ['ebz-btn', 'ebz-btn--' + variant, size !== 'md' && 'ebz-btn--' + size, block && 'ebz-btn--block', loading && 'ebz-btn--loading', className].filter(Boolean).join(' ');
  const isz = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "ebz-btn__in"
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: isz
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: isz
  })), loading && /*#__PURE__*/React.createElement("span", {
    className: "ebz-btn__spinner",
    "aria-hidden": "true"
  }));
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    target: target,
    rel: target === '_blank' ? 'noopener' : undefined,
    "aria-disabled": disabled || undefined,
    onClick: onClick,
    style: style
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    "aria-busy": loading || undefined,
    onClick: onClick,
    style: style
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'plain',
  size = 'md',
  pressed,
  onClick,
  className = '',
  style
}) {
  const cls = ['ebz-iconbtn', variant !== 'plain' && 'ebz-iconbtn--' + variant, size !== 'md' && 'ebz-iconbtn--' + size, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cls,
    "aria-label": label,
    title: label,
    "aria-pressed": pressed === undefined ? undefined : !!pressed,
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 22 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/WhatsAppButton.jsx
try { (() => {
const EBZ_DEFAULT_PHONE = '56900000000';
function whatsappMessage({
  context = 'general',
  vehicle,
  message
} = {}) {
  if (message) return message;
  const intro = 'Hola, vengo de la web de EBENEZER, ';
  const car = vehicle ? [vehicle.brand, vehicle.model, vehicle.year].filter(Boolean).join(' ') + (vehicle.condition ? ' ' + String(vehicle.condition).toLowerCase() : '') : '';
  switch (context) {
    case 'vehiculo':
      return intro + 'me interesa el ' + car + ', necesito más información';
    case 'visita':
      return intro + 'quiero agendar una visita para ver el ' + car + '. ¿Qué horarios tienen disponibles?';
    case 'test-drive':
      return intro + 'quiero agendar un test drive del ' + car + '. ¿Qué horarios tienen disponibles?';
    case 'financiamiento':
      return intro + 'quiero simular un crédito' + (car ? ' para el ' + car : '') + ', necesito más información';
    case 'vender':
      return intro + 'quiero vender mi auto' + (car ? ' (' + car + ')' : '') + ' y necesito una tasación';
    default:
      return intro + 'necesito más información';
  }
}
function whatsappUrl(opts = {}) {
  const phone = (opts.phone || typeof window !== 'undefined' && window.EBZ_WHATSAPP || EBZ_DEFAULT_PHONE).replace(/\D/g, '');
  return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(whatsappMessage(opts));
}
function WhatsAppButton({
  context,
  vehicle,
  message,
  phone,
  children = 'Escríbenos por WhatsApp',
  variant = 'primary',
  size = 'md',
  block,
  className,
  style
}) {
  const vctx = context || (vehicle ? 'vehiculo' : 'general');
  return /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: whatsappUrl({
      context: vctx,
      vehicle,
      message,
      phone
    }),
    target: "_blank",
    icon: "whatsapp",
    variant: variant,
    size: size,
    block: block,
    className: className,
    style: style
  }, children);
}
Object.assign(__ds_scope, { EBZ_DEFAULT_PHONE, whatsappMessage, whatsappUrl, WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/WhatsAppFab.jsx
try { (() => {
function WhatsAppFab({
  context,
  vehicle,
  message,
  phone,
  label = '¿Hablamos por WhatsApp?',
  open,
  dot = true,
  fixed = true,
  style
}) {
  const vctx = context || (vehicle ? 'vehiculo' : 'general');
  return /*#__PURE__*/React.createElement("a", {
    className: 'ebz-fab' + (fixed ? '' : ' ebz-fab--static') + (open ? ' ebz-fab--open' : ''),
    href: __ds_scope.whatsappUrl({
      context: vctx,
      vehicle,
      message,
      phone
    }),
    target: "_blank",
    rel: "noopener",
    "aria-label": "Escr\xEDbenos por WhatsApp",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-fab__glyph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "whatsapp",
    size: 30
  })), /*#__PURE__*/React.createElement("span", {
    className: "ebz-fab__label"
  }, label), dot && /*#__PURE__*/React.createElement("span", {
    className: "ebz-fab__dot",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { WhatsAppFab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/WhatsAppFab.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICONS = {
  success: 'check',
  warning: 'triangle-alert',
  error: 'circle-x',
  info: 'info',
  brand: 'bell'
};
function Toast({
  tone = 'success',
  title,
  message,
  duration = 5000,
  onClose,
  style
}) {
  React.useEffect(() => {
    if (!onClose || !duration) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'ebz-toast ebz-toast--' + tone,
    role: tone === 'error' ? 'alert' : 'status',
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[tone],
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-toast__title"
  }, title), message && /*#__PURE__*/React.createElement("div", {
    className: "ebz-toast__msg"
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 0,
      background: 'none',
      color: 'var(--grafito-400)',
      cursor: 'pointer',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })), duration ? /*#__PURE__*/React.createElement("span", {
    className: "ebz-toast__bar",
    style: {
      animation: 'ebz-toast-bar ' + duration + 'ms linear forwards'
    }
  }) : null, /*#__PURE__*/React.createElement("style", null, '@keyframes ebz-toast-bar{from{transform:scaleX(1)}to{transform:scaleX(0)}}'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  count,
  checked,
  defaultChecked,
  onChange,
  disabled,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: 'ebz-check ' + className,
    style: {
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "ebz-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, label), count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "ebz-check__count ebz-num"
  }, count));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  icon,
  suffix,
  help,
  error,
  id,
  className = '',
  style,
  ...rest
}) {
  const fid = id || (label ? 'in-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: 'ebz-field ' + className,
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ebz-label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ebz-control"
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: 'ebz-input' + (icon ? ' ebz-input--icon' : ''),
    "aria-invalid": error ? true : undefined
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "ebz-input__suffix"
  }, suffix)), (error || help) && /*#__PURE__*/React.createElement("span", {
    className: 'ebz-help' + (error ? ' ebz-help--error' : '')
  }, error || help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RangeSlider.jsx
try { (() => {
function RangeSlider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  format = v => v,
  className = '',
  style
}) {
  const [inner, setInner] = React.useState(defaultValue || [min, max]);
  const val = value || inner;
  const set = i => e => {
    const n = Number(e.target.value);
    const next = i === 0 ? [Math.min(n, val[1]), val[1]] : [val[0], Math.max(n, val[0])];
    if (!value) setInner(next);
    onChange && onChange(next);
  };
  const pct = v => (v - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: 'ebz-field ' + className,
    style: style
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ebz-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ebz-range"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-range__track"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ebz-range__fill",
    style: {
      left: pct(val[0]) + '%',
      right: 100 - pct(val[1]) + '%'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: val[0],
    onChange: set(0),
    "aria-label": (label || '') + ' mínimo'
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: val[1],
    onChange: set(1),
    "aria-label": (label || '') + ' máximo'
  })), /*#__PURE__*/React.createElement("div", {
    className: "ebz-range__vals ebz-num"
  }, /*#__PURE__*/React.createElement("span", null, format(val[0])), /*#__PURE__*/React.createElement("span", null, format(val[1]))));
}
Object.assign(__ds_scope, { RangeSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RangeSlider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  placeholder,
  help,
  id,
  className = '',
  style,
  ...rest
}) {
  const fid = id || (label ? 'sel-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: 'ebz-field ' + className,
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ebz-label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ebz-control"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "ebz-select"
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    className: "ebz-select__chev"
  })), help && /*#__PURE__*/React.createElement("span", {
    className: "ebz-help"
  }, help));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/catalog/QuickSearch.jsx
try { (() => {
const MODELS = {
  Audi: ['A3', 'A4', 'Q3', 'TT'],
  Chevrolet: ['Sail', 'Tracker', 'Onix'],
  Hyundai: ['Accent', 'Tucson', 'Santa Fe'],
  Kia: ['Morning', 'Rio', 'Sportage'],
  Mazda: ['3', 'CX-5'],
  Nissan: ['Versa', 'Kicks', 'X-Trail'],
  Suzuki: ['Swift', 'Vitara'],
  Toyota: ['Yaris', 'Corolla', 'RAV4', 'Hilux']
};
const PRICES = [['0-8000000', 'Hasta $8.000.000'], ['8000000-12000000', '$8 a $12 millones'], ['12000000-18000000', '$12 a $18 millones'], ['18000000-99000000', 'Más de $18 millones']];
function QuickSearch({
  models = MODELS,
  onSearch,
  style
}) {
  const [q, setQ] = React.useState({
    marca: '',
    modelo: '',
    anio: '',
    precio: ''
  });
  const set = k => e => setQ({
    ...q,
    [k]: e.target.value,
    ...(k === 'marca' ? {
      modelo: ''
    } : {})
  });
  const years = Array.from({
    length: 16
  }, (_, i) => String(new Date().getFullYear() - i));
  return /*#__PURE__*/React.createElement("form", {
    className: "ebz-qs",
    "data-theme": "dark",
    style: style,
    onSubmit: e => {
      e.preventDefault();
      onSearch && onSearch(q);
    },
    role: "search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Marca",
    placeholder: "Todas",
    options: Object.keys(models),
    value: q.marca,
    onChange: set('marca')
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Modelo",
    placeholder: q.marca ? 'Todos' : 'Elige marca',
    options: models[q.marca] || [],
    value: q.modelo,
    onChange: set('modelo'),
    disabled: !q.marca
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "A\xF1o desde",
    placeholder: "Cualquiera",
    options: years,
    value: q.anio,
    onChange: set('anio')
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Precio",
    placeholder: "Cualquiera",
    options: PRICES.map(([value, label]) => ({
      value,
      label
    })),
    value: q.precio,
    onChange: set('precio')
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    size: "lg",
    icon: "search"
  }, "Buscar"));
}
Object.assign(__ds_scope, { QuickSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/QuickSearch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick,
  onRemove,
  icon,
  static: isStatic,
  className = '',
  style
}) {
  if (isStatic) return /*#__PURE__*/React.createElement("span", {
    className: 'ebz-tag ebz-tag--static ' + className,
    style: style
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'ebz-tag ' + className,
    "aria-pressed": onRemove ? undefined : !!selected,
    onClick: onRemove || onClick,
    style: style
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "ebz-tag__x"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tag.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function Hero({
  overline = 'Automotora · Región de Valparaíso',
  title = 'Autos revisados. Precio claro.',
  subtitle = 'Usados y seminuevos con inspección, informe de antecedentes y transferencia digital. En Viña del Mar, Concón, Valparaíso, Quilpué y Villa Alemana.',
  carImage,
  bgImage,
  badge = 'seminuevo',
  carLabel = 'Audi TT 2011',
  primaryLabel = 'Ver catálogo',
  secondaryLabel = 'Vender mi auto',
  onPrimary,
  onSecondary,
  showSearch = true,
  onSearch,
  style
}) {
  const car = carImage || __ds_scope.assetBase() + 'photos/audi-tt-2011-frontal-recorte.png';
  const bg = bgImage === undefined ? __ds_scope.assetBase() + 'photos/carretera-bn.png' : bgImage;
  return /*#__PURE__*/React.createElement("section", {
    className: "ebz-hero",
    "data-theme": "dark",
    style: style
  }, bg && /*#__PURE__*/React.createElement("div", {
    className: "ebz-hero__bg",
    style: {
      backgroundImage: 'url("' + bg + '")'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ebz-hero__panel"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ebz-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-overline ebz-overline-rule",
    style: {
      color: 'var(--grafito-300)'
    }
  }, overline), /*#__PURE__*/React.createElement("h1", {
    className: "ebz-display"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "ebz-body-lg",
    style: {
      color: 'var(--grafito-300)',
      maxWidth: 480
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: onPrimary
  }, primaryLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "secondary",
    onClick: onSecondary
  }, secondaryLabel))), /*#__PURE__*/React.createElement("div", {
    className: "ebz-hero__car"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '8%',
      top: '2%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      zIndex: 1
    }
  }, badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 800,
      color: 'var(--grafito-900)',
      fontSize: 18
    }
  }, carLabel)), /*#__PURE__*/React.createElement("img", {
    src: car,
    alt: carLabel + ' en estudio'
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkered, {
    width: 110,
    size: 9,
    style: {
      position: 'absolute',
      right: 0,
      bottom: 64
    }
  })))), showSearch && /*#__PURE__*/React.createElement("div", {
    className: "ebz-container",
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-hero__search"
  }, /*#__PURE__*/React.createElement(__ds_scope.QuickSearch, {
    onSearch: onSearch
  }))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SellCarForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STEPS = ['Tu auto', 'Estado', 'Contacto', 'Listo'];
function SellCarForm({
  initialStep = 0,
  phone,
  onSubmit,
  style
}) {
  const [s, setS] = React.useState(initialStep);
  const [d, setD] = React.useState({
    patente: '',
    marca: '',
    modelo: '',
    anio: '',
    km: '',
    estado: 'Bueno',
    duenos: '1',
    mant: 'Sí, en concesionario',
    nombre: '',
    tel: '',
    email: '',
    comuna: ''
  });
  const f = k => ({
    value: d[k],
    onChange: e => setD({
      ...d,
      [k]: e.target.value
    })
  });
  const years = Array.from({
    length: 20
  }, (_, i) => String(new Date().getFullYear() - i));
  const next = () => {
    if (s === 2 && onSubmit) onSubmit(d);
    setS(Math.min(s + 1, 3));
  };
  const car = {
    brand: d.marca,
    model: d.modelo,
    year: d.anio
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    className: "ebz-steps",
    style: {
      '--n': STEPS.length
    }
  }, STEPS.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    "data-state": i < s ? 'done' : i === s ? 'current' : 'next'
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-steps__bar"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "ebz-steps__n"
  }, "0", i + 1), t)))), s === 0 && /*#__PURE__*/React.createElement("div", {
    className: "ebz-form-step",
    key: "0"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    className: "ebz-span-2",
    label: "Patente",
    placeholder: "Ej: DGLR28",
    icon: "scan-line",
    help: "Con la patente pre-cargamos marca, modelo y a\xF1o."
  }, f('patente'))), /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    label: "Marca",
    placeholder: "Ej: Audi"
  }, f('marca'))), /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    label: "Modelo",
    placeholder: "Ej: TT"
  }, f('modelo'))), /*#__PURE__*/React.createElement(__ds_scope.Select, _extends({
    label: "A\xF1o",
    placeholder: "Selecciona",
    options: years
  }, f('anio'))), /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    label: "Kilometraje",
    placeholder: "Ej: 98000",
    suffix: "km",
    inputMode: "numeric"
  }, f('km')))), s === 1 && /*#__PURE__*/React.createElement("div", {
    className: "ebz-form-step",
    key: "1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-field ebz-span-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-label"
  }, "Estado general"), /*#__PURE__*/React.createElement("div", {
    className: "ebz-filters__tags"
  }, ['Excelente', 'Bueno', 'Regular', 'Con detalles'].map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    selected: d.estado === t,
    onClick: () => setD({
      ...d,
      estado: t
    })
  }, t)))), /*#__PURE__*/React.createElement(__ds_scope.Select, _extends({
    label: "Due\xF1os anteriores",
    options: ['1', '2', '3', '4 o más']
  }, f('duenos'))), /*#__PURE__*/React.createElement(__ds_scope.Select, _extends({
    label: "Mantenciones al d\xEDa",
    options: ['Sí, en concesionario', 'Sí, en taller', 'No']
  }, f('mant')))), s === 2 && /*#__PURE__*/React.createElement("div", {
    className: "ebz-form-step",
    key: "2"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    className: "ebz-span-2",
    label: "Nombre",
    placeholder: "Nombre y apellido"
  }, f('nombre'))), /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    label: "Tel\xE9fono",
    placeholder: "+56 9 1234 5678",
    icon: "phone",
    type: "tel"
  }, f('tel'))), /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    label: "Email",
    placeholder: "tu@email.cl",
    icon: "mail",
    type: "email"
  }, f('email'))), /*#__PURE__*/React.createElement(__ds_scope.Select, _extends({
    className: "ebz-span-2",
    label: "Comuna",
    placeholder: "Selecciona",
    options: ['Viña del Mar', 'Concón', 'Valparaíso', 'Quilpué', 'Villa Alemana', 'Otra']
  }, f('comuna')))), s === 3 && /*#__PURE__*/React.createElement("div", {
    className: "ebz-form-step",
    key: "3",
    style: {
      gridTemplateColumns: '1fr',
      justifyItems: 'start',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 52,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--accent)',
      color: 'var(--grafito-950)',
      transform: 'skewX(-12deg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 28,
    style: {
      transform: 'skewX(12deg)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    className: "ebz-h3"
  }, "Recibimos tus datos"), /*#__PURE__*/React.createElement("p", {
    className: "ebz-body",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 460
    }
  }, "Un ejecutivo te contactar\xE1 en menos de 24 horas h\xE1biles con una tasaci\xF3n referencial. Si quieres adelantar, escr\xEDbenos por WhatsApp."), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, {
    context: "vender",
    vehicle: d.marca ? car : undefined,
    phone: phone
  }, "Seguir por WhatsApp")), s < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      paddingTop: 8,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    icon: "arrow-left",
    onClick: () => setS(Math.max(s - 1, 0)),
    disabled: s === 0
  }, "Atr\xE1s"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    iconRight: "arrow-right",
    onClick: next
  }, s === 2 ? 'Enviar y tasar' : 'Continuar')));
}
Object.assign(__ds_scope, { SellCarForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SellCarForm.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceStrip.jsx
try { (() => {
const SERVICES = [['oil', 'Cambio de aceite'], ['engine', 'Mecánica'], ['brake', 'Frenos'], ['eco', 'Eco']];
function ServiceStrip({
  height = 40,
  gap = 18,
  color = '#fff',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ebz-services",
    style: {
      '--h': height + 'px',
      '--gap': gap + 'px',
      color,
      ...style
    }
  }, SERVICES.map(([k, l]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "ebz-services__item"
  }, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.assetBase() + 'icons/service-' + k + '.png',
    alt: l
  }))));
}
Object.assign(__ds_scope, { ServiceStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  name,
  comuna,
  car,
  rating = 5,
  style
}) {
  const initials = String(name || '').split(' ').map(s => s[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement("figure", {
    className: "ebz-quote",
    style: {
      margin: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-quote__mark",
    "aria-hidden": "true"
  }, "\u201C"), rating ? /*#__PURE__*/React.createElement("span", {
    className: "ebz-stars",
    "aria-label": rating + ' de 5'
  }, Array.from({
    length: 5
  }, (_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: 15,
    style: {
      opacity: i < rating ? 1 : 0.25
    }
  }))) : null), /*#__PURE__*/React.createElement("blockquote", {
    className: "ebz-quote__text",
    style: {
      margin: 0
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    className: "ebz-quote__who"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-quote__avatar"
  }, /*#__PURE__*/React.createElement("span", null, initials)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 14
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "ebz-caption"
  }, [comuna, car].filter(Boolean).join(' · ')))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustBlock.jsx
try { (() => {
const ITEMS = [{
  icon: 'clipboard-check',
  title: 'Inspección de 150 puntos',
  text: 'Mecánica, carrocería, frenos y electrónica revisados antes de publicar. Te entregamos el informe.'
}, {
  icon: 'shield-check',
  title: 'Garantía mecánica',
  text: 'Cobertura de motor y caja por 3 meses o 5.000 km, lo que ocurra primero.'
}, {
  icon: 'file-signature',
  title: 'Transferencia digital',
  text: 'Firmas electrónicas y trámite ante el Registro Civil sin que tengas que hacer filas.'
}, {
  icon: 'file-search',
  title: 'Informe de antecedentes',
  text: 'Multas, prendas, dueños anteriores y encargo por robo, verificados para cada auto.'
}];
function TrustBlock({
  items = ITEMS,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ebz-trust",
    style: style
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ebz-trust__item"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 36,
    className: "ebz-trust__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ebz-trust__title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "ebz-trust__text"
  }, it.text))));
}
Object.assign(__ds_scope, { TrustBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Migas de pan",
    style: style
  }, /*#__PURE__*/React.createElement("ol", {
    className: "ebz-crumbs"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("li", {
    className: "ebz-crumbs__sep",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("li", null, i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    "aria-current": "page"
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    onClick: it.onClick
  }, it.label))))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const COMUNAS = ['Viña del Mar', 'Concón', 'Valparaíso', 'Quilpué', 'Villa Alemana'];
function Footer({
  address = 'Dirección por confirmar, Viña del Mar',
  phone = '+56 9 0000 0000',
  email = 'contacto@ebenezer.cl',
  hours = 'Lun a Vie 10:00–19:00 · Sáb 10:00–14:00',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ebz-footer",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "white",
    height: 52
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 320,
      lineHeight: 1.6
    }
  }, "Autos usados y seminuevos revisados, con precio claro y transferencia digital. Regi\xF3n de Valpara\xEDso."), /*#__PURE__*/React.createElement(__ds_scope.Checkered, {
    width: 96,
    size: 8
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Comprar"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Cat\xE1logo")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Seminuevos")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Rebajados")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Financiamiento")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "EBENEZER"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Vender mi auto")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Nosotros")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Preguntas frecuentes")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contacto")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contacto"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 16,
    style: {
      marginTop: 2
    }
  }), address), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16,
    style: {
      marginTop: 2
    }
  }), phone), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 16,
    style: {
      marginTop: 2
    }
  }), email), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 16,
    style: {
      marginTop: 2
    }
  }), hours)))), /*#__PURE__*/React.createElement("div", {
    className: "ebz-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, COMUNAS.join(' · ')), /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " EBENEZER Automotora \xB7 Precios en CLP con IVA incluido"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
const ITEMS = ['Comprar', 'Vender mi auto', 'Financiamiento', 'Nosotros', 'Contacto'];
function Header({
  active,
  items = ITEMS,
  onNavigate,
  phone,
  sticky = true,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const go = it => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(it);
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "ebz-header",
    style: {
      position: sticky ? 'sticky' : 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-header__in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go('Inicio'),
    "aria-label": "EBENEZER inicio"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    type: "imagotipo",
    variant: "white",
    height: 40
  })), /*#__PURE__*/React.createElement("nav", {
    className: "ebz-header__nav",
    "aria-label": "Principal"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    className: "ebz-header__link",
    "aria-current": active === it ? 'page' : undefined,
    onClick: go(it)
  }, it))), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, {
    size: "sm",
    phone: phone
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-header__cta-label"
  }, "WhatsApp")), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "ebz-header__burger",
    icon: open ? 'x' : 'menu',
    label: "Men\xFA",
    onClick: () => setOpen(!open)
  })), open && /*#__PURE__*/React.createElement("nav", {
    className: "ebz-mnav",
    "aria-label": "M\xF3vil"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: go(it)
  }, it)))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function pages(p, t) {
  if (t <= 7) return Array.from({
    length: t
  }, (_, i) => i + 1);
  if (p <= 4) return [1, 2, 3, 4, 5, '…', t];
  if (p >= t - 3) return [1, '…', t - 4, t - 3, t - 2, t - 1, t];
  return [1, '…', p - 1, p, p + 1, '…', t];
}
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style
}) {
  const go = n => () => onChange && onChange(n);
  return /*#__PURE__*/React.createElement("nav", {
    className: "ebz-pag",
    "aria-label": "Paginaci\xF3n",
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    className: "ebz-pag__btn",
    onClick: go(page - 1),
    disabled: page <= 1,
    "aria-label": "Anterior"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 18
  }))), pages(page, total).map((n, i) => n === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 'g' + i,
    className: "ebz-pag__gap"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    className: "ebz-pag__btn",
    "aria-current": n === page ? 'page' : undefined,
    onClick: go(n)
  }, /*#__PURE__*/React.createElement("span", null, n))), /*#__PURE__*/React.createElement("button", {
    className: "ebz-pag__btn",
    onClick: go(page + 1),
    disabled: page >= total,
    "aria-label": "Siguiente"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/vehicle/SpecList.jsx
try { (() => {
function SpecList({
  specs = [],
  columns = 3,
  style
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: "ebz-specs",
    style: {
      '--cols': columns,
      margin: 0,
      ...style
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ebz-specs__item"
  }, s.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, s.label), /*#__PURE__*/React.createElement("dd", {
    className: "ebz-num"
  }, s.value)))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/vehicle/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/vehicle/VehicleCard.jsx
try { (() => {
function formatCLP(n) {
  return '$' + Math.round(n).toLocaleString('es-CL');
}
function formatKm(n) {
  return Math.round(n).toLocaleString('es-CL') + ' km';
}
const BADGE_LABEL = {
  seminuevo: 'Seminuevo',
  nuevo: 'Nuevo ingreso',
  rebajado: 'Rebajado',
  vendido: 'Vendido'
};
function VehicleCard({
  vehicle = {},
  onOpen,
  favorite,
  onFavorite,
  phone,
  style
}) {
  const v = vehicle;
  const open = e => {
    if (onOpen) {
      e.preventDefault();
      onOpen(v);
    }
  };
  return /*#__PURE__*/React.createElement("article", {
    className: "ebz-vcard",
    style: style
  }, /*#__PURE__*/React.createElement("a", {
    href: v.href || '#',
    onClick: open,
    className: "ebz-vcard__media",
    "aria-label": v.brand + ' ' + v.model + ' ' + v.year
  }, v.image ? /*#__PURE__*/React.createElement("img", {
    src: v.image,
    alt: v.brand + ' ' + v.model + ' ' + v.year + ' vista frontal',
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "ebz-photo-ph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "car",
    size: 36
  }), "Foto en estudio"), /*#__PURE__*/React.createElement("span", {
    className: "ebz-vcard__stripe"
  })), v.badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: v.badge,
    className: "ebz-vcard__badge"
  }), onFavorite && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "ebz-vcard__fav",
    variant: "solid",
    size: "sm",
    icon: "heart",
    label: favorite ? 'Quitar de favoritos' : 'Guardar en favoritos',
    pressed: !!favorite,
    onClick: () => onFavorite(v)
  }), /*#__PURE__*/React.createElement("div", {
    className: "ebz-vcard__body"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ebz-vcard__brand"
  }, v.brand), /*#__PURE__*/React.createElement("h3", {
    className: "ebz-vcard__title"
  }, v.model, " ", /*#__PURE__*/React.createElement("span", {
    className: "ebz-num"
  }, v.year)), v.version && /*#__PURE__*/React.createElement("div", {
    className: "ebz-caption",
    style: {
      marginTop: 2
    }
  }, v.version)), /*#__PURE__*/React.createElement("div", {
    className: "ebz-vcard__specs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-vcard__spec"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "gauge",
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    className: "ebz-num"
  }, formatKm(v.km || 0))), /*#__PURE__*/React.createElement("span", {
    className: "ebz-vcard__spec"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cog",
    size: 15
  }), v.transmission), /*#__PURE__*/React.createElement("span", {
    className: "ebz-vcard__spec"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "fuel",
    size: 15
  }), v.fuel)), /*#__PURE__*/React.createElement("div", {
    className: "ebz-vcard__price"
  }, /*#__PURE__*/React.createElement("div", null, v.oldPrice && /*#__PURE__*/React.createElement("div", {
    className: "ebz-vcard__was ebz-num"
  }, formatCLP(v.oldPrice)), /*#__PURE__*/React.createElement("div", {
    className: "ebz-price"
  }, formatCLP(v.price || 0)), v.monthly && /*#__PURE__*/React.createElement("div", {
    className: "ebz-vcard__cuota"
  }, "Cuota ref. desde ", /*#__PURE__*/React.createElement("b", {
    className: "ebz-num"
  }, formatCLP(v.monthly)), "/mes"))), /*#__PURE__*/React.createElement("div", {
    className: "ebz-vcard__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    size: "sm",
    href: v.href || '#',
    onClick: open,
    iconRight: "arrow-right"
  }, "Ver ficha"), /*#__PURE__*/React.createElement("a", {
    className: "ebz-iconbtn ebz-iconbtn--outline",
    href: __ds_scope.whatsappUrl({
      context: 'vehiculo',
      vehicle: {
        brand: v.brand,
        model: v.model,
        year: v.year,
        condition: BADGE_LABEL[v.badge]
      },
      phone
    }),
    target: "_blank",
    rel: "noopener",
    "aria-label": "Consultar por WhatsApp",
    title: "Consultar por WhatsApp"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "whatsapp",
    size: 18
  })))));
}
Object.assign(__ds_scope, { formatCLP, formatKm, VehicleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/vehicle/VehicleCard.jsx", error: String((e && e.message) || e) }); }

// components/catalog/FilterPanel.jsx
try { (() => {
const BRANDS = [['Audi', 3], ['Chevrolet', 6], ['Hyundai', 5], ['Kia', 7], ['Mazda', 4], ['Nissan', 5], ['Toyota', 9]];
function Section({
  title,
  children,
  defaultOpen = true
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: "ebz-filters__sec"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ebz-filters__sech",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'minus' : 'plus',
    size: 16
  })), open && children);
}
function FilterPanel({
  variant = 'sidebar',
  open = true,
  onClose,
  resultCount = 39,
  brands = BRANDS,
  onChange,
  inline,
  style
}) {
  const [f, setF] = React.useState({
    marcas: ['Audi'],
    precio: [5000000, 25000000],
    anio: [2012, 2024],
    km: [0, 150000],
    trans: 'Automática',
    fuel: []
  });
  const upd = patch => {
    const n = {
      ...f,
      ...patch
    };
    setF(n);
    onChange && onChange(n);
  };
  const toggle = (arr, v) => arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v];
  const reset = () => upd({
    marcas: [],
    precio: [3000000, 40000000],
    anio: [2008, 2025],
    km: [0, 200000],
    trans: '',
    fuel: []
  });
  if (variant === 'drawer' && !open) return null;
  const panel = /*#__PURE__*/React.createElement("aside", {
    className: 'ebz-filters' + (variant === 'drawer' ? ' ebz-drawer' + (inline ? ' ebz-drawer--inline' : '') : ''),
    style: style,
    "aria-label": "Filtros"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-filters__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-h5",
    style: {
      fontStyle: 'italic',
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sliders-horizontal",
    size: 18
  }), "Filtros"), variant === 'drawer' ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Cerrar filtros",
    onClick: onClose
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: reset,
    style: {
      border: 0,
      background: 'none',
      color: 'var(--text-accent)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "Limpiar")), /*#__PURE__*/React.createElement(Section, {
    title: "Marca"
  }, brands.map(([b, c]) => /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    key: b,
    label: b,
    count: c,
    checked: f.marcas.includes(b),
    onChange: () => upd({
      marcas: toggle(f.marcas, b)
    })
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Precio"
  }, /*#__PURE__*/React.createElement(__ds_scope.RangeSlider, {
    min: 3000000,
    max: 40000000,
    step: 500000,
    value: f.precio,
    onChange: v => upd({
      precio: v
    }),
    format: __ds_scope.formatCLP
  })), /*#__PURE__*/React.createElement(Section, {
    title: "A\xF1o"
  }, /*#__PURE__*/React.createElement(__ds_scope.RangeSlider, {
    min: 2008,
    max: 2025,
    value: f.anio,
    onChange: v => upd({
      anio: v
    })
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Kilometraje"
  }, /*#__PURE__*/React.createElement(__ds_scope.RangeSlider, {
    min: 0,
    max: 200000,
    step: 5000,
    value: f.km,
    onChange: v => upd({
      km: v
    }),
    format: v => v.toLocaleString('es-CL') + ' km'
  })), /*#__PURE__*/React.createElement(Section, {
    title: "Transmisi\xF3n"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-filters__tags"
  }, ['Automática', 'Manual'].map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    selected: f.trans === t,
    onClick: () => upd({
      trans: f.trans === t ? '' : t
    })
  }, t)))), /*#__PURE__*/React.createElement(Section, {
    title: "Combustible"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-filters__tags"
  }, ['Bencina', 'Diésel', 'Híbrido', 'Eléctrico'].map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    selected: f.fuel.includes(t),
    onClick: () => upd({
      fuel: toggle(f.fuel, t)
    })
  }, t)))), variant === 'drawer' && /*#__PURE__*/React.createElement("div", {
    className: "ebz-filters__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: reset
  }, "Limpiar"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    block: true,
    onClick: onClose
  }, "Ver ", resultCount, " autos")));
  if (variant === 'drawer' && !inline) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ebz-drawer-scrim",
    onClick: onClose
  }), panel);
  return panel;
}
Object.assign(__ds_scope, { FilterPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/FilterPanel.jsx", error: String((e && e.message) || e) }); }

// components/vehicle/CreditSimulator.jsx
try { (() => {
function cuota(principal, monthlyRate, n) {
  if (monthlyRate === 0) return principal / n;
  return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -n));
}
function CreditSimulator({
  price = 12990000,
  rate = 0.0169,
  minDown = 0.2,
  terms = [12, 24, 36, 48, 60],
  vehicle,
  phone,
  style
}) {
  const [down, setDown] = React.useState(Math.round(price * 0.3 / 100000) * 100000);
  const [n, setN] = React.useState(36);
  const principal = Math.max(price - down, 0);
  const c = cuota(principal, rate, n);
  const minD = Math.round(price * minDown / 100000) * 100000;
  return /*#__PURE__*/React.createElement("section", {
    className: "ebz-sim",
    "data-theme": "dark",
    style: style,
    "aria-label": "Simulador de cr\xE9dito"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ebz-h5",
    style: {
      fontStyle: 'italic',
      fontWeight: 800
    }
  }, "Simula tu cr\xE9dito"), /*#__PURE__*/React.createElement("span", {
    className: "ebz-caption"
  }, "Valor ", /*#__PURE__*/React.createElement("b", {
    className: "ebz-num",
    style: {
      color: '#fff'
    }
  }, __ds_scope.formatCLP(price)))), /*#__PURE__*/React.createElement("div", {
    className: "ebz-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-label",
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, "Pie ", /*#__PURE__*/React.createElement("span", {
    className: "ebz-num",
    style: {
      color: '#fff',
      letterSpacing: 0,
      fontSize: 14
    }
  }, __ds_scope.formatCLP(down), " \xB7 ", Math.round(down / price * 100), "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: minD,
    max: Math.round(price * 0.8),
    step: 100000,
    value: down,
    onChange: e => setDown(Number(e.target.value)),
    "aria-label": "Pie",
    style: {
      width: '100%',
      accentColor: 'var(--naranja-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ebz-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-label"
  }, "Plazo (meses)"), /*#__PURE__*/React.createElement("div", {
    className: "ebz-seg"
  }, terms.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    type: "button",
    "aria-pressed": t === n,
    onClick: () => setN(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ebz-sim__result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-label"
  }, "Cuota referencial"), /*#__PURE__*/React.createElement("div", {
    className: "ebz-price ebz-price-lg",
    style: {
      color: 'var(--naranja-500)',
      marginTop: 6
    }
  }, __ds_scope.formatCLP(c), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--grafito-300)',
      fontStyle: 'normal',
      fontWeight: 600
    }
  }, " /mes")), /*#__PURE__*/React.createElement("div", {
    className: "ebz-caption",
    style: {
      marginTop: 8
    }
  }, "Monto a financiar ", /*#__PURE__*/React.createElement("b", {
    className: "ebz-num",
    style: {
      color: '#fff'
    }
  }, __ds_scope.formatCLP(principal)), " \xB7 ", n, " cuotas")), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, {
    context: "financiamiento",
    vehicle: vehicle,
    phone: phone,
    block: true
  }, "Solicitar evaluaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    className: "ebz-sim__fine"
  }, "Valores referenciales, sujetos a evaluaci\xF3n crediticia. Tasa mensual referencial ", (rate * 100).toFixed(2).replace('.', ','), "%. No incluye gastos operacionales, impuestos ni seguros. La CAE se informa en la cotizaci\xF3n formal."));
}
Object.assign(__ds_scope, { cuota, CreditSimulator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/vehicle/CreditSimulator.jsx", error: String((e && e.message) || e) }); }

// components/vehicle/VehicleGallery.jsx
try { (() => {
function VehicleGallery({
  images = [],
  alt = 'Vehículo',
  style
}) {
  const [i, setI] = React.useState(0);
  const n = images.length;
  const cur = images[i] || {};
  const go = d => () => setI((i + d + n) % n);
  return /*#__PURE__*/React.createElement("div", {
    className: "ebz-gallery",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-gallery__main"
  }, cur.src && /*#__PURE__*/React.createElement("img", {
    key: i,
    src: cur.src,
    alt: alt + ' — ' + (cur.label || '')
  }), n > 1 && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "ebz-gallery__nav",
    style: {
      left: 12
    },
    variant: "solid",
    icon: "chevron-left",
    label: "Foto anterior",
    onClick: go(-1)
  }), n > 1 && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "ebz-gallery__nav",
    style: {
      right: 12
    },
    variant: "solid",
    icon: "chevron-right",
    label: "Foto siguiente",
    onClick: go(1)
  }), /*#__PURE__*/React.createElement("span", {
    className: "ebz-gallery__count ebz-num"
  }, cur.label ? cur.label + ' · ' : '', i + 1, "/", n)), /*#__PURE__*/React.createElement("div", {
    className: "ebz-gallery__thumbs"
  }, images.map((im, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: "ebz-gallery__thumb",
    "aria-current": k === i,
    "aria-label": 'Ver ' + (im.label || 'foto ' + (k + 1)),
    onClick: () => setI(k)
  }, /*#__PURE__*/React.createElement("img", {
    src: im.src,
    alt: ""
  })))));
}
Object.assign(__ds_scope, { VehicleGallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/vehicle/VehicleGallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/CatalogScreen.jsx
try { (() => {
function CatalogScreen({
  openCar,
  fav,
  toggleFav
}) {
  const {
    FilterPanel,
    VehicleCard,
    Breadcrumbs,
    Pagination,
    Select,
    Tag,
    Button
  } = window.EBENEZERDesignSystem_9e2a3a;
  const [page, setPage] = React.useState(1);
  const [drawer, setDrawer] = React.useState(false);
  const list = [...VEHICLES, ...VEHICLES.slice(1, 4)];
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "light",
    style: {
      background: 'var(--bg-page)',
      color: 'var(--text-primary)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-container",
    style: {
      padding: '28px var(--grid-margin) 72px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Comprar'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      margin: '18px 0 28px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ebz-h1"
  }, "Autos usados y seminuevos"), /*#__PURE__*/React.createElement("p", {
    className: "ebz-body",
    style: {
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "ebz-num",
    style: {
      color: 'var(--text-primary)'
    }
  }, "39 autos"), " revisados en la Regi\xF3n de Valpara\xEDso")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cat-mobile-only"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "sliders-horizontal",
    onClick: () => setDrawer(true)
  }, "Filtros")), /*#__PURE__*/React.createElement(Select, {
    label: "Ordenar por",
    options: ['Más recientes', 'Menor precio', 'Mayor precio', 'Menor kilometraje'],
    style: {
      width: 220
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '290px minmax(0,1fr)',
      gap: 28,
      alignItems: 'start'
    },
    className: "cat-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cat-desktop-only",
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(FilterPanel, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Audi', 'Automática', '$5M – $25M'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    onRemove: () => {}
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
      gap: 22
    }
  }, list.map((v, i) => /*#__PURE__*/React.createElement(VehicleCard, {
    key: v.id + i,
    vehicle: v,
    onOpen: openCar,
    favorite: fav.includes(v.id),
    onFavorite: toggleFav
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 5,
    onChange: setPage
  }))))), /*#__PURE__*/React.createElement(FilterPanel, {
    variant: "drawer",
    open: drawer,
    onClose: () => setDrawer(false),
    resultCount: 39
  }));
}
window.CatalogScreen = CatalogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/CatalogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/FichaScreen.jsx
try { (() => {
function FichaScreen({
  car,
  go,
  fav,
  toggleFav,
  notify
}) {
  const {
    Breadcrumbs,
    VehicleGallery,
    SpecList,
    CreditSimulator,
    Badge,
    WhatsAppButton,
    Button,
    IconButton,
    Tag,
    TrustBlock,
    VehicleCard,
    WhatsAppFab
  } = window.EBENEZERDesignSystem_9e2a3a;
  const v = car || VEHICLES[0];
  const clp = n => '$' + n.toLocaleString('es-CL');
  const label = {
    seminuevo: 'Seminuevo',
    nuevo: 'Nuevo ingreso',
    rebajado: 'Rebajado'
  }[v.badge];
  const wa = {
    brand: v.brand,
    model: v.model,
    year: v.year,
    condition: label
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "light",
    style: {
      background: 'var(--bg-page)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-container",
    style: {
      padding: '28px var(--grid-margin) 64px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio',
      onClick: e => {
        e.preventDefault();
        go('Inicio');
      }
    }, {
      label: 'Comprar',
      onClick: e => {
        e.preventDefault();
        go('Comprar');
      }
    }, {
      label: v.brand
    }, {
      label: v.model + ' ' + v.year
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,4fr)',
      gap: 32,
      marginTop: 22,
      alignItems: 'start'
    },
    className: "ficha-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(VehicleGallery, {
    alt: v.brand + ' ' + v.model + ' ' + v.year,
    images: v.gallery || []
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ebz-h4"
  }, "Especificaciones"), /*#__PURE__*/React.createElement(SpecList, {
    specs: [{
      icon: 'calendar',
      label: 'Año',
      value: v.year
    }, {
      icon: 'gauge',
      label: 'Kilometraje',
      value: v.km.toLocaleString('es-CL') + ' km'
    }, {
      icon: 'cog',
      label: 'Transmisión',
      value: v.transmission
    }, {
      icon: 'fuel',
      label: 'Combustible',
      value: v.fuel
    }, {
      icon: 'zap',
      label: 'Motor',
      value: v.engine || '—'
    }, {
      icon: 'move-3d',
      label: 'Tracción',
      value: v.traction || '—'
    }, {
      icon: 'car',
      label: 'Puertas',
      value: v.doors || '—'
    }, {
      icon: 'palette',
      label: 'Color',
      value: v.color || '—'
    }, {
      icon: 'users',
      label: 'Dueños',
      value: v.owners || '—'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ebz-h4"
  }, "Equipamiento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['Climatizador', 'Cuero', 'Sensor de retroceso', 'Llantas 18"', 'Bluetooth', 'Control crucero', '6 airbags', 'ABS + ESP'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    static: true,
    icon: "check"
  }, t))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-surface)',
      padding: 24,
      boxShadow: 'var(--shadow-light-1), inset 0 0 0 1px var(--border-subtle)',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, v.badge ? /*#__PURE__*/React.createElement(Badge, {
    tone: v.badge
  }) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Guardar",
    pressed: fav.includes(v.id),
    onClick: () => toggleFav(v)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "share-2",
    label: "Compartir",
    onClick: () => notify({
      tone: 'info',
      title: 'Enlace copiado',
      message: v.brand + ' ' + v.model + ' ' + v.year
    })
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ebz-vcard__brand"
  }, v.brand), /*#__PURE__*/React.createElement("h1", {
    className: "ebz-h2",
    style: {
      marginTop: 4
    }
  }, v.model, " ", /*#__PURE__*/React.createElement("span", {
    className: "ebz-num",
    style: {
      color: 'var(--text-accent)'
    }
  }, v.year)), /*#__PURE__*/React.createElement("div", {
    className: "ebz-body-sm",
    style: {
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, v.version, " \xB7 ", v.km.toLocaleString('es-CL'), " km \xB7 ", v.transmission)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-label"
  }, "Precio final"), /*#__PURE__*/React.createElement("div", {
    className: "ebz-price ebz-price-lg",
    style: {
      marginTop: 6
    }
  }, clp(v.price)), /*#__PURE__*/React.createElement("div", {
    className: "ebz-caption",
    style: {
      marginTop: 6
    }
  }, "IVA incluido \xB7 Transferencia no incluida")), /*#__PURE__*/React.createElement(WhatsAppButton, {
    vehicle: wa,
    size: "lg",
    block: true
  }, "Consultar por WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(WhatsAppButton, {
    context: "visita",
    vehicle: wa,
    variant: "secondary",
    size: "sm",
    block: true
  }, "Agendar visita"), /*#__PURE__*/React.createElement(WhatsAppButton, {
    context: "test-drive",
    vehicle: wa,
    variant: "secondary",
    size: "sm",
    block: true
  }, "Test drive"))), /*#__PURE__*/React.createElement(CreditSimulator, {
    price: v.price,
    vehicle: wa
  })))), /*#__PURE__*/React.createElement("section", {
    "data-theme": "dark",
    style: {
      background: 'var(--grafito-950)',
      color: '#fff',
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-container"
  }, /*#__PURE__*/React.createElement(TrustBlock, null))), /*#__PURE__*/React.createElement(WhatsAppFab, {
    vehicle: wa
  }));
}
window.FichaScreen = FichaScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/FichaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HomeScreen({
  go,
  openCar,
  fav,
  toggleFav
}) {
  const {
    Hero,
    VehicleCard,
    TrustBlock,
    Testimonial,
    Button,
    Checkered,
    ServiceStrip
  } = window.EBENEZERDesignSystem_9e2a3a;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onPrimary: () => go('Comprar'),
    onSecondary: () => go('Vender mi auto'),
    onSearch: () => go('Comprar')
  }), /*#__PURE__*/React.createElement("section", {
    className: "ebz-container",
    style: {
      padding: '72px var(--grid-margin) 64px'
    }
  }, /*#__PURE__*/React.createElement(TrustBlock, null)), /*#__PURE__*/React.createElement("section", {
    "data-theme": "light",
    style: {
      background: 'var(--bg-page)',
      color: 'var(--text-primary)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      marginBottom: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-overline",
    style: {
      color: 'var(--text-accent)'
    }
  }, "Reci\xE9n llegados"), /*#__PURE__*/React.createElement("h2", {
    className: "ebz-h2"
  }, "Seminuevos destacados")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => go('Comprar')
  }, "Ver los 39 autos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 24
    }
  }, VEHICLES.slice(0, 4).map(v => /*#__PURE__*/React.createElement(VehicleCard, {
    key: v.id,
    vehicle: v,
    onOpen: openCar,
    favorite: fav.includes(v.id),
    onFavorite: toggleFav
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '88px 0',
      background: 'var(--grafito-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 0 0 58%',
      background: 'var(--naranja-500)',
      clipPath: 'polygon(18% 0,100% 0,100% 100%,0 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ebz-container",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,6fr) minmax(0,5fr)',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Checkered, {
    width: 96,
    size: 8
  }), /*#__PURE__*/React.createElement("h2", {
    className: "ebz-h1"
  }, "\xBFVendes tu auto? Te lo tasamos hoy."), /*#__PURE__*/React.createElement("p", {
    className: "ebz-body-lg",
    style: {
      color: 'var(--grafito-300)',
      maxWidth: 520
    }
  }, "Oferta referencial en 24 horas h\xE1biles, pago al firmar y transferencia digital. Sin publicar ni recibir llamadas de desconocidos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('Vender mi auto')
  }, "Tasar mi auto"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 14,
      color: 'var(--grafito-950)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-display",
    style: {
      fontSize: 120
    }
  }, "24h"), /*#__PURE__*/React.createElement("span", {
    className: "ebz-overline",
    style: {
      fontWeight: 700
    }
  }, "Tasaci\xF3n referencial")))), /*#__PURE__*/React.createElement("section", {
    "data-theme": "light",
    style: {
      background: 'var(--bg-page)',
      color: 'var(--text-primary)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ebz-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-overline",
    style: {
      color: 'var(--text-accent)'
    }
  }, "Clientes en la regi\xF3n"), /*#__PURE__*/React.createElement("h2", {
    className: "ebz-h2"
  }, "Lo que dicen de EBENEZER")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24
    }
  }, TESTIMONIALS.map(t => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: t.name
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '36px 0',
      background: 'var(--grafito-900)'
    }
  }, /*#__PURE__*/React.createElement(ServiceStrip, {
    height: 36
  })));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/VenderScreen.jsx
try { (() => {
function VenderScreen({
  notify
}) {
  const {
    SellCarForm,
    Checkered,
    Icon
  } = window.EBENEZERDesignSystem_9e2a3a;
  const steps = [['scan-line', 'Ingresa tu patente', 'Pre-cargamos los datos de tu auto.'], ['calculator', 'Tasación en 24 h', 'Te enviamos una oferta referencial.'], ['clipboard-check', 'Inspección', 'Revisamos el auto en Viña del Mar o a domicilio.'], ['banknote', 'Pago y transferencia', 'Pagamos al firmar, trámite 100% digital.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grafito-950)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '38%',
      height: 520,
      background: 'var(--studio-gradient)',
      clipPath: 'polygon(30% 0,100% 0,100% 100%,0 100%)',
      opacity: 0.08
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ebz-container",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr)',
      gap: 56,
      padding: '72px var(--grid-margin) 96px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-overline ebz-overline-rule",
    style: {
      color: 'var(--grafito-300)'
    }
  }, "Vende tu auto"), /*#__PURE__*/React.createElement("h1", {
    className: "ebz-h1"
  }, "Tasaci\xF3n clara, pago seguro."), /*#__PURE__*/React.createElement("p", {
    className: "ebz-body-lg",
    style: {
      color: 'var(--grafito-300)'
    }
  }, "Completa 3 pasos y recibe una oferta referencial para tu auto. Sin compromiso."), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: '12px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, steps.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ebz-num",
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 900,
      fontSize: 28,
      color: 'var(--naranja-500)',
      width: 40
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  }), t), /*#__PURE__*/React.createElement("span", {
    className: "ebz-body-sm",
    style: {
      color: 'var(--grafito-400)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Checkered, {
    width: 96,
    size: 8,
    style: {
      marginTop: 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grafito-900)',
      padding: 32,
      borderRadius: 4,
      boxShadow: 'var(--shadow-3), inset 0 0 0 1px rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement(SellCarForm, {
    onSubmit: () => notify({
      tone: 'success',
      title: 'Datos enviados',
      message: 'Te contactaremos en menos de 24 horas hábiles.'
    })
  }))));
}
window.VenderScreen = VenderScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/VenderScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/data.jsx
try { (() => {
const P = '../../assets/photos/';
const VEHICLES = [{
  id: 'audi-tt-2011',
  brand: 'Audi',
  model: 'TT',
  year: 2011,
  version: '2.0 TFSI Coupé S tronic',
  km: 98000,
  transmission: 'Automática',
  fuel: 'Bencina',
  price: 12990000,
  monthly: 289000,
  badge: 'seminuevo',
  image: P + 'audi-tt-2011-frontal-estudio.png',
  color: 'Blanco Ibis',
  owners: 2,
  engine: '2.0 TFSI 200 hp',
  traction: 'Delantera',
  doors: 3,
  gallery: [{
    src: P + 'audi-tt-2011-frontal-estudio.png',
    label: 'Frontal'
  }, {
    src: P + 'audi-tt-2011-34-trasero-estudio.png',
    label: '3/4 trasero'
  }, {
    src: P + 'audi-tt-2011-trasera-estudio.png',
    label: 'Trasera'
  }, {
    src: P + 'audi-tt-2011-frontal-estudio-b.png',
    label: 'Frontal'
  }, {
    src: P + 'audi-tt-2011-frontal-recorte.png',
    label: 'Recorte'
  }]
}, {
  id: 'toyota-rav4-2020',
  brand: 'Toyota',
  model: 'RAV4',
  year: 2020,
  version: '2.0 LE 4x2',
  km: 54000,
  transmission: 'Automática',
  fuel: 'Bencina',
  price: 19490000,
  monthly: 412000,
  badge: 'nuevo'
}, {
  id: 'mazda-3-2019',
  brand: 'Mazda',
  model: '3 Sport',
  year: 2019,
  version: '2.0 V',
  km: 61000,
  transmission: 'Manual',
  fuel: 'Bencina',
  price: 11490000,
  oldPrice: 12190000,
  monthly: 256000,
  badge: 'rebajado'
}, {
  id: 'kia-sportage-2018',
  brand: 'Kia',
  model: 'Sportage',
  year: 2018,
  version: '2.0 EX 4x2',
  km: 82000,
  transmission: 'Automática',
  fuel: 'Diésel',
  price: 13790000,
  monthly: 301000,
  badge: 'seminuevo'
}, {
  id: 'hyundai-tucson-2021',
  brand: 'Hyundai',
  model: 'Tucson',
  year: 2021,
  version: '2.0 GL',
  km: 39000,
  transmission: 'Automática',
  fuel: 'Bencina',
  price: 18990000,
  monthly: 398000
}, {
  id: 'suzuki-swift-2022',
  brand: 'Suzuki',
  model: 'Swift',
  year: 2022,
  version: '1.2 GLX',
  km: 21000,
  transmission: 'Manual',
  fuel: 'Híbrido',
  price: 10290000,
  monthly: 229000,
  badge: 'nuevo'
}];
const TESTIMONIALS = [{
  quote: 'Me mostraron el informe de inspección antes de firmar y la transferencia fue 100% online. Cero sorpresas con el precio.',
  name: 'Carolina Muñoz',
  comuna: 'Quilpué',
  car: 'Compró un Mazda 3 2019'
}, {
  quote: 'Tasaron mi auto en el día y el pago llegó cuando dijeron. Muy claros con los números desde el primer WhatsApp.',
  name: 'Rodrigo Pérez',
  comuna: 'Concón',
  car: 'Vendió un Kia Rio 2017'
}, {
  quote: 'Fui a ver el auto a Viña con hora agendada, estaba tal cual las fotos. El crédito lo resolvieron en dos días.',
  name: 'Javiera Soto',
  comuna: 'Valparaíso',
  car: 'Compró un Toyota Yaris 2020'
}];
Object.assign(window, {
  VEHICLES,
  TESTIMONIALS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Checkered = __ds_scope.Checkered;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.EBZ_DEFAULT_PHONE = __ds_scope.EBZ_DEFAULT_PHONE;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.WhatsAppFab = __ds_scope.WhatsAppFab;

__ds_ns.FilterPanel = __ds_scope.FilterPanel;

__ds_ns.QuickSearch = __ds_scope.QuickSearch;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RangeSlider = __ds_scope.RangeSlider;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.SellCarForm = __ds_scope.SellCarForm;

__ds_ns.ServiceStrip = __ds_scope.ServiceStrip;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.TrustBlock = __ds_scope.TrustBlock;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.CreditSimulator = __ds_scope.CreditSimulator;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.VehicleCard = __ds_scope.VehicleCard;

__ds_ns.VehicleGallery = __ds_scope.VehicleGallery;

})();
