/* ============================= ICONOS PROPIOS (SVG embebidos, sin CDN) ============================= */
const ICONS = {
'plus':'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
'x':'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
'check':'<polyline points="4,12 9,17 20,6"/>',
'check-circle':'<circle cx="12" cy="12" r="9"/><polyline points="8,12 11,15 16,9"/>',
'x-circle':'<circle cx="12" cy="12" r="9"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>',
'alert-triangle':'<path d="M12 3L22 20H2Z"/><line x1="12" y1="9" x2="12" y2="14"/><line x1="12" y1="17" x2="12" y2="17.01"/>',
'search':'<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
'menu':'<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
'moon-star':'<path d="M20 12.5A8 8 0 1 1 11.5 4a6.5 6.5 0 0 0 8.5 8.5Z"/>',
'sun':'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="6.3" y2="6.3"/><line x1="17.7" y1="17.7" x2="19.1" y2="19.1"/><line x1="4.9" y1="19.1" x2="6.3" y2="17.7"/><line x1="17.7" y1="6.3" x2="19.1" y2="4.9"/>',
'sparkles':'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/>',
'layout-dashboard':'<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
'users':'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14a5 5 0 0 1 5.5 5"/>',
'file-check-2':'<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8Z"/><path d="M14 3v5h5"/><polyline points="9,15 11,17 15,12"/>',
'scan-line':'<path d="M4 7V5a1 1 0 0 1 1-1h2"/><path d="M17 4h2a1 1 0 0 1 1 1v2"/><path d="M20 17v2a1 1 0 0 1-1 1h-2"/><path d="M7 20H5a1 1 0 0 1-1-1v-2"/><line x1="4" y1="12" x2="20" y2="12"/>',
'calendar-days':'<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="7" y1="14" x2="7" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="17" y1="14" x2="17" y2="14.01"/>',
'calendar-plus':'<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="12" y1="13" x2="12" y2="18"/><line x1="9.5" y1="15.5" x2="14.5" y2="15.5"/>',
'calendar':'<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
'calendar-clock':'<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><circle cx="16" cy="16" r="4"/><line x1="16" y1="14" x2="16" y2="16"/><line x1="16" y1="16" x2="17.3" y2="17"/>',
'stethoscope':'<path d="M6 4v6a4 4 0 0 0 8 0V4"/><line x1="6" y1="4" x2="4.5" y2="4"/><line x1="14" y1="4" x2="15.5" y2="4"/><path d="M10 14v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="14.5" r="1.5"/>',
'receipt':'<path d="M6 3h12v18l-2-1.3L14 21l-2-1.3L10 21l-2-1.3L6 21Z"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/>',
'wallet':'<path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3"/><path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-5a2 2 0 0 0 0 4h6"/>',
'shield-check':'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z"/><polyline points="9,12 11,14 15,10"/>',
'shield':'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z"/>',
'package':'<path d="M21 8l-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="21"/>',
'package-x':'<path d="M21 8l-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><line x1="9.5" y1="16" x2="14.5" y2="20"/><line x1="14.5" y1="16" x2="9.5" y2="20"/>',
'workflow':'<rect x="3" y="3" width="7" height="6" rx="1"/><rect x="14" y="15" width="7" height="6" rx="1"/><path d="M6 9v3a3 3 0 0 0 3 3h2"/><path d="M17 15v-3"/>',
'plug-zap':'<path d="M9 3v4"/><path d="M15 3v4"/><path d="M6 7h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6Z"/><path d="M12 16v3l-2 3"/>',
'bar-chart-3':'<line x1="4" y1="20" x2="4" y2="10"/><line x1="10" y1="20" x2="10" y2="4"/><line x1="16" y1="20" x2="16" y2="14"/><line x1="4" y1="20" x2="20" y2="20"/>',
'settings':'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
'inbox':'<path d="M3 12h5l2 3h4l2-3h5"/><path d="M3 12l2-8h14l2 8"/><path d="M3 12v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6"/>',
'alarm-clock':'<circle cx="12" cy="13" r="7"/><line x1="12" y1="13" x2="12" y2="10"/><line x1="12" y1="13" x2="14" y2="14.5"/><line x1="5" y1="4" x2="3" y2="6"/><line x1="19" y1="4" x2="21" y2="6"/>',
'check-check':'<polyline points="2,12 6,16 13,7"/><polyline points="9,16 20,5"/>',
'file-clock':'<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8Z"/><path d="M14 3v5h5"/><circle cx="11.5" cy="15.5" r="3"/><line x1="11.5" y1="13.7" x2="11.5" y2="15.5"/><line x1="11.5" y1="15.5" x2="12.7" y2="16.2"/>',
'trending-up':'<polyline points="3,17 9,11 13,15 21,7"/><polyline points="15,7 21,7 21,13"/>',
'file-x':'<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8Z"/><path d="M14 3v5h5"/><line x1="9.5" y1="13" x2="14.5" y2="18"/><line x1="14.5" y1="13" x2="9.5" y2="18"/>',
'message-circle':'<path d="M4 12a8 8 0 1 1 3 6.2L4 20l1.3-3.6A8 8 0 0 1 4 12Z"/>',
'mail':'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
'hard-drive':'<line x1="3" y1="12" x2="21" y2="12"/><rect x="3" y="12" width="18" height="7" rx="1"/><line x1="7" y1="16" x2="7.01" y2="16"/><path d="M6 12l2-7h8l2 7"/>',
'sheet':'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>',
'calculator':'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="7" y1="11" x2="7" y2="11.01"/><line x1="12" y1="11" x2="12" y2="11.01"/><line x1="17" y1="11" x2="17" y2="11.01"/><line x1="7" y1="15" x2="7" y2="15.01"/><line x1="12" y1="15" x2="12" y2="15.01"/><line x1="17" y1="15" x2="17" y2="18"/><line x1="7" y1="18" x2="7" y2="18.01"/><line x1="12" y1="18" x2="12" y2="18.01"/>',
'pen-tool':'<path d="M12 19l7-7 3 3-7 7-3-3Z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18"/><line x1="2" y1="2" x2="9" y2="9"/>',
'credit-card':'<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
'arrow-right':'<line x1="4" y1="12" x2="20" y2="12"/><polyline points="14,6 20,12 14,18"/>',
'badge-check':'<path d="M12 2l2.4 1.4 2.7-.4 1.1 2.5 2.5 1.1-.4 2.7L22 12l-1.4 2.4.4 2.7-2.5 1.1-1.1 2.5-2.7-.4L12 22l-2.4-1.4-2.7.4-1.1-2.5-2.5-1.1.4-2.7L2 12l1.4-2.4-.4-2.7 2.5-1.1 1.1-2.5 2.7.4Z"/><polyline points="8.5,12 11,14.5 15.5,9.5"/>',
'copy-x':'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/><line x1="12.5" y1="12.5" x2="17.5" y2="17.5"/><line x1="17.5" y1="12.5" x2="12.5" y2="17.5"/>',
'copy-warning':'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/><line x1="15" y1="13" x2="15" y2="16"/><line x1="15" y1="18" x2="15" y2="18.01"/>',
'download':'<path d="M12 3v12"/><polyline points="7,10 12,15 17,10"/><path d="M5 19h14"/>',
'eye':'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
'file-spreadsheet':'<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8Z"/><path d="M14 3v5h5"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><line x1="11" y1="13" x2="11" y2="20"/>',
'file-text':'<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8Z"/><path d="M14 3v5h5"/><line x1="8" y1="13" x2="15" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>',
'image':'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.7"/><path d="M21 15l-5-5-11 11"/>',
'image-plus':'<rect x="3" y="3" width="14" height="14" rx="2"/><circle cx="8" cy="8" r="1.5"/><path d="M17 13l-4-4-8 8"/><line x1="19" y1="3" x2="19" y2="9"/><line x1="16" y1="6" x2="22" y2="6"/>',
'layers':'<path d="M12 2l9 5-9 5-9-5 9-5Z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/>',
'loader-2':'<path d="M12 3a9 9 0 1 0 9 9"/>',
'pencil':'<path d="M4 20l1-4L16 5l3 3L8 19l-4 1Z"/><line x1="14" y1="7" x2="17" y2="10"/>',
'refresh-cw':'<path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><polyline points="21,3 21,8 16,8"/><polyline points="3,21 3,16 8,16"/>',
'save':'<path d="M5 3h11l3 3v15H5Z"/><path d="M8 3v6h8V3"/><rect x="7" y="13" width="10" height="7"/>',
'signature':'<path d="M3 17c2-1 3-3 5-3s2 2 4 2 2-3 4-3 2 2 3 1"/><line x1="3" y1="20" x2="21" y2="20"/>',
'tooth':'<path d="M12 3c2.5 0 5 1.5 5 5 0 2-.5 3-1 5s-1 6-2 6-1.5-4-2-4-1.5 4-2 4-1.5-4-2-6-1-3-1-5c0-3.5 2.5-5 5-5Z"/>',
'trash-2':'<line x1="4" y1="7" x2="20" y2="7"/><path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
'user-plus':'<circle cx="9" cy="8" r="4"/><path d="M2 20c0-4 3-7 7-7s7 3 7 7"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="16" y1="11" x2="22" y2="11"/>',
};
function icons(){
  document.querySelectorAll('[data-lucide]').forEach(el=>{
    const name = el.getAttribute('data-lucide');
    const def = ICONS[name];
    if(!def) return;
    const cls = el.getAttribute('class');
    const style = el.getAttribute('style');
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns,'svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke','currentColor');
    svg.setAttribute('stroke-width','2');
    svg.setAttribute('stroke-linecap','round');
    svg.setAttribute('stroke-linejoin','round');
    svg.setAttribute('style', style || 'width:20px;height:20px');
    if(cls) svg.setAttribute('class', cls);
    if(!style || (style.indexOf('width')===-1 && style.indexOf('height')===-1)){
      svg.style.width='20px'; svg.style.height='20px';
    }
    svg.style.flexShrink='0';
    svg.innerHTML = def;
    el.replaceWith(svg);
  });
}

/* ============================= DATA LAYER ============================= */
const LS_KEY = 'odontoflow360_v1';

const insurers = ['ARS Humano','ARS Universal','ARS Palic Salud','ARS SeNaSa','ARS MAPFRE Salud','Plan Particular'];
const doctors = ['Dra. Camila Reyes','Dr. Julián Ortega','Dra. Marisol Ferreira','Dr. Andrés Solano'];
const specialties = ['Odontología General','Ortodoncia','Endodoncia','Cirugía Oral','Odontopediatría'];
const procedures = ['Obturación con resina clase I','Profilaxis dental','Endodoncia unirradicular','Exodoncia simple','Corona de porcelana','Blanqueamiento dental','Radiografía periapical','Consulta de valoración'];
const teeth = ['11','12','18','21','24','36','38','46','47','FULL'];
const sedes = ['Sede El Millón','Sede Ens. Ozama'];
const patientNames = ['Madeline Sánchez Peña','Rafael Núñez Objío','Carolina Beltrán Ruiz','Elvin Manuel Cruz','Yolanda Familia Paulino','Héctor Andrés Vargas','Priscila Reynoso Tejada','Juan Carlos Mateo','Ana Belkis Cabrera','Miguel Ángel Duarte','Rosa Iris Peguero','Franklin De la Cruz','Estefanía Made Grullón','Wilkin Ovalles Santana','Cindy Marlin Abreu','Pedro Julio Almonte','Yudelka Contreras','Bienvenido Reyes','Katiuska Payano','Luis Alberto Feliz'];

function genDoctorProfiles(){
  return doctors.map(nombre=>({
    nombre, especialidad: rand(specialties), sede: rand(sedes),
    comisionPct: randInt(28,38)
  }));
}
function genTarifario(){
  const list=[];
  insurers.filter(x=>x!=='Plan Particular').forEach(aseg=>{
    const manual = aseg==='ARS SeNaSa';
    procedures.forEach(proc=>{
      const tarifa = rand([250,300,350,500,650,800,1200]);
      const coberturaPct = manual? null : rand([40,50,60,70]);
      list.push({
        id: uid('TAR'), aseguradora:aseg, procedimiento:proc, tarifa,
        coberturaPct, manual
      });
    });
  });
  return list;
}

function uid(p){return p+'-'+Math.random().toString(36).slice(2,8)}
function todayISO(off=0){const d=new Date();d.setDate(d.getDate()+off);return d.toISOString().slice(0,10)}
function money(n){return 'US$ '+Number(n).toLocaleString('en-US',{minimumFractionDigits:0})}
function fmtDate(iso){if(!iso)return '—';const [y,m,d]=iso.split('-');return `${d}/${m}/${y}`}
function initials(name){return name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase()}
function rand(arr){return arr[Math.floor(Math.random()*arr.length)]}
function randInt(a,b){return Math.floor(Math.random()*(b-a+1))+a}

const authStates = ['Recibida','Pendiente de validación','Validada','Cita programada','Atendida','Pendiente de documentos','Lista para facturar','Facturada','Pagada','Rechazada','Vencida'];
const authStateColor = {
  'Recibida':'#5a6b85','Pendiente de validación':'#e0a324','Validada':'#2f6fed','Cita programada':'#7c3aed',
  'Atendida':'#0891b2','Pendiente de documentos':'#e5484d','Lista para facturar':'#0f766e','Facturada':'#4f8bff',
  'Pagada':'#17a673','Rechazada':'#e5484d','Vencida':'#94340a'
};

function genPatients(){
  return patientNames.map((n,i)=>({
    id: uid('PAC'),
    nombre:n, documento:`40${randInt(1,3)}-${randInt(1000000,9999999)}-${randInt(0,9)}`,
    telefono:`809-${randInt(200,999)}-${randInt(1000,9999)}`,
    correo: n.toLowerCase().replace(/[^a-z ]/g,'').split(' ')[0]+randInt(1,99)+'@correo.com',
    aseguradora: rand(insurers), afiliacion: 'AF'+randInt(100000,999999),
    edad: randInt(6,72), observaciones: i%5===0? 'Paciente con alergia a la penicilina.':'Sin observaciones relevantes.',
    adjuntos: randInt(0,4)
  }));
}

function genAuthorizations(patients){
  const list=[];
  for(let i=0;i<22;i++){
    const p = rand(patients);
    const total = rand([250,300,350,500,650,800,1200]);
    const cobertura = Math.round(total*0.5);
    const copago = total-cobertura;
    const emision = todayISO(-randInt(1,40));
    const venc = todayISO(randInt(-6,25));
    list.push({
      id: uid('AUT'),
      numero: String(1919172856-i*137+randInt(0,20)),
      pacienteId: p.id, paciente: p.nombre, documento: p.documento,
      aseguradora: p.aseguradora, procedimiento: rand(procedures), pieza: rand(teeth),
      fechaEmision: emision, fechaVencimiento: venc, valorTotal: total, cobertura, copago,
      estado: rand(authStates), duplicada: i===7
    });
  }
  return list;
}

function genAppointments(patients){
  const list=[];
  const estados=['Programada','Confirmada','En espera','En atención','Atendida','Cancelada','No asistió','Reprogramada'];
  for(let i=0;i<12;i++){
    const p=rand(patients);
    list.push({
      id: uid('CITA'), pacienteId:p.id, paciente:p.nombre, odontologo: rand(doctors),
      procedimiento: rand(procedures), sede: rand(sedes),
      fecha: todayISO(randInt(-2,6)), hora: `${String(randInt(8,17)).padStart(2,'0')}:${rand(['00','30'])}`,
      estado: rand(estados)
    });
  }
  return list;
}

