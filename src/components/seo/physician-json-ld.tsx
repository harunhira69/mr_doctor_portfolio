import { siteConfig } from "@/config/site";
import { chambers } from "@/content/chambers";
import { doctor } from "@/content/doctor";

export function PhysicianJsonLd() {
  const socialLinks = Object.values(siteConfig.socialLinks).filter(
    (url): url is string => Boolean(url),
  );

  const physician = {
    "@type": "Physician",
    "@id": `${siteConfig.domain}/#physician`,
    name: doctor.fullName,
    description: doctor.shortBio,
    url: siteConfig.domain,
    image: new URL(
      doctor.profileImage,
      siteConfig.domain,
    ).toString(),
    telephone: doctor.phone,
    medicalSpecialty: doctor.specialty,
    jobTitle: doctor.designation,

    address: chambers.map((chamber) => chamber.address),

    hasMap: chambers
      .map((chamber) => chamber.mapUrl)
      .filter((url): url is string => Boolean(url)),

    ...(doctor.organization
      ? {
          parentOrganization: {
            "@type": "MedicalOrganization",
            name: doctor.organization,
          },
        }
      : {}),

    ...(doctor.bmdcRegistration
      ? {
          identifier: {
            "@type": "PropertyValue",
            name: "BMDC Registration",
            value: doctor.bmdcRegistration,
          },
        }
      : {}),

    ...(socialLinks.length > 0
      ? {
          sameAs: socialLinks,
        }
      : {}),
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        name: siteConfig.name,
        url: siteConfig.domain,
        description: siteConfig.description,
        inLanguage: "bn-BD",
      },
      physician,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}