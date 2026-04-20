export type Language = 'nl' | 'fr' | 'en';

export interface Translations {
  nav: {
    specialists: string;
    expertise: string;
    faq: string;
    contact: string;
    appointment: string;
    logoSubtitle: string;
  };
  banner: {
    message: string;
    dismiss: string;
  };
  hero: {
    subtitle: string;
    title: string;
    titleAccent: string;
    description: string;
    cta: string;
    ctaSecondary: string;
    statYears: string;
    statYearsLabel: string;
    statSpecialists: string;
    statSpecialistsLabel: string;
  };
  specialists: {
    label: string;
    title: string;
    description: string;
    isabelle: {
      name: string;
      role: string;
    };
    eva: {
      name: string;
      role: string;
    };
    catherine: {
      name: string;
      role: string;
    };
  };
  expertise: {
    label: string;
    title: string;
    description: string;
    items: {
      asthma: { title: string; description: string };
      copd: { title: string; description: string };
      infections: { title: string; description: string };
      tumors: { title: string; description: string };
      lungFunction: { title: string; description: string };
      preOperative: { title: string; description: string };
      sleepDisorders: { title: string; description: string };
    };
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  practicalInfo: {
    label: string;
    title: string;
    items: {
      results: { title: string; description: string };
      prescriptions: { title: string; description: string };
      rates: { title: string; description: string };
      payment: { title: string; description: string };
    };
  };
  contact: {
    label: string;
    title: string;
    address: string;
    addressValue: string;
    phone: string;
    phoneValue: string;
    phoneHidden: string;
    email: string;
    emailValue: string;
    hours: string;
    hoursData: Array<{ day: string; time: string }>;
    route: string;
    call: string;
  };
  footer: {
    rights: string;
    privacy: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  nl: {
    nav: {
      specialists: 'Specialisten',
      expertise: 'Expertise',
      faq: 'FAQ',
      contact: 'Contact',
      appointment: 'Maak een afspraak',
      logoSubtitle: 'Pneumologie • Longziekten',
    },
    banner: {
      message: 'Wij nemen momenteel geen nieuwe patiënten aan.',
      dismiss: 'Sluiten',
    },
    hero: {
      subtitle: 'Longziekten',
      title: 'Welkom bij',
      titleAccent: 'dr. Wauters &\ndr. Vandoorne',
      description:
        'Gespecialiseerde zorg voor uw longen en luchtwegen. In onze praktijk combineren wij klinische expertise met persoonlijke aandacht voor hoogwaardige diagnostiek.',
      cta: 'Maak een afspraak',
      ctaSecondary: 'Onze expertise',
      statYears: '20+',
      statYearsLabel: 'jaar ervaring',
      statSpecialists: '2',
      statSpecialistsLabel: 'specialisten',
    },
    specialists: {
      label: 'Ons team',
      title: 'Onze Artsen &\nMedewerkers.',
      description:
        'Een toegewijd team van longartsen dat streeft naar de allerbeste zorg. Onze multidisciplinaire aanpak garandeert een behandeling op maat van elke patiënt.',
      isabelle: {
        name: 'Dr. Isabelle Wauters',
        role: 'Pneumoloog',
      },
      eva: {
        name: 'Dr. Eva Vandoorne',
        role: 'Pneumoloog',
      },
      catherine: {
        name: 'Catherine Wauters',
        role: 'Assistent',
      },
    },
    expertise: {
      label: 'Onze expertise',
      title: 'Algemene Pneumologie\n(Longziekten)',
      description:
        'Wij bieden een breed scala aan longheelkundige onderzoeken en behandelingen. Van diagnostiek tot langdurige opvolging, wij staan klaar voor elke ademhaling.',
      items: {
        asthma: {
          title: 'Astma & Allergie',
          description:
            'Diagnose en behandeling van astma en allergische aandoeningen van de luchtwegen.',
        },
        copd: {
          title: 'COPD',
          description:
            'Chronisch obstructief longlijden: opvolging, medicatie en revalidatiebegeleiding.',
        },
        infections: {
          title: 'Luchtweginfecties',
          description:
            'Behandeling van pneumonie, bronchitis en andere infecties van de luchtwegen.',
        },
        tumors: {
          title: 'Tumoren',
          description:
            'Screening, diagnose en doorverwijzing bij longkanker en andere thoracale tumoren.',
        },
        lungFunction: {
          title: 'Longfunctieonderzoek',
          description:
            'Spirometrie en uitgebreide longfunctietesten voor nauwkeurige diagnostiek.',
        },
        preOperative: {
          title: 'Pre-operatief nazicht',
          description:
            'Longfunctie-evaluatie voorafgaand aan een chirurgische ingreep.',
        },
        sleepDisorders: {
          title: 'Slaapstoornissen',
          description:
            'Diagnostiek en behandeling van slaapapneu en snurken.',
        },
      },
    },
    faq: {
      title: 'Veelgestelde Vragen.',
      items: [
        {
          question: 'Wat moet ik meebrengen naar een eerste consultatie?',
          answer:
            'Breng uw identiteitskaart, kleefbriefjes van uw mutualiteit, een verwijsbrief van uw huisarts (indien beschikbaar) en eventuele eerdere medische verslagen of beeldvorming mee.',
        },
        {
          question: 'Heb ik een verwijsbrief nodig?',
          answer:
            'Een verwijsbrief is niet verplicht, maar wordt wel aanbevolen. Met een verwijsbrief van uw huisarts wordt de consultatie beter terugbetaald door uw mutualiteit.',
        },
        {
          question: 'Zijn de consultaties terugbetaalbaar?',
          answer:
            'Ja, onze consultaties worden grotendeels terugbetaald door de mutualiteit. Het exacte bedrag hangt af van uw verzekeringsstatus. Wij zijn geconventioneerd.',
        },
        {
          question: 'Hoe lang duurt een consultatie?',
          answer:
            'Een eerste consultatie duurt gemiddeld 30 tot 45 minuten, inclusief eventueel longfunctieonderzoek. Vervolgconsultaties duren doorgaans 15 tot 20 minuten.',
        },
        {
          question: 'Kan ik mijn afspraak annuleren of verplaatsen?',
          answer:
            'Ja, wij vragen u om minstens 24 uur op voorhand te annuleren of te verplaatsen. U kunt dit telefonisch doen of via het online afspraaksysteem.',
        },
        {
          question: 'Wat als ik dringend een arts nodig heb?',
          answer:
            'Bij spoedeisende situaties belt u het noodnummer 112 of gaat u naar de spoeddienst van het dichtstbijzijnde ziekenhuis. Onze praktijk is niet uitgerust voor spoedgevallen.',
        },
        {
          question: 'Worden longfunctietesten ter plaatse uitgevoerd?',
          answer:
            'Ja, wij beschikken over moderne apparatuur om longfunctietesten (spirometrie) ter plaatse uit te voeren tijdens uw consultatie.',
        },
        {
          question: 'Is de praktijk toegankelijk voor mindervaliden?',
          answer:
            'Ja, onze praktijk is volledig rolstoeltoegankelijk. Er is ook voldoende parkeergelegenheid voor mindervaliden vlakbij de ingang.',
        },
        {
          question: 'Kan ik een dringende afspraak maken?',
          answer:
            'U kan geen afspraak verwachten op de dag zelf. Voor dringende afspraken worden specifieke sloten vrijgehouden. Graag behouden we deze sloten voor echte dringende problemen. Deze sloten worden pas geboekt na overleg met ons en op verwijzing van de huisarts. Indien u intussen reeds elders geholpen werd, gelieve de afspraak te annuleren.',
        },
      ],
    },
    practicalInfo: {
      label: 'Praktische informatie',
      title: 'Praktische\nInformatie.',
      items: {
        results: {
          title: 'Uitslagen',
          description:
            'Als het gaat om routine resultaten van onderzoeken zoals een bloedonderzoek of een foto van de longen, kan u bellen. Dit vervangt geenszins een echte consultatie! Verwacht hier enkel een kort antwoord. Heb je nog bijkomende vragen of verwacht je een grondige bespreking, dan maak je beter een afspraak voor een raadpleging.',
        },
        prescriptions: {
          title: 'Voorschriften',
          description:
            'Regelmatige controles zijn van belang voor het goede verloop van een behandeling. Daarom kunnen voorschriften niet langer telefonisch of per email worden aangevraagd. Voorschriften kunnen gemaakt worden tijdens de raadpleging. Kijk goed na welke en hoeveel medicatie je nodig hebt. Voor het hernieuwen van voorschriften kan je ook bij uw huisarts terecht.',
        },
        rates: {
          title: 'Tarieven',
          description:
            'Conventietarieven worden gevolgd. Bij uitgebreide longfunctieonderzoeken wordt derdebetalersregeling toegepast. Dit betekent dat je voor deze testen enkel het remgeld betaalt.',
        },
        payment: {
          title: 'Betaling',
          description:
            'Betaling is mogelijk via contant geld of met bancontact.',
        },
      },
    },
    contact: {
      label: 'Contact',
      title: 'Contacteer Ons.',
      address: 'Adres',
      addressValue: 'Belgielaan 23a, 3090 Overijse, België',
      phone: 'Telefoon',
      phoneValue: '02/688.03.57',
      phoneHidden: 'Scroll door de FAQ om ons telefoonnummer te zien',
      email: 'E-mail',
      emailValue: 'info@dokterwauters.be',
      hours: 'Openingsuren',
      hoursData: [
        { day: 'Maandag', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Dinsdag', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Woensdag', time: '08:30 – 12:30' },
        { day: 'Donderdag', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Vrijdag', time: '08:30 – 12:30 / 13:30 – 16:00' },
        { day: 'Zaterdag', time: 'Gesloten' },
        { day: 'Zondag', time: 'Gesloten' },
      ],
      route: 'Start route',
      call: 'Bel ons',
    },
    footer: {
      rights: 'Alle rechten voorbehouden.',
      privacy: 'Privacy',
      disclaimer: 'Disclaimer',
    },
  },
  fr: {
    nav: {
      specialists: 'Spécialistes',
      expertise: 'Expertise',
      faq: 'FAQ',
      contact: 'Contact',
      appointment: 'Prendre rendez-vous',
      logoSubtitle: 'Pneumologie • Maladies pulmonaires',
    },
    banner: {
      message: "Nous n'acceptons actuellement pas de nouveaux patients.",
      dismiss: 'Fermer',
    },
    hero: {
      subtitle: 'Maladies pulmonaires',
      title: 'Bienvenue chez',
      titleAccent: 'dr. Wauters &\ndr. Vandoorne',
      description:
        'Soins spécialisés pour vos poumons et vos voies respiratoires. Dans notre cabinet, nous combinons expertise clinique et attention personnelle pour un diagnostic de haute qualité.',
      cta: 'Prendre rendez-vous',
      ctaSecondary: 'Notre expertise',
      statYears: '20+',
      statYearsLabel: 'ans d\'expérience',
      statSpecialists: '2',
      statSpecialistsLabel: 'spécialistes',
    },
    specialists: {
      label: 'Notre équipe',
      title: 'Nos Médecins &\nCollaborateurs.',
      description:
        'Une équipe dévouée de pneumologues qui s\'efforce d\'offrir les meilleurs soins. Notre approche multidisciplinaire garantit un traitement personnalisé pour chaque patient.',
      isabelle: {
        name: 'Dr. Isabelle Wauters',
        role: 'Pneumologue',
      },
      eva: {
        name: 'Dr. Eva Vandoorne',
        role: 'Pneumologue',
      },
      catherine: {
        name: 'Catherine Wauters',
        role: 'Assistante',
      },
    },
    expertise: {
      label: 'Notre expertise',
      title: 'Pneumologie Générale\n(Maladies pulmonaires)',
      description:
        'Nous proposons un large éventail d\'examens et de traitements pulmonaires. Du diagnostic au suivi à long terme, nous sommes là pour chaque respiration.',
      items: {
        asthma: {
          title: 'Asthme & Allergie',
          description:
            'Diagnostic et traitement de l\'asthme et des affections allergiques des voies respiratoires.',
        },
        copd: {
          title: 'BPCO',
          description:
            'Bronchopneumopathie chronique obstructive : suivi, médication et accompagnement en réadaptation.',
        },
        infections: {
          title: 'Infections respiratoires',
          description:
            'Traitement de la pneumonie, de la bronchite et d\'autres infections des voies respiratoires.',
        },
        tumors: {
          title: 'Tumeurs',
          description:
            'Dépistage, diagnostic et orientation en cas de cancer du poumon et d\'autres tumeurs thoraciques.',
        },
        lungFunction: {
          title: 'Exploration fonctionnelle',
          description:
            'Spirométrie et tests de fonction pulmonaire complets pour un diagnostic précis.',
        },
        preOperative: {
          title: 'Bilan pré-opératoire',
          description:
            'Évaluation de la fonction pulmonaire avant une intervention chirurgicale.',
        },
        sleepDisorders: {
          title: 'Troubles du sommeil',
          description:
            'Diagnostic et traitement de l\'apnée du sommeil et du ronflement.',
        },
      },
    },
    faq: {
      title: 'Questions Fréquentes.',
      items: [
        {
          question: 'Que dois-je apporter lors d\'une première consultation ?',
          answer:
            'Apportez votre carte d\'identité, vos vignettes de mutuelle, une lettre de référence de votre médecin traitant (si disponible) et tout rapport médical ou imagerie antérieure.',
        },
        {
          question: 'Ai-je besoin d\'une lettre de référence ?',
          answer:
            'Une lettre de référence n\'est pas obligatoire, mais elle est recommandée. Avec une lettre de votre médecin traitant, la consultation sera mieux remboursée par votre mutuelle.',
        },
        {
          question: 'Les consultations sont-elles remboursées ?',
          answer:
            'Oui, nos consultations sont largement remboursées par la mutuelle. Le montant exact dépend de votre statut d\'assurance. Nous sommes conventionnés.',
        },
        {
          question: 'Combien de temps dure une consultation ?',
          answer:
            'Une première consultation dure en moyenne 30 à 45 minutes, y compris d\'éventuels tests de fonction pulmonaire. Les consultations de suivi durent généralement 15 à 20 minutes.',
        },
        {
          question: 'Puis-je annuler ou déplacer mon rendez-vous ?',
          answer:
            'Oui, nous vous demandons d\'annuler ou de déplacer au moins 24 heures à l\'avance. Vous pouvez le faire par téléphone ou via le système de rendez-vous en ligne.',
        },
        {
          question: 'Que faire en cas d\'urgence ?',
          answer:
            'En cas d\'urgence, appelez le 112 ou rendez-vous aux urgences de l\'hôpital le plus proche. Notre cabinet n\'est pas équipé pour les urgences.',
        },
        {
          question: 'Les tests de fonction pulmonaire sont-ils réalisés sur place ?',
          answer:
            'Oui, nous disposons d\'équipements modernes pour effectuer des tests de fonction pulmonaire (spirométrie) sur place lors de votre consultation.',
        },
        {
          question: 'Le cabinet est-il accessible aux personnes à mobilité réduite ?',
          answer:
            'Oui, notre cabinet est entièrement accessible en fauteuil roulant. Un parking pour personnes à mobilité réduite est également disponible à proximité de l\'entrée.',
        },
        {
          question: 'Puis-je obtenir un rendez-vous urgent ?',
          answer:
            'Vous ne pouvez pas vous attendre à un rendez-vous le jour même. Des créneaux spécifiques sont réservés pour les rendez-vous urgents. Nous souhaitons conserver ces créneaux pour les vrais problèmes urgents. Ces créneaux ne sont réservés qu\'après concertation avec nous et sur référence du médecin traitant. Si vous avez entre-temps été aidé(e) ailleurs, veuillez annuler le rendez-vous.',
        },
      ],
    },
    practicalInfo: {
      label: 'Informations pratiques',
      title: 'Informations\nPratiques.',
      items: {
        results: {
          title: 'Résultats',
          description:
            'Pour les résultats de routine tels qu\'une prise de sang ou une radiographie pulmonaire, vous pouvez appeler. Cela ne remplace en aucun cas une vraie consultation ! Attendez-vous uniquement à une réponse brève. Si vous avez des questions supplémentaires ou souhaitez une discussion approfondie, il est préférable de prendre rendez-vous pour une consultation.',
        },
        prescriptions: {
          title: 'Prescriptions',
          description:
            'Des contrôles réguliers sont importants pour le bon déroulement d\'un traitement. C\'est pourquoi les prescriptions ne peuvent plus être demandées par téléphone ou par e-mail. Les prescriptions sont établies lors de la consultation. Vérifiez bien quels médicaments et en quelle quantité vous avez besoin. Pour le renouvellement des prescriptions, vous pouvez également vous adresser à votre médecin traitant.',
        },
        rates: {
          title: 'Tarifs',
          description:
            'Les tarifs conventionnés sont appliqués. Pour les examens de fonction pulmonaire approfondis, le régime du tiers payant est appliqué. Cela signifie que vous ne payez que le ticket modérateur pour ces tests.',
        },
        payment: {
          title: 'Paiement',
          description:
            'Le paiement est possible en espèces ou par Bancontact.',
        },
      },
    },
    contact: {
      label: 'Contact',
      title: 'Contactez-Nous.',
      address: 'Adresse',
      addressValue: 'Belgielaan 23a, 3090 Overijse, Belgique',
      phone: 'Téléphone',
      phoneValue: '02/688.03.57',
      phoneHidden: 'Parcourez la FAQ pour voir notre numéro de téléphone',
      email: 'E-mail',
      emailValue: 'info@dokterwauters.be',
      hours: 'Heures d\'ouverture',
      hoursData: [
        { day: 'Lundi', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Mardi', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Mercredi', time: '08:30 – 12:30' },
        { day: 'Jeudi', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Vendredi', time: '08:30 – 12:30 / 13:30 – 16:00' },
        { day: 'Samedi', time: 'Fermé' },
        { day: 'Dimanche', time: 'Fermé' },
      ],
      route: 'Itinéraire',
      call: 'Appelez-nous',
    },
    footer: {
      rights: 'Tous droits réservés.',
      privacy: 'Confidentialité',
      disclaimer: 'Avertissement',
    },
  },
  en: {
    nav: {
      specialists: 'Specialists',
      expertise: 'Expertise',
      faq: 'FAQ',
      contact: 'Contact',
      appointment: 'Book appointment',
      logoSubtitle: 'Pulmonology • Lung Diseases',
    },
    banner: {
      message: 'We are currently not accepting new patients.',
      dismiss: 'Close',
    },
    hero: {
      subtitle: 'Lung Diseases',
      title: 'Welcome to',
      titleAccent: 'dr. Wauters &\ndr. Vandoorne',
      description:
        'Specialized care for your lungs and airways. In our practice, we combine clinical expertise with personal attention for high-quality diagnostics.',
      cta: 'Book appointment',
      ctaSecondary: 'Our expertise',
      statYears: '20+',
      statYearsLabel: 'years of experience',
      statSpecialists: '2',
      statSpecialistsLabel: 'specialists',
    },
    specialists: {
      label: 'Our team',
      title: 'Our Doctors &\nAssociates.',
      description:
        'A dedicated team of pulmonologists striving for the very best care. Our multidisciplinary approach guarantees a tailored treatment for every patient.',
      isabelle: {
        name: 'Dr. Isabelle Wauters',
        role: 'Pulmonologist',
      },
      eva: {
        name: 'Dr. Eva Vandoorne',
        role: 'Pulmonologist',
      },
      catherine: {
        name: 'Catherine Wauters',
        role: 'Assistant',
      },
    },
    expertise: {
      label: 'Our expertise',
      title: 'General Pulmonology\n(Lung Diseases)',
      description:
        'We offer a wide range of pulmonary examinations and treatments. From diagnostics to long-term follow-up, we are here for every breath.',
      items: {
        asthma: {
          title: 'Asthma & Allergy',
          description:
            'Diagnosis and treatment of asthma and allergic conditions of the airways.',
        },
        copd: {
          title: 'COPD',
          description:
            'Chronic obstructive pulmonary disease: follow-up, medication and rehabilitation support.',
        },
        infections: {
          title: 'Respiratory Infections',
          description:
            'Treatment of pneumonia, bronchitis and other respiratory tract infections.',
        },
        tumors: {
          title: 'Tumors',
          description:
            'Screening, diagnosis and referral for lung cancer and other thoracic tumors.',
        },
        lungFunction: {
          title: 'Lung Function Testing',
          description:
            'Spirometry and comprehensive lung function tests for accurate diagnostics.',
        },
        preOperative: {
          title: 'Pre-operative Assessment',
          description:
            'Lung function evaluation prior to a surgical procedure.',
        },
        sleepDisorders: {
          title: 'Sleep Disorders',
          description:
            'Diagnosis and treatment of sleep apnea and snoring.',
        },
      },
    },
    faq: {
      title: 'Frequently Asked Questions.',
      items: [
        {
          question: 'What should I bring to a first consultation?',
          answer:
            'Bring your identity card, health insurance stickers, a referral letter from your GP (if available) and any previous medical reports or imaging.',
        },
        {
          question: 'Do I need a referral letter?',
          answer:
            'A referral letter is not mandatory, but is recommended. With a referral from your GP, the consultation will be better reimbursed by your health insurance.',
        },
        {
          question: 'Are consultations reimbursed?',
          answer:
            'Yes, our consultations are largely reimbursed by health insurance. The exact amount depends on your insurance status. We are conventioned.',
        },
        {
          question: 'How long does a consultation take?',
          answer:
            'A first consultation takes an average of 30 to 45 minutes, including possible lung function tests. Follow-up consultations typically last 15 to 20 minutes.',
        },
        {
          question: 'Can I cancel or reschedule my appointment?',
          answer:
            'Yes, we ask you to cancel or reschedule at least 24 hours in advance. You can do this by phone or via the online appointment system.',
        },
        {
          question: 'What if I urgently need a doctor?',
          answer:
            'In case of emergency, call 112 or go to the emergency department of the nearest hospital. Our practice is not equipped for emergencies.',
        },
        {
          question: 'Are lung function tests performed on-site?',
          answer:
            'Yes, we have modern equipment to perform lung function tests (spirometry) on-site during your consultation.',
        },
        {
          question: 'Is the practice accessible for people with disabilities?',
          answer:
            'Yes, our practice is fully wheelchair accessible. There is also ample parking for disabled persons near the entrance.',
        },
        {
          question: 'Can I get an urgent appointment?',
          answer:
            'You cannot expect an appointment on the same day. Specific slots are reserved for urgent appointments. We prefer to keep these slots for genuinely urgent problems. These slots are only booked after consultation with us and on referral from your GP. If you have since been helped elsewhere, please cancel the appointment.',
        },
      ],
    },
    practicalInfo: {
      label: 'Practical information',
      title: 'Practical\nInformation.',
      items: {
        results: {
          title: 'Test Results',
          description:
            'For routine results such as blood tests or lung X-rays, you can call. This does not replace a real consultation! Expect only a brief answer. If you have additional questions or expect a thorough discussion, it is better to make an appointment for a consultation.',
        },
        prescriptions: {
          title: 'Prescriptions',
          description:
            'Regular check-ups are important for the proper course of treatment. Therefore, prescriptions can no longer be requested by phone or email. Prescriptions are issued during the consultation. Please check carefully which medication and how much you need. For prescription renewals, you can also contact your GP.',
        },
        rates: {
          title: 'Rates',
          description:
            'Convention rates are applied. For comprehensive lung function tests, the third-party payer system is used. This means you only pay the co-payment for these tests.',
        },
        payment: {
          title: 'Payment',
          description:
            'Payment is possible by cash or Bancontact.',
        },
      },
    },
    contact: {
      label: 'Contact',
      title: 'Contact Us.',
      address: 'Address',
      addressValue: 'Belgielaan 23a, 3090 Overijse, Belgium',
      phone: 'Phone',
      phoneValue: '02/688.03.57',
      phoneHidden: 'Scroll through the FAQ to see our phone number',
      email: 'Email',
      emailValue: 'info@dokterwauters.be',
      hours: 'Opening hours',
      hoursData: [
        { day: 'Monday', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Tuesday', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Wednesday', time: '08:30 – 12:30' },
        { day: 'Thursday', time: '08:30 – 12:30 / 13:30 – 17:30' },
        { day: 'Friday', time: '08:30 – 12:30 / 13:30 – 16:00' },
        { day: 'Saturday', time: 'Closed' },
        { day: 'Sunday', time: 'Closed' },
      ],
      route: 'Get directions',
      call: 'Call us',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      disclaimer: 'Disclaimer',
    },
  },
};
