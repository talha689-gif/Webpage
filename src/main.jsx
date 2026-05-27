import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin, Clock, ShieldCheck, Stethoscope, Activity, Award, ChevronRight, BookOpen, HeartPulse, Menu, PlayCircle } from 'lucide-react';
import './styles.css';

const tabs = ['Home', 'Treatment Services', 'Educational Material', 'Contact'];

const images = {
  doctorHero: "docto.jpeg"
  doctorPortrait: 'src/pubilc/docto.jpeg?auto=format&fit=crop&w=900&q=80',
  radiotherapy: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=900&q=80',
  imaging: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
};

const services = [
  { title: 'Stereotactic Radiotherapy', text: 'High-precision radiation treatment planning for eligible oncology cases.', image: images.radiotherapy },
  { title: 'Radio Surgery', text: 'Focused radiation-based treatment approach for selected tumors.', image: images.radiotherapy },
  { title: 'SABR', text: 'Specialized ablative radiotherapy technique delivered with precision.', image: images.doctorPortrait },
  { title: 'VMAT', text: 'Modern arc-based radiotherapy planning for accurate dose delivery.', image: images.radiotherapy },
  { title: 'Chemotherapy', text: 'Evidence-based systemic cancer treatment and follow-up care.', image: images.imaging },
  { title: 'Immunotherapy', text: 'Cancer treatment options using immune-based therapeutic approaches.', image: images.imaging },
  { title: 'Brachytherapy', text: 'Specialized internal radiation therapy for suitable patients.', image: images.doctorPortrait },
  { title: 'Cancer Consultation & Treatment Planning', text: 'Personalized review of reports, scans and treatment pathways.', image: images.doctorHero },
];

const education = [
  { title: 'Understanding Cancer Treatment', text: 'Simple patient-friendly guidance about how oncology treatment plans are made and why every case is different.', image: images.doctorHero },
  { title: 'Radiotherapy Awareness', text: 'Information about radiotherapy, precision techniques, possible side effects and care during treatment.', image: images.radiotherapy },
  { title: 'Chemotherapy & Immunotherapy Basics', text: 'Clear explanations about systemic cancer treatments, preparation and follow-up care.', image: images.imaging },
  { title: 'Patient Preparation Guide', text: 'Helpful notes for patients before consultation, including reports, scans and previous treatment records to bring.', image: images.doctorPortrait },
];

const videoLinks = [
  { title: 'Patient Awareness Video', description: 'Add YouTube or Facebook video link here later.', url: '#', image: images.doctorHero },
  { title: 'Treatment Explanation Video', description: 'Add educational treatment video link here later.', url: '#', image: images.radiotherapy },
  { title: 'Clinic Guidance Video', description: 'Add appointment or patient preparation video here later.', url: '#', image: images.imaging },
];

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <main className="page">
      <section className="hero-bg">
        <nav className="nav">
          <div>
            <p className="brand">Dr Talha Maqsood Clinical Oncologist</p>
            <p className="tagline">Advanced Oncology & Radiotherapy Care</p>
          </div>
          <div className="tabs desktop-tabs">
            {tabs.map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'tab active' : 'tab'}>{tab}</button>)}
          </div>
          <button className="menu"><Menu size={20}/></button>
        </nav>
        <div className="mobile-tabs">
          {tabs.map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'tab active' : 'tab'}>{tab}</button>)}
        </div>
        <div className="content">
          {activeTab === 'Home' && <HomePage />}
          {activeTab === 'Treatment Services' && <TreatmentServices />}
          {activeTab === 'Educational Material' && <EducationalMaterial />}
          {activeTab === 'Contact' && <ContactPage />}
        </div>
      </section>
      <footer>© 2026 Dr Talha Maqsood Clinical Oncologist. All rights reserved.</footer>
    </main>
  );
}

function HomePage(){
  return <div className="section-stack"><div className="hero-grid"><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.6}}><div className="badge"><Award size={16}/> FRCR & FCPS Certified Consultant</div><h1>Dr Talha Maqsood Clinical Oncologist</h1><p className="lead">Consultant Clinical Oncologist and Assistant Professor at CMH Rawalpindi, with expertise in Stereotactic Radiotherapy, Radio Surgery, Chemotherapy, Immunotherapy, SABR, VMAT and Brachytherapy.</p><a className="primary-btn" href="mailto:oncologist.talha@gmail.com">Book Appointment <ChevronRight size={20}/></a></motion.div><motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.6,delay:.1}}><DoctorCard/></motion.div></div><div className="three-grid"><ImageFeature image={images.radiotherapy} title="Advanced Radiotherapy" text="Modern radiation treatment facilities for precision oncology care."/><ImageFeature image={images.imaging} title="Diagnostic Review" text="Careful assessment of scans, reports and previous treatment records."/><ImageFeature image={images.doctorPortrait} title="Specialist Consultation" text="Patient-focused consultation with clear guidance and treatment planning."/></div></div>
}