function genInvoices(patients){
  const list=[];
  const estados=['Radicada','Pagada','Rechazada','En revisión'];
  for(let i=0;i<9;i++){
    const estado = i===3?'Rechazada':rand(estados);
    const numItems = randInt(2,4);
    const items=[];
    let valorTotal=0, valorCubierto=0, copago=0;
    for(let j=0;j<numItems;j++){
      const p = rand(patients); const val = rand([250,300,350,500,650,800]);
      const cob = Math.round(val*0.5); const cop = val-cob;
      items.push({paciente:p.nombre, procedimiento:rand(procedures), medico:rand(doctors), valor:val, cobertura:cob, copago:cop});
      valorTotal+=val; valorCubierto+=cob; copago+=cop;
    }
    list.push({
      id: uid('FAC'), numero:'FE-'+randInt(10000,99999), aseguradora: rand(insurers),
      periodo: rand(['2026-06','2026-07']), valorTotal, valorCubierto, copago, estado, items,
      radicacion: todayISO(-randInt(2,30)), pagoEstimado: todayISO(randInt(2,30)),
      motivoRechazo: estado==='Rechazada'? 'Documento soporte ilegible':''
    });
  }
  return list;
}

function genInventory(){
  return [
    {id:uid('INV'),nombre:'Resina fotocurada A2',stock:34,minimo:15,unidad:'unidad',costo:6.2,proveedor:'Dental Import SRL',vence:todayISO(120)},
    {id:uid('INV'),nombre:'Anestesia lidocaína 2%',stock:8,minimo:20,unidad:'cartucho',costo:1.1,proveedor:'MedSupply RD',vence:todayISO(45)},
    {id:uid('INV'),nombre:'Guantes de nitrilo (caja)',stock:60,minimo:25,unidad:'caja',costo:9.5,proveedor:'BioProtect',vence:todayISO(400)},
    {id:uid('INV'),nombre:'Ácido grabador 37%',stock:5,minimo:10,unidad:'jeringa',costo:3.4,proveedor:'Dental Import SRL',vence:todayISO(20)},
    {id:uid('INV'),nombre:'Fresas diamantadas kit',stock:22,minimo:10,unidad:'kit',costo:18,proveedor:'OrthoTools',vence:todayISO(500)},
    {id:uid('INV'),nombre:'Amalgama dental',stock:3,minimo:8,unidad:'cápsula',costo:2.8,proveedor:'MedSupply RD',vence:todayISO(10)},
    {id:uid('INV'),nombre:'Hilo retractor gingival',stock:15,minimo:10,unidad:'rollo',costo:4.5,proveedor:'BioProtect',vence:todayISO(200)},
  ];
}

function genInsurers(){
  return insurers.filter(x=>x!=='Plan Particular').map(n=>({
    id:uid('ASG'), nombre:n, contrato:'CT-'+randInt(2023,2026)+'-'+randInt(100,999),
    planes: randInt(2,5), cobertura:'50%', copago:'50%', vigencia: '31/12/2026',
    tiempoPago: randInt(20,45)+' días', contacto: 'contacto@'+n.toLowerCase().replace(/\s/g,'')+'.com.do'
  }));
}

const automations = [
  {id:'a1', trigger:'Autorización registrada', condition:'Número duplicado detectado', action:'Bloquear guardado y alertar', activo:true},
  {id:'a2', trigger:'Autorización próxima a vencer', condition:'Faltan ≤ 5 días', action:'Enviar alerta al equipo', activo:true},
  {id:'a3', trigger:'Cita programada', condition:'Siempre', action:'Enviar confirmación por WhatsApp', activo:true},
  {id:'a4', trigger:'24h antes de la cita', condition:'Cita en estado Confirmada', action:'Enviar recordatorio WhatsApp', activo:true},
  {id:'a5', trigger:'Paciente atendido', condition:'Siempre', action:'Generar registro de facturación', activo:true},
  {id:'a6', trigger:'Procedimiento realizado', condition:'Siempre', action:'Descontar inventario utilizado', activo:true},
  {id:'a7', trigger:'Atención finalizada', condition:'Después de 2 horas', action:'Enviar encuesta de satisfacción', activo:false},
  {id:'a8', trigger:'Factura rechazada', condition:'Siempre', action:'Notificar al administrador', activo:true},
  {id:'a9', trigger:'Copago pendiente', condition:'Después de 24h', action:'Enviar recordatorio de pago', activo:false},
  {id:'a10', trigger:'Factura pagada', condition:'Siempre', action:'Actualizar cartera y cerrar ciclo', activo:true},
];

const integrationsDefault = [
  {id:'wa', nombre:'WhatsApp Business API', estado:'Conectada', icon:'message-circle'},
  {id:'mail', nombre:'Correo electrónico', estado:'Conectada', icon:'mail'},
  {id:'gcal', nombre:'Google Calendar', estado:'Conectada', icon:'calendar'},
  {id:'gdrive', nombre:'Google Drive', estado:'Pendiente', icon:'hard-drive'},
  {id:'excel', nombre:'Excel', estado:'Conectada', icon:'sheet'},
  {id:'cont', nombre:'Sistema contable', estado:'Error', icon:'calculator'},
  {id:'aseg', nombre:'API de aseguradoras', estado:'Pendiente', icon:'shield'},
  {id:'bi', nombre:'Power BI', estado:'Pendiente', icon:'bar-chart-3'},
  {id:'firma', nombre:'Firma digital', estado:'Conectada', icon:'pen-tool'},
  {id:'pago', nombre:'Pasarela de pagos', estado:'Conectada', icon:'credit-card'},
];

function loadDB(){
  const raw = localStorage.getItem(LS_KEY);
  if(raw){ try{
    const db = JSON.parse(raw);
    if(!db.integrations) db.integrations = JSON.parse(JSON.stringify(integrationsDefault));
    if(!db.theme) db.theme = 'light';
    if(!db.doctorProfiles) db.doctorProfiles = genDoctorProfiles();
    if(!db.tarifario) db.tarifario = genTarifario();
    if(!db.cargosMedicos) db.cargosMedicos = [];
    return db;
  }catch(e){} }
  const patients = genPatients();
  const db = {
    patients,
    authorizations: genAuthorizations(patients),
    appointments: genAppointments(patients),
    attentions: [],
    invoices: genInvoices(patients),
    payments: [],
    inventory: genInventory(),
    insurers: genInsurers(),
    automations,
    integrations: JSON.parse(JSON.stringify(integrationsDefault)),
    doctorProfiles: genDoctorProfiles(),
    tarifario: genTarifario(),
    cargosMedicos: [],
    theme:'light',
    tourSeen:false
  };
  db.invoices.filter(i=>i.estado==='Rechazada').forEach(inv=>{
    (inv.items||[]).forEach(it=>{
      db.cargosMedicos.push({id:uid('CAR'), medico:it.medico, paciente:it.paciente, factura:inv.numero, valor:it.cobertura, fecha:todayISO(-randInt(1,10)), motivo:inv.motivoRechazo||'Rechazo de aseguradora'});
    });
  });
  save(db);
  return db;
}
function save(db){ localStorage.setItem(LS_KEY, JSON.stringify(db)); }
let DB = loadDB();

/* ============================= UI HELPERS ============================= */
function toast(msg,type='ok'){
  const icon = type==='ok'?'check-circle':type==='warn'?'alert-triangle':'x-circle';
  const color = type==='ok'?'#17a673':type==='warn'?'#e0a324':'#e5484d';
  const el = document.createElement('div');
  el.className='toast-item';
  el.innerHTML = `<i data-lucide="${icon}" style="color:${color};width:17px;height:17px;flex-shrink:0"></i><span>${msg}</span>`;
  document.getElementById('toastRoot').appendChild(el);
  icons();
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='.3s'; setTimeout(()=>el.remove(),300); }, 3200);
}
function closeModal(){ document.getElementById('modalRoot').innerHTML=''; }
function openModal(html){
  document.getElementById('modalRoot').innerHTML = `<div class="modal-bg" onclick="if(event.target===this)closeModal()"><div class="modal fadein">${html}</div></div>`;
  icons();
}
function pill(estado){
  const c = authStateColor[estado] || '#5a6b85';
  return `<span class="pill" style="background:${c}22;color:${c}">${estado}</span>`;
}
function daysLeft(iso){
  const d1=new Date(iso), d2=new Date(todayISO());
  return Math.round((d1-d2)/86400000);
}

/* ============================= NAV / SHELL ============================= */
const NAV = [
  {id:'inicio', label:'Inicio', icon:'layout-dashboard'},
  {id:'pacientes', label:'Pacientes', icon:'users'},
  {id:'autorizaciones', label:'Autorizaciones', icon:'file-check-2'},
  {id:'digitalizar', label:'Digitalizar autorización', icon:'scan-line'},
  {id:'agenda', label:'Agenda', icon:'calendar-days'},
  {id:'atenciones', label:'Atenciones', icon:'stethoscope'},
  {id:'facturacion', label:'Facturación', icon:'receipt'},
  {id:'copagos', label:'Copagos y caja', icon:'wallet'},
  {id:'aseguradoras', label:'Aseguradoras', icon:'shield-check'},
  {id:'tarifario', label:'Tarifario x aseguradora', icon:'calculator'},
  {id:'inventario', label:'Inventario', icon:'package'},
  {id:'automatizaciones', label:'Automatizaciones', icon:'workflow'},
  {id:'integraciones', label:'Integraciones', icon:'plug-zap'},
  {id:'comisiones', label:'Comisiones médicas', icon:'trending-up'},
  {id:'reportes', label:'Reportes', icon:'bar-chart-3'},
  {id:'panel-admin', label:'Panel administrador', icon:'layers'},
  {id:'configuracion', label:'Configuración', icon:'settings'},
];

let currentView = 'inicio';

function renderShell(){
  const app = document.getElementById('app');
  app.innerHTML = `
  <div id="sidebarOverlay" onclick="toggleSidebar(false)"></div>
  <aside id="sidebar" class="brand-grad w-[260px] flex-shrink-0 flex flex-col h-full">
    <div class="px-5 pt-6 pb-5 flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
        <i data-lucide="tooth" class="text-white" style="width:20px;height:20px"></i>
      </div>
      <div>
        <div class="text-white font-extrabold text-[15px] leading-none">OdontoFlow <span class="text-blue-300">360</span></div>
        <div class="text-[11px] text-blue-200/70 mt-1">Gestión odontológica inteligente</div>
      </div>
      <button class="ml-auto md:hidden text-white/70" onclick="toggleSidebar(false)"><i data-lucide="x" style="width:20px;height:20px"></i></button>
    </div>
    <nav class="flex-1 overflow-y-auto px-3 space-y-1 pb-3">
      ${NAV.map(n=>`<div class="navlink ${n.id===currentView?'active':''}" onclick="navigate('${n.id}')"><i data-lucide="${n.icon}"></i><span>${n.label}</span></div>`).join('')}
    </nav>
    <div class="px-4 py-4 border-t border-white/10">
      <button class="btn btn-primary w-full justify-center" onclick="startTour()"><i data-lucide="sparkles" style="width:15px;height:15px"></i>Iniciar recorrido guiado</button>
      <div class="mt-3 text-[11px] text-blue-200/60 px-1">v1.0 · Demo comercial · Datos simulados</div>
    </div>
  </aside>

  <div class="flex-1 flex flex-col min-w-0 h-full">
    <header class="surface border-b border-line flex items-center gap-3 px-4 md:px-6 h-16 flex-shrink-0">
      <button class="md:hidden" onclick="toggleSidebar(true)"><i data-lucide="menu" style="width:22px;height:22px"></i></button>
      <div>
        <div class="font-bold text-[15px]" id="headerTitle"></div>
        <div class="text-[11.5px] text-muted" id="headerSub"></div>
      </div>
      <div class="ml-auto flex items-center gap-2">
        <div class="hidden md:flex items-center gap-2 surface-2 border border-line rounded-lg px-3 py-1.5 text-xs text-muted"><i data-lucide="search" style="width:14px;height:14px"></i>Búsqueda rápida…</div>
        <button class="btn btn-ghost !px-2.5" onclick="toggleTheme()" title="Modo claro/oscuro"><i data-lucide="moon-star" id="themeIcon" style="width:16px;height:16px"></i></button>
        <div class="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">LP</div>
      </div>
    </header>
    <main class="flex-1 overflow-y-auto p-4 md:p-7"><div id="view"></div></main>
  </div>`;
  icons();
  applyTheme();
}

function toggleSidebar(open){
  document.getElementById('sidebar').classList.toggle('open',open);
  document.getElementById('sidebarOverlay').classList.toggle('open',open);
}
function toggleTheme(){
  DB.theme = DB.theme==='dark'?'light':'dark'; save(DB); applyTheme();
}
function applyTheme(){
  document.body.classList.toggle('dark', DB.theme==='dark');
  const icon=document.getElementById('themeIcon');
  if(icon) icon.setAttribute('data-lucide', DB.theme==='dark'?'sun':'moon-star');
  icons();
}

function navigate(id){
  currentView = id;
  toggleSidebar(false);
  renderShell();
  RENDERERS[id]();
  window.scrollTo(0,0);
}

/* ============================= VIEW: INICIO ============================= */
function setHeader(t,s){ document.getElementById('headerTitle').textContent=t; document.getElementById('headerSub').textContent=s; }

