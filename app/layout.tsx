import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0B0D" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vivaengineering.in"),
  title: {
    default: "VIVA Engineering | Slitter Rewinder Machine Manufacturer Ahmedabad India",
    template: "%s | VIVA Engineering",
  },
  description:
    "Leading Slitter Rewinder Machine Manufacturer in Ahmedabad, Gujarat, India. High-speed automatic slitting rewinding machinery for BOPP tape, paper, flexible film, and aluminium foil converting with 16+ years experience & 500+ machines delivered worldwide.",
  keywords: [
    "Slitter Rewinder Machine Manufacturer",
    "Slitter Rewinder Machine Manufacturer Ahmedabad",
    "Slitter Rewinder Machine Manufacturer India",
    "3 Drive Slitting Rewinding Machine",
    "Paper Slitting Rewinding Machine",
    "Film Slitting Rewinding Machine",
    "Aluminium Foil Rewinding Machine",
    "BOPP Tape Cutting Machine",
    "Masking Tape Rewinding Machine",
    "Non-Woven Slitting Rewinding Machine",
    "Rotogravure Printing Machine",
    "Duplex Cantilever Slitter Rewinder",
    "Slitter Rewinder Machine Price in India",
    "Slitting Rewinding Machine HSN Code",
    "Converting Machinery Ahmedabad",
    "Jumbo Roll Paper Slitter Rewinder",
    "High Speed Slitting Machine",
  ],
  authors: [{ name: "VIVA Engineering" }],
  creator: "VIVA Engineering",
  publisher: "VIVA Engineering",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vivaengineering.in",
    siteName: "VIVA Engineering",
    title: "VIVA Engineering | Slitter Rewinder Machine Manufacturer Ahmedabad India",
    description:
      "Premier high-speed slitter rewinder machinery manufactured in Ahmedabad, Gujarat. ISO 9001:2015 certified, 500+ installations, 24/7 technical support. 3-Drive duplex cantilever slitters for paper, film, foil & non-woven.",
    images: [
      {
        url: "/categories/slitting_rewinding.jpg",
        width: 1200,
        height: 630,
        alt: "VIVA Engineering High Speed Slitter Rewinder Machine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIVA Engineering | Slitter Rewinder Machine Manufacturer",
    description:
      "Precision 3-drive slitter rewinder machines for paper, film, foil, and BOPP tape converting. Ahmedabad, Gujarat, India.",
    images: ["/categories/slitting_rewinding.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vivaengineering.in",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://vivaengineering.in/#website",
      url: "https://vivaengineering.in",
      name: "VIVA Engineering",
      description: "Slitter Rewinder Machine Manufacturer in Ahmedabad, Gujarat, India",
      publisher: {
        "@id": "https://vivaengineering.in/#organization",
      },
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://vivaengineering.in/#organization",
      name: "VIVA Engineering",
      url: "https://vivaengineering.in",
      logo: "https://vivaengineering.in/viva-mark.png",
      image: "https://vivaengineering.in/categories/slitting_rewinding.jpg",
      description:
        "Premier manufacturer of high-speed 3-drive slitter rewinder machines and converting equipment based in Ahmedabad, Gujarat, India. Over 16 years of expertise and 500+ machines delivered globally.",
      foundingDate: "2008",
      telephone: "+919265609416",
      email: "info@vivaengineering.in",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 21 K P Industrial Estate, Bakrol Bujrang",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382430",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.9868",
        longitude: "72.6462",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "ISO 9001:2015 Registered Manufacturing Plant",
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "3 Drive Slitting Rewinding Machine",
            description: "High-speed duplex cantilever slitter rewinder with 3 independent AC vector drives, closed-loop tension control, and ultrasonic EPC web guiding.",
            category: "Slitter Rewinder Machine",
            image: "https://vivaengineering.in/categories/slitting_rewinding.jpg",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Paper Slitting Rewinding Machine",
            description: "Heavy-duty paper roll slitter rewinder for kraft paper, thermal paper rolls, duplex board, and coated paperboard.",
            category: "Paper Converting Machinery",
            image: "https://vivaengineering.in/categories/slitting_rewinding.jpg",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Film Slitting Rewinding Machine",
            description: "Precision film slitter for BOPP, PET, CPP, LDPE, HDPE, and laminated barrier films with differential rewind shafts.",
            category: "Film Converting Machinery",
            image: "https://vivaengineering.in/categories/tape_cutting.jpg",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Aluminium Foil Rewinding Machine",
            description: "Zero-scratch converting line for pharmaceutical blister foil, confectionery wrap, and food-grade household aluminium foil.",
            category: "Foil Converting Machinery",
            image: "https://vivaengineering.in/categories/foil_rewinding.jpg",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "BOPP Tape Cutting & Core Cutting Machine",
            description: "Integrated production machine for BOPP packaging tape slitting, rewinding, and paper core cutting.",
            category: "Adhesive Tape Machinery",
            image: "https://vivaengineering.in/categories/masking_tape.jpg",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Masking Tape Rewinding Machine & Slicer",
            description: "5 HP variable speed masking tape rewinder and 2 HP high-precision circular knife tape slicer.",
            category: "Tape Converting Machinery",
            image: "https://vivaengineering.in/categories/masking_tape.jpg",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Non-Woven Slitting Rewinding Machine",
            description: "Slitter rewinder for spunbond, meltblown, SMS, and medical-grade non-woven fabrics.",
            category: "Non-Woven Machinery",
            image: "https://vivaengineering.in/categories/non_woven.jpg",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Rotogravure Printing Machine",
            description: "High-speed multicolor rotogravure press for flexible packaging films, paper, and aluminium foil.",
            category: "Printing Machinery",
            image: "https://vivaengineering.in/categories/roto_printing.jpg",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://vivaengineering.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a slitter rewinder machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A slitter rewinder machine is industrial converting equipment that unrolls large master jumbo rolls of paper, plastic film, aluminium foil, or tape, cuts the web into narrower predetermined widths using rotary shear or razor blades, and rewinds them onto individual cores under precise tension control to avoid distortion or wrinkling.",
          },
        },
        {
          "@type": "Question",
          name: "How does a 3 drive slitting rewinding machine work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 3 drive slitting rewinding machine features three dedicated electric vector motors: one controlling master roll unwind brake tension, and two independent AC motors driving the top and bottom differential rewind shafts. Combined with dancer feedback and electronic loadcells, this 3-drive system ensures synchronized speed matching and uniform roll density even with uneven substrate caliper.",
          },
        },
        {
          "@type": "Question",
          name: "Who manufactures slitter rewinder machines in Ahmedabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VIVA Engineering is a leading slitter rewinder machine manufacturer based in Ahmedabad, Gujarat, India (Plot No. 21 K P Industrial Estate, Bakrol Bujrang). With over 16 years of manufacturing experience and 500+ global installations, VIVA produces heavy-duty duplex cantilever slitters, paper slitters, film slitters, and foil rewinders.",
          },
        },
        {
          "@type": "Question",
          name: "What is the HSN code for a slitting and rewinding machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Slitter rewinder machines generally fall under Chapter 84 of the Harmonized System: HSN 8441 for paper and paperboard cutting and slitting machinery; HSN 8477 for plastic film slitting and rewinding equipment; and HSN 8420 / 8443 for coating and printing machinery. Contact VIVA Engineering for exact export documentation per substrate.",
          },
        },
        {
          "@type": "Question",
          name: "What materials can a Viva Engineering slitter rewinder convert?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Viva Engineering machines process a wide spectrum of substrates: flexible films (BOPP, PET, CPP, LDPE, HDPE, PVC), paper (kraft, thermal, art paper, duplex board 40–450 GSM), aluminium foil (pharmaceutical blister and household 9–80 Micron), BOPP & masking adhesive tapes, and non-woven spunbond/meltblown fabrics.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a slitter rewinder machine specification PDF?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Viva Engineering provides comprehensive specification sheets, dimensional GA drawings, electrical power ratings, and machinery PDF brochures. They can be downloaded directly from the Viva Engineering catalog page or requested via WhatsApp at +91 92656 09416.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get a slitter rewinder machine price in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Machine prices vary based on web width (600mm to 2200mm), operating speed (up to 600 m/min), drive architecture (3-drive AC vector), and substrate options. Converters can submit their roll requirements to Viva Engineering via phone (+91 92656 09416), WhatsApp, or the online RFQ form to receive an engineering proposal within 24 business hours.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
