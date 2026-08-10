'use client';

import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Enemy Alien | The WWII Story Never Told",
  description = "Follow the journey of the Yamamoto family as they are uprooted from their lives and forced into internment camps. Enemy Alien is a landmark of cinema and Asian-American history.",
  image = "/masmoriya_A_close_up_shot_from_the_waist_up_photorealistic_hype_0123f083-5447-4ed4-90fe-07b7d5fe84af.png",
  url,
  type = "website",
  keywords = "Enemy Alien, Japanese Internment, WWII history, Asian-American experience, historical drama, Yamamoto family, internment camps",
  schema
}) => {
  const fullTitle = title;
  
  useEffect(() => {
    // Standard metadata
    document.title = fullTitle;
    
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph
    const siteUrl = window.location.origin;
    const currentUrl = window.location.href;
    const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? '' : '/'}${image}`;

    updateMeta('og:type', type, true);
    updateMeta('og:url', currentUrl, true);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', absoluteImage, true);

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:url', currentUrl);
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', absoluteImage);

    // Schema.org JSON-LD
    let script = document.querySelector('script[type="application/ld+json"]#seo-schema');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('id', 'seo-schema');
      document.head.appendChild(script);
    }
    
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mas Moriya",
      "image": absoluteImage,
      "@id": siteUrl,
      "url": siteUrl,
      "jobTitle": "Filmmaker",
      "sameAs": [
        "https://instagram.com/mas.moriya"
      ]
    };

    script.textContent = JSON.stringify(schema || defaultSchema);

    return () => {
      // We don't necessarily want to remove them on unmount as other components might not have SEO
      // but if we wanted to be clean we could.
    };
  }, [fullTitle, description, keywords, image, type, schema]);

  return null;
};

export default SEO;