function view_inicio(){
  setHeader('Panel ejecutivo','Resumen operativo en tiempo real · '+fmtDate(todayISO()));
  const A = DB.authorizations;
  const kpis = [
    {label:'Autorizaciones recibidas', val:A.length, icon:'inbox', color:'#2f6fed'},
    {label:'Próximas a vencer (≤5 días)', val:A.filter(a=>daysLeft(a.fechaVencimiento)<=5 && daysLeft(a.fechaVencimiento)>=0).length, icon:'alarm-clock', color:'#e0a324'},
    {label:'Pacientes agendados hoy', val:DB.appointments.filter(c=>c.fecha===todayISO()).length, icon:'calendar-clock', color:'#7c3aed'},
    {label:'Pacientes atendidos', val:A.filter(a=>a.estado==='Atendida').length + DB.attentions.length, icon:'check-check', color:'#17a673'},
    {label:'Servicios pendientes por facturar', val:A.filter(a=>a.estado==='Lista para facturar').length, icon:'file-clock', color:'#0891b2'},
    {label:'Facturado este mes', val:money(DB.invoices.reduce((s,i)=>s+i.valorTotal,0)), icon:'trending-up', color:'#2f6fed'},
    {label:'Copagos recaudados', val:money(DB.payments.reduce((s,p)=>s+p.valor,0) || 3450), icon:'wallet', color:'#17a673'},
    {label:'Facturas rechazadas', val:DB.invoices.filter(i=>i.estado==='Rechazada').length, icon:'file-x', color:'#e5484d'},
  ];
  const stateCounts = {}; authStates.forEach(s=>stateCounts[s]=0); A.forEach(a=>stateCounts[a.estado]++);
  const byInsurer = {}; insurers.forEach(i=>byInsurer[i]=0); DB.invoices.forEach(i=>byInsurer[i.aseguradora]=(byInsurer[i.aseguradora]||0)+i.valorTotal);
  const prodDocs = {}; doctors.forEach(d=>prodDocs[d]=randInt(8,26));

  document.getElementById('view').innerHTML = `
  <div class="brand-grad rounded-2xl p-4 md:p-5 mb-6 flex flex-wrap items-center gap-3">
    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><i data-lucide="sparkles" class="text-white" style="width:18px;height:18px"></i></div>
    <div class="flex-1 min-w-[200px]">
      <div class="text-white font-bold text-[13.5px]">¿Primera vez aquí?</div>
      <div class="text-blue-200/80 text-[11.5px]">El recorrido guiado explica, paso a paso, cómo funciona todo el ciclo: de la foto de la orden al cobro y la facturación.</div>
    </div>
    <button class="btn btn-primary flex-shrink-0" onclick="startTour()"><i data-lucide="sparkles" style="width:14px;height:14px"></i>Ver demo guiada</button>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6" id="kpiGrid">
    ${kpis.map(k=>`
    <div class="surface card p-4">
      <div class="flex items-center justify-between mb-2">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:${k.color}1a"><i data-lucide="${k.icon}" style="width:15px;height:15px;color:${k.color}"></i></div>
      </div>
      <div class="text-xl md:text-2xl font-extrabold">${k.val}</div>
      <div class="text-[11.5px] text-muted mt-0.5 leading-tight">${k.label}</div>
    </div>`).join('')}
  </div>

  <div class="grid lg:grid-cols-3 gap-4 mb-6">
    <div class="surface card p-5 lg:col-span-2">
      <div class="font-bold text-sm mb-1">Autorizaciones por estado</div>
      <div class="text-[11.5px] text-muted mb-3">Distribución actual del flujo operativo</div>
      <canvas id="chartEstados" height="110"></canvas>
    </div>
    <div class="surface card p-5">
      <div class="font-bold text-sm mb-1">Ingresos por aseguradora</div>
      <div class="text-[11.5px] text-muted mb-3">Facturación acumulada</div>
      <canvas id="chartAseg" height="150"></canvas>
    </div>
  </div>

  <div class="grid lg:grid-cols-3 gap-4">
    <div class="surface card p-5 lg:col-span-2">
      <div class="font-bold text-sm mb-3">Productividad por odontólogo (procedimientos/mes)</div>
      <canvas id="chartProd" height="110"></canvas>
    </div>
    <div class="surface card p-5">
      <div class="font-bold text-sm mb-3">Alertas operativas recientes</div>
      <div class="space-y-2.5 text-[12.5px]">
        <div class="flex gap-2"><i data-lucide="alert-triangle" style="width:15px;height:15px;color:#e0a324;flex-shrink:0;margin-top:1px"></i><span>3 autorizaciones vencen en menos de 5 días.</span></div>
        <div class="flex gap-2"><i data-lucide="package-x" style="width:15px;height:15px;color:#e5484d;flex-shrink:0;margin-top:1px"></i><span>Amalgama dental por debajo del stock mínimo.</span></div>
        <div class="flex gap-2"><i data-lucide="copy-x" style="width:15px;height:15px;color:#e5484d;flex-shrink:0;margin-top:1px"></i><span>Autorización #1919172719 marcada como posible duplicado.</span></div>
        <div class="flex gap-2"><i data-lucide="file-x" style="width:15px;height:15px;color:#e5484d;flex-shrink:0;margin-top:1px"></i><span>Factura FE-${DB.invoices.find(i=>i.estado==='Rechazada')?.numero||'—'} rechazada por documento ilegible.</span></div>
        <div class="flex gap-2"><i data-lucide="check-circle" style="width:15px;height:15px;color:#17a673;flex-shrink:0;margin-top:1px"></i><span>Cierre de caja de ayer conciliado sin diferencias.</span></div>
      </div>
    </div>
  </div>`;
  icons();

  new Chart(document.getElementById('chartEstados'),{type:'bar',data:{labels:Object.keys(stateCounts),datasets:[{data:Object.values(stateCounts),backgroundColor:Object.keys(stateCounts).map(s=>authStateColor[s]),borderRadius:6}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{font:{size:9}}},y:{beginAtZero:true,ticks:{stepSize:1}}}}});
  new Chart(document.getElementById('chartAseg'),{type:'doughnut',data:{labels:Object.keys(byInsurer),datasets:[{data:Object.values(byInsurer),backgroundColor:['#2f6fed','#4f8bff','#7fb0ff','#7c3aed','#17a673','#e0a324']}]},options:{plugins:{legend:{position:'bottom',labels:{boxWidth:9,font:{size:10}}}}}});
  new Chart(document.getElementById('chartProd'),{type:'bar',data:{labels:Object.keys(prodDocs),datasets:[{data:Object.values(prodDocs),backgroundColor:'#2f6fed',borderRadius:6}]},options:{indexAxis:'y',plugins:{legend:{display:false}}}});
}

