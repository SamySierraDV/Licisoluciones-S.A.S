import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  ogImage?: string;
}

export default function Seo({
  title,
  description,
  path,
  ogType = 'website',
  ogImage = 'https://licisoluciones.com/og-image.jpg',
}: SeoProps) {
  const canonicalUrl = `https://licisoluciones.com${path}`;
  const fullTitle = `${title} | LICISOLUCIONES S.A.S BIC`;

  return (
    <Helmet>
      {/* General Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="LICISOLUCIONES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