function TreatmentServices(){
  return <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.45}}><p className="eyebrow">Treatment Services</p><h2>Specialized Cancer Care Services</h2><p className="lead small">Comprehensive oncology treatment services focused on accurate planning, advanced technology and patient-centered care.</p><div className="three-grid top-gap"><ImageFeature image={images.radiotherapy} title="Radiotherapy Unit" text="Precision-focused treatment setup for advanced cancer care."/><ImageFeature image={images.doctorPortrait} title="Treatment Planning" text="Specialist-led review and personalized treatment pathways."/><ImageFeature image={images.imaging} title="Imaging Support" text="Relevant imaging and reports reviewed for clinical decisions."/></div><div className="service-grid">{services.map((s,i)=><div className="card image-card" key={s.title}><img src={s.image} alt={s.title}/><div className="card-body"><div className="iconbox">{i%3===0?<Activity/>:i%3===1?<Stethoscope/>:<ShieldCheck/>}</div><h3>{s.title}</h3><p>{s.text}</p></div></div>)}</div></motion.div>
}

function EducationalMaterial(){
  return <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.45}}><p className="eyebrow">Educational Material</p><h2>Patient Education & Awareness</h2><p className="lead small">A dedicated section for patient guidance, awareness articles and simple explanations about cancer care and treatment options.</p><div className="two-grid">{education.map(item=><div className="card image-card" key={item.title}><img src={item.image} alt={item.title}/><div className="card-body"><div className="iconbox"><BookOpen/></div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div><div className="video-section"><p className="eyebrow">Videos</p><h2 className="h3">Video Education Library</h2><p className="muted">Video links can be added here later for patient awareness, treatment explanation and clinic guidance.</p><div className="three-grid">{videoLinks.map(v=><a className="card video-card" href={v.url} key={v.title}><div className="video-image"><img src={v.image} alt={v.title}/><span><PlayCircle size={34}/></span></div><div className="card-body"><h3>{v.title}</h3><p>{v.description}</p><b>Video link coming soon</b></div></a>)}</div></div></motion.div>
}

function ContactPage(){
  return <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="contact-grid"><div><p className="eyebrow">Contact</p><h2>Book an Appointment</h2><p className="lead small">For consultation and appointment details, contact the clinic during working hours.</p><div className="card image-card note-card"><img src={images.doctorPortrait} alt="Clinic"/><div className="note"><HeartPulse/><p>Please bring previous reports, scans, biopsy results and treatment records for better consultation.</p></div></div></div><div className="contact-card"><ContactCard icon={MapPin} label="Location" value="CMH Rawalpindi"/><ContactCard icon={Clock} label="Timing" value="08:00 AM - 03:00 PM"/><ContactCard icon={Mail} label="Email" value="oncologist.talha@gmail.com"/><ContactCard icon={Phone} label="Phone" value="03027961900, 03127236623"/><a className="primary-btn full" href="mailto:oncologist.talha@gmail.com">Email for Appointment <Calendar size={20}/></a><a className="whatsapp-btn" href="https://wa.me/923027961900" target="_blank">WhatsApp Appointment</a></div></motion.div>
}

function DoctorCard(){return <div className="doctor-card"><img src={images.doctorHero} alt="Dr Talha Maqsood"/><div className="doctor-info"><div className="iconbox large"><Stethoscope/></div><h3>Dr Talha Maqsood Clinical Oncologist</h3><p>CMH Rawalpindi</p><Info icon={Clock} text="08:00 AM - 03:00 PM"/><Info icon={MapPin} text="CMH Rawalpindi"/><Info icon={Mail} text="oncologist.talha@gmail.com"/><Info icon={Phone} text="03027961900, 03127236623"/></div></div>}
function ImageFeature({image,title,text}){return <div className="card image-feature"><img src={image} alt={title}/><div className="card-body"><h3>{title}</h3><p>{text}</p></div></div>}
function Info({icon:Icon,text}){return <div className="info"><Icon size={19}/><span>{text}</span></div>}
function ContactCard({icon:Icon,label,value}){return <div className="contact-row"><div><Icon size={20}/></div><section><p>{label}</p><b>{value}</b></section></div>}

createRoot(document.getElementById('root')).render(<App />);
