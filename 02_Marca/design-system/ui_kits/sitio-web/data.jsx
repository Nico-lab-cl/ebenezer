const P = '../../assets/photos/';
const VEHICLES = [
  { id: 'audi-tt-2011', brand: 'Audi', model: 'TT', year: 2011, version: '2.0 TFSI Coupé S tronic', km: 98000, transmission: 'Automática', fuel: 'Bencina', price: 12990000, monthly: 289000, badge: 'seminuevo', image: P + 'audi-tt-2011-frontal-estudio.png', color: 'Blanco Ibis', owners: 2, engine: '2.0 TFSI 200 hp', traction: 'Delantera', doors: 3,
    gallery: [{ src: P + 'audi-tt-2011-frontal-estudio.png', label: 'Frontal' }, { src: P + 'audi-tt-2011-34-trasero-estudio.png', label: '3/4 trasero' }, { src: P + 'audi-tt-2011-trasera-estudio.png', label: 'Trasera' }, { src: P + 'audi-tt-2011-frontal-estudio-b.png', label: 'Frontal' }, { src: P + 'audi-tt-2011-frontal-recorte.png', label: 'Recorte' }] },
  { id: 'toyota-rav4-2020', brand: 'Toyota', model: 'RAV4', year: 2020, version: '2.0 LE 4x2', km: 54000, transmission: 'Automática', fuel: 'Bencina', price: 19490000, monthly: 412000, badge: 'nuevo' },
  { id: 'mazda-3-2019', brand: 'Mazda', model: '3 Sport', year: 2019, version: '2.0 V', km: 61000, transmission: 'Manual', fuel: 'Bencina', price: 11490000, oldPrice: 12190000, monthly: 256000, badge: 'rebajado' },
  { id: 'kia-sportage-2018', brand: 'Kia', model: 'Sportage', year: 2018, version: '2.0 EX 4x2', km: 82000, transmission: 'Automática', fuel: 'Diésel', price: 13790000, monthly: 301000, badge: 'seminuevo' },
  { id: 'hyundai-tucson-2021', brand: 'Hyundai', model: 'Tucson', year: 2021, version: '2.0 GL', km: 39000, transmission: 'Automática', fuel: 'Bencina', price: 18990000, monthly: 398000 },
  { id: 'suzuki-swift-2022', brand: 'Suzuki', model: 'Swift', year: 2022, version: '1.2 GLX', km: 21000, transmission: 'Manual', fuel: 'Híbrido', price: 10290000, monthly: 229000, badge: 'nuevo' },
];
const TESTIMONIALS = [
  { quote: 'Me mostraron el informe de inspección antes de firmar y la transferencia fue 100% online. Cero sorpresas con el precio.', name: 'Carolina Muñoz', comuna: 'Quilpué', car: 'Compró un Mazda 3 2019' },
  { quote: 'Tasaron mi auto en el día y el pago llegó cuando dijeron. Muy claros con los números desde el primer WhatsApp.', name: 'Rodrigo Pérez', comuna: 'Concón', car: 'Vendió un Kia Rio 2017' },
  { quote: 'Fui a ver el auto a Viña con hora agendada, estaba tal cual las fotos. El crédito lo resolvieron en dos días.', name: 'Javiera Soto', comuna: 'Valparaíso', car: 'Compró un Toyota Yaris 2020' },
];
Object.assign(window, { VEHICLES, TESTIMONIALS });
