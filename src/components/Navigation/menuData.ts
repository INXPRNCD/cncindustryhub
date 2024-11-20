interface MenuItem {
  title: string;
  href: string;
  isDirectLink?: boolean;
  clusters?: {
    title: string;
    href: string;
    subtopics: {
      title: string;
      href: string;
    }[];
  }[];
}

export const menuItems: MenuItem[] = [
  {
    title: "CNC-Guide",
    href: "/cnc",
    isDirectLink: true
  },
  {
    title: "Grundlagen & Technologie",
    href: "/grundlagen-technologie",
    clusters: [
      {
        title: "CNC-Grundlagen",
        href: "/grundlagen",
        subtopics: [
          { title: "Die Grundlagen der CNC-Technologie", href: "/grundlagen/einfuehrung" },
          { title: "Wie funktioniert CNC?", href: "/grundlagen/wie-funktioniert-cnc" },
          { title: "Die Entwicklung und Fortschritte", href: "/grundlagen/entwicklung" },
          { title: "CNC-Steuerungssysteme", href: "/grundlagen/steuerungssysteme" },
          { title: "Wichtige Begriffe aus der CNC-Welt", href: "/grundlagen/wichtige-begriffe" },
          { title: "CNC in der Industrie 4.0", href: "/grundlagen/industrie-4-0" }
        ]
      },
      {
        title: "Technologie & Innovation",
        href: "/technologie",
        subtopics: [
          { title: "Industrie 4.0 und CNC", href: "/technologie/industrie40" },
          { title: "KI in der CNC-Technologie", href: "/technologie/ki" },
          { title: "Robotik und CNC", href: "/technologie/robotik" },
          { title: "Maschinelles Lernen", href: "/technologie/ml" },
          { title: "Blockchain und Big Data", href: "/technologie/blockchain" }
        ]
      },
      {
        title: "CNC-Programmierung",
        href: "/programmierung",
        subtopics: [
          { title: "Grundlagen der CNC-Programmierung", href: "/programmierung/grundlagen" },
          { title: "CAM-Software", href: "/programmierung/cam" },
          { title: "Fortgeschrittene G-Code-Programmierung", href: "/programmierung/fortgeschritten" },
          { title: "CNC-Steuerungen", href: "/programmierung/steuerungen" },
          { title: "Echtzeitsteuerung", href: "/programmierung/echtzeit" }
        ]
      }
    ]
  },
  {
    title: "Maschinen & Komponenten",
    href: "/maschinen-komponenten",
    clusters: [
      {
        title: "CNC-Maschinentypen",
        href: "/maschinen",
        subtopics: [
          { title: "Arten von CNC-Maschinen", href: "/maschinen/grundtypen" },
          { title: "5-Achsen- und Hybrid-CNC-Systeme", href: "/maschinen/5-achsen" },
          { title: "CNC-Router und Graviermaschinen", href: "/maschinen/cnc-router-und-graviermaschinen" },
          { title: "Laser-CNC-Systeme", href: "/maschinen/laser" },
          { title: "Wasserstrahl- und Plasmaschneiden", href: "/maschinen/wasserstrahl" },
          { title: "Die richtige CNC-Maschine auswählen", href: "/maschinen/richtige-cnc-maschine" }
        ]
      },
      {
        title: "Komponenten & Werkzeuge",
        href: "/komponenten",
        subtopics: [
          { title: "Wichtige CNC-Komponenten", href: "/komponenten/grundlagen" },
          { title: "Werkzeugtypen", href: "/komponenten/werkzeuge" },
          { title: "Hochgeschwindigkeitsspindeln", href: "/komponenten/spindeln" },
          { title: "Kühlmittel und Schmierstoffe", href: "/komponenten/kuehlmittel" },
          { title: "Verschleiß und Wartung", href: "/komponenten/wartung" },
          { title: "Werkzeuge für spezifische Materialien", href: "/komponenten/spezialwerkzeuge" }
        ]
      },
      {
        title: "Sicherheit & Wartung",
        href: "/sicherheit",
        subtopics: [
          { title: "Arbeitssicherheit", href: "/sicherheit/arbeitsschutz" },
          { title: "Wartungspläne", href: "/sicherheit/wartungsplaene" },
          { title: "Präventive Wartung", href: "/sicherheit/praevention" },
          { title: "Sicherheitszertifikate", href: "/sicherheit/zertifikate" }
        ]
      }
    ]
  },
  {
    title: "Anwendungen & Materialien",
    href: "/anwendungen-materialien",
    clusters: [
      {
        title: "Industrieanwendungen",
        href: "/industrieanwendungen",
        subtopics: [
          { title: "CNC in der Luft- und Raumfahrt", href: "/industrieanwendungen/aerospace" },
          { title: "CNC in der Automobilindustrie", href: "/industrieanwendungen/automotive" },
          { title: "CNC für die Medizintechnik", href: "/industrieanwendungen/medical" },
          { title: "CNC in der Elektronikfertigung", href: "/industrieanwendungen/electronics" },
          { title: "CNC im Bauwesen", href: "/industrieanwendungen/construction" },
          { title: "CNC in der Schmuckindustrie", href: "/industrieanwendungen/jewelry" },
          { title: "CNC in Landwirtschaft & Energie", href: "/industrieanwendungen/agriculture" },
          { title: "CNC in der Schifffahrt", href: "/industrieanwendungen/maritime" }
        ]
      },
      {
        title: "Materialbearbeitung",
        href: "/materialbearbeitung",
        subtopics: [
          { title: "Bearbeitung von Metallen", href: "/materialbearbeitung/metalle" },
          { title: "Verarbeitung von Kunststoffen", href: "/materialbearbeitung/kunststoffe" },
          { title: "Bearbeitung von Verbundwerkstoffen", href: "/materialbearbeitung/verbundwerkstoffe" },
          { title: "CNC für exotische Materialien", href: "/materialbearbeitung/exotisch" },
          { title: "Nachhaltigkeit", href: "/materialbearbeitung/nachhaltigkeit" }
        ]
      },
      {
        title: "Fertigungsmethoden",
        href: "/fertigung",
        subtopics: [
          { title: "CNC vs. Additive Fertigung", href: "/fertigung/vergleich-additiv" },
          { title: "Vergleich mit traditionellen Methoden", href: "/fertigung/traditionell" },
          { title: "Hybrid-CNC-Maschinen", href: "/fertigung/hybrid" }
        ]
      }
    ]
  },
  {
    title: "Business & Karriere",
    href: "/business-karriere",
    clusters: [
      {
        title: "Geschäftsstrategie & Investitionen",
        href: "/business",
        subtopics: [
          { title: "Kosten-Nutzen-Analyse", href: "/business/roi" },
          { title: "ROI und Finanzierung", href: "/business/finanzierung" },
          { title: "Markttrends", href: "/business/trends" }
        ]
      },
      {
        title: "Ausbildung & Karriere",
        href: "/karriere",
        subtopics: [
          { title: "Karrierewege und Spezialisierungen", href: "/karriere/wege" },
          { title: "Wichtige Zertifizierungen", href: "/karriere/zertifikate" },
          { title: "Weiterbildung und Gehaltsvergleiche", href: "/karriere/weiterbildung" }
        ]
      }
    ]
  },
  {
    title: "CNC Prozessberater",
    href: "/prozessberater",
    isDirectLink: true
  }
];