/* ============================= VIEW: PACIENTES ============================= */
function view_pacientes(){
  setHeader('Pacientes', DB.patients.length+' pacientes registrados');
  document.getElementById('view').innerHTML = `
  <div class="flex flex-wrap items-center gap-2 mb-4">
    <input id="pacSearch" placeholder="Buscar por nombre o documento…" class="max-w-xs" oninput="filterPacientes()">
    <button class="btn btn-primary ml-auto" onclick="editPatient(null)"><i data-lucide="user-plus" style="width:15px;height:15px"></i>Nuevo paciente</button>
  </div>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3" id="pacGrid"></div>`;
  icons();
  filterPacientes();
}
function filterPacientes(){
  const q=(document.getElementById('pacSearch')?.value||'').toLowerCase();
  const list = DB.patients.filter(p=>p.nombre.toLowerCase().includes(q)||p.documento.includes(q));
  document.getElementById('pacGrid').innerHTML = list.map(p=>`
    <div class="surface card p-4 cursor-pointer hover:shadow-md transition" onclick="openPatient('${p.id}')">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 rounded-full bg-blue-500/15 text-blue-500 flex items-center justify-center font-bold text-xs">${initials(p.nombre)}</div>
        <div class="min-w-0">
          <div class="font-semibold text-[13.5px] truncate">${p.nombre}</div>
          <div class="text-[11.5px] text-muted">${p.documento}</div>
        </div>
      </div>
      <div class="flex items-center justify-between text-[11.5px] text-muted mt-3">
        <span>${p.aseguradora}</span>
        <span>${p.edad} años</span>
      </div>
    </div>`).join('') || '<div class="text-sm text-muted col-span-full text-center py-10">Sin resultados.</div>';
  icons();
}
function openPatient(id){
  const p = DB.patients.find(x=>x.id===id);
  const auths = DB.authorizations.filter(a=>a.pacienteId===id);
  const citas = DB.appointments.filter(c=>c.pacienteId===id);
  openModal(`
  <div class="p-5 border-b border-line flex items-center gap-3">
    <div class="w-12 h-12 rounded-full bg-blue-500/15 text-blue-500 flex items-center justify-center font-bold">${initials(p.nombre)}</div>
    <div><div class="font-bold">${p.nombre}</div><div class="text-[11.5px] text-muted">${p.documento} · ${p.edad} años</div></div>
    <button class="ml-auto btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button>
  </div>
  <div class="p-5 space-y-4 text-[13px]">
    <div class="grid grid-cols-2 gap-3">
      <div><div class="text-[11px] text-muted">Teléfono</div><div class="font-medium">${p.telefono}</div></div>
      <div><div class="text-[11px] text-muted">Correo</div><div class="font-medium truncate">${p.correo}</div></div>
      <div><div class="text-[11px] text-muted">Aseguradora</div><div class="font-medium">${p.aseguradora}</div></div>
      <div><div class="text-[11px] text-muted">N.º afiliación</div><div class="font-medium">${p.afiliacion}</div></div>
    </div>
    <div>
      <div class="text-[11px] text-muted mb-1 uppercase font-bold">Historial de autorizaciones (${auths.length})</div>
      <div class="space-y-1.5">${auths.map(a=>`<div class="flex items-center justify-between surface-2 border border-line rounded-lg px-3 py-2"><span>#${a.numero} · ${a.procedimiento}</span>${pill(a.estado)}</div>`).join('') || '<div class="text-muted text-xs">Sin autorizaciones.</div>'}</div>
    </div>
    <div>
      <div class="text-[11px] text-muted mb-1 uppercase font-bold">Historial de citas (${citas.length})</div>
      <div class="space-y-1.5">${citas.map(c=>`<div class="flex items-center justify-between surface-2 border border-line rounded-lg px-3 py-2"><span>${fmtDate(c.fecha)} ${c.hora} · ${c.odontologo}</span><span class="pill" style="background:#2f6fed22;color:#2f6fed">${c.estado}</span></div>`).join('') || '<div class="text-muted text-xs">Sin citas.</div>'}</div>
    </div>
    <div><div class="text-[11px] text-muted mb-1 uppercase font-bold">Observaciones</div><div class="surface-2 border border-line rounded-lg p-3 text-[12.5px]">${p.observaciones}</div></div>
    <div class="flex gap-2 pt-1">
      <button class="btn btn-ghost !px-3" onclick="editPatient('${p.id}')" title="Editar"><i data-lucide="pencil" style="width:15px;height:15px"></i></button>
      <button class="btn btn-primary flex-1 justify-center" onclick="whatsappPatient('${p.id}')"><i data-lucide="message-circle" style="width:15px;height:15px"></i>Contactar por WhatsApp</button>
    </div>
  </div>`);
}
function whatsappPatient(id){
  const p = DB.patients.find(x=>x.id===id);
  let digits = p.telefono.replace(/\D/g,'');
  if(digits.length===10) digits = '1'+digits; // código país República Dominicana
  const msg = encodeURIComponent(`Hola ${p.nombre.split(' ')[0]}, le escribimos de la clínica por su autorización odontológica. ¿Cómo le podemos ayudar?`);
  window.open(`https://wa.me/${digits}?text=${msg}`, '_blank');
}
function editPatient(id){
  const p = id? DB.patients.find(x=>x.id===id) : null;
  openModal(`
  <div class="p-5 border-b border-line flex items-center justify-between">
    <div class="font-bold">${p?'Editar':'Nuevo'} paciente</div>
    <button class="btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button>
  </div>
  <div class="p-5 space-y-3 text-[13px]">
    <div><label class="text-[11px] text-muted">Nombre completo</label><input id="pNombre" value="${p?p.nombre:''}" placeholder="Ej. Madeline Sánchez Peña"></div>
    <div class="grid grid-cols-2 gap-3">
      <div><label class="text-[11px] text-muted">Documento</label><input id="pDoc" value="${p?p.documento:''}" placeholder="402-0000000-0"></div>
      <div><label class="text-[11px] text-muted">Edad</label><input type="number" id="pEdad" value="${p?p.edad:''}"></div>
      <div><label class="text-[11px] text-muted">Teléfono (WhatsApp)</label><input id="pTel" value="${p?p.telefono:''}" placeholder="809-000-0000"></div>
      <div><label class="text-[11px] text-muted">Correo</label><input id="pCorreo" value="${p?p.correo:''}" placeholder="correo@dominio.com"></div>
      <div><label class="text-[11px] text-muted">Aseguradora</label><select id="pAseg">${insurers.map(s=>`<option ${p&&p.aseguradora===s?'selected':''}>${s}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">N.º afiliación</label><input id="pAfil" value="${p?p.afiliacion:'AF'+randInt(100000,999999)}"></div>
    </div>
    <div><label class="text-[11px] text-muted">Observaciones</label><textarea id="pObs" rows="2">${p?p.observaciones:''}</textarea></div>
    <div class="flex gap-2 pt-1">
      <button class="btn btn-primary flex-1 justify-center" onclick="savePatient('${p?p.id:''}')"><i data-lucide="save" style="width:15px;height:15px"></i>Guardar paciente</button>
      ${p?`<button class="btn btn-danger" onclick="deletePatient('${p.id}')"><i data-lucide="trash-2" style="width:15px;height:15px"></i></button>`:''}
    </div>
  </div>`);
}
function savePatient(id){
  const nombre = document.getElementById('pNombre').value.trim();
  if(!nombre){ toast('El nombre del paciente es obligatorio.','warn'); return; }
  const data = {
    nombre, documento:document.getElementById('pDoc').value.trim(),
    edad:Number(document.getElementById('pEdad').value)||0,
    telefono:document.getElementById('pTel').value.trim(),
    correo:document.getElementById('pCorreo').value.trim(),
    aseguradora:document.getElementById('pAseg').value,
    afiliacion:document.getElementById('pAfil').value.trim(),
    observaciones:document.getElementById('pObs').value.trim()
  };
  if(id){
    const existing = DB.patients.find(x=>x.id===id);
    Object.assign(existing, data);
    DB.authorizations.forEach(a=>{ if(a.pacienteId===id){ a.paciente=data.nombre; a.documento=data.documento; } });
    DB.appointments.forEach(c=>{ if(c.pacienteId===id) c.paciente=data.nombre; });
  } else {
    data.id = uid('PAC'); data.adjuntos=0;
    DB.patients.unshift(data);
  }
  save(DB); closeModal(); filterPacientes();
  toast(id? 'Paciente actualizado correctamente.':'Paciente registrado correctamente.','ok');
}
function deletePatient(id){
  DB.patients = DB.patients.filter(x=>x.id!==id);
  save(DB); closeModal(); filterPacientes();
  toast('Paciente eliminado.','bad');
}

/* ============================= VIEW: AUTORIZACIONES ============================= */
let authFilter = {estado:'', aseg:'', q:''};
function view_autorizaciones(){
  setHeader('Autorizaciones', DB.authorizations.length+' registros activos en el flujo');
  document.getElementById('view').innerHTML = `
  <div class="flex flex-wrap gap-2 mb-4">
    <input id="authQ" placeholder="Buscar por paciente o número…" class="max-w-[220px]" oninput="setAuthFilter()">
    <select id="authEstado" class="max-w-[190px]" onchange="setAuthFilter()"><option value="">Todos los estados</option>${authStates.map(s=>`<option value="${s}">${s}</option>`).join('')}</select>
    <select id="authAseg" class="max-w-[190px]" onchange="setAuthFilter()"><option value="">Todas las aseguradoras</option>${insurers.map(s=>`<option value="${s}">${s}</option>`).join('')}</select>
    <button class="btn btn-primary ml-auto" onclick="editAuth(null)"><i data-lucide="plus" style="width:15px;height:15px"></i>Nueva autorización</button>
  </div>
  <div class="surface card overflow-x-auto">
    <table class="responsive-cards" id="authTable"></table>
  </div>`;
  icons();
  renderAuthTable();
}
function setAuthFilter(){
  authFilter.q=(document.getElementById('authQ').value||'').toLowerCase();
  authFilter.estado=document.getElementById('authEstado').value;
  authFilter.aseg=document.getElementById('authAseg').value;
  renderAuthTable();
}
function renderAuthTable(){
  let list = DB.authorizations.filter(a=>
    (!authFilter.estado || a.estado===authFilter.estado) &&
    (!authFilter.aseg || a.aseguradora===authFilter.aseg) &&
    (!authFilter.q || a.paciente.toLowerCase().includes(authFilter.q) || a.numero.includes(authFilter.q)));
  document.getElementById('authTable').innerHTML = `
  <thead><tr><th>N.º autorización</th><th>Paciente</th><th>Aseguradora</th><th>Procedimiento</th><th>Pieza</th><th>Vence</th><th>Valor</th><th>Copago</th><th>Estado</th><th></th></tr></thead>
  <tbody>
  ${list.map(a=>{
    const dl = daysLeft(a.fechaVencimiento);
    const soon = dl<=5 && dl>=0 && !['Facturada','Pagada','Rechazada'].includes(a.estado);
    return `<tr>
      <td data-label="N.º" class="mono">${a.numero} ${a.duplicada?'<span title="Posible duplicado"><i data-lucide=\"copy-warning\" style=\"width:12px;height:12px;color:#e5484d;display:inline\"></i></span>':''}</td>
      <td data-label="Paciente">${a.paciente}</td>
      <td data-label="Aseguradora">${a.aseguradora}</td>
      <td data-label="Procedimiento">${a.procedimiento}</td>
      <td data-label="Pieza" class="mono">${a.pieza}</td>
      <td data-label="Vence">${fmtDate(a.fechaVencimiento)} ${soon?'<span class="pill" style="background:#e0a32422;color:#e0a324;margin-left:4px">'+dl+'d</span>':''}</td>
      <td data-label="Valor">${money(a.valorTotal)}</td>
      <td data-label="Copago">${money(a.copago)}</td>
      <td data-label="Estado">${pill(a.estado)}</td>
      <td data-label="Acciones"><div class="flex gap-1 justify-end">
        <button class="btn-ghost btn !px-2 !py-1" onclick="viewAuth('${a.id}')" title="Ver"><i data-lucide="eye" style="width:14px;height:14px"></i></button>
        <button class="btn-ghost btn !px-2 !py-1" onclick="editAuth('${a.id}')" title="Editar"><i data-lucide="pencil" style="width:14px;height:14px"></i></button>
        <button class="btn-danger btn !px-2 !py-1" onclick="deleteAuth('${a.id}')" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px"></i></button>
      </div></td>
    </tr>`}).join('')}
  </tbody>`;
  icons();
}
function viewAuth(id){
  const a = DB.authorizations.find(x=>x.id===id);
  openModal(`
  <div class="p-5 border-b border-line flex items-center justify-between">
    <div class="font-bold">Autorización #${a.numero}</div>
    <button class="btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button>
  </div>
  <div class="p-5 text-[13px] space-y-3">
    <div class="grid grid-cols-2 gap-3">
      <div><div class="text-[11px] text-muted">Paciente</div><div class="font-medium">${a.paciente}</div></div>
      <div><div class="text-[11px] text-muted">Documento</div><div class="font-medium">${a.documento}</div></div>
      <div><div class="text-[11px] text-muted">Aseguradora</div><div class="font-medium">${a.aseguradora}</div></div>
      <div><div class="text-[11px] text-muted">Procedimiento</div><div class="font-medium">${a.procedimiento}</div></div>
      <div><div class="text-[11px] text-muted">Pieza dental</div><div class="font-medium">${a.pieza}</div></div>
      <div><div class="text-[11px] text-muted">Estado</div>${pill(a.estado)}</div>
      <div><div class="text-[11px] text-muted">Emisión</div><div class="font-medium">${fmtDate(a.fechaEmision)}</div></div>
      <div><div class="text-[11px] text-muted">Vencimiento</div><div class="font-medium">${fmtDate(a.fechaVencimiento)}</div></div>
      <div><div class="text-[11px] text-muted">Valor total</div><div class="font-medium">${money(a.valorTotal)}</div></div>
      <div><div class="text-[11px] text-muted">Cobertura / Copago</div><div class="font-medium">${money(a.cobertura)} / ${money(a.copago)}</div></div>
    </div>
    <div class="flex flex-wrap gap-2 pt-2">
      <button class="btn btn-primary" onclick="changeAuthState('${a.id}')"><i data-lucide="refresh-cw" style="width:14px;height:14px"></i>Cambiar estado</button>
      <button class="btn btn-ghost" onclick="closeModal();navigate('agenda')"><i data-lucide="calendar-plus" style="width:14px;height:14px"></i>Programar cita</button>
    </div>
  </div>`);
}
function changeAuthState(id){
  const a = DB.authorizations.find(x=>x.id===id);
  const idx = authStates.indexOf(a.estado);
  a.estado = authStates[(idx+1)%authStates.length];
  save(DB); closeModal(); renderAuthTable();
  toast('Estado actualizado a "'+a.estado+'"','ok');
}
function editAuth(id){
  const a = id? DB.authorizations.find(x=>x.id===id) : null;
  openModal(`
  <div class="p-5 border-b border-line flex items-center justify-between">
    <div class="font-bold">${a?'Editar':'Nueva'} autorización</div>
    <button class="btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button>
  </div>
  <div class="p-5 space-y-3 text-[13px]">
    <div><label class="text-[11px] text-muted">Paciente</label>
      <select id="fPac">${DB.patients.map(p=>`<option value="${p.id}" ${a&&a.pacienteId===p.id?'selected':''}>${p.nombre}</option>`).join('')}</select>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <div><label class="text-[11px] text-muted">N.º autorización</label><input id="fNum" value="${a?a.numero:randInt(1000000000,1999999999)}"></div>
      <div><label class="text-[11px] text-muted">Aseguradora</label><select id="fAseg" onchange="applyTarifa()">${insurers.map(s=>`<option ${a&&a.aseguradora===s?'selected':''}>${s}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">Procedimiento</label><select id="fProc" onchange="applyTarifa()">${procedures.map(s=>`<option ${a&&a.procedimiento===s?'selected':''}>${s}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">Pieza dental</label><select id="fPieza">${teeth.map(s=>`<option ${a&&a.pieza===s?'selected':''}>${s}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">Fecha emisión</label><input type="date" id="fEmi" value="${a?a.fechaEmision:todayISO()}"></div>
      <div><label class="text-[11px] text-muted">Fecha vencimiento</label><input type="date" id="fVen" value="${a?a.fechaVencimiento:todayISO(15)}"></div>
      <div><label class="text-[11px] text-muted">Valor total (US$)</label><input type="number" id="fVal" value="${a?a.valorTotal:500}"></div>
      <div><label class="text-[11px] text-muted">Copago (US$)</label><input type="number" id="fCop" value="${a?a.copago:250}"></div>
    </div>
    <div id="tarifNote" class="flex items-start gap-2 surface-2 border border-line rounded-lg p-2.5 text-[11.5px]"></div>
    <button class="btn btn-primary w-full justify-center mt-2" onclick="saveAuth('${a?a.id:''}')"><i data-lucide="save" style="width:15px;height:15px"></i>Guardar autorización</button>
  </div>`);
  setTimeout(applyTarifa, 30);
}
function applyTarifa(){
  const aseg = document.getElementById('fAseg')?.value;
  const proc = document.getElementById('fProc')?.value;
  const note = document.getElementById('tarifNote');
  if(!aseg || !proc || !note) return;
  if(aseg==='Plan Particular'){ note.innerHTML = `<i data-lucide="check-circle" style="width:14px;height:14px;color:#17a673;flex-shrink:0;margin-top:1px"></i><span>Plan particular: valor y copago se definen manualmente.</span>`; icons(); return; }
  const t = buscarTarifa(aseg, proc);
  if(!t){ note.innerHTML = `<span class="text-muted">Sin tarifa registrada para esta combinación.</span>`; return; }
  if(t.manual){
    note.innerHTML = `<i data-lucide="alert-triangle" style="width:14px;height:14px;color:#e0a324;flex-shrink:0;margin-top:1px"></i><span><b>${aseg}</b> no tiene tarifa estandarizada — llame a la aseguradora y capture el valor manualmente.</span>`;
  } else {
    const cob = Math.round(t.tarifa*t.coberturaPct/100);
    const cop = t.tarifa-cob;
    document.getElementById('fVal').value = t.tarifa;
    document.getElementById('fCop').value = cop;
    note.innerHTML = `<i data-lucide="check-circle" style="width:14px;height:14px;color:#17a673;flex-shrink:0;margin-top:1px"></i><span>Cruzado automáticamente con el tarifario: cobertura ${money(cob)} (${t.coberturaPct}%) · copago del paciente ${money(cop)}.</span>`;
  }
  icons();
}
function saveAuth(id){
  const p = DB.patients.find(x=>x.id===document.getElementById('fPac').value);
  const numero = document.getElementById('fNum').value.trim();
  const dup = DB.authorizations.some(a=>a.numero===numero && a.id!==id);
  const data = {
    numero, pacienteId:p.id, paciente:p.nombre, documento:p.documento,
    aseguradora:document.getElementById('fAseg').value, procedimiento:document.getElementById('fProc').value,
    pieza:document.getElementById('fPieza').value, fechaEmision:document.getElementById('fEmi').value,
    fechaVencimiento:document.getElementById('fVen').value, valorTotal:Number(document.getElementById('fVal').value),
    copago:Number(document.getElementById('fCop').value), duplicada:dup
  };
  data.cobertura = data.valorTotal - data.copago;
  if(id){
    Object.assign(DB.authorizations.find(x=>x.id===id), data);
  } else {
    data.id = uid('AUT'); data.estado='Recibida';
    DB.authorizations.unshift(data);
  }
  save(DB); closeModal(); renderAuthTable();
  toast(dup? 'Guardada, pero se detectó posible número duplicado.':'Autorización guardada correctamente.', dup?'warn':'ok');
}
function deleteAuth(id){
  DB.authorizations = DB.authorizations.filter(x=>x.id!==id);
  save(DB); renderAuthTable();
  toast('Autorización eliminada.','bad');
}

/* ============================= VIEW: DIGITALIZAR ============================= */
function view_digitalizar(){
  setHeader('Digitalizar autorización','Extracción automática de datos con IA a partir de una fotografía');
  document.getElementById('view').innerHTML = `
  <div class="grid lg:grid-cols-2 gap-5">
    <div class="surface card p-5">
      <div class="font-bold text-sm mb-3">1. Cargar documento</div>
      <div id="dropZone" class="border-2 border-dashed border-line rounded-2xl h-64 flex flex-col items-center justify-center text-center gap-2 cursor-pointer relative overflow-hidden" onclick="document.getElementById('docInput').click()">
        <i data-lucide="image-plus" style="width:30px;height:30px" class="text-muted"></i>
        <div class="text-sm font-semibold">Toca para tomar o subir la foto real de la orden</div>
        <div class="text-[11.5px] text-muted">Cámara o galería · JPG, PNG</div>
      </div>
      <input type="file" id="docInput" accept="image/*" capture="environment" class="hidden" onchange="handleDocUpload(event)">
      <div class="flex items-start gap-2 surface-2 border border-line rounded-lg p-2.5 mt-3 text-[11.5px]">
        <i data-lucide="alert-triangle" style="width:14px;height:14px;color:#e0a324;flex-shrink:0;margin-top:1px"></i>
        <span>La foto que subas aquí es real. Los valores extraídos son de referencia (motor OCR de ejemplo): la lectura conectada a producción requiere integrar el backend con un motor de visión (fase 2).</span>
      </div>
    </div>
    <div class="surface card p-5" id="extractPanel">
      <div class="font-bold text-sm mb-3">2. Extracción inteligente</div>
      <div class="text-muted text-sm py-14 text-center">Sube un documento para iniciar el análisis.</div>
    </div>
  </div>`;
  icons();
}
function handleDocUpload(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev=>{ simulateScan(ev.target.result, file.name); };
  reader.readAsDataURL(file);
}
const scanFields = [
  ['Número de autorización','1919172856',98],['Fecha de emisión','15/07/2026',96],['Nombre del paciente','Madeline Sánchez Peña',97],
  ['Documento','402-2961622-8',94],['N.º de afiliación','AF884210',91],['Aseguradora','ARS Universal',99],
  ['Régimen','Contributivo',95],['Diagnóstico','Caries pieza 38',88],['Pieza dental','38',97],
  ['Procedimiento','Obturación con resina fotocurada clase I',90],['Valor total','US$ 500',99],
  ['Cobertura del plan','US$ 250',96],['Copago del afiliado','US$ 250',96],['Fecha de vencimiento','30/07/2026',93]
];
function simulateScan(photoDataUrl, fileName){
  const zone = document.getElementById('dropZone');
  const img = photoDataUrl || null;
  zone.innerHTML = `
    <div class="absolute inset-0 bg-[#0c1626] flex items-center justify-center">
      <div class="w-3/4"><div class="relative h-40 bg-[#132038] rounded-lg overflow-hidden border border-[#274169]">
        ${img?`<img src="${img}" style="width:100%;height:100%;object-fit:cover;opacity:.85">`:''}
        <div class="scanline"></div>
        <div class="absolute bottom-2 left-2 text-[10px] text-blue-300 mono bg-black/40 px-1.5 rounded">${fileName||'orden_odontologica.jpg'}</div>
      </div>
      <div class="text-center text-white text-xs mt-3" id="scanStatus">Analizando imagen…</div>
      <div class="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden"><div id="scanBar" class="h-full bg-blue-400" style="width:0%;transition:width 1.8s linear"></div></div>
      </div>
    </div>`;
  setTimeout(()=>document.getElementById('scanBar').style.width='100%',50);
  const panel = document.getElementById('extractPanel');
  panel.innerHTML = `<div class="font-bold text-sm mb-3">2. Extracción inteligente</div>
    <div class="flex items-center gap-2 text-sm text-muted py-14 justify-center"><i data-lucide="loader-2" class="animate-spin" style="width:16px;height:16px"></i>Procesando documento…</div>`;
  icons();
  setTimeout(()=>{
    document.getElementById('scanStatus').textContent='Extracción completada.';
    renderExtraction();
  },1900);
}
function renderExtraction(){
  const panel = document.getElementById('extractPanel');
  panel.innerHTML = `
  <div class="flex items-center justify-between mb-1">
    <div class="font-bold text-sm">2. Extracción inteligente</div>
    <span class="pill" style="background:#17a67322;color:#17a673">Confianza global 95%</span>
  </div>
  <div class="text-[10.5px] text-muted mb-3">Vista previa con datos de referencia — editable y guardable como autorización real.</div>
  <div class="space-y-2 max-h-[380px] overflow-y-auto pr-1">
  ${scanFields.map((f,i)=>`
    <div class="flex items-center gap-2">
      <div class="flex-1">
        <div class="text-[10.5px] text-muted">${f[0]}</div>
        <input value="${f[1]}" class="!py-1.5 !text-[12.5px]">
      </div>
      <span class="pill flex-shrink-0" style="background:${f[2]>=95?'#17a67322':'#e0a32422'};color:${f[2]>=95?'#17a673':'#e0a324'}">${f[2]}%</span>
    </div>`).join('')}
  </div>
  <div class="flex items-start gap-2 surface-2 border border-line rounded-lg p-2.5 mt-3 text-[11.5px]">
    <i data-lucide="alert-triangle" style="width:14px;height:14px;color:#e0a324;flex-shrink:0;margin-top:1px"></i>
    <span>Campo "N.º de afiliación" con confianza moderada — se recomienda validar contra el carnet físico.</span>
  </div>
  <button class="btn btn-primary w-full justify-center mt-3" onclick="saveExtraction()"><i data-lucide="check" style="width:15px;height:15px"></i>Confirmar y guardar autorización</button>`;
  icons();
}
function saveExtraction(){
  let p = DB.patients.find(x=>x.nombre==='Madeline Sánchez Peña');
  if(!p){ p={id:uid('PAC'),nombre:'Madeline Sánchez Peña',documento:'402-2961622-8',telefono:'809-555-1234',correo:'madeline.sanchez@correo.com',aseguradora:'ARS Universal',afiliacion:'AF884210',edad:23,observaciones:'Sin observaciones relevantes.',adjuntos:1}; DB.patients.unshift(p); }
  DB.authorizations.unshift({
    id:uid('AUT'), numero:'1919172856', pacienteId:p.id, paciente:p.nombre, documento:p.documento,
    aseguradora:'ARS Universal', procedimiento:'Obturación con resina fotocurada clase I', pieza:'38',
    fechaEmision:'2026-07-15', fechaVencimiento:'2026-07-30', valorTotal:500, cobertura:250, copago:250,
    estado:'Validada', duplicada:false
  });
  save(DB);
  toast('Autorización digitalizada y guardada exitosamente.','ok');
  navigate('autorizaciones');
}

/* ============================= VIEW: AGENDA ============================= */
let agendaMode='semana';
function view_agenda(){
  setHeader('Agenda','Programación de citas por sede y odontólogo');
  document.getElementById('view').innerHTML = `
  <div class="flex flex-wrap items-center gap-2 mb-4">
    <div class="surface-2 border border-line rounded-lg p-1 flex gap-1">
      ${['dia','semana','mes'].map(m=>`<button class="btn !px-3 !py-1.5 ${agendaMode===m?'btn-primary':'btn-ghost !border-0'}" onclick="agendaMode='${m}';view_agenda()">${m[0].toUpperCase()+m.slice(1)}</button>`).join('')}
    </div>
    <button class="btn btn-primary ml-auto" onclick="editCita(null)"><i data-lucide="calendar-plus" style="width:15px;height:15px"></i>Nueva cita</button>
  </div>
  <div class="space-y-3" id="agendaList"></div>`;
  icons();
  renderAgenda();
}
function renderAgenda(){
  let list = [...DB.appointments].sort((a,b)=>(a.fecha+a.hora).localeCompare(b.fecha+b.hora));
  if(agendaMode==='dia') list = list.filter(c=>c.fecha===todayISO());
  const groups = {};
  list.forEach(c=>{ (groups[c.fecha]=groups[c.fecha]||[]).push(c); });
  const stateColor = {Programada:'#5a6b85',Confirmada:'#2f6fed','En espera':'#e0a324','En atención':'#7c3aed',Atendida:'#17a673',Cancelada:'#e5484d','No asistió':'#e5484d',Reprogramada:'#0891b2'};
  document.getElementById('agendaList').innerHTML = Object.keys(groups).length? Object.keys(groups).map(fecha=>`
    <div class="surface card p-4">
      <div class="font-bold text-[12.5px] mb-2.5 text-muted uppercase tracking-wide">${fmtDate(fecha)} ${fecha===todayISO()?'· Hoy':''}</div>
      <div class="space-y-2">
      ${groups[fecha].map(c=>`
        <div class="citaRow flex flex-wrap items-center gap-3 surface-2 border border-line rounded-xl px-3.5 py-2.5 cursor-pointer" onclick="editCita('${c.id}')">
          <div class="w-1.5 h-9 rounded-full flex-shrink-0" style="background:${stateColor[c.estado]}"></div>
          <div class="mono font-bold text-[13px] w-14">${c.hora}</div>
          <div class="min-w-0 flex-1"><div class="font-semibold text-[13px] truncate">${c.paciente}</div><div class="text-[11px] text-muted truncate">${c.procedimiento} · ${c.odontologo} · ${c.sede}</div></div>
          <span class="pill" style="background:${stateColor[c.estado]}22;color:${stateColor[c.estado]}">${c.estado}</span>
        </div>`).join('')}
      </div>
    </div>`).join('') : '<div class="text-center text-muted text-sm py-16">No hay citas para este periodo.</div>';
  icons();
}
function editCita(id){
  const c = id? DB.appointments.find(x=>x.id===id):null;
  const estados=['Programada','Confirmada','En espera','En atención','Atendida','Cancelada','No asistió','Reprogramada'];
  openModal(`
  <div class="p-5 border-b border-line flex items-center justify-between"><div class="font-bold">${c?'Editar':'Nueva'} cita</div><button class="btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button></div>
  <div class="p-5 space-y-3 text-[13px]">
    <div><label class="text-[11px] text-muted">Paciente</label><select id="cPac">${DB.patients.map(p=>`<option value="${p.id}" ${c&&c.pacienteId===p.id?'selected':''}>${p.nombre}</option>`).join('')}</select></div>
    <div class="grid grid-cols-2 gap-3">
      <div><label class="text-[11px] text-muted">Odontólogo</label><select id="cDoc">${doctors.map(d=>`<option ${c&&c.odontologo===d?'selected':''}>${d}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">Sede</label><select id="cSede">${sedes.map(d=>`<option ${c&&c.sede===d?'selected':''}>${d}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">Procedimiento</label><select id="cProc">${procedures.map(d=>`<option ${c&&c.procedimiento===d?'selected':''}>${d}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">Estado</label><select id="cEstado">${estados.map(d=>`<option ${c&&c.estado===d?'selected':''}>${d}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">Fecha</label><input type="date" id="cFecha" value="${c?c.fecha:todayISO()}"></div>
      <div><label class="text-[11px] text-muted">Hora</label><input type="time" id="cHora" value="${c?c.hora:'09:00'}"></div>
    </div>
    <div class="flex gap-2 pt-1">
      <button class="btn btn-primary flex-1 justify-center" onclick="saveCita('${c?c.id:''}')"><i data-lucide="save" style="width:15px;height:15px"></i>Guardar</button>
      ${c?`<button class="btn btn-danger" onclick="deleteCita('${c.id}')"><i data-lucide="trash-2" style="width:15px;height:15px"></i></button>`:''}
    </div>
  </div>`);
}
function saveCita(id){
  const p = DB.patients.find(x=>x.id===document.getElementById('cPac').value);
  const data = {pacienteId:p.id, paciente:p.nombre, odontologo:document.getElementById('cDoc').value, sede:document.getElementById('cSede').value,
    procedimiento:document.getElementById('cProc').value, estado:document.getElementById('cEstado').value,
    fecha:document.getElementById('cFecha').value, hora:document.getElementById('cHora').value};
  if(id){ Object.assign(DB.appointments.find(x=>x.id===id),data); }
  else { data.id=uid('CITA'); DB.appointments.push(data); }
  save(DB); closeModal(); renderAgenda();
  toast('Cita guardada. Se enviará confirmación automática por WhatsApp.','ok');
}
function deleteCita(id){ DB.appointments=DB.appointments.filter(x=>x.id!==id); save(DB); closeModal(); renderAgenda(); toast('Cita eliminada.','bad'); }

/* ============================= VIEW: ATENCIONES ============================= */
function view_atenciones(){
  setHeader('Atenciones odontológicas', DB.attentions.length+' fichas registradas');
  const pendientes = DB.authorizations.filter(a=>['Validada','Cita programada'].includes(a.estado));
  document.getElementById('view').innerHTML = `
  <div class="grid lg:grid-cols-2 gap-4">
    <div class="surface card p-5" id="atencionesPend">
      <div class="font-bold text-sm mb-3">Autorizaciones listas para atención</div>
      <div class="space-y-2">
      ${pendientes.slice(0,8).map(a=>`
        <div class="flex items-center justify-between surface-2 border border-line rounded-lg px-3 py-2.5">
          <div><div class="font-semibold text-[13px]">${a.paciente}</div><div class="text-[11px] text-muted">${a.procedimiento} · Pieza ${a.pieza}</div></div>
          <button class="btn btn-primary !px-3 !py-1.5" onclick="openAttention('${a.id}')">Atender</button>
        </div>`).join('') || '<div class="text-muted text-sm">No hay autorizaciones pendientes.</div>'}
      </div>
    </div>
    <div class="surface card p-5">
      <div class="font-bold text-sm mb-3">Atenciones completadas</div>
      <div class="space-y-2">
      ${DB.attentions.slice().reverse().map(a=>`
        <div class="surface-2 border border-line rounded-lg px-3 py-2.5">
          <div class="flex justify-between"><div class="font-semibold text-[13px]">${a.paciente}</div><span class="pill" style="background:#17a67322;color:#17a673">Completada</span></div>
          <div class="text-[11px] text-muted mt-0.5">${a.procedimiento} · ${a.odontologo} · ${fmtDate(a.fecha)}</div>
        </div>`).join('') || '<div class="text-muted text-sm">Aún no hay atenciones registradas.</div>'}
      </div>
    </div>
  </div>`;
  icons();
}
function openAttention(authId){
  const a = DB.authorizations.find(x=>x.id===authId);
  openModal(`
  <div class="p-5 border-b border-line flex items-center justify-between"><div class="font-bold">Ficha de atención — ${a.paciente}</div><button class="btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button></div>
  <div class="p-5 space-y-3 text-[13px]">
    <div class="grid grid-cols-2 gap-3">
      <div><div class="text-[11px] text-muted">Autorización</div><div class="font-medium">#${a.numero}</div></div>
      <div><div class="text-[11px] text-muted">Procedimiento autorizado</div><div class="font-medium">${a.procedimiento}</div></div>
      <div><label class="text-[11px] text-muted">Odontólogo</label><select id="atDoc">${doctors.map(d=>`<option>${d}</option>`).join('')}</select></div>
      <div><label class="text-[11px] text-muted">Pieza dental</label><input id="atPieza" value="${a.pieza}"></div>
    </div>
    <div><label class="text-[11px] text-muted">Procedimiento realizado</label><input id="atProc" value="${a.procedimiento}"></div>
    <div><label class="text-[11px] text-muted">Observaciones clínicas</label><textarea id="atObs" rows="2" placeholder="Ej. Procedimiento sin complicaciones, se indica control en 15 días."></textarea></div>
    <div><label class="text-[11px] text-muted">Materiales utilizados</label><input id="atMat" value="Resina fotocurada A2, Anestesia lidocaína 2%"></div>
    <div class="grid grid-cols-2 gap-3">
      <div>
        <label class="text-[11px] text-muted">Fotografía / radiografía</label>
        <div id="photoZone" class="surface-2 border border-dashed border-line rounded-lg py-3 text-[11.5px] text-muted text-center cursor-pointer" onclick="document.getElementById('photoInput').click()">
          <i data-lucide="image" style="width:16px;height:16px" class="mx-auto mb-1"></i>Toca para subir foto real
        </div>
        <input type="file" id="photoInput" accept="image/*" capture="environment" class="hidden" onchange="handlePhotoUpload(event)">
      </div>
      <div>
        <label class="text-[11px] text-muted">Firma del paciente</label>
        <div class="surface-2 border border-line rounded-lg p-1.5">
          <canvas id="sigPad" width="220" height="72" style="width:100%;height:72px;touch-action:none;cursor:crosshair;background:#fff;border-radius:6px"></canvas>
          <div class="flex justify-between items-center mt-1">
            <span class="text-[10px] text-muted">Firme con el dedo o el mouse</span>
            <button type="button" class="text-[10px] text-blue-500 font-semibold" onclick="clearSignature()">Borrar</button>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary w-full justify-center mt-1" onclick="finalizeAttention('${a.id}')"><i data-lucide="check-check" style="width:15px;height:15px"></i>Finalizar atención</button>
  </div>`);
  icons();
  initSignaturePad();
}
let sigCtx=null, sigDrawing=false, sigHasContent=false, attentionPhoto=null;
function initSignaturePad(){
  const canvas = document.getElementById('sigPad');
  if(!canvas) return;
  canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
  sigCtx = canvas.getContext('2d');
  sigCtx.strokeStyle='#0c1626'; sigCtx.lineWidth=2; sigCtx.lineCap='round';
  sigHasContent=false; attentionPhoto=null;
  const pos = e=>{
    const r = canvas.getBoundingClientRect();
    const t = e.touches? e.touches[0] : e;
    return {x:t.clientX-r.left, y:t.clientY-r.top};
  };
  const start = e=>{ sigDrawing=true; const p=pos(e); sigCtx.beginPath(); sigCtx.moveTo(p.x,p.y); e.preventDefault(); };
  const move = e=>{ if(!sigDrawing) return; const p=pos(e); sigCtx.lineTo(p.x,p.y); sigCtx.stroke(); sigHasContent=true; e.preventDefault(); };
  const end = ()=>{ sigDrawing=false; };
  canvas.addEventListener('mousedown',start); canvas.addEventListener('mousemove',move); window.addEventListener('mouseup',end);
  canvas.addEventListener('touchstart',start,{passive:false}); canvas.addEventListener('touchmove',move,{passive:false}); canvas.addEventListener('touchend',end);
}
function clearSignature(){
  if(!sigCtx) return;
  sigCtx.clearRect(0,0,sigCtx.canvas.width,sigCtx.canvas.height); sigHasContent=false;
}
function handlePhotoUpload(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev=>{
    attentionPhoto = ev.target.result;
    document.getElementById('photoZone').innerHTML = `<img src="${attentionPhoto}" style="max-height:64px;margin:0 auto;border-radius:6px;display:block">`;
    toast('Fotografía cargada correctamente.','ok');
  };
  reader.readAsDataURL(file);
}
function finalizeAttention(authId){
  const a = DB.authorizations.find(x=>x.id===authId);
  const doc = document.getElementById('atDoc').value;
  const firma = sigHasContent ? sigCtx.canvas.toDataURL('image/png') : null;
  a.estado='Atendida';
  a.odontologo = doc;
  DB.attentions.push({id:uid('ATN'), pacienteId:a.pacienteId, paciente:a.paciente, procedimiento:document.getElementById('atProc').value,
    odontologo:doc, pieza:document.getElementById('atPieza').value, observaciones:document.getElementById('atObs').value,
    materiales:document.getElementById('atMat').value, fecha:todayISO(), authId, firma, foto:attentionPhoto});
  // avanza a lista para facturar
  setTimeout(()=>{ a.estado='Lista para facturar'; save(DB); },10);
  // descuenta del material realmente registrado en "Materiales utilizados"
  const matText = (document.getElementById('atMat').value||'').toLowerCase();
  const item = DB.inventory.find(i=>matText.includes(i.nombre.toLowerCase().split(' ')[0])) || DB.inventory[randInt(0,DB.inventory.length-1)];
  item.stock = Math.max(0,item.stock-randInt(1,3));
  save(DB); closeModal(); view_atenciones();
  toast(`Atención finalizada${firma?' con firma registrada':''}: copago generado, inventario descontado y enviado a facturación.`,'ok');
}

/* ============================= VIEW: FACTURACIÓN ============================= */
function view_facturacion(){
  setHeader('Facturación','Gestión de lotes y radicación ante aseguradoras');
  const listas = DB.authorizations.filter(a=>a.estado==='Lista para facturar');
  document.getElementById('view').innerHTML = `
  <div class="grid lg:grid-cols-3 gap-4 mb-5">
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Pendientes de facturar</div><div class="text-2xl font-extrabold mt-1">${listas.length}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Cartera radicada</div><div class="text-2xl font-extrabold mt-1">${money(DB.invoices.reduce((s,i)=>s+i.valorTotal,0))}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Rechazadas</div><div class="text-2xl font-extrabold mt-1 text-red-500">${DB.invoices.filter(i=>i.estado==='Rechazada').length}</div></div>
  </div>

  <div class="surface card p-5 mb-5">
    <div class="flex items-center justify-between mb-3"><div class="font-bold text-sm">Servicios listos para facturar</div>
      <button class="btn btn-primary" id="btnCrearLote" onclick="createBatch()"><i data-lucide="layers" style="width:15px;height:15px"></i>Crear lote de facturación</button></div>
    <div class="overflow-x-auto"><table class="responsive-cards">
      <thead><tr><th></th><th>Paciente</th><th>Aseguradora</th><th>Procedimiento</th><th>Valor</th><th>Cobertura</th><th>Copago</th></tr></thead>
      <tbody>${listas.map(a=>`<tr><td data-label="Sel."><input type="checkbox" class="!w-auto batchChk" value="${a.id}"></td><td data-label="Paciente">${a.paciente}</td><td data-label="Aseguradora">${a.aseguradora}</td><td data-label="Procedimiento">${a.procedimiento}</td><td data-label="Valor">${money(a.valorTotal)}</td><td data-label="Cobertura">${money(a.cobertura)}</td><td data-label="Copago">${money(a.copago)}</td></tr>`).join('') || '<tr><td colspan="7" class="text-center text-muted py-6">Sin servicios pendientes.</td></tr>'}</tbody>
    </table></div>
  </div>

  <div class="surface card overflow-x-auto">
    <div class="p-4 font-bold text-sm border-b border-line">Facturas radicadas</div>
    <table class="responsive-cards">
      <thead><tr><th>Factura</th><th>Aseguradora</th><th>Periodo</th><th>Valor</th><th>Copago</th><th>Radicación</th><th>Pago estimado</th><th>Estado</th><th></th></tr></thead>
      <tbody>${DB.invoices.map(i=>`<tr>
        <td data-label="Factura" class="mono">${i.numero}</td><td data-label="Aseguradora">${i.aseguradora}</td><td data-label="Periodo">${i.periodo}</td>
        <td data-label="Valor">${money(i.valorTotal)}</td><td data-label="Copago">${money(i.copago)}</td>
        <td data-label="Radicación">${fmtDate(i.radicacion)}</td><td data-label="Pago est.">${fmtDate(i.pagoEstimado)}</td>
        <td data-label="Estado"><span class="pill" style="background:${i.estado==='Pagada'?'#17a67322':i.estado==='Rechazada'?'#e5484d22':'#e0a32422'};color:${i.estado==='Pagada'?'#17a673':i.estado==='Rechazada'?'#e5484d':'#e0a324'}">${i.estado}</span>${i.motivoRechazo?`<div class="text-[10.5px] text-muted mt-0.5">${i.motivoRechazo}</div>`:''}</td>
        <td data-label="Acción">${(i.estado!=='Rechazada'&&i.estado!=='Pagada'&&i.items&&i.items.length)?`<button class="btn btn-danger !px-2.5 !py-1" onclick="rejectInvoice('${i.id}')">Marcar rechazada</button>`:(i.estado==='Rechazada'?'<span class="text-[10.5px] text-muted">Cargo generado</span>':'')}</td>
      </tr>`).join('')}</tbody>
    </table>
  </div>
  <div class="flex gap-2 mt-4">
    <button class="btn btn-ghost" onclick="exportInvoicesCSV()"><i data-lucide="file-spreadsheet" style="width:15px;height:15px"></i>Exportar Excel (.csv)</button>
    <button class="btn btn-ghost" onclick="exportInvoicesPDF()"><i data-lucide="file-text" style="width:15px;height:15px"></i>Exportar / imprimir PDF</button>
  </div>`;
  icons();
}
function createBatch(){
  const ids = [...document.querySelectorAll('.batchChk:checked')].map(x=>x.value);
  if(!ids.length){ toast('Selecciona al menos un servicio.','warn'); return; }
  let total=0, cop=0; const items=[];
  ids.forEach(id=>{
    const a=DB.authorizations.find(x=>x.id===id); a.estado='Facturada';
    total+=a.valorTotal; cop+=a.copago;
    items.push({authId:a.id, paciente:a.paciente, procedimiento:a.procedimiento, medico:a.odontologo||rand(doctors), valor:a.valorTotal, cobertura:a.cobertura, copago:a.copago});
  });
  DB.invoices.unshift({id:uid('FAC'), numero:'FE-'+randInt(10000,99999), aseguradora:DB.authorizations.find(x=>x.id===ids[0]).aseguradora,
    periodo:todayISO().slice(0,7), valorTotal:total, valorCubierto:total-cop, copago:cop, estado:'Radicada', items,
    radicacion:todayISO(), pagoEstimado:todayISO(30), motivoRechazo:''});
  save(DB); view_facturacion();
  toast('Lote de facturación creado y radicado ante la aseguradora.','ok');
}

function rejectInvoice(id){
  openModal(`
  <div class="p-5 border-b border-line flex items-center justify-between"><div class="font-bold">Marcar factura como rechazada</div><button class="btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button></div>
  <div class="p-5 space-y-3 text-[13px]">
    <div class="flex items-start gap-2 surface-2 border border-line rounded-lg p-2.5 text-[11.5px]">
      <i data-lucide="alert-triangle" style="width:14px;height:14px;color:#e0a324;flex-shrink:0;margin-top:1px"></i>
      <span>Al confirmar, el sistema generará automáticamente el cargo al médico tratante por el valor que la aseguradora no reconoció, visible en Comisiones médicas.</span>
    </div>
    <div><label class="text-[11px] text-muted">Motivo del rechazo</label><select id="rjMotivo"><option>Documento soporte ilegible</option><option>Procedimiento no cubierto por el plan</option><option>Autorización vencida</option><option>Datos del afiliado no coinciden</option><option>Duplicado</option></select></div>
    <button class="btn btn-danger w-full justify-center" onclick="confirmRejectInvoice('${id}')"><i data-lucide="x-circle" style="width:15px;height:15px"></i>Confirmar rechazo y generar cargo</button>
  </div>`);
}
function confirmRejectInvoice(id){
  const inv = DB.invoices.find(x=>x.id===id);
  const motivo = document.getElementById('rjMotivo').value;
  inv.estado='Rechazada'; inv.motivoRechazo=motivo;
  let totalCargo=0;
  (inv.items||[]).forEach(it=>{
    DB.cargosMedicos.push({id:uid('CAR'), medico:it.medico, paciente:it.paciente, factura:inv.numero, valor:it.cobertura, fecha:todayISO(), motivo});
    totalCargo += it.cobertura;
  });
  save(DB); closeModal(); view_facturacion();
  toast(`Factura rechazada. Se generó un cargo automático de ${money(totalCargo)} al/los médico(s) tratante(s).`,'bad');
}
function downloadFile(filename, content, mime){
  const blob = new Blob([content], {type: mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
function exportInvoicesCSV(){
  const rows = [['Factura','Aseguradora','Periodo','Valor total','Cobertura','Copago','Radicación','Pago estimado','Estado']];
  DB.invoices.forEach(i=>rows.push([i.numero,i.aseguradora,i.periodo,i.valorTotal,i.valorCubierto,i.copago,i.fechaRadicacion||i.radicacion,i.pagoEstimado,i.estado]));
  const csv = rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile('facturacion_odontoflow_'+todayISO()+'.csv', '\uFEFF'+csv, 'text/csv;charset=utf-8');
  toast('Archivo CSV descargado. Se abre directamente en Excel.','ok');
}
function exportInvoicesPDF(){
  const win = window.open('', '_blank');
  win.document.write(`<html><head><title>Facturación OdontoFlow 360</title>
  <style>body{font-family:Arial,sans-serif;padding:24px;color:#0c1626}h1{font-size:18px}table{width:100%;border-collapse:collapse;margin-top:14px}th,td{border:1px solid #ccc;padding:6px 8px;font-size:11px;text-align:left}th{background:#f1f5f9}</style>
  </head><body><h1>OdontoFlow 360 — Reporte de facturación (${fmtDate(todayISO())})</h1>
  <table><thead><tr><th>Factura</th><th>Aseguradora</th><th>Periodo</th><th>Valor total</th><th>Cobertura</th><th>Copago</th><th>Radicación</th><th>Estado</th></tr></thead>
  <tbody>${DB.invoices.map(i=>`<tr><td>${i.numero}</td><td>${i.aseguradora}</td><td>${i.periodo}</td><td>${money(i.valorTotal)}</td><td>${money(i.valorCubierto)}</td><td>${money(i.copago)}</td><td>${fmtDate(i.radicacion)}</td><td>${i.estado}</td></tr>`).join('')}</tbody></table>
  </body></html>`);
  win.document.close();
  setTimeout(()=>win.print(), 400);
}

/* ============================= VIEW: COPAGOS ============================= */
function view_copagos(){
  setHeader('Copagos y caja','Registro de pagos y cierre diario');
  const pendientes = DB.authorizations.filter(a=>['Atendida','Lista para facturar','Facturada'].includes(a.estado) && a.copago>0);
  const recaudadoHoy = DB.payments.filter(p=>p.fecha===todayISO()).reduce((s,p)=>s+p.valor,0);
  document.getElementById('view').innerHTML = `
  <div class="grid md:grid-cols-3 gap-4 mb-5">
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Recaudado hoy</div><div class="text-2xl font-extrabold mt-1 text-green-500">${money(recaudadoHoy)}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Pagos registrados</div><div class="text-2xl font-extrabold mt-1">${DB.payments.length}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Copagos pendientes</div><div class="text-2xl font-extrabold mt-1 text-amber-500">${pendientes.length}</div></div>
  </div>
  <div class="surface card p-5 overflow-x-auto" id="copagosPend">
    <div class="font-bold text-sm mb-3">Copagos pendientes de cobro</div>
    <table class="responsive-cards">
      <thead><tr><th>Paciente</th><th>Procedimiento</th><th>Copago</th><th></th></tr></thead>
      <tbody>${pendientes.map(a=>`<tr><td data-label="Paciente">${a.paciente}</td><td data-label="Procedimiento">${a.procedimiento}</td><td data-label="Copago">${money(a.copago)}</td><td data-label="Acción"><button class="btn btn-primary !px-3 !py-1.5" onclick="registerPayment('${a.id}')">Registrar pago</button></td></tr>`).join('') || '<tr><td colspan="4" class="text-center text-muted py-6">Sin copagos pendientes.</td></tr>'}</tbody>
    </table>
  </div>
  <div class="surface card p-5 mt-5 overflow-x-auto">
    <div class="font-bold text-sm mb-3">Pagos recientes</div>
    <table class="responsive-cards">
      <thead><tr><th>Paciente</th><th>Valor</th><th>Método</th><th>Fecha</th><th>Responsable</th></tr></thead>
      <tbody>${DB.payments.slice().reverse().map(p=>`<tr><td data-label="Paciente">${p.paciente}</td><td data-label="Valor">${money(p.valor)}</td><td data-label="Método">${p.metodo}</td><td data-label="Fecha">${fmtDate(p.fecha)}</td><td data-label="Responsable">${p.responsable}</td></tr>`).join('') || '<tr><td colspan="5" class="text-center text-muted py-6">Aún no hay pagos registrados.</td></tr>'}</tbody>
    </table>
  </div>`;
  icons();
}
function registerPayment(authId){
  const a = DB.authorizations.find(x=>x.id===authId);
  openModal(`
  <div class="p-5 border-b border-line flex items-center justify-between"><div class="font-bold">Registrar copago — ${a.paciente}</div><button class="btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button></div>
  <div class="p-5 space-y-3 text-[13px]">
    <div><div class="text-[11px] text-muted">Valor a cobrar</div><div class="text-2xl font-extrabold">${money(a.copago)}</div></div>
    <div><label class="text-[11px] text-muted">Método de pago</label><select id="pgMetodo"><option>Efectivo</option><option>Tarjeta</option><option>Transferencia</option><option>Pago digital</option></select></div>
    <button class="btn btn-primary w-full justify-center" onclick="confirmPayment('${a.id}')"><i data-lucide="check" style="width:15px;height:15px"></i>Confirmar pago</button>
  </div>`);
}
function confirmPayment(authId){
  const a = DB.authorizations.find(x=>x.id===authId);
  DB.payments.push({id:uid('PAG'), paciente:a.paciente, valor:a.copago, metodo:document.getElementById('pgMetodo').value, fecha:todayISO(), responsable:'Linda Pérez'});
  save(DB); closeModal();
  showReceipt(DB.payments[DB.payments.length-1]);
}
function showReceipt(p){
  openModal(`
  <div class="p-6 text-center">
    <i data-lucide="badge-check" style="width:40px;height:40px;color:#17a673" class="mx-auto mb-2"></i>
    <div class="font-bold text-lg">Pago confirmado</div>
    <div class="surface-2 border border-line rounded-xl p-4 mt-4 text-left text-[13px] space-y-1.5">
      <div class="flex justify-between"><span class="text-muted">Recibo N.º</span><span class="mono">${p.id}</span></div>
      <div class="flex justify-between"><span class="text-muted">Paciente</span><span>${p.paciente}</span></div>
      <div class="flex justify-between"><span class="text-muted">Valor</span><span class="font-bold">${money(p.valor)}</span></div>
      <div class="flex justify-between"><span class="text-muted">Método</span><span>${p.metodo}</span></div>
      <div class="flex justify-between"><span class="text-muted">Fecha</span><span>${fmtDate(p.fecha)}</span></div>
    </div>
    <div class="flex gap-2 mt-4">
      <button class="btn btn-ghost flex-1 justify-center" onclick="downloadReceipt('${p.id}')"><i data-lucide="download" style="width:15px;height:15px"></i>Descargar</button>
      <button class="btn btn-primary flex-1 justify-center" onclick="closeModal();navigate('copagos')">Listo</button>
    </div>
  </div>`);
}

function downloadReceipt(paymentId){
  const p = DB.payments.find(x=>x.id===paymentId);
  const win = window.open('', '_blank');
  win.document.write(`<html><head><title>Recibo ${p.id}</title>
  <style>body{font-family:Arial,sans-serif;padding:30px;color:#0c1626;max-width:420px}
  .box{border:1px solid #ccc;border-radius:10px;padding:20px}h2{margin:0 0 4px}
  .row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee;font-size:13px}
  .total{font-size:18px;font-weight:bold;margin-top:10px}</style></head>
  <body><div class="box"><h2>OdontoFlow 360</h2><div style="color:#666;font-size:12px;margin-bottom:12px">Recibo de pago — Copago</div>
  <div class="row"><span>Recibo N.°</span><span>${p.id}</span></div>
  <div class="row"><span>Paciente</span><span>${p.paciente}</span></div>
  <div class="row"><span>Método</span><span>${p.metodo}</span></div>
  <div class="row"><span>Fecha</span><span>${fmtDate(p.fecha)}</span></div>
  <div class="row"><span>Responsable</span><span>${p.responsable}</span></div>
  <div class="total">Total pagado: ${money(p.valor)}</div></div>
  </body></html>`);
  win.document.close();
  setTimeout(()=>win.print(), 400);
}

/* ============================= VIEW: ASEGURADORAS ============================= */
function view_aseguradoras(){
  setHeader('Aseguradoras','Contratos, tarifas y condiciones');
  document.getElementById('view').innerHTML = `<div class="grid md:grid-cols-2 gap-4" id="asegGrid">
  ${DB.insurers.map(a=>`
  <div class="surface card p-5">
    <div class="flex items-center justify-between mb-2">
      <div class="font-bold text-sm">${a.nombre}</div>
      <span class="pill" style="background:#2f6fed22;color:#2f6fed">${a.contrato}</span>
    </div>
    <div class="grid grid-cols-2 gap-2.5 text-[12.5px] mt-3">
      <div><div class="text-[10.5px] text-muted">Planes activos</div><div class="font-medium">${a.planes}</div></div>
      <div><div class="text-[10.5px] text-muted">Cobertura / Copago</div><div class="font-medium">${a.cobertura} / ${a.copago}</div></div>
      <div><div class="text-[10.5px] text-muted">Vigencia</div><div class="font-medium">${a.vigencia}</div></div>
      <div><div class="text-[10.5px] text-muted">Tiempo estimado de pago</div><div class="font-medium">${a.tiempoPago}</div></div>
      <div class="col-span-2"><div class="text-[10.5px] text-muted">Contacto</div><div class="font-medium">${a.contacto}</div></div>
    </div>
  </div>`).join('')}</div>`;
  icons();
}

/* ============================= VIEW: TARIFARIO ============================= */
let tarifFilterAseg='';
function view_tarifario(){
  setHeader('Tarifario x aseguradora','Precios estandarizados por procedimiento — cruce automático de cobertura y copago');
  document.getElementById('view').innerHTML = `
  <div class="flex flex-wrap items-center gap-2 mb-4">
    <select id="tarifAseg" class="max-w-[220px]" onchange="setTarifFilter()"><option value="">Todas las aseguradoras</option>${insurers.filter(x=>x!=='Plan Particular').map(s=>`<option>${s}</option>`).join('')}</select>
    <div class="flex items-start gap-2 surface-2 border border-line rounded-lg p-2.5 text-[11.5px] ml-auto max-w-md">
      <i data-lucide="alert-triangle" style="width:14px;height:14px;color:#e0a324;flex-shrink:0;margin-top:1px"></i>
      <span><b>ARS SeNaSa</b> no tiene tarifas estandarizadas: cada caso requiere llamada y captura manual. Las demás aseguradoras se calculan automáticamente.</span>
    </div>
  </div>
  <div class="surface card overflow-x-auto" id="tarifTable"></div>`;
  icons();
  renderTarifTable();
}
function setTarifFilter(){ tarifFilterAseg = document.getElementById('tarifAseg').value; renderTarifTable(); }
function renderTarifTable(){
  const list = DB.tarifario.filter(t=>!tarifFilterAseg || t.aseguradora===tarifFilterAseg);
  document.getElementById('tarifTable').innerHTML = `
  <table class="responsive-cards">
    <thead><tr><th>Aseguradora</th><th>Procedimiento</th><th>Tarifa</th><th>Cobertura</th><th>Copago paciente</th><th>Modo</th></tr></thead>
    <tbody>${list.map(t=>{
      const cob = t.manual? null : Math.round(t.tarifa*t.coberturaPct/100);
      const cop = t.manual? null : t.tarifa-cob;
      return `<tr>
      <td data-label="Aseguradora">${t.aseguradora}</td><td data-label="Procedimiento">${t.procedimiento}</td>
      <td data-label="Tarifa">${money(t.tarifa)}</td>
      <td data-label="Cobertura">${t.manual?'<span class="text-muted">— llamar</span>':money(cob)+' ('+t.coberturaPct+'%)'}</td>
      <td data-label="Copago">${t.manual?'<span class="text-muted">— llamar</span>':money(cop)}</td>
      <td data-label="Modo">${t.manual?'<span class="pill" style="background:#e0a32422;color:#e0a324">Manual</span>':'<span class="pill" style="background:#17a67322;color:#17a673">Automático</span>'}</td>
    </tr>`}).join('')}</tbody>
  </table>`;
  icons();
}
function buscarTarifa(aseguradora, procedimiento){
  return DB.tarifario.find(t=>t.aseguradora===aseguradora && t.procedimiento===procedimiento);
}

/* ============================= VIEW: INVENTARIO ============================= */
function view_inventario(){
  setHeader('Inventario','Control de materiales odontológicos');
  document.getElementById('view').innerHTML = `
  <div class="surface card overflow-x-auto" id="invTable">
    <table class="responsive-cards">
      <thead><tr><th>Material</th><th>Stock</th><th>Mínimo</th><th>Unidad</th><th>Costo</th><th>Proveedor</th><th>Vence</th><th>Alertas</th></tr></thead>
      <tbody>${DB.inventory.map(i=>{
        const low = i.stock<i.minimo;
        const soon = daysLeft(i.vence)<=30;
        return `<tr><td data-label="Material" class="font-medium">${i.nombre}</td><td data-label="Stock" class="${low?'text-red-500 font-bold':''}">${i.stock}</td>
        <td data-label="Mínimo">${i.minimo}</td><td data-label="Unidad">${i.unidad}</td><td data-label="Costo">US$ ${i.costo}</td>
        <td data-label="Proveedor">${i.proveedor}</td><td data-label="Vence">${fmtDate(i.vence)}</td>
        <td data-label="Alertas">${low?'<span class="pill" style="background:#e5484d22;color:#e5484d">Bajo stock</span>':''} ${soon?'<span class="pill" style="background:#e0a32422;color:#e0a324">Por vencer</span>':''}</td></tr>`}).join('')}</tbody>
    </table>
  </div>`;
  icons();
}

/* ============================= VIEW: AUTOMATIZACIONES ============================= */
function view_automatizaciones(){
  setHeader('Automatizaciones','Flujos operativos configurados');
  document.getElementById('view').innerHTML = `<div class="grid md:grid-cols-2 gap-4" id="autoGrid">
  ${DB.automations.map(a=>`
  <div class="surface card p-4">
    <div class="flex items-center justify-between mb-3">
      <span class="pill" style="background:#7c3aed22;color:#7c3aed">Flujo</span>
      <label class="flex items-center gap-2 text-[11.5px] cursor-pointer select-none">
        <span>${a.activo?'Activo':'Inactivo'}</span>
        <input type="checkbox" ${a.activo?'checked':''} onchange="toggleAuto('${a.id}')">
      </label>
    </div>
    <div class="flex items-center gap-2 text-[12.5px]">
      <div class="surface-2 border border-line rounded-lg px-2.5 py-1.5 flex-1"><div class="text-[9.5px] text-muted uppercase font-bold">Disparador</div>${a.trigger}</div>
      <i data-lucide="arrow-right" style="width:14px;height:14px" class="text-muted flex-shrink-0"></i>
      <div class="surface-2 border border-line rounded-lg px-2.5 py-1.5 flex-1"><div class="text-[9.5px] text-muted uppercase font-bold">Condición</div>${a.condition}</div>
      <i data-lucide="arrow-right" style="width:14px;height:14px" class="text-muted flex-shrink-0"></i>
      <div class="surface-2 border border-line rounded-lg px-2.5 py-1.5 flex-1"><div class="text-[9.5px] text-muted uppercase font-bold">Acción</div>${a.action}</div>
    </div>
  </div>`).join('')}</div>`;
  icons();
}
function toggleAuto(id){
  const a = DB.automations.find(x=>x.id===id); a.activo=!a.activo; save(DB);
  toast('Automatización "'+a.trigger+'" '+(a.activo?'activada':'desactivada'),'ok');
}

/* ============================= VIEW: INTEGRACIONES ============================= */
function view_integraciones(){
  setHeader('Integraciones','Conexiones con herramientas externas');
  const colors={Conectada:'#17a673',Pendiente:'#e0a324',Error:'#e5484d'};
  document.getElementById('view').innerHTML = `<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="intGrid">
  ${DB.integrations.map(i=>`
  <div class="surface card p-4">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center"><i data-lucide="${i.icon}" style="width:16px;height:16px"></i></div>
      <div class="font-semibold text-[13px]">${i.nombre}</div>
    </div>
    <div class="flex items-center justify-between">
      <span class="pill" style="background:${colors[i.estado]}22;color:${colors[i.estado]}">${i.estado}</span>
      <button class="btn btn-ghost !px-3 !py-1.5" onclick="configureIntegration('${i.id}')">Configurar</button>
    </div>
  </div>`).join('')}</div>`;
  icons();
}
function configureIntegration(id){
  const i = DB.integrations.find(x=>x.id===id);
  openModal(`
  <div class="p-5 border-b border-line flex items-center justify-between"><div class="font-bold">Configurar — ${i.nombre}</div><button class="btn-ghost btn !px-2" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px"></i></button></div>
  <div class="p-5 space-y-3 text-[13px]">
    <div><label class="text-[11px] text-muted">Estado de la conexión</label>
      <select id="intEstado"><option ${i.estado==='Conectada'?'selected':''}>Conectada</option><option ${i.estado==='Pendiente'?'selected':''}>Pendiente</option><option ${i.estado==='Error'?'selected':''}>Error</option></select>
    </div>
    <div><label class="text-[11px] text-muted">Credencial / token de la API</label><input type="password" placeholder="••••••••••••••••"></div>
    <button class="btn btn-primary w-full justify-center mt-1" onclick="saveIntegration('${id}')"><i data-lucide="save" style="width:15px;height:15px"></i>Guardar configuración</button>
  </div>`);
}
function saveIntegration(id){
  const i = DB.integrations.find(x=>x.id===id);
  i.estado = document.getElementById('intEstado').value;
  save(DB); closeModal(); view_integraciones();
  toast('Integración "'+i.nombre+'" actualizada a estado: '+i.estado,'ok');
}

/* ============================= VIEW: COMISIONES MÉDICAS ============================= */
function calcComisiones(){
  return DB.doctorProfiles.map(dp=>{
    let facturado=0, cobertura=0, pacientesAtendidos=new Set();
    DB.invoices.forEach(inv=>(inv.items||[]).forEach(it=>{
      if(it.medico===dp.nombre){ facturado+=it.valor; cobertura+=it.cobertura; pacientesAtendidos.add(it.paciente); }
    }));
    const comisionBruta = Math.round(facturado*dp.comisionPct/100);
    const cargos = DB.cargosMedicos.filter(c=>c.medico===dp.nombre).reduce((s,c)=>s+c.valor,0);
    const comisionNeta = comisionBruta - cargos;
    return {...dp, facturado, cobertura, comisionBruta, cargos, comisionNeta, pacientes:pacientesAtendidos.size};
  });
}
function view_comisiones(){
  setHeader('Comisiones médicas','Reportería mensual x médico x aseguradora, con cargos automáticos por rechazo');
  const data = calcComisiones();
  const totalNeta = data.reduce((s,d)=>s+d.comisionNeta,0);
  const totalCargos = DB.cargosMedicos.reduce((s,c)=>s+c.valor,0);
  document.getElementById('view').innerHTML = `
  <div class="grid md:grid-cols-3 gap-4 mb-5">
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Comisiones netas del mes</div><div class="text-2xl font-extrabold mt-1 text-green-500">${money(totalNeta)}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Cargos por rechazo</div><div class="text-2xl font-extrabold mt-1 text-red-500">${money(totalCargos)}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Médicos activos</div><div class="text-2xl font-extrabold mt-1">${data.length}</div></div>
  </div>
  <div class="surface card overflow-x-auto mb-5">
    <div class="p-4 font-bold text-sm border-b border-line">Comisiones por médico — periodo actual</div>
    <table class="responsive-cards">
      <thead><tr><th>Médico</th><th>Especialidad</th><th>Sede</th><th>Facturado</th><th>% Comisión</th><th>Comisión bruta</th><th>Cargos</th><th>Comisión neta</th><th></th></tr></thead>
      <tbody>${data.map(d=>`<tr>
        <td data-label="Médico">${d.nombre}</td><td data-label="Especialidad">${d.especialidad}</td><td data-label="Sede">${d.sede}</td>
        <td data-label="Facturado">${money(d.facturado)}</td><td data-label="%">${d.comisionPct}%</td>
        <td data-label="Bruta">${money(d.comisionBruta)}</td><td data-label="Cargos" class="${d.cargos>0?'text-red-500':''}">${d.cargos>0?'-'+money(d.cargos):money(0)}</td>
        <td data-label="Neta" class="font-bold">${money(d.comisionNeta)}</td>
        <td data-label="Reporte"><button class="btn btn-ghost !px-2.5 !py-1" onclick="downloadComisionMedico('${d.nombre}')"><i data-lucide="file-spreadsheet" style="width:13px;height:13px"></i></button></td>
      </tr>`).join('')}</tbody>
    </table>
  </div>
  <div class="surface card overflow-x-auto">
    <div class="p-4 font-bold text-sm border-b border-line">Cargos automáticos por rechazo de aseguradora</div>
    <table class="responsive-cards">
      <thead><tr><th>Médico</th><th>Paciente</th><th>Factura</th><th>Motivo</th><th>Fecha</th><th>Valor cargado</th></tr></thead>
      <tbody>${DB.cargosMedicos.slice().reverse().map(c=>`<tr><td data-label="Médico">${c.medico}</td><td data-label="Paciente">${c.paciente}</td><td data-label="Factura" class="mono">${c.factura}</td><td data-label="Motivo">${c.motivo}</td><td data-label="Fecha">${fmtDate(c.fecha)}</td><td data-label="Valor" class="text-red-500 font-semibold">-${money(c.valor)}</td></tr>`).join('') || '<tr><td colspan="6" class="text-center text-muted py-6">Sin cargos generados.</td></tr>'}</tbody>
    </table>
  </div>
  <div class="flex gap-2 mt-4">
    <button class="btn btn-ghost" onclick="downloadComisionesGeneral()"><i data-lucide="file-spreadsheet" style="width:15px;height:15px"></i>Exportar reporte general (.csv)</button>
  </div>`;
  icons();
}
function downloadComisionMedico(nombre){
  const d = calcComisiones().find(x=>x.nombre===nombre);
  const rows = [['Médico',d.nombre],['Especialidad',d.especialidad],['Sede',d.sede],['Periodo',todayISO().slice(0,7)],
    ['Facturado',d.facturado],['% Comisión',d.comisionPct+'%'],['Comisión bruta',d.comisionBruta],['Cargos por rechazo',d.cargos],['Comisión neta a pagar',d.comisionNeta]];
  const csv = rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile('comision_'+nombre.replace(/\s/g,'_')+'_'+todayISO()+'.csv', '\uFEFF'+csv, 'text/csv;charset=utf-8');
  toast('Reporte de comisión de '+nombre+' descargado.','ok');
}
function downloadComisionesGeneral(){
  const data = calcComisiones();
  const rows=[['Médico','Especialidad','Sede','Facturado','% Comisión','Comisión bruta','Cargos','Comisión neta']];
  data.forEach(d=>rows.push([d.nombre,d.especialidad,d.sede,d.facturado,d.comisionPct+'%',d.comisionBruta,d.cargos,d.comisionNeta]));
  const csv = rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile('comisiones_general_'+todayISO()+'.csv', '\uFEFF'+csv, 'text/csv;charset=utf-8');
  toast('Reporte general de comisiones descargado.','ok');
}

/* ============================= VIEW: REPORTES ============================= */
function view_reportes(){
  setHeader('Reportes','Analítica operativa y financiera');
  document.getElementById('view').innerHTML = `
  <div class="grid lg:grid-cols-2 gap-4">
    <div class="surface card p-5" id="repCard1"><div class="font-bold text-sm mb-3">Facturación por aseguradora</div><canvas id="r1" height="160"></canvas></div>
    <div class="surface card p-5"><div class="font-bold text-sm mb-3">Cartera: radicada vs. pagada vs. rechazada</div><canvas id="r2" height="160"></canvas></div>
    <div class="surface card p-5"><div class="font-bold text-sm mb-3">Procedimientos más realizados</div><canvas id="r3" height="160"></canvas></div>
    <div class="surface card p-5"><div class="font-bold text-sm mb-3">Ingresos por sede</div><canvas id="r4" height="160"></canvas></div>
    <div class="surface card p-5"><div class="font-bold text-sm mb-3">Ausentismo de pacientes (%)</div><canvas id="r5" height="160"></canvas></div>
    <div class="surface card p-5"><div class="font-bold text-sm mb-3">Encuesta de satisfacción (NPS)</div><canvas id="r6" height="160"></canvas></div>
  </div>`;
  icons();
  const byInsurer={}; insurers.forEach(i=>byInsurer[i]=0); DB.invoices.forEach(i=>byInsurer[i.aseguradora]=(byInsurer[i.aseguradora]||0)+i.valorTotal);
  new Chart(r1,{type:'bar',data:{labels:Object.keys(byInsurer),datasets:[{data:Object.values(byInsurer),backgroundColor:'#2f6fed',borderRadius:6}]},options:{plugins:{legend:{display:false}}}});
  const st={Radicada:0,Pagada:0,Rechazada:0,'En revisión':0}; DB.invoices.forEach(i=>st[i.estado]++);
  new Chart(r2,{type:'pie',data:{labels:Object.keys(st),datasets:[{data:Object.values(st),backgroundColor:['#2f6fed','#17a673','#e5484d','#e0a324']}]}});
  const pc={}; procedures.forEach(p=>pc[p]=DB.authorizations.filter(a=>a.procedimiento===p).length);
  new Chart(r3,{type:'bar',data:{labels:Object.keys(pc),datasets:[{data:Object.values(pc),backgroundColor:'#7c3aed',borderRadius:6}]},options:{indexAxis:'y',plugins:{legend:{display:false}}}});
  const bySede={}; sedes.forEach(s=>bySede[s]=randInt(3200,9800));
  new Chart(r4,{type:'doughnut',data:{labels:Object.keys(bySede),datasets:[{data:Object.values(bySede),backgroundColor:['#2f6fed','#4f8bff','#7fb0ff']}]}});
  new Chart(r5,{type:'line',data:{labels:['Ene','Feb','Mar','Abr','May','Jun'],datasets:[{data:[9,7,8,6,5,4],borderColor:'#e0a324',backgroundColor:'#e0a32433',tension:.4,fill:true}]},options:{plugins:{legend:{display:false}}}});
  new Chart(r6,{type:'line',data:{labels:['Ene','Feb','Mar','Abr','May','Jun'],datasets:[{data:[62,65,70,74,78,81],borderColor:'#17a673',backgroundColor:'#17a67333',tension:.4,fill:true}]},options:{plugins:{legend:{display:false}}}});
}

/* ============================= VIEW: CONFIGURACIÓN ============================= */
function view_configuracion(){
  setHeader('Configuración','Preferencias generales del sistema');
  document.getElementById('view').innerHTML = `
  <div class="grid md:grid-cols-2 gap-4 max-w-3xl">
    <div class="surface card p-5">
      <div class="font-bold text-sm mb-3">Datos de la clínica</div>
      <div class="space-y-2.5 text-[13px]">
        <div><label class="text-[11px] text-muted">Nombre comercial</label><input value="Centro Odontológico Radiológico Peralta Sánchez Corpesa SRL"></div>
        <div><label class="text-[11px] text-muted">RNC</label><input value="1-31-45278-2"></div>
        <div><label class="text-[11px] text-muted">Sede principal</label><input value="Sede El Millón, Santo Domingo"></div>
      </div>
    </div>
    <div class="surface card p-5">
      <div class="font-bold text-sm mb-3">Apariencia</div>
      <div class="flex items-center justify-between text-[13px] surface-2 border border-line rounded-lg px-3 py-2.5">
        <span>Modo oscuro</span>
        <input type="checkbox" ${DB.theme==='dark'?'checked':''} onchange="toggleTheme()">
      </div>
      <div class="mt-4 font-bold text-sm mb-2">Roles de usuario</div>
      <div class="space-y-1.5 text-[12.5px]">
        <div class="flex justify-between surface-2 border border-line rounded-lg px-3 py-2"><span>Linda Pérez</span><span class="pill" style="background:#2f6fed22;color:#2f6fed">Administrador</span></div>
        <div class="flex justify-between surface-2 border border-line rounded-lg px-3 py-2"><span>Recepción</span><span class="pill" style="background:#e0a32422;color:#e0a324">Agenda / Caja</span></div>
        <div class="flex justify-between surface-2 border border-line rounded-lg px-3 py-2"><span>Odontólogos</span><span class="pill" style="background:#17a67322;color:#17a673">Clínico — sin acceso a comisiones de otros</span></div>
      </div>
    </div>
  </div>`;
  icons();
}

/* ============================= VIEW: PANEL ADMINISTRADOR (BI cruzado) ============================= */
let adminFilters = {sede:'', medico:'', especialidad:'', aseguradora:''};
function view_panel_admin(){
  setHeader('Panel administrador','KPIs cruzados x sucursal x médico x especialidad x aseguradora');
  document.getElementById('view').innerHTML = `
  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
    <select id="fSede" onchange="setAdminFilters()"><option value="">Todas las sedes</option>${sedes.map(s=>`<option>${s}</option>`).join('')}</select>
    <select id="fMedico" onchange="setAdminFilters()"><option value="">Todos los médicos</option>${doctors.map(s=>`<option>${s}</option>`).join('')}</select>
    <select id="fEspec" onchange="setAdminFilters()"><option value="">Todas las especialidades</option>${specialties.map(s=>`<option>${s}</option>`).join('')}</select>
    <select id="fAsegAdmin" onchange="setAdminFilters()"><option value="">Todas las aseguradoras</option>${insurers.map(s=>`<option>${s}</option>`).join('')}</select>
  </div>
  <div id="adminKpis"></div>
  <div class="surface card overflow-x-auto mt-5" id="adminTableWrap">
    <div class="p-4 font-bold text-sm border-b border-line">Desglose por médico (según filtros aplicados)</div>
    <div id="adminTable"></div>
  </div>`;
  icons();
  renderAdminPanel();
}
function setAdminFilters(){
  adminFilters = {sede:fSede.value, medico:fMedico.value, especialidad:fEspec.value, aseguradora:fAsegAdmin.value};
  renderAdminPanel();
}
function renderAdminPanel(){
  const profByName = {}; DB.doctorProfiles.forEach(d=>profByName[d.nombre]=d);
  let rows = [];
  DB.invoices.forEach(inv=>{
    if(adminFilters.aseguradora && inv.aseguradora!==adminFilters.aseguradora) return;
    (inv.items||[]).forEach(it=>{
      const prof = profByName[it.medico] || {sede:'—', especialidad:'—', comisionPct:0};
      if(adminFilters.sede && prof.sede!==adminFilters.sede) return;
      if(adminFilters.medico && it.medico!==adminFilters.medico) return;
      if(adminFilters.especialidad && prof.especialidad!==adminFilters.especialidad) return;
      rows.push({...it, aseguradora:inv.aseguradora, sede:prof.sede, especialidad:prof.especialidad, comisionPct:prof.comisionPct, estadoFactura:inv.estado});
    });
  });
  const pagosAdicionales = DB.payments.reduce((s,p)=>s+p.valor,0);
  const ventas = rows.reduce((s,r)=>s+r.valor,0);
  const comisiones = rows.reduce((s,r)=>s+Math.round(r.valor*r.comisionPct/100),0);
  const rechazos = rows.filter(r=>r.estadoFactura==='Rechazada').length;

  document.getElementById('adminKpis').innerHTML = `
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Ventas (filtro aplicado)</div><div class="text-xl md:text-2xl font-extrabold mt-1">${money(ventas)}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Comisiones generadas</div><div class="text-xl md:text-2xl font-extrabold mt-1 text-green-500">${money(comisiones)}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Pagos adicionales en consulta</div><div class="text-xl md:text-2xl font-extrabold mt-1">${money(pagosAdicionales)}</div></div>
    <div class="surface card p-4"><div class="text-[11px] text-muted uppercase font-bold">Servicios rechazados</div><div class="text-xl md:text-2xl font-extrabold mt-1 text-red-500">${rechazos}</div></div>
  </div>`;

  const byDoc = {};
  rows.forEach(r=>{
    if(!byDoc[r.medico]) byDoc[r.medico] = {medico:r.medico, sede:r.sede, especialidad:r.especialidad, ventas:0, comision:0, pacientes:new Set(), aseguradoras:new Set()};
    byDoc[r.medico].ventas += r.valor;
    byDoc[r.medico].comision += Math.round(r.valor*r.comisionPct/100);
    byDoc[r.medico].pacientes.add(r.paciente);
    byDoc[r.medico].aseguradoras.add(r.aseguradora);
  });
  const list = Object.values(byDoc);
  document.getElementById('adminTable').innerHTML = list.length? `<table class="responsive-cards">
    <thead><tr><th>Médico</th><th>Sede</th><th>Especialidad</th><th>Aseguradoras</th><th>Pacientes</th><th>Ventas</th><th>Comisión</th></tr></thead>
    <tbody>${list.map(d=>`<tr><td data-label="Médico">${d.medico}</td><td data-label="Sede">${d.sede}</td><td data-label="Especialidad">${d.especialidad}</td>
      <td data-label="Aseguradoras">${[...d.aseguradoras].join(', ')}</td><td data-label="Pacientes">${d.pacientes.size}</td>
      <td data-label="Ventas">${money(d.ventas)}</td><td data-label="Comisión" class="font-bold">${money(d.comision)}</td></tr>`).join('')}</tbody>
  </table>` : '<div class="text-center text-muted text-sm py-10">Sin datos para los filtros seleccionados.</div>';
}

const RENDERERS = {
  inicio:view_inicio, pacientes:view_pacientes, autorizaciones:view_autorizaciones, digitalizar:view_digitalizar,
  agenda:view_agenda, atenciones:view_atenciones, facturacion:view_facturacion, copagos:view_copagos,
  aseguradoras:view_aseguradoras, tarifario:view_tarifario, inventario:view_inventario, automatizaciones:view_automatizaciones,
  integraciones:view_integraciones, comisiones:view_comisiones, reportes:view_reportes, 'panel-admin':view_panel_admin,
  configuracion:view_configuracion
};

/* ============================= RECORRIDO GUIADO — LIQUID GLASS ============================= */
const tourSteps = [
  {view:'inicio', target:'#kpiGrid', title:'Panel ejecutivo', text:'Este es el panel ejecutivo: autorizaciones, citas, facturación y alertas operativas en tiempo real, sin pedirle reportes a nadie.'},
  {view:'pacientes', target:'#pacGrid', title:'Pacientes', text:'Cada paciente tiene una ficha única: datos, aseguradora, historial de autorizaciones y citas, y contacto directo por WhatsApp real.'},
  {view:'digitalizar', target:'#dropZone', title:'1. Cargar documento', text:'Aquí se sube la foto real de la orden odontológica que hoy llega impresa o por WhatsApp.'},
  {view:'digitalizar', target:'#extractPanel', title:'2. Extracción con IA', text:'La IA analiza el documento y extrae los campos clave con nivel de confianza por campo. Nada se transcribe a mano.', action:()=>{ const dz=document.getElementById('dropZone'); if(dz) simulateScan(); }, actionDelay:2000},
  {view:'autorizaciones', target:'#authTable', title:'Autorizaciones centralizadas', text:'Toda autorización queda en un solo flujo, con alertas visuales de vencimiento próximo y detección de números duplicados.'},
  {view:'agenda', target:'.citaRow', title:'Agenda', text:'Se programa la cita por sede y odontólogo. Al confirmarse, se dispara la confirmación automática por WhatsApp.'},
  {view:'atenciones', target:'#atencionesPend', title:'Atención odontológica', text:'El odontólogo registra procedimiento, materiales, pieza dental, foto real y firma del paciente en un canvas táctil.'},
  {view:'copagos', target:'#copagosPend', title:'Copagos y caja', text:'Al finalizar la atención, el copago queda generado y listo para cobro inmediato, con recibo real descargable.'},
  {view:'facturacion', target:'#btnCrearLote', title:'Facturación', text:'Los servicios atendidos pasan a "Lista para facturar" y se agrupan en lotes por aseguradora, exportables a Excel y PDF reales.', action:()=>{ const b=document.getElementById('btnCrearLote'); if(b){ b.style.transform='scale(.95)'; setTimeout(()=>b.style.transform='scale(1)',180);} }, actionDelay:400},
  {view:'aseguradoras', target:'#asegGrid', title:'Aseguradoras', text:'Contrato, tarifas, cobertura y tiempo estimado de pago de cada aseguradora, documentado en un solo lugar.'},
  {view:'tarifario', target:'#tarifTable', title:'Tarifario x aseguradora', text:'El sistema cruza automáticamente el precio estandarizado de cada procedimiento con cada aseguradora y calcula cobertura y copago. SeNaSa queda marcado como excepción manual.'},
  {view:'inventario', target:'#invTable', title:'Inventario', text:'Cada procedimiento descuenta materiales automáticamente, con alertas de bajo stock y de vencimiento próximo.'},
  {view:'automatizaciones', target:'#autoGrid', title:'Automatizaciones', text:'Estos son los flujos que corren en segundo plano: alertas, confirmaciones y recordatorios, activables sin tocar código.', action:()=>{ const first=document.querySelector('#autoGrid input[type=checkbox]'); if(first){ first.click(); setTimeout(()=>first.click(),700);} }, actionDelay:150},
  {view:'integraciones', target:'#intGrid', title:'Integraciones', text:'El sistema se conecta con WhatsApp, Google Calendar, Drive, Excel, el sistema contable y la pasarela de pagos.'},
  {view:'comisiones', target:'#adminKpis', title:'Comisiones médicas', text:'Reportería mensual por médico y aseguradora. Cuando una factura es rechazada, el sistema genera aquí automáticamente el cargo al médico que atendió ese paciente.'},
  {view:'reportes', target:'#repCard1', title:'Reportes', text:'Toda la operación se traduce en analítica: cartera, productividad, procedimientos más realizados y satisfacción del paciente.'},
  {view:'panel-admin', target:'#adminKpis', title:'Panel administrador', text:'Vista cruzada para la administración: ventas, comisiones y pagos adicionales filtrables por sucursal, médico, especialidad y aseguradora — todo en un solo lugar.'},
  {view:'inicio', target:'#kpiGrid', title:'Ciclo completo', text:'De la foto de una orden odontológica a un ciclo completo de atención, cobro, facturación, comisiones y control ejecutivo — sin captura manual.'},
];
let tourIdx=0;
let tourTargetEl=null;
function startTour(){ tourIdx=0; showTourStep(); }
function clearTourSpot(){
  if(tourTargetEl){ tourTargetEl.classList.remove('tour-spot'); tourTargetEl=null; }
}
function endTour(){
  clearTourSpot();
  const dim=document.getElementById('tourDim'); if(dim) dim.remove();
  const card=document.getElementById('tourCard'); if(card) card.remove();
}
function showTourStep(){
  clearTourSpot();
  const step = tourSteps[tourIdx];
  navigate(step.view);
  const isRepeatView = tourIdx>0 && tourSteps[tourIdx-1].view===step.view;
  const baseDelay = isRepeatView ? 60 : 140;
  setTimeout(()=>{
    if(step.action){ step.action(); }
    setTimeout(()=>{
      const el = step.target ? document.querySelector(step.target) : null;
      if(el){
        el.classList.add('tour-spot');
        tourTargetEl = el;
        if(typeof el.scrollIntoView==='function') el.scrollIntoView({behavior:'smooth', block:'center'});
      }
      renderTourCard(step);
    }, step.action ? (step.actionDelay||300) : 20);
  }, baseDelay);
}
function renderTourCard(step){
  let dim = document.getElementById('tourDim');
  if(!dim){ dim = document.createElement('div'); dim.id='tourDim'; document.body.appendChild(dim); }
  let card = document.getElementById('tourCard');
  if(!card){ card = document.createElement('div'); card.id='tourCard'; card.className='lg-card'; document.body.appendChild(card); }
  const last = tourIdx===tourSteps.length-1;
  card.innerHTML = `
    <div class="lg-topline"></div>
    <div class="p-4">
      <div class="flex items-center justify-between mb-2.5">
        <span class="lg-badge">Recorrido guiado · ${tourIdx+1}/${tourSteps.length}</span>
        <button onclick="endTour()" style="color:#9db3d6;background:none;border:none;cursor:pointer;padding:2px"><i data-lucide="x" style="width:15px;height:15px"></i></button>
      </div>
      <div class="flex items-center gap-2 mb-1.5">
        <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:linear-gradient(135deg,#2f6fed,#7c3aed)"><i data-lucide="sparkles" style="width:13px;height:13px;color:#fff"></i></div>
        <div class="font-bold text-[14px]">${step.title}</div>
      </div>
      <p class="text-[13px] leading-relaxed" style="color:#cfe0fb">${step.text}</p>
      <div class="flex items-center justify-between mt-4">
        <div class="lg-dots">${tourSteps.map((s,i)=>`<div class="lg-dot ${i===tourIdx?'on':''}"></div>`).join('')}</div>
        <div class="flex gap-2">
          ${tourIdx>0?`<button class="btn lg-btn !px-3" onclick="tourIdx--;showTourStep()"><i data-lucide="arrow-right" style="width:13px;height:13px;transform:rotate(180deg)"></i></button>`:''}
          <button class="btn lg-btn-primary !px-4" onclick="${last?'endTour()':'tourIdx++;showTourStep()'}">${last?'Finalizar':'Siguiente'}${last?'':''}</button>
        </div>
      </div>
    </div>`;
  icons();
}

/* ============================= INIT ============================= */
renderShell();
RENDERERS[currentView]();
